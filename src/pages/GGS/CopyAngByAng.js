//Gurbani search//
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useOutletContext } from "react-router";
import { Link, useLocation, useParams } from "react-router-dom";
//import imgs from './assets/img/content/ggs_01.jpg'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '../../assets/css/shabad-line.css'
import { API } from "../../config/api";
import { ApiHelper } from '../../helpers/ApiHelper';
import Spinner from '../../components/Spinner';
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';
// import athumb from '../assets/img/audio-thumb.svg';
import athumb from '../../assets/img/audio-thumb.svg';
import awave from '../../assets/img/wave.svg';
import Switch from 'react-switch';
import facebook from '../../assets/img/facebook.svg';
import twitter from '../../assets/img/twitter.svg';
import youtube from '../../assets/img/youtube.svg';
import telegram from '../../assets/img/telegram.svg';
import whatsapp from '../../assets/img/whatsapp.svg';
import mail from '../../assets/img/mail.svg';
import FontChange from '../../components/FontChange';
import Image from 'next/image';

function ShabadLine() {
    const location = useLocation();
    const navigate = useNavigate();
    const { shabad_id, lineno } = useParams();
    console.log('Shabad ID:', shabad_id);
    console.log('Shabad Line ID:', lineno);
    const data = location.state;
    const shareUrl = 'http://localhost:3000';
    const title = 'Search Gurbani : Gurbani Website';
    const [loader, setLoader] = useState(false);
    const [displaySectn, setDisplaySectn] = useState(false);
    const [fontSectn, setFontSectn] = useState(false);
    const [isSocialShare, setIsSocialShare] = useState(false);
    const [isPunctuation, setIsPunctuation] = useState(false);
    const [isPunctuationAssist, setIsPunctuationAssist] = useState(false);
    const [isLareevar, setIsLareevar] = useState(false);
    const [isLareevarAssist, setIsLareevarAssist] = useState(false);
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
    const [headingData, setHeadindData] = useState([]);
    const [angData, setAngData] = useState([]);
    const [audioList, setAudioList] = useState("");
    const [isAudio1, setIsAudio1] = useState(false);
    const [isAudio2, setIsAudio2] = useState(false);
    const [isAudio3, setIsAudio3] = useState(false);
    const [isAudio4, setIsAudio4] = useState(true);
    const audioPlayerRef = useRef();
    const [gurmukhiFont, setGurmukhiFont] = useState('AnmolUniBani');
    const [phoneticFont, setPhoneticFont] = useState('arial');
    const [hindiFont, setHindiFont] = useState('arial');
    const [englishFont, setEnglishFont] = useState('arial');

    const [gurmukhiSize, setGurmukhiSize] = useState('30');
    const [phoneticSize, setPhoneticSize] = useState('30');
    const [hindiSize, setHindiSize] = useState('30');
    const [englishSize, setEnglishSize] = useState('30');

    const [gurmukhiColor, setGurmukhiColor] = useState('rgb(51, 51, 51)');
    const [phoneticColor, setPhoneticColor] = useState('rgb(6, 3, 91)');
    const [hindiColor, setHindiColor] = useState('rgb(136, 8, 8)');
    const [englishColor, setEnglishColor] = useState('rgb(54, 103, 50)');

    useEffect(() => {
        getShabadLines();
    }, [shabad_id, lineno])
    const getShabadLines = async () => {
        setLoader(true)
        await ApiHelper.get(API.getShabadLine + shabad_id + "/line/" + lineno)
            .then((resData) => {
                setLoader(false);
                console.log('Ang', resData.data);
                setAngData(resData.data.lines)
                setHeadindData(resData.data)
            })
            .catch((err) => {
                setLoader(false);
                console.log(err, 'err');
            });
    }
    /* const getAngByAngAudio = async (paths, page) => {
        console.log('FORM', page)
        setLoader(true)
        const lineNo = "";
        await ApiHelper.get(API.getAngByAngAudio + "?path=sggs-" + paths + "/" + paths + "-" + page)
            .then((resData) => {
                setLoader(false);
                console.log('Audio', resData);
                setAudioList(resData.data.data)

            })
            .catch((err) => {
                setLoader(false);
                console.log(err, 'err');
            });
    } */
    const handleSocialShare = (nextChecked) => {
        setIsSocialShare(nextChecked);
    };
    const handleChangePunctn = (nextChecked) => {
        setIsPunctuation(nextChecked);
    };
    const handleChangeLareevar = (nextChecked) => {
        setIsLareevar(nextChecked);
    };
    const handleSelectChange = (event) => {
        const selectedOption = event.target.value;
        console.log('Selected Option:', selectedOption)
        if (selectedOption === "Phonetic") {
            setIsPhonetic(!isPhonetic)
        }
        else if (selectedOption === "English") {
            setIsEnglish(!isEnglish)
        }
        else if (selectedOption === "Hindi") {
            setIsHindi(!isHindi)
        }
        else {
            setIsShahmukhi(!isShahmukhi)
        }
    }
    const handleSelectTranslan = (event) => {
        const selectedOption = event.target.value;
        console.log('Selected Option:', selectedOption)
        if (selectedOption === "Sant Singh Khalsa") {
            setIsSantSinghTransln(!isSantSinghTransln)
        }
        else if (selectedOption === "Manmohan Singh") {
            setIsManmohanTransln(!isManmohanTransln)
        }
        else if (selectedOption === "Punjabi") {
            setIsPunjabiTransln(!isPunjabiTransln)
        }
        else if (selectedOption === "Guru Granth Darpan") {
            setIsGuruGranthTeeka(!isGuruGranthTeeka)
        }
        else if (selectedOption === "Faridkot Teeka") {
            setIsFaridkotTeeka(!isFaridkotTeeka)
        }
        else if (selectedOption === "Faridkot Teeka Hindi") {
            setIsFaridkotaTeekaHindi(!isFaridkotaTeekaHindi)
        }
        else {
            setIsSgpcTeeka(!isSgpcTeeka)
        }
    }
    const handleReset = () => {
        setIsPhonetic(true);
        setIsEnglish(false);
        setIsHindi(false);
        setIsShahmukhi(false);
        setIsSantSinghTransln(true);
        setIsManmohanTransln(false);
        setIsPunjabiTransln(false);
        setIsGuruGranthTeeka(false);
        setIsFaridkotTeeka(false);
        setIsFaridkotaTeekaHindi(false);
        setIsSgpcTeeka(false);
    }
    const handleShareModal = (platform) => {
        let shareLink = '';

        switch (platform) {
            case 'facebook':
                shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl + location.pathname)}&t=${encodeURIComponent(title)}`;
                break;
            case 'twitter':
                shareLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl + location.pathname)}&text=${encodeURIComponent(title)}`;
                break;
            case 'youtube':
                // YouTube does not have a direct sharing link for a URL, this is just an example
                shareLink = `https://www.youtube.com`;
                break;
            case 'telegram':
                shareLink = `https://telegram.me/share/url?url=${encodeURIComponent(shareUrl + location.pathname)}&text=${encodeURIComponent(title)}`;
                break;
            case 'whatsapp':
                shareLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(title + " " + shareUrl + location.pathname)}`;
                break;
            case 'mail':
                shareLink = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(shareUrl + location.pathname)}`;
                break;
            default:
                break;
        }

        window.open(shareLink, '_blank');

    };
    return (
        <div>
            <section className='section-shabad p-5'>
                <div className='container'>
                    <h3 className='text-dark mb-3 text-center' >{headingData.meta_titleE}</h3>
                    <h3 className='text-dark mb-3 text-center' >{headingData.meta_titleP}</h3>
                    <p className='text-dark mb-2 text-center' ><b>{headingData.meta_description}</b></p>
                </div>
            </section>
            <section className='inner-actions p-4' >
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 p-0'>
                            <div className='in-act-wrapper'>
                                <div className='actions-mains'>
                                    <div className='toggle-buttons-inner'>
                                        <label className='me-2' >Social Sharing </label>
                                        <label className='switch'>
                                            <Switch
                                                onChange={handleSocialShare}
                                                checked={isSocialShare}
                                                uncheckedIcon={false}
                                                checkedIcon={false}
                                            />
                                        </label>
                                    </div>
                                    <button className='action-btn-main' ><i class="bi bi-printer"></i></button>
                                    <button className='action-btn-main'><i class="bi bi-copy"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 d-flex-justify-content-end ang-ang'>
                            <div className='audio-features mt-0'>
                                <div className='toggle-buttons-inner'>
                                    <label className='me-2' >Punctuation </label>
                                    <label className='switch'>
                                        {/* <input type='checkbox'></input>
                                        <span className='slider'></span> */}
                                        <Switch
                                            onChange={handleChangePunctn}
                                            checked={isPunctuation}
                                            uncheckedIcon={false}
                                            checkedIcon={false}
                                        />
                                    </label>
                                </div>
                                <div className='toggle-buttons-inner'>
                                    <label className='me-2' >Lareevar</label>
                                    <label className='switch'>
                                        {/* <input type='checkbox'></input>
                                        <span className='slider'></span> */}
                                        <Switch
                                            onChange={handleChangeLareevar}
                                            checked={isLareevar}
                                            uncheckedIcon={false}
                                            checkedIcon={false}
                                        />
                                    </label>
                                </div>
                                <button className='ang-btn' onClick={(e) => { e.preventDefault(); displaySectn === false ? setDisplaySectn(true) : setDisplaySectn(false); }}>Display</button>
                                <button className='ang-btn' onClick={(e) => { e.preventDefault(); fontSectn === false ? setFontSectn(true) : setFontSectn(false) }}>Font</button>
                                <button className='ang-btn' >Next</button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {displaySectn ?
                <section className='display p-5 pb-0' >
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-2'>
                                <div className='form-group'>
                                    <label>Transliteration</label>
                                    <Form.Select aria-label="Default select example" onChange={handleSelectChange}>
                                        <option>Phonetic</option>
                                        <option>English</option>
                                        <option>Hindi</option>
                                        <option>Shahmukhi</option>
                                    </Form.Select>
                                </div>
                            </div>
                            <div className='col-lg-2'>
                                <div className='form-group'>
                                    <label>Translation</label>
                                    <Form.Select aria-label="Default select example" onChange={handleSelectTranslan}>
                                        <optgroup label="English">
                                            <option>Sant Singh Khalsa</option>
                                            <option>Manmohan Singh</option>
                                        </optgroup>
                                        <option>Punjabi</option>
                                        <optgroup label="Teeka ">
                                            <option>Guru Granth Darpan</option>
                                            <option>Faridkot Teeka</option>
                                            <option>Faridkot Teeka Hindi</option>
                                            <option>SGPC Shabadrth</option>
                                        </optgroup>
                                    </Form.Select>
                                </div>
                            </div>
                            <div className='col-lg-8 disply-settings-ang'>
                                <div className='toggle-buttons-inner'>
                                    <label className='me-2' >Split View </label>
                                    <label className='switch'>
                                        <input type='checkbox'></input>
                                        <span className='slider'></span>
                                    </label>
                                </div>

                                <div className='toggle-buttons-inner'>
                                    <label className='me-2' >Dark Mode</label>
                                    <label className='switch'>
                                        <input type='checkbox'></input>
                                        <span className='slider'></span>
                                    </label>
                                </div>
                                <div className='btn-dis'>
                                    <button className='ang-btn' onClick={(e) => { e.preventDefault(); isCenter === false ? setIsCenter(true) : setIsCenter(false) }}>Center</button>
                                    <button className='ang-btn' onClick={(e) => { e.preventDefault(); handleReset(); }}>Reset</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                : null}
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
                />
                : null}
            <section>
                <div className='container'>
                    <div className='d-flex flex-column'>
                        <div className='ang-display mt-0'>
                            <h1>Displaying</h1>
                            <div className='ang-wrapper'>
                                {angData.map((item, index) => (
                                    <div className={`ang-itm ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'}`}>
                                        {/* <h2 className='lang-1'  >{item.punjabi}</h2> */}
                                        <div style={{ fontFamily: gurmukhiFont, fontSize: `${gurmukhiSize}px`, color: gurmukhiColor }} >{item.punjabi}</div>
                                        {isPhonetic ? <div style={{ fontFamily: phoneticFont, fontSize: `${phoneticSize}px`, color: phoneticColor }} >{item.translit}</div> : null}
                                        {isEnglish ? <h2 className='lang-3' >{item.roman}</h2> : null}
                                        {isHindi ? <div style={{ fontFamily: hindiFont, fontSize: `${hindiSize}px`, color: hindiColor }} >{item.hindi}</div> : null}
                                        {isShahmukhi ? <h2 className='lang-6' >{item.urdu}</h2> : null}
                                        {isSantSinghTransln ? <div style={{ fontFamily: englishFont, fontSize: `${englishSize}px`, color: englishColor }} >{item.english}</div> : null}
                                        {isManmohanTransln ? <h2 className='lang-6' >{item.eng_mms}</h2> : null}
                                        {isPunjabiTransln ? <h2 className='lang-6' >{item.punj_mms}</h2> : null}
                                        {isGuruGranthTeeka ? <h2 className='lang-6' >{item.ss_line}</h2> : null}
                                        {isFaridkotTeeka ? <h2 className='lang-6' >{item.fwt}</h2> : null}
                                        {isFaridkotTeeka ? <h2 className='lang-6' >{item.fwt_2}</h2> : null}
                                        {isFaridkotTeeka ? <h2 className='lang-6' >{item.fwt_3}</h2> : null}
                                        {isFaridkotaTeekaHindi ? <h2 className='lang-6' >{item.fwt_hindi}</h2> : null}
                                        {isSgpcTeeka ? <h2 className='lang-6' >{item.sgpc_1}</h2> : null}
                                        {isSgpcTeeka ? <h2 className='lang-6' >{item.sgpc_2}</h2> : null}
                                        {isSgpcTeeka ? <h2 className='lang-6' >{item.sgpc_3}</h2> : null}
                                        <h2 className='lang-4' >{item.attributes} </h2>
                                        <h2 className='lang-5' >{item.raag + " " + item.author}</h2>
                                        {isSocialShare ?

                                            <div className='socia-share' style={{ marginLeft: '600px' }}>
                                                <ul>
                                                    <li><button className='ang-btn' onClick={() => navigate("/guru-granth-sahib/ang-by-ang", { state: { PageNo: item.pageID, LineNo: item.lineID } })}>Ang View</button></li>
                                                    <li><button className='ang-btn'>Verse View</button></li>
                                                    <li><h6 className='text-dark'>Share to</h6></li>
                                                    <li>
                                                        <a className='soc-icon' onClick={() => handleShareModal('facebook')} >
                                                            <Image src={facebook} class="img-fluid donate" alt="Responsive image" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className='soc-icon' onClick={() => handleShareModal('twitter')} >
                                                            <Image src={twitter} class="img-fluid donate" alt="Responsive image" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className='soc-icon' onClick={() => handleShareModal('telegram')} >
                                                            <Image src={telegram} class="img-fluid donate" alt="Responsive image" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className='soc-icon' onClick={() => handleShareModal('whatsapp')} >
                                                            <Image src={whatsapp} class="img-fluid donate" alt="Responsive image" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className='soc-icon' onClick={() => handleShareModal('mail')} >
                                                            <Image src={mail} class="img-fluid donate" alt="Responsive image" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div> : null}
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

export default ShabadLine