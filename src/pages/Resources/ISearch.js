//Gurbani search//
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useOutletContext } from "react-router";
import { Link, useLocation } from "react-router-dom";
//import imgs from './assets/img/content/ggs_01.jpg'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '../../assets/css/ang-by-ang.css'
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

const AngByAng = (props) => {
    const location = useLocation();
    const data = location.state;
    const navigate = useNavigate();
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
    const [allData, setAllData] = useState([]);
    const [audioList, setAudioList] = useState("");
    const [isAudio1, setIsAudio1] = useState(false);
    const [isAudio2, setIsAudio2] = useState(false);
    const [isAudio3, setIsAudio3] = useState(false);
    const [isAudio4, setIsAudio4] = useState(true);
    const [lineNo, setLineNo] = useState("");
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
 console.log('TEST',props)

    useEffect(() => {

        if (props.pageNo !== undefined) {
            console.log('props', props.pageNo)
            setAngNo(props.pageNo);
            setLineNo(props.lineNo)
            getAngByAng(props.pageNo)
            getAngByAngAudio("gms", props.pageNo)
        }
        else {
            console.log('TEST')
            getAngByAng("1")
            getAngByAngAudio("gms","1")
        }

    }, [])
    const getAngByAng = async (pageNo) => {
        setLoader(true)
        console.log('AngNo',pageNo);
        await ApiHelper.get(API.getAngByAng + "?line_no=" + lineNo + "&page=" + pageNo)
            .then((resData) => {
                setLoader(false);
                console.log('Ang', resData.data.lines);
                setAngData(resData.data.lines)
                setAllData(resData.data)
            })
            .catch((err) => {
                setLoader(false);
                console.log(err, 'err');
            });
    }
    const getAngByAngAudio = async (paths, page) => {
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
    }
    const handleBegin = () => {
        setAngNo(1);
        getAngByAng(1); 
        getAngByAngAudio("gms", 1)       
    }
    const handleBack = (ang) => {
        let no = parseInt(ang)-1
        setAngNo(no.toString());
        getAngByAng(no.toString()); 
        getAngByAngAudio("gms", no.toString())       
    }
    const handleNext = (ang) => { 
        console.log('NEXT',ang)   
        if(angNo > 1)  {
            let no = parseInt(ang) + 1 
            setAngNo(no.toString());
            getAngByAng(no.toString());
            getAngByAngAudio("gms", no.toString())
        }
        else{
            let no = 1 + 1 
            setAngNo(no.toString());
             getAngByAng(no.toString());
             getAngByAngAudio("gms", no.toString())
        }              
                
    }
    const handleLast = () => {
        setAngNo(1430);
        getAngByAng(1430);  
        getAngByAngAudio("gms", 1430 )      
    }
    const handleSocialShare = (nextChecked) => {
        setIsSocialShare(nextChecked);
    };
    const handleChangePunctn = (nextChecked) => {
        setIsPunctuation(nextChecked);
        setIsPunctuationAssist(false);
        setIsLareevar(false);
    };
    const handleChangePunAssist = (nextChecked) => {
        setIsPunctuationAssist(nextChecked);
    };
    const handleChangeLareevar = (nextChecked) => {
        setIsLareevar(nextChecked);
        setIsLareevarAssist(false);
        setIsPunctuation(false)
    };
    const handleChangeLarAssist = (nextChecked) => {
        setIsLareevarAssist(nextChecked);
    };
    const handleSplitView = (nextChecked) => {
        setIsSplitView(nextChecked);
    };
    const handleDarkMode = (nextChecked) => {
        setIsDarkMode(nextChecked);
    };
    const handleClickAudio = (paths) => {
        getAngByAngAudio(paths, angNo)
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
        setIsCenter(false);
        setIsLareevar(false);
        setIsLareevarAssist(false);
        setIsPunctuationAssist(false);
        setIsPunctuation(false);
        setIsDarkMode(false);
        setIsSplitView(false)
    }
   /*  const processText = (text) => {
        console.log('*************',text)
        const words = text.split(' ');
        const processedWords = words.map((word, index) => {
          const nextWord = words[index + 1] || '';
          if (nextWord.startsWith(';')) {
            return `<span style="color: red;">${word}</span>`;
          } else if (nextWord.startsWith(',')) {
            return `<span style="color: green;">${word}</span>`;
          }
          return word;
        });
        console.log('*************',processedWords)

        return processedWords.join(' ').replace(/[;,]/g, '');
      }; */
      /* const processText = (text) => {
        console.log('*************', text);
    
        // Split the text by spaces and punctuation, and keep them as separate tokens
        const words = text.split(/(\s+|[,;])/).filter(Boolean);
        console.log('Initial words:', words);
    
        const processedWords = words.map((word, index) => {
          // Check if the next token is a punctuation mark
          const nextWord = words[index + 1] || '';
          if (nextWord.startsWith(';')) {
            return `<span style="color: red;">${word}</span>`;
          } else if (nextWord.startsWith(',')) {
            return `<span style="color: green;">${word}</span>`;
          }
          return word;
        });
    
        console.log('Processed words:', processedWords);
    
        // Join the processed words and keep punctuation
        return processedWords.join(' ').replace(/[;,]/g, '');
      }; */ 
      const processText = (text) => {
        console.log('*************', text);
    
        // Split the text by spaces and keep punctuation marks attached to the words
        const words = text.split(/(\s+|[,;])/).filter(Boolean);
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
            <section className='inner-actions p-4' >
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 p-0'>
                            <div className='in-act-wrapper'>
                                <h1 className='inner-heading' >Sri Guru Granth Sahib</h1>
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
                        <div className='col-lg-12 d-flex-justify-content-end ang-ang  mt-3'>
                            {/* <div className='go-line-wrapper' >
                            <div className='go-to-ang position-relative'>
                                <div className='form-group'>
                                    <input type='text' placeholder='go to ang' className='form-control'
                                        onChange={(e) => setAngNo(e.target.value)} value={angNo}></input>
                                    <button className='ang-btn' onClick={(e) => { e.preventDefault(); getAngByAng(angNo); getAngByAngAudio("gms", angNo); }}>Go</button>
                                </div>
                            </div>
                            {angNo >1 &&
                            <>
                            <button className='ang-btn' style={{background:'var(--current-color, var(--color-1))',color:'#fff'}} onClick={(e) => { e.preventDefault(); handleBegin() }}>Begin</button>
                            <button className='ang-btn' style={{background:'var(--current-color, var(--color-1))',color:'#fff'}} onClick={(e) => { e.preventDefault(); handleBack(angNo); }}>Back</button>
                            </>
                            }
                            <button className='ang-btn' style={{background:'var(--current-color, var(--color-1))',color:'#fff'}} onClick={(e) => { e.preventDefault();  handleNext(angNo)}}>Next</button>
                            <button className='ang-btn' style={{background:'var(--current-color, var(--color-1))',color:'#fff'}} onClick={(e) => { e.preventDefault(); handleLast(); }}>Last</button>
                            </div> */}
                            <div className='audio-features'>
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
                                {isPunctuation ?
                                    <div className='toggle-buttons-inner'>
                                        <label className='me-2' >Punctuation Assist </label>
                                        <label className='switch'>
                                            {/* <input type='checkbox'></input>
                                    <span className='slider'></span> */}
                                            <Switch
                                                onChange={handleChangePunAssist}
                                                checked={isPunctuationAssist}
                                                uncheckedIcon={false}
                                                checkedIcon={false}
                                            />
                                        </label>
                                    </div> : null}
                                <div className='toggle-buttons-inner'>
                                    <label className='me-2' >Lareevar</label>
                                    <label className='switch'>
                                        <Switch
                                            onChange={handleChangeLareevar}
                                            checked={isLareevar}
                                            uncheckedIcon={false}
                                            checkedIcon={false}
                                        />
                                    </label>
                                </div>
                                {isLareevar ?
                                    <div className='toggle-buttons-inner'>
                                        <label className='me-2' >Lareevar Assist </label>
                                        <label className='switch'>
                                            <Switch
                                                onChange={handleChangeLarAssist}
                                                checked={isLareevarAssist}
                                                uncheckedIcon={false}
                                                checkedIcon={false}
                                            />
                                        </label>
                                    </div> : null}
                                <button className='ang-btn' onClick={(e) => { e.preventDefault(); displaySectn === false ? setDisplaySectn(true) : setDisplaySectn(false); }}>Display</button>
                                <button className='ang-btn' onClick={(e) => { e.preventDefault(); fontSectn === false ? setFontSectn(true) : setFontSectn(false) }}>Font</button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='audio-p pt-2' >
                <div className='container-lg'>
                    <div className='d-flex flex-column'>
                        <div className='audio-player-m'>
                            <Image src={athumb} class="img-fluid aud-thumb" alt="Responsive image" />

                            <Image src={awave} class="img-fluid wave" alt="Responsive image" />
                        </div>
                        <AudioPlayer
                            autoPlayAfterSrcChange={false}
                            autoPlay={false}
                            src={"https://backend.searchgurbani.com/" + audioList}
                        />
                        <div className='pagination'>
                        <div className='go-line-wrapper' >
                            <div className='go-to-ang position-relative'>
                                <div className='form-group'>
                                    <input type='text' placeholder='go to ang' className='form-control'
                                        onChange={(e) => setAngNo(e.target.value)} value={angNo}></input>
                                    <button className='ang-btn' onClick={(e) => { e.preventDefault(); getAngByAng(angNo); getAngByAngAudio("gms", angNo); }}>Go</button>
                                </div>
                            </div>
                            <div className='control-btn' >
                            {angNo >1 &&
                            <>
                            <button className='ang-btn' style={{background:'var(--current-color, var(--color-1))',color:'#fff'}} onClick={(e) => { e.preventDefault(); handleBegin() }}>Begin</button>
                            <button className='ang-btn' style={{background:'var(--current-color, var(--color-1))',color:'#fff'}} onClick={(e) => { e.preventDefault(); handleBack(angNo); }}>Back</button>
                            </>
                            }
                            {angNo < 1430 &&
                            <>
                            <button className='ang-btn' style={{background:'var(--current-color, var(--color-1))',color:'#fff'}} onClick={(e) => { e.preventDefault();  handleNext(angNo)}}>Next</button>
                            <button className='ang-btn' style={{background:'var(--current-color, var(--color-1))',color:'#fff'}} onClick={(e) => { e.preventDefault(); handleLast(); }}>Last</button>
                            </>}
                            </div>
                            </div>
                                    <div className='pg d-flex'>
                                    <Link className={isAudio1 ? 'page-itm active' : 'page-itm'} onClick={(e) => {
                                e.preventDefault(); handleClickAudio('sat');
                                setIsAudio1(true); setIsAudio2(false); setIsAudio3(false); setIsAudio4(false);
                            }}>1</Link>
                            <Link className={isAudio2 ? 'page-itm active' : 'page-itm'} onClick={(e) => {
                                e.preventDefault(); handleClickAudio('jas');
                                setIsAudio1(false); setIsAudio2(true); setIsAudio3(false); setIsAudio4(false);
                            }}>2</Link>
                            <Link className={isAudio3 ? 'page-itm active' : 'page-itm'} onClick={(e) => {
                                e.preventDefault(); handleClickAudio('jag');
                                setIsAudio1(false); setIsAudio2(false); setIsAudio3(true); setIsAudio4(false);
                            }}>3</Link>
                            <Link className={isAudio4 ? 'page-itm active' : 'page-itm'} onClick={(e) => {
                                e.preventDefault(); handleClickAudio('gms');
                                setIsAudio1(false); setIsAudio2(false); setIsAudio3(false); setIsAudio4(true);
                            }}>4</Link>
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
                                        <Switch
                                            onChange={handleSplitView}
                                            checked={isSplitView}
                                            uncheckedIcon={false}
                                            checkedIcon={false}
                                        />
                                    </label>
                                </div>

                                <div className='toggle-buttons-inner'>
                                    <label className='me-2' >Dark Mode</label>
                                    <label className='switch'>
                                        <Switch
                                            onChange={handleDarkMode}
                                            checked={isDarkMode}
                                            uncheckedIcon={false}
                                            checkedIcon={false}
                                        />
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
                        <div className='ang-display mt-5'>
                            <h1>Displaying Ang {allData.current_page} of 1430</h1>
                            {isSplitView === false ?
                                <div className='ang-wrapper'>
                                    {angData.map((item, index) => {
                                        const characters = item.punjabi.split(' ');
                                        console.log('COLOR', phoneticFont)
                                        return (
                                            <div className={`ang-itm ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'}`} >
                                                {isLareevar && isLareevarAssist === false ? <h2 className='lang-1'  >{item.punjabi.replace(/\s+/g, '')}</h2> :
                                                    isLareevar && isLareevarAssist ?
                                                        characters.map((char, index) => (
                                                            <span className='lang-1'
                                                                key={index}
                                                                style={{ color: index % 2 === 0 ? gurmukhiColor : 'green', fontFamily: gurmukhiFont, fontSize: `${gurmukhiSize}px`, }}
                                                            >{char}
                                                            </span>
                                                        )) : isPunctuation && isPunctuationAssist === false ? <div style={{ fontFamily: gurmukhiFont, fontSize: `${gurmukhiSize}px`, color: gurmukhiColor }} >{item.punctuation}</div> :
                                                            isPunctuation && isPunctuationAssist ?
                                                            <div style={{ fontFamily: gurmukhiFont, fontSize: `${gurmukhiSize}px`, color: gurmukhiColor }}  dangerouslySetInnerHTML={{ __html: processText(item.punctuation) }} ></div>
                                                                :
                                                                <div style={{ fontFamily: gurmukhiFont, fontSize: `${gurmukhiSize}px`, color: gurmukhiColor }} >{item.punjabi}</div>}
                                                {isPhonetic ? <div style={{ fontFamily: phoneticFont, fontSize: `${phoneticSize}px`, color: phoneticColor }} >{item.translit}</div> : null}
                                                {isEnglish ? <h2 className='lang-3' >{item.roman}</h2> : null}
                                                {isHindi ? <div style={{ fontFamily: hindiFont, fontSize: `${hindiSize}px`, color: hindiColor }}>{item.hindi}</div> : null}
                                                {isShahmukhi ? <h2 className='lang-6' >{item.urdu}</h2> : null}
                                                {isSantSinghTransln ? <div style={{ fontFamily: englishFont, fontSize: `${englishSize}px`, color: englishColor }}>{item.english}</div> : null}
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
                                                            <li><button className='ang-btn' onClick={(e) => { e.preventDefault(); navigate('/guru-granth-sahib/shabad/' + `${item.shabad_id}` + '/line/' + `${item.shabdlineID}`) }}>Shabad View</button></li>
                                                            <li><button className='ang-btn'  onClick={(e) => { e.preventDefault(); navigate('/guru-granth-sahib/verse/' + `${item.verseID}` )}}>Verse View</button></li>
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
                                        );
                                    })}
                                </div> :
                                <div className='ang-wrapper'>
                                    <div className={`ang-itm ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'}`} >
                                        {angData.map((item,index) =>{
                                            const characters = item.punjabi.split(' ');
                                            return(
                                                isLareevar && isLareevarAssist === false ? <h2 className='lang-1'  >{item.punjabi.replace(/\s+/g, '')}</h2> :
                                                isLareevar && isLareevarAssist ?
                                                    characters.map((char, index) => (
                                                        <span className='lang-1'
                                                            key={index}
                                                            style={{ color: index % 2 === 0 ? gurmukhiColor : 'green', fontFamily: gurmukhiFont, fontSize: `${gurmukhiSize}px`, }}
                                                        >{char}
                                                        </span>
                                                    )) : isPunctuation && isPunctuationAssist === false ? <div style={{ fontFamily: gurmukhiFont, fontSize: `${gurmukhiSize}px`, color: gurmukhiColor }} >{item.punctuation}</div> :
                                                        isPunctuation && isPunctuationAssist ?
                                                            characters.map((char, index) => (
                                                                <span className='lang-1'
                                                                    key={index}
                                                                    style={{ color: index % 2 === 0 ? gurmukhiColor : 'green', fontFamily: gurmukhiFont, fontSize: `${gurmukhiSize}px`, }}
                                                                >
                                                                    <b>{char}
                                                                        {index < char.length - 1 ? ' ' : ''}
                                                                    </b>
                                                                </span>
                                                            )) :
                                                            <div style={{ fontFamily: gurmukhiFont, fontSize: `${gurmukhiSize}px`, color: gurmukhiColor }} >{item.punjabi}</div>                                          
                                            
                                            );
                                        })}
                                    </div>
                                    {isPhonetic ?
                                    <div className={`ang-itm ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'}`} >
                                        {angData.map((item,index) =>(
                                             <div style={{ fontFamily: phoneticFont, fontSize: `${phoneticSize}px`, color: phoneticColor }} >{item.translit}</div> 
                                        ))}
                                    </div> : null}
                                    {isEnglish ?
                                    <div className={`ang-itm ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'}`} >
                                        {angData.map((item,index) =>(
                                             <h2 className='lang-3' >{item.roman}</h2> 
                                        ))}
                                    </div>: null}
                                    { isHindi ?
                                    <div className={`ang-itm ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'}`} >
                                        {angData.map((item,index) =>(
                                            <div style={{ fontFamily: hindiFont, fontSize: `${hindiSize}px`, color: hindiColor }}>{item.hindi}</div> 
                                        ))}
                                    </div> : null}
                                    {isShahmukhi ?
                                    <div className={`ang-itm ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'}`} >
                                        {angData.map((item,index) =>(
                                             <h2 className='lang-6' >{item.urdu}</h2> 
                                        ))}
                                    </div> : null}
                                    {isSantSinghTransln ?
                                    <div className={`ang-itm ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'}`} >
                                        {angData.map((item,index) =>(
                                             <div style={{ fontFamily: englishFont, fontSize: `${englishSize}px`, color: englishColor }}>{item.english}</div> 
                                        ))}
                                    </div> : null}
                                    {isManmohanTransln ?
                                    <div className={`ang-itm ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'}`} >
                                        {angData.map((item,index) =>(
                                             <h2 className='lang-6' >{item.eng_mms}</h2> 
                                        ))}
                                    </div> : null}
                                    {isPunjabiTransln ?
                                    <div className={`ang-itm ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'}`} >
                                        {angData.map((item,index) =>(
                                             <h2 className='lang-6' >{item.punj_mms}</h2> 
                                        ))}
                                    </div> : null}
                                    {isGuruGranthTeeka ?
                                    <div className={`ang-itm ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'}`} >
                                        {angData.map((item,index) =>(
                                             <h2 className='lang-6' >{item.ss_line}</h2>
                                        ))}
                                    </div> : null}
                                    {isFaridkotTeeka ? 
                                    <div className={`ang-itm ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'}`} >
                                        {angData.map((item,index) =>(
                                            <>
                                            <h2 className='lang-6' >{item.fwt}</h2> 
                                            <h2 className='lang-6' >{item.fwt_2}</h2>
                                            <h2 className='lang-6' >{item.fwt_3}</h2> 
                                            </>
                                        ))}
                                    </div> : null}
                                    {isFaridkotaTeekaHindi ?
                                    <div className={`ang-itm ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'}`} >
                                        {angData.map((item,index) =>(
                                             <h2 className='lang-6' >{item.fwt_hindi}</h2>
                                        ))}
                                    </div> : null}
                                    {isSgpcTeeka ?
                                    <div className={`ang-itm ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'}`} >
                                        {angData.map((item,index) =>(
                                             <>
                                             <h2 className='lang-6' >{item.sgpc_1}</h2>
                                             <h2 className='lang-6' >{item.sgpc_2}</h2>
                                             <h2 className='lang-6' >{item.sgpc_3}</h2> 
                                             </>
                                        ))}
                                    </div> : null}
                                    <div className={`ang-itm ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'}`} >
                                        {angData.map((item,index) =>(
                                            <>
                                            <h2 className='lang-4' >{item.attributes} </h2>
                                            <h2 className='lang-5' >{item.raag + " " + item.author}</h2>
                                            </>
                                        ))}
                                    </div>

                                </div>}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AngByAng