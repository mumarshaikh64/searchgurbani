import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from "react-router";
import { Link, useLocation, useParams } from "react-router-dom";
import '../../../assets/css/dashboard.css';
import '../../../assets/css/style.css';
import '../../../assets/css/cyber.css';
import { API } from "../../../config/api";
import '../../../assets/css/hukumindex.css';
import { ApiHelper } from '../../../helpers/ApiHelper';
import FontChange from '../../../components/FontChange';
import initialFormState from '../../../components/defalutPref';
import {Helmet} from "react-helmet";


function HukumAng() {
    const { ang } = useParams();
    const [loader, setLoader] = useState(false);
    const [languageCheck, setLanguageCheck] = useState(false);
    const [pageInfo, setPageInfo] = useState([]);
    const [dataLines, setPDataLines] = useState([]);
    const [audioList, setAudioList] = useState("");
    const [pref, setPref] = useState(initialFormState);
    const [fontSectn, setFontSectn] = useState(false);
    const [isGurumukhi, setIsGurumukhi] = useState(true);
    const [isPhonetic, setIsPhonetic] = useState(true);
    const [isEnglish, setIsEnglish] = useState(true);
    const [isSantSinghTransln, setIsSantSinghTransln] = useState(true);
    const [gurmukhiFont, setGurmukhiFont] = useState('AnmolUniBani');
    const [phoneticFont, setPhoneticFont] = useState('arial');
    const [gurmukhiSize, setGurmukhiSize] = useState('22');
    const [phoneticSize, setPhoneticSize] = useState('22');
    const [englishSize, setEnglishSize] = useState('22');
    const [englishTranslitSize, setEnglishTranslitSize] = useState('18');
    const [gurmukhiColor, setGurmukhiColor] = useState('rgb(51, 51, 51)');
    const [phoneticColor, setPhoneticColor] = useState('rgb(6, 3, 91)');
    const [englishColor, setEnglishColor] = useState('rgb(54, 103, 50)');
    const [hindiColor, setHindiColor] = useState('rgb(136, 8, 8)');
    const [hindiFont, setHindiFont] = useState('arial');
    const [englishFont, setEnglishFont] = useState('arial');
    const [hindiSize, setHindiSize] = useState('22');
    const [audioStatus, setAudioStatus] = useState(false);
    useEffect(() => {
        getChapter(ang);
        getAngByAngAudio(ang);
        const savedPreference = localStorage.getItem('Preference');
        console.log('Preference', savedPreference);
        if (savedPreference) {
            const preferences = JSON.parse(savedPreference);
            setPref(preferences)
            console.log('social', preferences.transliteration.punctuation);
            setGurmukhiFont(preferences.font.gurmukhi.name);
            setGurmukhiColor(preferences.font.gurmukhi.color);
            setGurmukhiSize(preferences.font.gurmukhi.size);
            setPhoneticFont(preferences.font.phonetic.name);
            setPhoneticColor(preferences.font.phonetic.color);
            setPhoneticSize(preferences.font.phonetic.size);
            setHindiFont(preferences.font.hindi.name);
            setHindiColor(preferences.font.hindi.color);
            setHindiSize(preferences.font.hindi .size);
            setEnglishFont(preferences.font.english.name);
            setEnglishColor(preferences.font.english.color);
            setEnglishSize(preferences.font.english.size);

        }
    }, [])
    const getChapter = async (ang) => {
        setLoader(true)
        await ApiHelper.get(API.getCyberHukum + '?ang=' + ang + '&type=pageno')
            .then((resData) => {
                setLoader(false);
                console.log('chapter', resData.data);
                setPageInfo(resData.data)
                setPDataLines(resData.data.lines)
            })
            .catch((err) => {
                setLoader(false);
                /* setMessage("Error !!! Please try again"); */
                console.log(err, 'err');
            });
    }
    const getAngByAngAudio = async (page) => {
        console.log('FORM', page)
        setLoader(true)
        const lineNo = "";
        await ApiHelper.get(API.getAngByAngAudio + "?path=hukum/" + page)
            .then((resData) => {
                setLoader(false);
                console.log('Audio', resData);
                setAudioList(resData.data.data)
                setAudioStatus(resData.data.status)

            })
            .catch((err) => {
                setLoader(false);
                console.log(err, 'err');
            });
    }
    return (
        <div>
            <Helmet>
                <title>{`Hukumnama - Ang ${pageInfo.pageno} -: 
                
                searchgurbani.com`}</title>
            </Helmet>
            {/* <section>
                <div className='container py-5'>
                    <div className='row'>
                        <div className='col-lg-12'>

                            <h6 className='mb-2 mt-0 head-cyber'>In Gurmukhi</h6>
                            <div className="cyber-section " >
                                {dataLines.map((item, index) => (
                                    <p className="sub-cyb-hindi">
                                        {item.punjabi}
                                    </p>
                                ))}
                            </div>
                            <h6 className='mb-4 mt-4 head-cyber'>Phonetic English</h6>
                            <div className="cyber-section " >
                                {dataLines.map((item, index) => (
                                    <p className="sub-cyb-eng">
                                        {item.translit}
                                    </p>
                                ))}
                            </div>
                            <h6 className='mb-4 mt-4 head-cyber'>English Translation</h6>
                            <div className="cyber-section " >
                                {dataLines.map((item, index) => (
                                    <p className="sub-cyb-eng-trans">
                                        {item.english}
                                    </p>
                                ))}
                            </div>
                            <h6 className='mb-4 mt-4 head-cyber'>Punjabi Viakhya</h6>
                            <div className="cyber-section " >
                                {dataLines.map((item, index) => (
                                    <div className="sub-cyb-punjab ">
                                        {item.ss_para}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className='section-shabad bannerXX p-5' >
                <div className='container py-2'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className="" >
                                <h3 className="cyb-head">Hukumnama - Ang {pageInfo.pageno}</h3>
                                <p className="sub-cyb">{pageInfo.hukumnama_info?.title} in {pageInfo.hukumnama_info?.raag}</p>
                            </div>
                        </div>
                        {audioStatus ?
                        <div className='d-flex justify-content-center mt-2'>
                        <audio src={"https://backend.searchgurbani.com/" + audioList} className='text-center' autoplay controls ></audio> 
                        </div> : null}                        
                    </div>
                </div>
               
            </section>
           
            
            <section>
                <div className='container'>
                <div className='col-lg-12 d-flex-justify-content-end ang-ang font-btts mt-3'>
                <div className='audio-features mt-0'>
                    <button className={`ang-btn-enable ${!fontSectn && 'ang-btn-disable'} `} onClick={(e) => { e.preventDefault(); fontSectn === false ? setFontSectn(true) : setFontSectn(false) }}>Font</button>

                </div></div>
                   
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
                    englishTranslitSize={''}
                    englishTranslitColor={''}
                    setEnglishTranslitSize={''}
                    setEnglishTranslitColor={''}
                    shahmukhiSize={''}  
                    shahmukhiColor={''}
                    setshahmukhiSize={''}
                    setshahmukhiColor={''}
                    isGurumukhi={isGurumukhi}
                    isPhonetic={isPhonetic}
                    isEnglish={''}
                    isHindi={''}
                    isShahmukhi={''}
                    isSantSinghTransln={isSantSinghTransln}
                />
                : null}
                    <div className='d-flex flex-column'>
                        <div className='ang-display mt-3'>
                            <div className='ang-wrapper Hukumnam_ang'>
                                <div className='ang-itm'>
                                    <h6 className='mb-4 mt-4 head-cyber'>In Gurmukhi</h6>
                                    <div className="cyber-section "  >
                                        {dataLines.map((item, index) => (
                                            <p className="sub-cyb-hindi" style={{ fontFamily: gurmukhiFont, fontSize: `${gurmukhiSize}px`, color: gurmukhiColor }}>
                                                {item.punjabi}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                                <div className='ang-itm'>
                                    <h6 className='mb-4 mt-4 head-cyber'>Phonetic English</h6>

                                    <div className="cyber-section " >
                                        {dataLines.map((item, index) => (
                                            <p className="sub-cyb-eng" style={{ fontFamily: phoneticFont, fontSize: `${phoneticSize}px`, color: phoneticColor }}>
                                                {item.translit}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                                <div className='ang-itm'>
                                    <h6 className='mb-4 mt-4 head-cyber'>English Translation</h6>

                                    <div className="cyber-section " >
                                        {dataLines.map((item, index) => (
                                            <p className="sub-cyb-eng-trans" style={{ fontFamily: englishFont, fontSize: `${englishSize}px`, color: englishColor }}>
                                                {item.english}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                                <div className='ang-itm'>
                                    <h6 className='mb-4 mt-4 head-cyber'>Punjabi Viakhya</h6>

                                    <div className="cyber-section " >
                                        {dataLines.map((item, index) => (
                                            <p className="sub-cyb-punjab " style={{ fontFamily: englishFont, fontSize: `${englishSize}px`, color: englishColor }}>
                                                {item.ss_para}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default HukumAng