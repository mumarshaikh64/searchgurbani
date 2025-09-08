// import 'react-h5-audio-player/lib/styles.css';
// import '../assets/css/ang-by-ang.css';
// import '../assets/css/print.css';
//Gurbani search//
import React, { useEffect, useState, useRef } from 'react';
// import { useNavigate, useOutletContext } from "react-router";
// import { Link, useLocation, useParams } from "react-router-dom";
import { useRouter } from 'next/router';
//import imgs from './assets/img/content/ggs_01.jpg'
import AudioPlayer from 'react-h5-audio-player';
import { API } from "../config/api";
import { ApiHelper } from '../helpers/ApiHelper';
import Spinner from './Spinner';
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';
// import athumb from '../assets/img/audio-thumb.svg';
import athumb from '../assets/img/audio-thumb.svg';
import awave from '../assets/img/wave.svg';
import Switch from 'react-switch';
import facebook from '../assets/img/facebook.svg';
import twitter from '../assets/img/twitter.svg';
import youtube from '../assets/img/youtube.svg';
import telegram from '../assets/img/telegram.svg';
import whatsapp from '../assets/img/whatsapp.svg';
import mail from '../assets/img/mail.svg';
import FontChange from './FontChange';
import initialFormState from './defalutPref';
import HelmetWrapper from './CommonHelmet';

