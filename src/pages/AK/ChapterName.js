import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from "react-router";
import { Link, useLocation, useParams } from "react-router-dom";
import '../../assets/css/dashboard.css';
import '../../assets/css/author.css';
import Axios from 'axios';
import { API } from "../../config/api";
import { ApiHelper } from '../../helpers/ApiHelper';
import AkIndex from '../../components/AkIndex';
import Spinner from '../../components/Spinner';
import {Helmet} from "react-helmet";
import HelmetWrapper from '../../components/CommonHelmet';
//import imgs from './assets/img/content/ggs_01.jpg'

function ChapterName() {
    const { chapter_no, chapter_name } = useParams();
    const [loader, setLoader] = useState(false);
    const [indexArr, setIndexArr] = useState([]);
    const [chapterArr, setChapterArr] = useState([]);

    useEffect (() => {
        getIndex();
    },[])
    const getIndex = async () => {
        setLoader(true)
        await ApiHelper.get(API.getChapterName + chapter_no + '/' + chapter_name)
            .then((resData) => {
                setLoader(false);
                console.log('Index', resData.data);
                setChapterArr(resData.data)
                setIndexArr(resData.data.shabads);
            })
            .catch((err) => {
                setLoader(false);
                console.log(err, 'err');
            });
    }
    return (
        <div>
            <HelmetWrapper
                title={`Amrit Kirtan Gutka Shabad index -: searchgurbani.com`}
                description={`Explore Amrit Keertan Gutka Shabads Chapter Index (ਅਮ੍ਰਿਤ ਕੀਰਤਨ ਗੁਟਕਾ) at  searchgurbani.com`}
                keywords="Gurbani Kirtan,amrit Keertan, Gurbani, Shabad Keertan,  Dasam Granth, Guru Granth, Granth, Kabit, Bhai Gurdas, Vaaran, Varan"
                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                url={window.location.href}
            />
            {loader && <Spinner />}
            <section className='inner-actions p-4' >
                <div className='container'>
                    <h3 className='text-dark mb-3 text-center' >Amrit Keertan - Shabad</h3>
                    <div className='alphabet-container text-center'>
                    {chapterArr.chapter_name && chapterArr.chapter_name[0] && (
                            <h2 className='text-dark'>Chapter: {chapterArr.chapter_name[0].section}</h2>
                        )}
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
                                    return (
                                        <div className='ang-itm padd-indexx'>
                                            <div className="section_line line row1">
                                                <span className="col_sl_no sec-no">{index + 1}</span>
                                                <Link  to={`/amrit-keertan/shabad/${item.shabad_id}/${shabadNameWithDashes}`}  className="col_sl_no sec-nos">
                                                    <span >{item.shabad_name}</span></Link>
                                                    <Link  to={`/amrit-keertan/shabad/${item.shabad_id}/${shabadNameWithDashes}`} className="col_section_no sec-no page-no"> 
                                                <span>{item.pageno}</span></Link>
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

export default ChapterName