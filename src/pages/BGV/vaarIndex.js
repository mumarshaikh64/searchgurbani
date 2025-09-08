// import '../../assets/css/dashboard.css';
// import '../../assets/css/author.css';
import React, { useEffect, useState } from 'react';
// import { useNavigate, useOutletContext } from "react-router";
// import { Link, useLocation, useParams } from "react-router-dom";
import Axios from 'axios';
import { API } from "../../config/api";
import { ApiHelper } from '../../helpers/ApiHelper';
import Spinner from '../../components/Spinner';
//import imgs from './assets/img/content/ggs_01.jpg'
import {Helmet} from "react-helmet";
import HelmetWrapper from '../../components/CommonHelmet';
import Link from 'next/link';

function VaarIndex() {
    const [loader, setLoader] = useState(false);
    const [vaarArr, setVaarArr] = useState([]);
    const [vaarIndexArr, setVaarIndexArr] = useState([]);
    const varrIndexOne = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
    const varrIndexTwo = ["21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40"];
    useEffect(() => {
        getVaarIndex("1");
    }, [])
    const getVaarIndex = async (vaarNo) => {
        setLoader(true)
        await ApiHelper.get(API.getVaarIndex + "?vaar_no=" + vaarNo)
            .then((resData) => {
                setLoader(false);
                console.log('Index', resData.data);
                setVaarIndexArr(resData.data);
                let chapters = [];
                let p = 0;
                let pauries = resData.data.pauries;
                for (let i = 0; i < pauries.length; i++) {
                    console.log('ARRRR', pauries[i])
                    if (pauries[i].pauri_lineID == 0) continue;
                    if (pauries[i].paurino == p) continue;
                    chapters.push(pauries[i]);
                    p = pauries[i].paurino;                       
                }
                console.log('ARRy',chapters)
                setVaarArr(chapters)
                
            })
            .catch((err) => {
                setLoader(false);
                console.log(err, 'err');
            });
    }
    return (
        <div>
            {/* <HelmetWrapper
                title={`Bhai Gurdas Vaaran - Vaar Index - ਵਾਰਾਂ ਭਾਈ ਗੁਰਦਾਸ  -: searchgurbani.com`}
                description={`Bhai Gurdas Vaaran - Vaar Index  :- searchgurbani.com`}
                keywords="Gurbani Kirtan,amrit Keertan, Gurbani, Shabad Keertan,  Dasam Granth, Guru Granth, Granth, Kabit, Bhai Gurdas, Vaaran, Varan"
                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                url={window.location.href}
            /> */}
            {loader && <Spinner />}
            <section className='inner-actions p-4' >
                <div className='container'>
                    <div className='row w-100'>
                        <div className='col-lg-12 p-0'>
                            <div className='in-act-wrapper'>
                                <h1 className='inner-heading-athur' >Bhai Gurdas Vaaran - Vaar Index</h1>
                            </div>
                        </div>
                    </div>
                    <div className='center-align mt-2'>
                        <h5 className='text-dark'><b>Vaar #</b></h5>
                        <div className='alphabet-container text-center'>
                            {varrIndexOne.map((char, index) => (
                                <a onClick={() => getVaarIndex(char)}>
                                    <span key={index} className='alphabet-char'>{char}</span></a>
                            ))}
                        </div>
                        <div className='alphabet-container text-center mt-2'>
                            {varrIndexTwo.map((char, index) => (
                                <a onClick={() => getVaarIndex(char)}>
                                    <span key={index} className='alphabet-char'>{char}</span></a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className='container'>
                    <div className='center-align'>
                        <h4 className='text-dark mt-4'>Vaar No.: {vaarIndexArr.vaar_no}</h4>
                    </div>
                    <div className='d-flex flex-column'>
                        <div className='ang-display '>
                            <div className="section_title">
                                <span className="col_sl_no">Pauri No.</span>
                                <span className="col_sl_name">Pauri Name</span>
                                <br className="clearer" />
                            </div>

                            <div className='ang-wrapper '>
                                {vaarArr.map((item, index) => (
                                    <div className='ang-itm padd-indexx rows-padd-issue' >
                                        <div className="section_line line row1 d-flex align-items-center">
                                            <span className="col_sl_no sec-no">{index + 1}</span>
                                            <div className='wrp-itmx'>
                                                <Link href={`/BGV/vaar/${vaarIndexArr.vaar_no}/pauri/${item.paurino}/line/${item.pauri_lineID}`}  className="col_sl_no sec-nos vaar-index eng-left-side"><span >{item.pauri_name_roman}</span></Link><br></br>
                                                <Link href={`/BGV/vaar/${vaarIndexArr.vaar_no}/pauri/${item.paurino}/line/${item.pauri_lineID}`} className="col_sl_no sec-nos vaar-index hindi-right -side"><span >{item.pauri_name_punjabi}</span></Link>
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default VaarIndex