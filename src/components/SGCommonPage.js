// import 'react-h5-audio-player/lib/styles.css';
// import '../assets/css/ang-by-ang.css'
//Gurbani search//
import React, { useEffect, useState, useRef } from 'react';
// import { useNavigate, useOutletContext } from "react-router";
// import { Link, useLocation, useParams } from "react-router-dom";
//import imgs from './assets/img/content/ggs_01.jpg'
import AudioPlayer from 'react-h5-audio-player';
import { API } from "../config/api";
import { ApiHelper } from '../helpers/ApiHelper';
import Spinner from '../components/Spinner';
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
import FontChange from '../components/FontChange';
import AngByAng from '../views/GGS/AngByAng';
import {Helmet} from "react-helmet";
import HelmetWrapper from './CommonHelmet';

const sgFormState = {  
    showEnglish: false,
    showPhonetic: false,
    showHindi: false,
};
const SGCommonPage = (props) => {
    // const location = useLocation();
    // const { vaar_no, pauri_no, line_no } = useParams();
    // const navigate = useNavigate();
    const shareUrl = 'https://searchgurbani.com';
    const title = 'Search Gurbani : Gurbani Website';
    const [loader, setLoader] = useState(false);
    const [fontSectn, setFontSectn] = useState(false);
    const [isGurumukhi, setIsGurumukhi] = useState(true);
    const [isPhonetic, setIsPhonetic] = useState(false);
    const [isEnglish, setIsEnglish] = useState(false);
    const [isHindi, setIsHindi] = useState(false);
    const [isShahmukhi, setIsShahmukhi] = useState(false);
    const [isSantSinghTransln, setIsSantSinghTransln] = useState(false);
    const [isTeekaTransln, setIsTeekaTransln] = useState(false);
    const [isTeekaRomanTransln, setIsTeekaRomanTransln] = useState(false);
    const [isTeekaHindiTransln, setIsTeekaHindiTransln] = useState(false);
    const [isGuruGranthTeeka, setIsGuruGranthTeeka] = useState(false);
    const [isFaridkotTeeka, setIsFaridkotTeeka] = useState(false);
    const [isFaridkotaTeekaHindi, setIsFaridkotaTeekaHindi] = useState(false);
    const [isSgpcTeeka, setIsSgpcTeeka] = useState(false);
    const [isSplitView, setIsSplitView] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isCenter, setIsCenter] = useState(false);
    const [angNo, setAngNo] = useState("1");
    const [angData, setAngData] = useState([]);
    const [headingData, setHeadingData] = useState([]);
    const [audioList, setAudioList] = useState("");
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
    const [englishColor, setEnglishColor] = useState('#366732');
    const [pref, setPref] = useState(sgFormState);

    useEffect(() => {
        if (props) {
            getAngByAng("1")
            getAngByAngAudio()
        }
        else {
            getAngByAng("1")
        }
        const savedPreference = localStorage.getItem('sgPreference');
        console.log('SgPreference', savedPreference);
        if(savedPreference){
            const preferences = JSON.parse(savedPreference);
            setPref(preferences);            
            setIsPhonetic(preferences.showPhonetic);
            setIsEnglish(preferences.showEnglish);
            setIsHindi(preferences.showHindi);        
        }
    }, [])
    const getAngByAng = async (pageNo) => {
        setLoader(true)
        console.log('Ang No', pageNo);
        await ApiHelper.get(API.getBaanis + props.apiName + "?page=" + pageNo)
            .then((resData) => {
                setLoader(false);
                console.log('Ang', resData.data);
                setAngData(resData.data.lines);
                setHeadingData(resData.data);
                window.scrollTo(0, 0);
            })
            .catch((err) => {
                setLoader(false);
                /* setMessage("Error !!! Please try again"); */
                console.log(err, 'err');
            });
    }
    const getAngByAngAudio = async () => {
        setLoader(true)
        const lineNo = "";
        await ApiHelper.get(API.getAngByAngAudio + "?path=baanis/" + props.audioName)
            .then((resData) => {
                setLoader(false);
                console.log('Audio', resData);
                setAudioList(resData.data.data)

            })
            .catch((err) => {
                setLoader(false);
                console.log(err, 'err');
            });
    }
    const handleBegin = () => {
        setAngNo(1);
        getAngByAng(1);      
    }
    const handleBack = (ang) => {
        let no = parseInt(ang)-1
        setAngNo(no.toString());
        getAngByAng(no.toString());      
    }
    const handleNext = (ang) => { 
        console.log('NEXT',ang)   
        if(angNo > 1)  {
            let no = parseInt(ang) + 1 
            setAngNo(no.toString());
            getAngByAng(no.toString());
        }
        else{
            let no = 1 + 1 
            setAngNo(no.toString());
             getAngByAng(no.toString());
        }              
                
    }
    const handleLast = () => {
        setAngNo(props.tlPage);
        getAngByAng(props.tlPage);        
    }
    const handlePhonetic = () => {
        setIsPhonetic(!isPhonetic)
        setPref((prevPref) => {
            const updatedPref = { ...prevPref, showPhonetic: !isPhonetic };
            localStorage.setItem('sgPreference', JSON.stringify(updatedPref));
            return updatedPref;
          });
    };
    const handleHindi = () => {
        setIsHindi(!isHindi)
        setPref((prevPref) => {
            const updatedPref = { ...prevPref, showHindi: !isHindi };
            localStorage.setItem('sgPreference', JSON.stringify(updatedPref));
            return updatedPref;
          });
    };
    const handleEnglish = () => {
        setIsEnglish(!isEnglish)
        setIsSantSinghTransln(!isSantSinghTransln)
        setPref((prevPref) => {
            const updatedPref = { ...prevPref, showEnglish: !isEnglish };
            localStorage.setItem('sgPreference', JSON.stringify(updatedPref));
            return updatedPref;
          });
    };
    return (
        <div>
            {/* <HelmetWrapper
                title={`${props.title}: Page: ${angNo} -: searchgurbani.com`}
                description={`Explore, Learn, Relish ${props.title} with audio at  searchgurbani.com`}
                keywords="Japji Sahib, Jaap Sahib, Tvai Prasadh Savaiye, Chaupai Sahib, Anand Sahib, Rehraas Sahib, Kirtan Sohila, Anand Sahib(Bhog), Laavan( Anand Karaj), Asa Ki Vaar, Sukhmani Sahib, Sidh Gosht, Ramkali Sadh, Dhakanee Oankaar, Baavan Akhree, Shabad Hazare, Baarah Maaha, Sukhmana sahib, Dukh Bhanjani Sahib, Salok Sehskritee, Gathaa, Phunhay M: 5, Chaubolay M:5, Salok Kabeer ji, Salok Farid ji, Savaiye M: 1, Savaiye M: 2, Savaiye M: 3, Savaiye M: 4, Savaiye M: 5, Salok M: 9, Akal Ustati, Bachitar Natak"
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
                        <div className='col-lg-12 d-flex-justify-content-end ang-ang  mt-3"'>
                            <div className='go-line-wrapper custom-mob'>
                                {/* <button className='ang-btn ' onClick={(e) => { e.preventDefault(); getAngByAng(angNo) }}>Next</button>
                                <button className='ang-btn ' onClick={(e) => { e.preventDefault(); getAngByAng(angNo) }}>Last</button> */}
                                {angNo >1 &&
                            <>
                            <button className='ang-btn' style={{background:'var(--current-color, var(--color-1))',color:'#fff'}} onClick={(e) => { e.preventDefault(); handleBegin() }}>Begin</button>
                            <button className='ang-btn' style={{background:'var(--current-color, var(--color-1))',color:'#fff'}} onClick={(e) => { e.preventDefault(); handleBack(angNo); }}>Back</button>
                            </>
                            }
                            {headingData.current_page < props.tlPage &&
                            <>
                            <button className='ang-btn' style={{background:'var(--current-color, var(--color-1))',color:'#fff'}} onClick={(e) => { e.preventDefault();  handleNext(angNo)}}>Next</button>
                            <button className='ang-btn' style={{background:'var(--current-color, var(--color-1))',color:'#fff'}} onClick={(e) => { e.preventDefault(); handleLast(); }}>Last</button>
                            </>}
                            </div>
                            <div className='audio-features mobile-issue'>
                                <button className={`ang-btn-enable ${!fontSectn && 'ang-btn-disable'} `} onClick={(e) => { e.preventDefault(); fontSectn === false ? setFontSectn(true) : setFontSectn(false) }}>Font</button>
                                <button className={`ang-btn-enable ${!isPhonetic && 'ang-btn-disable'} `} onClick={(e) => { e.preventDefault(); handlePhonetic(); }}>Phonetic</button>
                                <button className={`ang-btn-enable ${!isHindi && 'ang-btn-disable'} `} onClick={(e) => { e.preventDefault(); handleHindi();}}>Hindi</button>
                                <button className={`ang-btn-enable ${!isEnglish && 'ang-btn-disable'} `} onClick={(e) => { e.preventDefault(); handleEnglish(); }}>English</button>
                                <button className='action-btn-main mx-2' /* onClick={() =>  window.print()} */onClick={() => window.open(`/baanis/${props.apiName}/page/${headingData.current_page}/print-view`,'Bhai Nand Lal', '_blank', 'height=700,width=700')} ><i className="bi bi-printer"></i></button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='audio-p pt-2' >
                <div className='container-lg'>
                    <div className='d-flex flex-column'>
                        <div className='audio-player-m'>
                            <img src={athumb} className="img-fluid aud-thumb" alt="Responsive image" />

                            <img src={awave} className="img-fluid wave" alt="Responsive image" />
                        </div>
                        <AudioPlayer
                            autoPlayAfterSrcChange={false}
                            autoPlay={false}
                            src={"https://backend.searchgurbani.com/" + audioList}
                        />
                    </div>
                </div>
            </section>
            {fontSectn ?
                <FontChange
                    gurmukhiFont={gurmukhiFont}
                    phoneticFont={phoneticFont}
                    hindiFont={hindiFont}
                    englishFont={englishFont}
                    gurmukhiSize={gurmukhiSize}
                    phoneticSize={phoneticSize}
                    hindiSize={hindiSize}
                    englishSize={englishSize}
                    gurmukhiColor={gurmukhiColor}
                    phoneticColor={phoneticColor}
                    hindiColor={hindiColor}
                    englishColor={englishColor}
                    setGurmukhiFont={setGurmukhiFont}
                    setPhoneticFont={setPhoneticFont}
                    setHindiFont={setHindiFont}
                    setEnglishFont={setEnglishFont}
                    setGurmukhiSize={setGurmukhiSize}
                    setPhoneticSize={setPhoneticSize}
                    setHindiSize={setHindiSize}
                    setEnglishSize={setEnglishSize}
                    setGurmukhiColor={setGurmukhiColor}
                    setPhoneticColor={setPhoneticColor}
                    setHindiColor={setHindiColor}
                    setEnglishColor={setEnglishColor}
                    isGurumukhi={isGurumukhi}
                    isPhonetic={isPhonetic}
                    isHindi={isHindi}
                    isSantSinghTransln={isSantSinghTransln}
                />
                : null}
            <section >
                <div className='container'>
                    <div className='d-flex flex-column'>
                        <div className='ang-display mt-5'>
                        <h1>Displaying Page {headingData.current_page} of {props.tlPage}</h1>
                            <div className='ang-wrapper'>
                                {angData.map((item, index) => {
                                    const characters = item.punjabi.split(' ');
                                    console.log('COLOR', phoneticFont)
                                    return (
                                        <div className='ang-itm'>
                                            <div style={{ fontFamily: gurmukhiFont, fontSize: `${gurmukhiSize}px`, color: gurmukhiColor }} >{item.punjabi}</div>
                                            {isPhonetic ? <div style={{ fontFamily: phoneticFont, fontSize: `${phoneticSize}px`, color: phoneticColor }} >{item.translit}</div> : null}
                                            {isHindi ? <div style={{ fontFamily: hindiFont, fontSize: `${hindiSize}px`, color: hindiColor }}>{item.hindi}</div> : null}
                                            {isSantSinghTransln ? <div style={{ fontFamily: englishFont, fontSize: `${englishSize}px`, color: englishColor }}>{item.english}</div> : null}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='container my-4' >
                <div className=' d-flex justify-content-end'>
                    <div className='go-line-wrapper' >
                                {/* <button className='ang-btn ' onClick={(e) => { e.preventDefault(); getAngByAng(angNo) }}>Next</button>
                                <button className='ang-btn ' onClick={(e) => { e.preventDefault(); getAngByAng(angNo) }}>Last</button> */}
                                {angNo >1 &&
                            <>
                            <button className='ang-btn' style={{background:'var(--current-color, var(--color-1))',color:'#fff'}} onClick={(e) => { e.preventDefault(); handleBegin() }}>Begin</button>
                            <button className='ang-btn' style={{background:'var(--current-color, var(--color-1))',color:'#fff'}} onClick={(e) => { e.preventDefault(); handleBack(angNo); }}>Back</button>
                            </>
                            }
                            {headingData.current_page < props.tlPage &&
                            <>
                            <button className='ang-btn' style={{background:'var(--current-color, var(--color-1))',color:'#fff'}} onClick={(e) => { e.preventDefault();  handleNext(angNo)}}>Next</button>
                            <button className='ang-btn' style={{background:'var(--current-color, var(--color-1))',color:'#fff'}} onClick={(e) => { e.preventDefault(); handleLast(); }}>Last</button>
                            </>}
                            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SGCommonPage