// import 'react-h5-audio-player/lib/styles.css';
// import '../assets/css/ang-by-ang.css'
// import '../assets/css/print.css';
//Gurbani search//
import React, { useEffect, useState, useRef } from 'react';
// import { useNavigate, useOutletContext } from "react-router";
// import { Link, useLocation, useParams } from "react-router-dom";
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

const VersePrintView = (props) => {
    // const location = useLocation();
    // const navigate = useNavigate();
    const shareUrl = 'https://searchgurbani.com';
    const title = 'Search Gurbani : Gurbani Website';
    const [loader, setLoader] = useState(false);
    const [displaySectn, setDisplaySectn] = useState(false);
    const [fontSectn, setFontSectn] = useState(false);
    const [isSocialShare, setIsSocialShare] = useState(false);
    const [isPunctuation, setIsPunctuation] = useState(false);
    const [isPunctuationAssist, setIsPunctuationAssist] = useState(false);
    const [isLareevar, setIsLareevar] = useState(false);
    const [isLareevarAssist, setIsLareevarAssist] = useState(false);
    const [isGurumukhi, setIsGurumukhi] = useState(true);
    const [isPhonetic, setIsPhonetic] = useState(true);
    const [isEnglish, setIsEnglish] = useState(false);
    const [isHindi, setIsHindi] = useState(false);
    const [isShahmukhi, setIsShahmukhi] = useState(false);
    const [isSantSinghTransln, setIsSantSinghTransln] = useState(true);
    const [isManmohanTransln, setIsManmohanTransln] = useState(false);
    const [isPunjabiTransln, setIsPunjabiTransln] = useState(false);
    const [isGuruGranthTeeka, setIsGuruGranthTeeka] = useState(false);
    const [isFaridkotTeeka, setIsFaridkotTeeka] = useState(false);
    const [isFaridkotaTeekaHindi, setIsFaridkotaTeekaHindi] = useState(false);
    const [isSgpcTeeka, setIsSgpcTeeka] = useState(false);
    const [isSplitView, setIsSplitView] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isCenter, setIsCenter] = useState(false);
    const [angNo, setAngNo] = useState("1");
    const [angData, setAngData] = useState([]);
    const [pref, setPref] = useState(initialFormState);
    const [isAttrib, setIsAttrib] = useState(true);
    const [lineNo, setLineNo] = useState("");
    const [headingData, setHeadindData] = useState([]);
    const [isMouse, setIsMouse] = useState(false);
    const [isTeekaTransln, setIsTeekaTransln] = useState(false);
    const [isTeekaRomanTransln, setIsTeekaRomanTransln] = useState(false);
    const [isTeekaHindiTransln, setIsTeekaHindiTransln] = useState(false);
    const [isTeekaTranslnDG, setIsTeekaTranslnDG] = useState(false);
    const [isTeekaTranslnKK, setIsTeekaTranslnKK] = useState(false);
    const [isTeekaRomanTranslnKK, setIsTeekaRomanTranslnKK] = useState(false);
    const [isTeekaHindiTranslnKK, setIsTeekaHindiTranslnKK] = useState(false);
    const [isTeekaTranslnBNL, setIsTeekaTranslnBNL] = useState(false);
    const [isTeekaHindiTranslnBNL, setIsTeekaHindiTranslnBNL] = useState(false);
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
        setAngNo(props.pageNo);
        //getAngByAng(props.pageNo)
        const savedPreference = localStorage.getItem('Preference');
        console.log('Preference', props.poet);
        if (savedPreference) {
            const preferences = JSON.parse(savedPreference);
            setPref(preferences)
            console.log('social', preferences.transliteration.punctuation);
            setIsSocialShare(preferences.social_flag);
            setIsPunctuation(preferences.transliteration.punctuation);
            setIsPunctuationAssist(preferences.transliteration.punctuation_assist);
            setIsLareevar(preferences.transliteration.lareevar);
            setIsLareevarAssist(preferences.transliteration.lareevar_assist)
            setIsPhonetic(preferences.transliteration.roman);
            setIsEnglish(preferences.transliteration.english);
            setIsHindi(preferences.transliteration.hindi);
            setIsShahmukhi(preferences.transliteration.shahmukhi);
            setIsGurumukhi(preferences.transliteration.main_lang);
            setIsSantSinghTransln(preferences.translation.english);
            setIsManmohanTransln(preferences.translation.ggs.eng_mms);
            setIsPunjabiTransln(preferences.translation.ggs.punj_mms);
            setIsGuruGranthTeeka(preferences.translation.ggs.ggd);
            setIsFaridkotTeeka(preferences.translation.ggs.ft);
            setIsFaridkotaTeekaHindi(preferences.translation.ggs.fth);
            setIsSgpcTeeka(preferences.translation.ggs.ss);
            setIsSplitView(preferences.displayMode.split_view);
            setIsCenter(preferences.displayMode.center_align);
            setIsDarkMode(preferences.displayMode.dark_mode);
            setIsAttrib(preferences.show_attributes);
            setGurmukhiFont(preferences.font.gurmukhi.name);
            setGurmukhiColor(preferences.font.gurmukhi.color);
            setGurmukhiSize(preferences.font.gurmukhi.size);
            setPhoneticFont(preferences.font.phonetic.name);
            setPhoneticColor(preferences.font.phonetic.color);
            setPhoneticSize(preferences.font.phonetic.size);
            setHindiFont(preferences.font.hindi.name);
            setHindiColor(preferences.font.hindi.color);
            setHindiSize(preferences.font.hindi.size);
            setEnglishFont(preferences.font.english.name);
            setEnglishColor(preferences.font.english.color);
            setEnglishSize(preferences.font.english.size);
            setIsMouse(preferences.mouseover_gurmukhi_dic);
            setIsTeekaTransln(preferences.translation.bgv.teeka);
            setIsTeekaHindiTransln(preferences.translation.bgv.teeka_hindi);
            setIsTeekaRomanTransln(preferences.translation.bgv.teeka_roman);
            setIsTeekaTranslnDG(preferences.translation.dg.teeka);
            setIsTeekaTranslnKK(preferences.translation.ks.teeka);
            setIsTeekaHindiTranslnKK(preferences.translation.ks.teeka_hindi);
            setIsTeekaRomanTranslnKK(preferences.translation.ks.teeka_roman);
            setIsTeekaTranslnBNL(preferences.translation.bnl.teeka);
            setIsTeekaHindiTranslnBNL(preferences.translation.bnl.teekahindi);
        }
        if (props.angData) {
            setLoader(false)
        } else {
            setLoader(true)
        }
    }, [])
    const processText = (text) => {
        console.log('*************', text);
        const removeSpacesBeforePunctuation = (str) => {
            return str.replace(/\s+([,;])/g, '$1');
        };

        const cleanedText = removeSpacesBeforePunctuation(text);

        // Split the text by spaces and keep punctuation marks attached to the words
        const words = cleanedText.split(/(\s+|[,;])/).filter(Boolean);
        console.log('Initial words:', words);

        const processedWords = words.map((word, index) => {
            // Check if the next word is a punctuation mark
            const nextWord = words[index + 1] || '';
            if (nextWord === ';') {
                return `<span style="color: red;">${word}</span>`;
            } else if (nextWord === ',') {
                return `<span style="color: green;">${word}</span>`;
            }
            return word;
        });

        console.log('Processed words:', processedWords);

        // Join the processed words and remove punctuation
        return processedWords.join('').replace(/[;,]/g, '');
    };

    return (
        <div>
            {loader && <Spinner />}
            <div className='main-print'>
            <section className='inner-actions p-4' >

                <section className='inner-actions p-4' >

                    <div className=''>
                        <div className='row'>
                            <div className=' col-lg-12 p-0 d-flex align-item-center justify-content-between'>
                                <div className='in-act-wrapper'>
                                    <div className='actions-mains'>
                                        <button className='action-btn-main' onClick={() => window.print()}  ><i className="bi bi-printer"></i></button>
                                    </div>
                                </div>
                                {/* </div>
                        <div className='col-lg-6 d-flex-justify-content-end ang-ang'> */}
                                <div className='audio-features mt-0'>
                                    <div className='toggle-buttons-inner'>
                                        <label className='me-2' >SearchGurbani.com </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className=''>
                    <div className='row'>
                        <div className='col-lg-12 p-0'>
                            <div className='d-flex justify-content-start'>
                                <h1 className='inner-heading-prints' >{props.title}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                

            </section>

            <section>
                <div className=' '>
                    <div className='d-flex flex-column'>
                        <div className=' '>
                            <div className='ang-wrapper'>
                                {props.angData.map((item, index) => {
                                    const characters = item.punjabi.split(' ');
                                    console.log('COLOR', phoneticFont)
                                    return (
                                        <div className={`ang-itms prints-view-sahid ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'}`} >
                                            {/* <h2 className='lang-1'  >{item.punjabi}</h2> */}
                                            {props.poet === 'ak' ? 
                                            <>
                                            {isLareevar && isLareevarAssist === false ? <div className='print-sizes' style={{ fontFamily: gurmukhiFont, fontSize: `${gurmukhiSize}px`, color: gurmukhiColor }}>{item.punjabi.replace(/\s+/g, '')}</div> :
                                                    isLareevar && isLareevarAssist ?
                                                        characters.map((char, index) => (
                                                            <span className='lang-1 print-head'
                                                                key={index}
                                                                style={{ color: index % 2 === 0 ? gurmukhiColor : 'green', fontFamily: gurmukhiFont, fontSize: `${gurmukhiSize}px` }}
                                                            >
                                                                {char}
                                                            </span>
                                                        )) : 
                                                        isGurumukhi ?
                                                        <div  className='print-sizes' style={{ fontFamily: gurmukhiFont, fontSize: `${gurmukhiSize}px`, color: gurmukhiColor }} >{item.punjabi}</div> : null}
                                            </>                                            
                                             : 
                                             <>
                                            {isLareevar && isLareevarAssist === false ? <h2 className='lang-1 print-head'  >{item.punjabi.replace(/\s+/g, '')}</h2> :
                                                isLareevar && isLareevarAssist ?
                                                    characters.map((char, index) => (
                                                        <span className='lang-1 print-head'
                                                            key={index}
                                                            style={{ color: index % 2 === 0 ? gurmukhiColor : 'green', fontFamily: gurmukhiFont, fontSize: `${gurmukhiSize}px`, }}
                                                        >{char}
                                                        </span>
                                                    )) : isPunctuation && isPunctuationAssist === false ? <div style={{ fontFamily: gurmukhiFont, fontSize: `${gurmukhiSize}px`, color: gurmukhiColor }} >{item.punctuation}</div> :
                                                        isPunctuation && isPunctuationAssist ?
                                                            <div style={{ fontFamily: gurmukhiFont, fontSize: `${gurmukhiSize}px`, color: gurmukhiColor }} dangerouslySetInnerHTML={{ __html: processText(item.punctuation) }} ></div>
                                                            : isGurumukhi ?
                                                                <div style={{ fontFamily: gurmukhiFont, fontSize: `${gurmukhiSize}px`, color: gurmukhiColor }} >{item.punjabi}</div> : null}
                                            </>}
                                            {isPhonetic ? <div  className='print-sizes' style={{ fontFamily: phoneticFont, fontSize: `${phoneticSize}px`, color: phoneticColor }} >{item.translit}</div> : null}
                                            {isEnglish ? <h2 className='lang-3 print-head' >{item.roman}</h2> : null}
                                            {isHindi ? <div  className='print-sizes' style={{ fontFamily: hindiFont, fontSize: `${hindiSize}px`, color: hindiColor }}>{item.hindi}</div> : null}
                                            {isShahmukhi ? <h2 className='lang-6 print-head' >{item.urdu}</h2> : null}
                                            {isSantSinghTransln ? <div  className='print-sizes' style={{ fontFamily: englishFont, fontSize: `${englishSize}px`, color: englishColor }}>{item.english}</div> : null}
                                            {props.poet === 'ggs' ? (
                                                <>
                                                    {isManmohanTransln ? <h2 className='lang-6 print-head' >{item.eng_mms}</h2> : null}
                                                    {isPunjabiTransln ? <h2 className='lang-6 print-head' >{item.punj_mms}</h2> : null}
                                                    {isGuruGranthTeeka ? <h2 className='lang-6 print-head' >{item.ss_line}</h2> : null}
                                                    {isFaridkotTeeka ? <h2 className='lang-6 print-head' >{item.fwt}</h2> : null}
                                                    {isFaridkotTeeka ? <h2 className='lang-6 print-head' >{item.fwt_2}</h2> : null}
                                                    {isFaridkotTeeka ? <h2 className='lang-6 print-head' >{item.fwt_3}</h2> : null}
                                                    {isFaridkotaTeekaHindi ? <h2 className='lang-6 print-head' >{item.fwt_hindi}</h2> : null}
                                                    {isSgpcTeeka ? <h2 className='lang-6 print-head' >{item.sgpc_1}</h2> : null}
                                                    {isSgpcTeeka ? <h2 className='lang-6 print-head' >{item.sgpc_2}</h2> : null}
                                                    {isSgpcTeeka ? <h2 className='lang-6 print-head' >{item.sgpc_3}</h2> : null}
                                                    {isAttrib ? <>
                                                        <h2 className='lang-4 print-head' >{item.attributes} </h2>
                                                        <h2 className='lang-5 print-head' >{item.raag + " " + item.author}</h2></> : null}
                                                </>
                                            ): props.poet === 'ak' ? (
                                                <>
                                                    {isAttrib ?
                                                        <>
                                                            <h2 className='lang-4 print-head' >{item.lattrib} </h2>
                                                            <h2 className='lang-2 print-head' > <i>Shabad: {item.shabad_name}</i> </h2>
                                                            <h2 className='lang-5 print-head' >{item.raag + " " + item.author}</h2>
                                                        </> : null}
                                                </>
                                            ) : props.poet === 'bgv' ?(
                                                <>
                                                {isTeekaTransln ? <h2 className='lang-6 print-head' >{item.teeka}</h2> : null}
                                                       {isTeekaRomanTransln ? <h2 className='lang-6 print-head' >{item.teeka_roman}</h2> : null}
                                                       {isTeekaHindiTransln ? <h2 className='lang-6 print-head' >{item.teeka_hindi}</h2> : null}
                                                       {isAttrib ? <h2 className='lang-4 print-head' >{item.attributes} </h2> : null}
                                               </>
                                            ) : props.poet === 'dg' ?(
                                                <>
                                                {isTeekaTranslnDG ? <h2 className='lang-6 print-head' >{item.teeka}</h2> : null}
                                                </>
                                            ) : props.poet === 'ks' ?(
                                                <>
                                                {isTeekaTranslnKK ? <h2 className='lang-6 print-head' >{item.teeka_punjabi}</h2> : null}
                                                {isTeekaRomanTranslnKK ? <h2 className='lang-6 print-head' >{item.teeka_roman}</h2> : null}
                                                {isTeekaHindiTranslnKK ? <h2 className='lang-6 print-head' >{item.teeka_hindi}</h2> : null}
                                                {isAttrib ? <h2 className='lang-4 print-head' >{item.lattrib} </h2> : null}
                                                </>
                                            ) : props.poet === 'bnl' ?(
                                                <>
                                                {isTeekaTranslnBNL ? <h2 className='lang-6 print-head' >{item.teeka}</h2> : null}
                                                {isTeekaHindiTranslnBNL ? <h2 className='lang-6 print-head' >{item.teekahindi}</h2> : null}
                                                {isAttrib ? <h2 className='lang-4 print-head' >{item.attributes} </h2> : null}
                                                </>
                                            ) : null}

                                        </div>
                                    );
                                })} 
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        </div>
    )
}

export default VersePrintView