const SharePage = (props) => {
    // const location = useLocation();
    // const navigate = useNavigate();
    const router = useRouter();
    const shareUrl = 'https://searchgurbani.com';
    const title = 'Search Gurbani : Gurbani Website';
    const [loader, setLoader] = useState(false);
    const [isSgpcTeeka, setIsSgpcTeeka] = useState(false);
    const [isSplitView, setIsSplitView] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isCenter, setIsCenter] = useState(false);
    const [angNo, setAngNo] = useState("1");
    const [angData, setAngData] = useState([]);
    const [pref, setPref] = useState(initialFormState);
    const [gurmukhiFont, setGurmukhiFont] = useState('AnmolUniBani');
    const [phoneticFont, setPhoneticFont] = useState('arial');
    const [hindiFont, setHindiFont] = useState('arial');
    const [englishFont, setEnglishFont] = useState('arial');

    const [gurmukhiSize, setGurmukhiSize] = useState('22');
    const [phoneticSize, setPhoneticSize] = useState('22');
    const [hindiSize, setHindiSize] = useState('22');
    const [englishSize, setEnglishSize] = useState('22');

    const [gurmukhiColor, setGurmukhiColor] = useState('rgb(51, 51, 51)');
    const [phoneticColor, setPhoneticColor] = useState('rgb(6, 3, 91)');
    const [hindiColor, setHindiColor] = useState('rgb(136, 8, 8)');
    const [englishColor, setEnglishColor] = useState('rgb(54, 103, 50)');


    useEffect(() => {
        console.log('Ang', props);
        if (props.poet === 'ak') {
            getAkPage()
        } else if (props.poet === 'ggs') {
            getAngByAng()
        } else if (props.poet === 'bgv') {
            getPauri()
        }
        else if (props.poet === 'ks') {
            getKabit()
        }
        else if (props.poet === 'dg') {
            getDgPage()
        }
        else if (props.poet === 'bnl') {
            getBnlPage()
        }

    }, [])
    const getAkPage = async () => {
        setLoader(true)
        await ApiHelper.get(props.page === 'page' ? API.getShared + props.poet + "/page?page=" + props.pageNo + "&line=" + props.lineNo :
            API.getShared + props.poet + "/shabad?shabad=" + props.pageNo + "&line=" + props.lineNo
        )
            .then((resData) => {
                setLoader(false);
                console.log('Ang', resData.data);
                console.log('Ang1', resData.data.line[0]);
                setAngData(resData.data)
                window.scrollTo(0, 0);
            })
            .catch((err) => {
                setLoader(false);
                /* setMessage("Error !!! Please try again"); */
                console.log(err, 'err');
            });
    }
    const getAngByAng = async () => {
        setLoader(true)
        await ApiHelper.get(props.page === 'page' ? API.getShared + props.poet + "/page?label1=ang&page=" + props.pageNo + "&line=" + props.lineNo :
            API.getShared + props.poet + "/page?label1=shabad&page=" + props.pageNo + "&line=" + props.lineNo
        )
            .then((resData) => {
                setLoader(false);
                console.log('Ang', resData.data);
                console.log('Ang1', resData.data.line[0]);
                setAngData(resData.data)
                window.scrollTo(0, 0);
            })
            .catch((err) => {
                setLoader(false);
                /* setMessage("Error !!! Please try again"); */
                console.log(err, 'err');
            });
    }
    const getPauri = async () => {
        setLoader(true)
        await ApiHelper.get(API.getShared + props.poet + "/page?vaar=" + props.vaarNo + "&line=" + props.lineNo + "&pauri=" + props.pageNo)
            .then((resData) => {
                setLoader(false);
                console.log('Ang', resData.data);
                console.log('Ang1', resData.data.line[0]);
                setAngData(resData.data)
                window.scrollTo(0, 0);
            })
            .catch((err) => {
                setLoader(false);
                /* setMessage("Error !!! Please try again"); */
                console.log(err, 'err');
            });
    }
    const getDgPage = async () => {
        setLoader(true)
        await ApiHelper.get(props.page === 'page' ? API.getShared + props.poet + "/page?label1=page&line=" + props.lineNo + "&page=" + props.pageNo :
            API.getShared + props.poet + "/page?label1=shabad&line=" + props.lineNo + "&page=" + props.pageNo
        )
            .then((resData) => {
                setLoader(false);
                console.log('Ang', resData.data);
                console.log('Ang1', resData.data.line[0]);
                setAngData(resData.data)
                window.scrollTo(0, 0);
            })
            .catch((err) => {
                setLoader(false);
                /* setMessage("Error !!! Please try again"); */
                console.log(err, 'err');
            });
    }
    const getKabit = async () => {
        setLoader(true)
        await ApiHelper.get(API.getShared + props.poet + "/page?line=" + props.lineNo + "&page=" + props.pageNo)
            .then((resData) => {
                setLoader(false);
                console.log('Ang', resData.data);
                console.log('Ang1', resData.data.line[0]);
                setAngData(resData.data)
                window.scrollTo(0, 0);
            })
            .catch((err) => {
                setLoader(false);
                /* setMessage("Error !!! Please try again"); */
                console.log(err, 'err');
            });
    }
    const getBnlPage = async () => {
        setLoader(true)
        await ApiHelper.get(props.page === 'page' ? API.getShared + props.poet + "/page?line=" + props.lineNo + "&page=" + props.pageNo + "&type=" + props.type + "&title1=page" :
            API.getShared + props.poet + "/shabad?line=" + props.lineNo + "&page=" + props.pageNo + "&type=" + props.type
        )
            .then((resData) => {
                setLoader(false);
                console.log('Ang', resData.data);
                console.log('Ang1', resData.data.line[0]);
                setAngData(resData.data)
                window.scrollTo(0, 0);
            })
            .catch((err) => {
                setLoader(false);
                /* setMessage("Error !!! Please try again"); */
                console.log(err, 'err');
            });
    }
    return (
        <div>
            {/* <HelmetWrapper
                title={`${props.title} -: searchgurbani.com`}
                description={`Explore  ${angData.attributes} of ${props.title} : : ਅਮ੍ਰਿਤ ਕੀਰਤਨ ਗੁਟਕਾ at searchgurbani.com`}
                keywords="Gurbani Kirtan,amrit Keertan, Gurbani, Shabad Keertan,  Dasam Granth, Guru Granth, Granth, Kabit, Bhai Gurdas, Vaaran, Varan"
                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                url={window.location.href}
            /> */}
            {loader && <Spinner />}
            <section className='inner-actions p-4' >
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 p-0'>
                            <div className='in-act-wrapper'>
                                <h1 className='inner-heading' >{props.title}</h1>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='container'>
                <div className='d-flex flex-column'>
                    <div className='ang-display mt-5'>
                        <div className='ang-wrapper' >
                            {angData.line && angData.line.length > 0 ? (
                                <div className={`ang-itm`}>
                                    <div style={{ fontFamily: gurmukhiFont, fontSize: `${gurmukhiSize}px`, color: gurmukhiColor }}>
                                        {angData.line[0].punjabi}
                                    </div>
                                    <div style={{ fontFamily: phoneticFont, fontSize: `${phoneticSize}px`, color: phoneticColor }}>
                                        {angData.line[0].translit}
                                    </div>
                                </div>
                            ) : (
                                <div>No data available</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-4' >
                <div className=' d-flex justify-content-end'>
                    <div className='go-line-wrapper' >

                        <div className='navigation-btn-audio'>
                            {angData.line && angData.line.length > 0 ? (
                                // old 
                                // <button className='ang-btn' style={{ background: 'var(--current-color, var(--color-1))', color: '#fff' }} onClick={(e) => { e.preventDefault(); navigate(`/${angData.link}`, { state: { Title: angData.line[0].punjabi, pageTitle: angData.line[0].pageID } })  }}>{angData.attributes}</button>
                            //    new 
                                <button
                                    className="ang-btn"
                                    style={{ background: "var(--current-color, var(--color-1))", color: "#fff" }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        router.push({
                                            pathname: `/${angData.link}`,
                                            query: {
                                                title: angData.line[0].punjabi,
                                                pageTitle: angData.line[0].pageID,
                                            },
                                        });
                                    }}
                                >
                                    {angData.attributes}
                                </button>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SharePage