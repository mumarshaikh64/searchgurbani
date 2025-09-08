import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, } from "react-router-dom";
import Spinner from '../../../components/Spinner';
import '../../../assets/css/dashboard.css';
import '../../../assets/css/intro.css';
import '../../../assets/css/ang-by-ang.css';
import '../../../assets/css/style.css';
import '../../../assets/css/indian-class.css';
import { ApiHelper } from '../../../helpers/ApiHelper';
import { API } from '../../../config/api';
import Axios from 'axios';
import { Helmet } from 'react-helmet';
import HelmetWrapper from '../../../components/CommonHelmet';

function IndianClassical() {
    const navigate = useNavigate();
    const { pageno } = useParams();
    console.log('TEST', pageno)
    const [introData, setIntroData] = useState([]);
    const [headingData, setHeadingData] = useState([]);
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false);
    const [angNo, setAngNo] = useState("1");

    useEffect(() => {
        getMusic(pageno)
        setAngNo(pageno)
    }, [pageno])
    const getMusic = async (page) => {
        setLoader(true)
        await Axios.get(API.getMusicIndex + '?page=' + page + '&volume_id=0&lang=')
            .then((resData) => {
                setLoader(false)
                console.log('get Music', resData.data.lines);
                setIntroData(resData.data.lines);
                setHeadingData(resData.data)

            })
            .catch((err) => {
                setLoader(false)
                console.log(err);
            })
    }
    const handleBegin = () => {
        setAngNo(1);
        getMusic(1);
    }
    const handleBack = (ang) => {
        let no = parseInt(ang) - 1
        setAngNo(no.toString());
        getMusic(no.toString());
    }
    const handleNext = (ang) => {
        console.log('NEXT', ang)
        if (angNo > 1) {
            let no = parseInt(ang) + 1
            setAngNo(no.toString());
            getMusic(no.toString());
        }
        else {
            let no = 1 + 1
            setAngNo(no.toString());
            getMusic(no.toString());
        }

    }
    const handleLast = () => {
        let last = 100;
        setAngNo(last);
        getMusic(last);
    }
    return (
        <div>
            {loader && <Spinner />}
            <HelmetWrapper
                title={`Indian Classical Music and Sikh Kirtan -: Page ${headingData.page_no}`}
                description={`A comprehensive web site on research and  exploration of Sri Guru Granth Sahib, Amrit Keertan Gutka, Bhai Gurdas Vaaran, Kabit Bhai Gurdaas ,Sri Dasam Granth Sahib, exegesis , Gurbani, Gurbanee vichaar`}
                keywords=""
                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                url={window.location.href}
            />
            <section className='inner-actions p-4' >
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 p-0'>
                            <div className='in-act-wrapper'>
                                <h1 className='inner-heading-music' >Indian Classical Music and Sikh Kirtan</h1>
                                <div className='actions-mains'>
                                    <button className='action-btn-main' ><i class="bi bi-printer"></i></button>

                                </div>
                            </div>
                        </div>
                        <div className='col-lg-12 d-flex-justify-content-end ang-ang  mt-3'>
                            <div className='audio-features'>
                                <div className='toggle-buttons-inner'>
                                    <label className='me-2 go-name' >Goto Page </label>
                                    <label className='switch'>
                                        {/* <input type='checkbox'></input>
                                    <span className='slider'></span> */}
                                        <div className='go-to-ang position-relative'>
                                            <div className='form-group'>
                                                <input type='text' placeholder='1' className='form-control'
                                                    onChange={(e) => setAngNo(e.target.value)} value={angNo}
                                                />
                                                <button className='ang-btn' onClick={(e) => { e.preventDefault(); getMusic(angNo); }}>Go</button>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div className='go-line-wrapper' >
                                {/*<div className='go-to-ang position-relative'>
                                <div className='form-group'>
                                    <input type='text' placeholder='go to ang' className='form-control'
                                       ></input>
                                    <button className='ang-btn'>Go</button>
                                </div>
                            </div>*/}
                                <div className='navigation-btn-audio'>

                                    <button className='ang-btn' style={{ background: 'var(--current-color, var(--color-1))', color: '#fff' }} onClick={() => navigate(`/music/page/${1}`)}>Book Index</button>
                                    {headingData.page_no > 1 &&
                                        <>
                                            <button className='ang-btn' style={{ background: 'var(--current-color, var(--color-1))', color: '#fff' }} onClick={(e) => { e.preventDefault(); handleBegin() }}>Begin</button>
                                            <button className='ang-btn' style={{ background: 'var(--current-color, var(--color-1))', color: '#fff' }} onClick={(e) => { e.preventDefault(); handleBack(angNo); }}>Back</button></>}
                                    {headingData.page_no < 100 &&
                                        <>
                                            <button className='ang-btn' style={{ background: 'var(--current-color, var(--color-1))', color: '#fff' }} onClick={(e) => { e.preventDefault(); handleNext(angNo) }}>Next</button>
                                            <button className='ang-btn' style={{ background: 'var(--current-color, var(--color-1))', color: '#fff' }} onClick={(e) => { e.preventDefault(); handleLast(); }}>Last</button></>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='center-align'><b>Displaying Page {headingData.page_no} of 100</b></div>

            </section>

            <section className='inner-actions p-4' >
                <div className='container index-wrp'>
                    <div className="second-container intro-bkg">
                        <div className="row ">
                            <div class="col-lg-12">
                                <div className='container align-items-center d-flex justify-content-center advance-search intro-border mt-5'>
                                    <div class="px-1 py-5 align-middle  bgv-intro">
                                        {introData ?
                                            < div
                                                dangerouslySetInnerHTML={{
                                                    __html: introData[0]?.text
                                                }}
                                            /> : null}
                                    </div>
                                </div></div></div></div></div>
                {/* <div className='row'>
                        <p className='top-blue'>Indian Classical Music And Sikh Kirtan
                            by Gobind Singh Mansukhani (M.A., LL.B, Ph.D.) © 1982</p>
                        <div className='d-flex flex-column'>
                            <div className='ang-display mt-5'>
                                <h1>Displaying Page 1 of 100</h1>
                                <div className='ang-wrapper'>
                                    <div className='ang-itm'>
                                        <ul>

                                            <li><a href=''><span class="label">Forward - Preface - Introduction - About the Author.................</span>5</a></li>

                                            <li><a href=''><span class="label">Forward - Preface - Introduction - About the Author.................</span>5</a></li>

                                            <li><a href=''><span class="label">Forward - Preface - Introduction - About the Author.................</span>5</a></li>


                                        </ul>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
            </section>



        </div>
    )
}

export default IndianClassical