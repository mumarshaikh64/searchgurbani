// import '../assets/css/dashboard.css';
// import '../assets/css/author.css';
import React, { useEffect, useState } from 'react';
// import { useNavigate, useOutletContext } from "react-router";
// import { Link, useLocation, useParams } from "react-router-dom";
import Link from "next/link";
import Axios from 'axios';
import { API } from "../config/api";
import { ApiHelper } from '../helpers/ApiHelper';
import Spinner from './Spinner';
import { Helmet } from "react-helmet";
import HelmetWrapper from './CommonHelmet';

function AkIndex(props) {
    const [loader, setLoader] = useState(false);
    const [indexArr, setIndexArr] = useState([]);
    const [charArr, setCharArr] = useState([]);
    useEffect(() => {
        if (props.language) {
            console.log('language', props.language)
            if (props.language === 'A') {
                getIndex('english', 'A');
            }
            else if (props.language === 'क') {
                getIndex('hindi', 'क');
            }
            else {
                getIndex('punjabi', 'ਕ');
            }
        }
    }, [])

    const getIndex = async (lang, char) => {
        setLoader(true)
        await ApiHelper.get(API.getAkEnglishIndex + lang + '?alpha=' + char)
            .then((resData) => {
                setLoader(false);
                console.log('Index', resData.data);
                setCharArr(resData.data.alphabets)
                setIndexArr(resData.data.shabads);
            })
            .catch((err) => {
                setLoader(false);
                console.log(err, 'err');
            });
    }
    const decodeEntities = (html) => {
        var txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
    };
    return (
        <div>
            <HelmetWrapper
                title={`Amrit Kirtan Gutka Alphabetical Shabad index in ${props.language === "A" ? "English" :
                    props.language === "क" ? "Hindi" :
                        props.language === "ਕ" ? "Punjabi" : "Unknown Language"
                    } -: searchgurbani.com`}
                description={`Explore Amrit Keertan Gutka Alphabetical Shabad Index in ${props.language === "A" ? "English" :
                    props.language === "क" ? "Hindi" :
                        props.language === "ਕ" ? "Punjabi" : "Unknown Language"
                    } at searchgurbani.com`}
                keywords="Gurbani Kirtan,amrit Keertan, Gurbani, Shabad Keertan,  Dasam Granth, Guru Granth, Granth, Kabit, Bhai Gurdas, Vaaran, Varan"
                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                url={window.location.href}
            />
            {loader && <Spinner />}
            <section className='inner-actions p-4' >
                <div className='container'>
                    <h3 className='text-dark mb-3 text-center' >Amrit Keertan - Shabads</h3>
                    <div className='alphabet-container text-center'>
                        {charArr.map((char, index) => (
                            <span
                                key={index}
                                className="alphabet-char cursor-pointer"
                                onClick={() =>
                                    props.language === "A"
                                        ? getIndex("english", decodeEntities(char))
                                        : props.language === "क"
                                            ? getIndex("hindi", decodeEntities(char))
                                            : getIndex("punjabi", decodeEntities(char))
                                }
                            >
                                {decodeEntities(char)}
                            </span>
                        ))}

                    </div>
                </div>
            </section>


            <section>
                <div className='container'>
                    <div className='d-flex flex-column'>
                        <div className='ang-display '>
                            <div className="section_title">
                                <span className="col_sl_no"> No.</span>
                                <span className="col_sl_name">Shabad Title</span>
                                <span className="col_section_no">Page No.</span>
                                <br className="clearer" />
                            </div>

                            <div className='ang-wrapper '>
                                {indexArr.map((item, index) => {
                                    const shabadNameWithDashes = item.shabad_name.replace(/ /g, '-');
                                    const url = `/amrit-keertan/shabad/${item.shabad_id}/${shabadNameWithDashes}`;
                                    return (
                                        //------------ old react ---------------

                                        // <div className='ang-itm padd-indexx' >
                                        //     <div className="section_line line row1">
                                        //         <span className="col_sl_no sec-no">{index + 1}</span>
                                        //         <Link to={`/amrit-keertan/shabad/${item.shabad_id}/${shabadNameWithDashes}`} className="col_sl_no sec-nos">
                                        //             <span >{props.language === 'A' ? item.shabad_name : props.language === 'क' ? item.shabad_hindi : item.shabad_punjabi}</span></Link>
                                        //         <Link to={`/amrit-keertan/shabad/${item.shabad_id}/${shabadNameWithDashes}`} className="col_section_no sec-no page-no">
                                        //             <span >{item.pageno}</span></Link>
                                        //     </div>
                                        // </div>
                                        //------------------- new next--------------------- 
                                        <div className='ang-itm padd-indexx' >
                                            <div className="section_line line row1">
                                                <span className="col_sl_no sec-no">{index + 1}</span>
                                                <Link href={`/amrit-keertan/shabad/${item.shabad_id}/${shabadNameWithDashes}`} className="col_sl_no sec-nos">
                                                    <span >{props.language === 'A' ? item.shabad_name : props.language === 'क' ? item.shabad_hindi : item.shabad_punjabi}</span></Link>
                                                <Link href={`/amrit-keertan/shabad/${item.shabad_id}/${shabadNameWithDashes}`} className="col_section_no sec-no page-no">
                                                    <span >{item.pageno}</span></Link>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AkIndex