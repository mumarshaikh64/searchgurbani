// import '../assets/css/dashboard.css';
// import '../assets/css/sgg-index.css';
// import '../assets/css/style.css';
import React, { useEffect, useState } from 'react';
// import { useNavigate, useOutletContext } from "react-router";
// import { Link, useLocation } from "react-router-dom";
import Link from "next/link";
import Axios from 'axios';
import { API } from "../config/api";
import { ApiHelper } from '../helpers/ApiHelper';
import Spinner from '../components/Spinner';
import Switch from 'react-switch';
import { Helmet } from "react-helmet";
import HelmetWrapper from './CommonHelmet';

function DgChapterIndex({ lang }) {
    const [loader, setLoader] = useState(false);
    const [parent, setParent] = useState([]);
    const [child, setChild] = useState([]);
    const [languageCheck, setLanguageCheck] = useState(false);

    useEffect(() => {
        getChapter(lang);
    }, [])
    const getChapter = async () => {
        setLoader(true)
        await ApiHelper.get(API.getDgChapterIndex + "?lang=" + lang)
            .then((resData) => {
                setLoader(false);
                console.log('chapter', resData.data.chapters);
                const newParent = resData.data.chapters.filter(row => {
                    return row.parentID === 1369
                })
                console.log('chapter parent', newParent);
                //setParent(newParent)
                newParent.forEach(p => {
                    const childs = resData.data.chapters.filter(c => {
                        return c.parentID == p.chapter_id;
                    });
                    parent.push({ ...p, childs: childs });
                });

                console.log('PARENT CHILD', parent);

            })
            .catch((err) => {
                setLoader(false);
                /* setMessage("Error !!! Please try again"); */
                console.log(err, 'err');
            });
    }
    const handleChange = (nextChecked) => {
        setLanguageCheck(nextChecked);
    };
    useEffect(() => {
        console.log('hhhkguk', languageCheck)
    }, [languageCheck])


    return (
        <div>
            <HelmetWrapper
                title={`Sri Dasam Granth Sahib Chapter Index -: ਸ੍ਰੀ ਦਸਮ ਗ੍ਰੰਥ ਸਾਹਿਬ -: searchgurbani.com`}
                description={`Explore Sri Dasam Granth Sahib Chapter Index : ਸ੍ਰੀ ਦਸਮ ਗ੍ਰੰਥ ਸਾਹਿਬ :- searchgurbani.com`}
                keywords="Gurbani Kirtan,Amrit Keertan, Gurbani, Shabad Keertan,  Dasam Granth, Guru granth, granth, kabit, Bhai Gurdas, Vaaran, Varan"
                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                url={window.location.href}
            />
            {loader && <Spinner />}
            <section className='inner-actions p-4' >
                <div className='container'>
                    <div className='row w-100'>
                        <div className='col-lg-12 p-0'>
                            <div className='in-act-wrapper'>
                                <h1 className='inner-heading' > Dasam Granth - Chapter Index</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className='d-flex flex-column'>
                        <div className='ang-display mt-5'>
                            <div className="section_title">
                                <span className="col_section_name dg-name">Chapter</span>
                                <span className="col_section_no dg-no">Page No.</span>
                                <br className="clearer" />
                            </div>
                            <div className='ang-wrapper '>
                                {parent.map((item, index) => (
                                    <div className='ang-itm ' >
                                        <h2 className='lang-1' >
                                            <details>
                                                <summary>{item.chapter_name}</summary>
                                                {item.childs.length > 0 ?
                                                    item.childs?.map((c, cIndex) => {
                                                        return (
                                                            //------------ old react ---------------
                                                            //     <div className='in-act-wrapper mt-2'>
                                                            //     <Link  to={`/dasam-granth/page/${c.page_id}`}  className='det-para'><span>{c.chapter_name}</span></Link>
                                                            //     <div className='actions-mains'>
                                                            //         <Link to={`/dasam-granth/page/${c.page_id}`}  className='det-no'><span >{c.page_id}</span></Link>
                                                            //     </div>
                                                            // </div>
                                                            //------------------- new next--------------------- 
                                                            <div className='in-act-wrapper mt-2'>
                                                                <Link href={`/dasam-granth/page/${c.page_id}`} className='det-para'><span>{c.chapter_name}</span></Link>
                                                                <div className='actions-mains'>
                                                                    <Link href={`/dasam-granth/page/${c.page_id}`} className='det-no'><span >{c.page_id}</span></Link>
                                                                </div>
                                                            </div>
                                                        );
                                                    }) :
                                                    //------------ old react ---------------
                                                    // <div className='in-act-wrapper mt-2'>
                                                    //         <Link  to={`/dasam-granth/page/${item.page_id}`}  className='det-para'><span>{item.chapter_name}</span></Link>
                                                    //         <div className='actions-mains'>
                                                    //             <Link to={`/dasam-granth/page/${item.page_id}`}  className='det-no'><span >{item.page_id}</span></Link>
                                                    //         </div>
                                                    //     </div>
                                                    //------------------- new next--------------------- 
                                                    <div className='in-act-wrapper mt-2'>
                                                        <Link href={`/dasam-granth/page/${item.page_id}`} className='det-para'><span>{item.chapter_name}</span></Link>
                                                        <div className='actions-mains'>
                                                            <Link href={`/dasam-granth/page/${item.page_id}`} className='det-no'><span >{item.page_id}</span></Link>
                                                        </div>
                                                    </div>
                                                }
                                            </details>
                                        </h2>
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

export default DgChapterIndex