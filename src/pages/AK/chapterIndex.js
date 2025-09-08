// import '../../assets/css/dashboard.css';
// import '../../assets/css/author.css';
import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from "react-router";
// import { Link, useLocation, useParams } from "react-router-dom";
import Axios from 'axios';
import { API } from "../../config/api";
import { ApiHelper } from '../../helpers/ApiHelper';
import AkIndex from '../../components/AkIndex';
import Spinner from '../../components/Spinner';
import {Helmet} from "react-helmet";
import HelmetWrapper from '../../components/CommonHelmet';
import Link from 'next/link';
//import imgs from './assets/img/content/ggs_01.jpg'

function ChapterIndex() {
    const [loader, setLoader] = useState(false);
    const [indexArr, setIndexArr] = useState([]);
    useEffect (() => {
        getIndex();
    },[])
    const getIndex = async () => {
        setLoader(true)
        await ApiHelper.get(API.getAkChapterIndex )
            .then((resData) => {
                setLoader(false);
                console.log('Index', resData.data);
                setIndexArr(resData.data.chapters);
            })
            .catch((err) => {
                setLoader(false);
                console.log(err, 'err');
            });
    }
    return (
        <div>
            {/* <HelmetWrapper
                title={`Amrit Kirtan Gutka Chapter index`}
                description={`Explore Amrit Keertan Gutka Chapter Index  at  searchgurbani.com`}
                keywords="Gurbani Kirtan,amrit Keertan, Gurbani, Shabad Keertan,  Dasam Granth, Guru Granth, Granth, Kabit, Bhai Gurdas, Vaaran, Varan"
                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                url={window.location.href}
            /> */}
            {loader && <Spinner />}
            <section className='inner-actions p-4' >
                <div className='container'>
                    <h3 className='text-dark mb-3 text-center' >Amrit Keertan Chapter Index</h3>
                    
                </div>
            </section>


            <section className='ang-d_wrapper' >
                <div className='container'>
                    <div className='d-flex flex-column'>
                        <div className='ang-display '>
                            <div className="section_title">
                                <span className="col_sl_no"> ID</span>
                                <span className="col_sl_name">Section</span>
                                <span className="col_section_no">Page No.</span>
                                <br className="clearer" />
                            </div>

                            <div className='ang-wrapper '>
                                {indexArr.map((item, index) => {  
                                    const shabadNameWithDashes = item.section.replace(/ /g, '-');                                  
                                    return (
                                        <div className='ang-itm padd-indexx' >
                                           {/* <div className="section_line line row1">
                                                <span className="col_sl_no sec-no">{index + 1}</span>
                                                <Link  href={`/amrit-keertan/chapter/${item.section_id}/${shabadNameWithDashes}`}  className="col_sl_no sec-nos">
                                                    <span >{item.section}</span></Link>
                                                <span className="col_section_no sec-no">{item.pageno}</span>
                                                </div>*/}
                                                {/* ------------- old --------------------  */}
                                                {/* <div className="section_line line row1">
                                                <span className="col_sl_no sec-no">{index + 1}</span>
                                                <Link  href={`/amrit-keertan/chapter/${item.section_id}/${shabadNameWithDashes}`}  className="col_sl_no sec-nos">
                                                    <span >{item.section}</span></Link>
                                                    <Link  href={`/amrit-keertan/chapter/${item.section_id}/${shabadNameWithDashes}`} className="col_section_no sec-no page-no"> 
                                                     <span >{item.pageno}</span></Link>
                                            </div> */}
                                                {/* ------------- new --------------------  */}
                                                <div className="section_line line row1">
                                                <span className="col_sl_no sec-no">{index + 1}</span>
                                                <Link  href={`/AK/chapter/${item.section_id}/${shabadNameWithDashes}`}  className="col_sl_no sec-nos">
                                                    <span >{item.section}</span></Link>
                                                    <Link  href={`/AK/chapter/${item.section_id}/${shabadNameWithDashes}`} className="col_section_no sec-no page-no"> 
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

export default ChapterIndex