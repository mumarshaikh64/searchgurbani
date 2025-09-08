//Gurbani search//
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useOutletContext } from "react-router";
import { Link, useLocation, useParams } from "react-router-dom";
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
import initialFormState from '../../components/defalutPref';
import { formatTextForCopyDg } from '../../components/TextCopyDg';
import { MultiSelect } from "react-multi-select-component";
import {Helmet} from "react-helmet";
import HelmetWrapper from '../../components/CommonHelmet';

const DgVerse = (props) => {
    const location = useLocation();
    const { page_no } = useParams();
    console.log('ID:', page_no);
    const navigate = useNavigate();
    const data = location.state;
    const shareUrl = 'https://searchgurbani.com';
    //const title = 'Search Gurbani : Gurbani Website';
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
    const [isMouse, setIsMouse] = useState(false);
    const [headingData, setHeadindData] = useState([]);
    const [isEnglishTransln, setIsEnglishTransln] = useState(true);
    const [isTeekaTranslnDG, setIsTeekaTranslnDG] = useState(false);
    const [audioList, setAudioList] = useState("");
    const [isAudio1, setIsAudio1] = useState(false);
    const [isAudio2, setIsAudio2] = useState(false);
    const [isAudio3, setIsAudio3] = useState(false);
    const [isAudio4, setIsAudio4] = useState(true);
    const [lineNo, setLineNo] = useState("");
    const [pref, setPref] = useState(initialFormState);
    const [attribStyle, setAttribStyle] = useState(true);
    const [isAttrib, setIsAttrib] = useState(true); 
    const [gurmukhiFont, setGurmukhiFont] = useState('AnmolUniBani');
    const [phoneticFont, setPhoneticFont] = useState('arial');
    const [hindiFont, setHindiFont] = useState('arial');
    const [englishFont, setEnglishFont] = useState('arial');
    const [attribFont, setAttribFont] = useState('AnmolUniBani');

    const [gurmukhiSize, setGurmukhiSize] = useState('22');
    const [phoneticSize, setPhoneticSize] = useState('22');
    const [hindiSize, setHindiSize] = useState('22');
    const [englishSize, setEnglishSize] = useState('22');
    const [shahmukhiSize, setshahmukhiSize] = useState('18');
    const [englishTranslitSize, setEnglishTranslitSize] = useState('18');
    const [attribSize, setAttribSize] = useState('16');

    const [gurmukhiColor, setGurmukhiColor] = useState('rgb(51, 51, 51)');
    const [phoneticColor, setPhoneticColor] = useState('rgb(6, 3, 91)');
    const [hindiColor, setHindiColor] = useState('rgb(136, 8, 8)');
    const [englishColor, setEnglishColor] = useState('rgb(54, 103, 50)');
    const [shahmukhiColor, setshahmukhiColor] = useState('#BF6008');
    const [englishTranslitColor, setEnglishTranslitColor] = useState('#0882BF');
    const [attribColor, setAttribColor] = useState('rgb(54, 103, 50)');
    const textContainerRef = useRef(null);
    const [selected, setSelected] = useState([]);
    const [selectedTrans, setSelectedTrans] = useState([]);
    const options = [
        { label: "Phonetic", value: "Phonetic" },
        { label: "English", value: "English" },
        { label: "Hindi", value: "Hindi" },
        { label: "Shahmukhi", value: "Shahmukhi" },
    ];
    const optionsTrans = [
        { label: "English", value: "English" },
        { label: "Teeka", value: "Teeka" },
    ];


    useEffect(() => {
        setAngNo(page_no);
        getVerse(page_no);
        const savedPreference = localStorage.getItem('Preference');
        console.log('Preference', savedPreference);
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
            setIsTeekaTranslnDG(preferences.translation.dg.teeka);
            setIsSplitView(preferences.displayMode.split_view);
            setIsCenter(preferences.displayMode.center_align);
            setIsDarkMode(preferences.displayMode.dark_mode);
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
            setAttribFont(preferences.font.attributes.name);
            setAttribColor(preferences.font.attributes.color);
            setAttribSize(preferences.font.attributes.size);
            setIsMouse(preferences.mouseover_gurmukhi_dic);
            if (preferences.transliteration.roman === true) {
                selected.push({ label: 'Phonetic', value: 'Phonetic' })
            }
            if (preferences.transliteration.english === true) {
                selected.push({ label: 'English', value: 'English' })
            }
            if (preferences.transliteration.hindi === true) {
                selected.push({ label: 'Hindi', value: 'Hindi' })
            }
            if (preferences.transliteration.shahmukhi === true) {
                selected.push({ label: 'Shahmukhi', value: 'Shahmukhi' })
            }
            if (preferences.translation.english === true) {
                selectedTrans.push({ label: "English", value: "English" })
            }
            if (preferences.translation.dg.teeka === true) {
                selectedTrans.push({ label: "Teeka", value: "Teeka" })
            }
        }
    }, [page_no])
    const getVerse = async (pageNo) => {
        setLoader(true)
        console.log('Ang No', pageNo);
        await ApiHelper.get(API.getDgVerse + "?page_no=" + pageNo + "&scripture=dg&base_url=dasam-granth")
            .then((resData) => {
                setLoader(false);
                console.log('Ang', resData.data);
                setAngData(resData.data.lines);
                setHeadindData(resData.data);
                window.scrollTo(0, 0);
            })
            .catch((err) => {
                setLoader(false);
                /* setMessage("Error !!! Please try again"); */
                console.log(err, 'err');
            });
    }
    const handleSocialShare = (nextChecked) => {
        setIsSocialShare(nextChecked);
        console.log('IIIIII', pref)
        setPref((prevPref) => {
            const updatedPref = { ...prevPref, social_flag: nextChecked };
            localStorage.setItem('Preference', JSON.stringify(updatedPref));
            return updatedPref;
        });
    };
    const handleChangePunctn = (nextChecked) => {
        setIsPunctuation(nextChecked);
        setIsPunctuationAssist(false);
        setIsLareevar(false);
        setIsGurumukhi(true);
        setPref((prevPref) => {
            const updatedPref = {
                ...prevPref,
                transliteration: {
                    ...prevPref.transliteration,
                    punctuation: nextChecked,
                    lareevar: false,
                    lareevar_assist: false,
                    main_lang: true,
                },
            };
            localStorage.setItem('Preference', JSON.stringify(updatedPref));
            return updatedPref;
        });
    };
    const handleChangePunAssist = (nextChecked) => {
        setIsPunctuationAssist(nextChecked);
        setPref((prevPref) => {
            const updatedPref = {
                ...prevPref,
                transliteration: {
                    ...prevPref.transliteration,
                    punctuation_assist: nextChecked,
                },
            };
            localStorage.setItem('Preference', JSON.stringify(updatedPref));
            return updatedPref;
        });
    };
    const handleChangeLareevar = (nextChecked) => {
        setIsLareevar(nextChecked);
        setIsLareevarAssist(false);
        setIsPunctuation(false);
        setIsGurumukhi(true);
        setPref((prevPref) => {
            const updatedPref = {
                ...prevPref,
                transliteration: {
                    ...prevPref.transliteration,
                    lareevar: nextChecked,
                    punctuation: false,
                    punctuation_assist: false,
                    main_lang: true,
                },
            };
            localStorage.setItem('Preference', JSON.stringify(updatedPref));
            return updatedPref;
        });
    };
    const handleChangeLarAssist = (nextChecked) => {
        setIsLareevarAssist(nextChecked);
        setPref((prevPref) => {
            const updatedPref = {
                ...prevPref,
                transliteration: {
                    ...prevPref.transliteration,
                    lareevar_assist: nextChecked,
                },
            };
            localStorage.setItem('Preference', JSON.stringify(updatedPref));
            return updatedPref;
        });
    };
    const handleSplitView = (nextChecked) => {
        setIsSplitView(nextChecked);
        setPref((prevPref) => {
            const updatedPref = { ...prevPref, displayMode: { ...prevPref.displayMode, split_view: nextChecked, }, };
            localStorage.setItem('Preference', JSON.stringify(updatedPref));
            return updatedPref;
        });
    };
    const handleDarkMode = (nextChecked) => {
        setIsDarkMode(nextChecked);
        setPref((prevPref) => {
            const updatedPref = { ...prevPref, displayMode: { ...prevPref.displayMode, dark_mode: nextChecked, }, };
            localStorage.setItem('Preference', JSON.stringify(updatedPref));
            return updatedPref;
        });
    };
    const handleCenter = () => {
        setIsCenter(!isCenter)
        setPref((prevPref) => {
            const updatedPref = { ...prevPref, displayMode: { ...prevPref.displayMode, center_align: !isCenter, }, };
            localStorage.setItem('Preference', JSON.stringify(updatedPref));
            return updatedPref;
        });
    };
    /* const handleSelectChange = (event) => {
        const selectedOption = event.target.value;
        console.log('Selected Option:', selectedOption)
        if (selectedOption === "Phonetic") {
            setIsPhonetic(!isPhonetic)
            setPref((prevPref) => {
                const updatedPref = { ...prevPref, transliteration: { ...prevPref.transliteration,roman: !isPhonetic ,},};
                localStorage.setItem('Preference', JSON.stringify(updatedPref));
                return updatedPref;
              });
        }
        else if (selectedOption === "English") {
            setIsEnglish(!isEnglish)
            setPref((prevPref) => {
                const updatedPref = { ...prevPref, transliteration: { ...prevPref.transliteration,english: !isEnglish ,},};
                localStorage.setItem('Preference', JSON.stringify(updatedPref));
                return updatedPref;
              });
        }
        else if (selectedOption === "Hindi") {
            setIsHindi(!isHindi)
            setPref((prevPref) => {
                const updatedPref = { ...prevPref, transliteration: { ...prevPref.transliteration,hindi: !isHindi ,},};
                localStorage.setItem('Preference', JSON.stringify(updatedPref));
                return updatedPref;
              });
        }
        else {
            setIsShahmukhi(!isShahmukhi)
            setPref((prevPref) => {
                const updatedPref = { ...prevPref, transliteration: { ...prevPref.transliteration,shahmukhi: !isShahmukhi ,},};
                localStorage.setItem('Preference', JSON.stringify(updatedPref));
                return updatedPref;
              });
        }
    }
    const handleSelectTranslan = (event) => {
        const selectedOption = event.target.value;
        console.log('Selected Option:', selectedOption)
        if (selectedOption === "English") {
            setIsSantSinghTransln(!isSantSinghTransln)
            setPref((prevPref) => {
                const updatedPref = { ...prevPref, translation: { ...prevPref.translation,english: !isSantSinghTransln ,},};
                localStorage.setItem('Preference', JSON.stringify(updatedPref));
                return updatedPref;
              });
        }
        else{
            setIsTeekaTranslnDG(!isTeekaTranslnDG)
            setPref((prevPref) => {            
                const updatedPref = {...prevPref,translation: {...prevPref.translation,
                    dg: {...prevPref.translation.dg, teeka: !isTeekaTranslnDG}}};
                  localStorage.setItem('Preference', JSON.stringify(updatedPref));
                return updatedPref;
              });
        }
        
    } */
    const handleSelectChange = (selectedList) => {
        setSelected(selectedList);

        const isPhoneticSelected = selectedList.some(option => option.value === "Phonetic");
        const isEnglishSelected = selectedList.some(option => option.value === "English");
        const isHindiSelected = selectedList.some(option => option.value === "Hindi");
        const isShahmukhiSelected = selectedList.some(option => option.value === "Shahmukhi");

        setIsPhonetic(isPhoneticSelected);
        setIsEnglish(isEnglishSelected);
        setIsHindi(isHindiSelected);
        setIsShahmukhi(isShahmukhiSelected);

        setPref((prevPref) => {
            const updatedPref = {
                ...prevPref,
                transliteration: {
                    ...prevPref.transliteration,
                    roman: isPhoneticSelected,
                    english: isEnglishSelected,
                    hindi: isHindiSelected,
                    shahmukhi: isShahmukhiSelected,
                },
            };
            localStorage.setItem('Preference', JSON.stringify(updatedPref));
            return updatedPref;
        });
    };
    const handleSelectTranslan = (selectedList) => {
        setSelectedTrans(selectedList);

        const isSantSinghTranslnSelected = selectedList.some(option => option.value === "English");
        const isTeekaTranslnSelected = selectedList.some(option => option.value === "Teeka");

        setIsSantSinghTransln(isSantSinghTranslnSelected);
        setIsTeekaTranslnDG(isTeekaTranslnSelected);

        setPref((prevPref) => {
            const updatedPref = {
                ...prevPref,
                translation: {
                    ...prevPref.translation,
                    english: isSantSinghTranslnSelected,
                    dg: {
                        ...prevPref.translation.dg,
                        teeka: isTeekaTranslnSelected,
                    },
                },
            };
            localStorage.setItem('Preference', JSON.stringify(updatedPref));
            return updatedPref;
        });
    }
    const handleReset = () => {
        setIsPhonetic(true);
        setIsEnglish(false);
        setIsHindi(false);
        setIsShahmukhi(false);
        setIsSantSinghTransln(true);
        setIsTeekaTranslnDG(false);
        setIsCenter(false);
        setIsLareevar(false);
        setIsLareevarAssist(false);
        setIsPunctuationAssist(false);
        setIsPunctuation(false);
        setIsDarkMode(false);
        setIsSplitView(false);
        setSelected([{ label: 'Phonetic', value: 'Phonetic' }]);
        setSelectedTrans([{ label: "English", value: "English" }])
        localStorage.setItem('Preference', JSON.stringify(initialFormState));
    }
    const handleNext = () => {
        let pNo = angNo;
        let add = parseInt(pNo) + 1;
        console.log('hgyjgfymf', add)
        setAngNo(add);
        getVerse(add);
        window.scrollTo(0, 0);
    }
    const handlePrev = () => {
        let pNo = angNo;
        let add = parseInt(pNo) - 1;
        console.log('hgyjgfymf', add)
        setAngNo(add);
        getVerse(add)
    }
    const processText = (text) => {
        console.log('*************', text);
        const removeSpacesBeforePunctuation = (str) => {
            return str?.replace(/\s+([,;])/g, '$1');
        };

        const cleanedText = removeSpacesBeforePunctuation(text);

        // Split the text by spaces and keep punctuation marks attached to the words
        const words = cleanedText?.split(/(\s+|[,;])/).filter(Boolean);
        console.log('Initial words:', words);

        const processedWords = words?.map((word, index) => {
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
        return processedWords?.join('').replace(/[;,]/g, '');
    };
    /* const processText = (text) => {
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
    }; */
    const handleShareModal = (platform) => {
        let shareLink = '';
        const title = document.title;
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
    const handleCopyText = () => {
        if (textContainerRef.current) {
            const textToCopy = formatTextForCopyDg(angData, isLareevar, isLareevarAssist, isPunctuation, isPunctuationAssist,
                isPhonetic, isGurumukhi, isHindi, isEnglish, isShahmukhi, isSantSinghTransln, isTeekaTranslnDG
            );
            navigator.clipboard.writeText(textToCopy).then(() => {
                alert('Text copied to clipboard!');
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        }
    };
    const handleCopyTextSplit = () => {
        if (textContainerRef.current) {
            const textContent = textContainerRef.current.innerText;
            const textArray = textContent.split('\n');
            const textToCopy = textArray.join('\n\n');
            navigator.clipboard.writeText(textToCopy).then(() => {
                alert('Text copied to clipboard!');
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        }
    };
    return (
        <div>
            {loader && <Spinner />}
            <section className='inner-actions p-4' >
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 p-0'>
                            <div className='in-act-wrapper'>
                                <h1 className='inner-heading' >Sri Dasam Granth Sahib Verse</h1>
                            </div>
                        </div>
                    </div>
                </div>
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
                                        <button className='action-btn-main' onClick={() => window.open(`/dasam-granth/verse/${page_no}/print-view`, '_blank', 'height=700,width=700')}><i class="bi bi-printer"></i></button>
                                        <button className='action-btn-main' onClick={isSplitView ? handleCopyTextSplit : handleCopyText}><i class="bi bi-copy"></i></button>
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
                                    {isLareevar ?
                                        <div className='toggle-buttons-inner'>
                                            <label className='me-2' >Lareevar Assist </label>
                                            <label className='switch'>
                                                {/* <input type='checkbox'></input>
                                    <span className='slider'></span> */}
                                                <Switch
                                                    onChange={handleChangeLarAssist}
                                                    checked={isLareevarAssist}
                                                    uncheckedIcon={false}
                                                    checkedIcon={false}
                                                />
                                            </label>
                                        </div> : null}
                                    <button className={`ang-btn-enable ${!displaySectn && 'ang-btn-disable'} `} onClick={(e) => { e.preventDefault(); displaySectn === false ? setDisplaySectn(true) : setDisplaySectn(false); }}>Display</button>
                                    <button className={`ang-btn-enable ${!fontSectn && 'ang-btn-disable'} `} onClick={(e) => { e.preventDefault(); fontSectn === false ? setFontSectn(true) : setFontSectn(false) }}>Font</button>
                                    {angNo > 1 ? <button className='ang-btn-disable' onClick={(e) => { e.preventDefault(); handlePrev(); }}>Previous</button> : null}
                                    <button className='ang-btn-disable' onClick={(e) => { e.preventDefault(); handleNext(); }}>Next</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            {displaySectn ?
                <section className='display p-5 pb-0' >
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-3'>
                                <div className='form-group'>
                                    <label>Transliteration</label>
                                    {/* <Form.Select aria-label="Default select example" onChange={handleSelectChange}>
                                            <option>Phonetic</option>
                                            <option>English</option>
                                            <option>Hindi</option>
                                            <option>Shahmukhi</option>
                                        </Form.Select> */}
                                    <MultiSelect
                                        options={options}
                                        value={selected}
                                        onChange={handleSelectChange}
                                        labelledBy="Select"
                                        hasSelectAll={false}
                                        disableSearch={false}
                                        ClearSelectedIcon={null}
                                    />
                                </div>
                            </div>
                            <div className='col-lg-3'>
                                <div className='form-group'>
                                    <label>Translation</label>
                                    {/* <Form.Select aria-label="Default select example" onChange={handleSelectTranslan}>
                                        <option>English</option>
                                        <option>Teeka</option>
                                        </Form.Select> */}
                                    <MultiSelect
                                        options={optionsTrans}
                                        value={selectedTrans}
                                        onChange={handleSelectTranslan}
                                        labelledBy="Select Translations"
                                        hasSelectAll={false}
                                        disableSearch={false}
                                        ClearSelectedIcon={null}
                                    />
                                </div>
                            </div>
                            <div className='col-lg-6 disply-settings-ang'>
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
                                    <button className={`ang-btn-enable ${!isCenter && 'ang-btn-disable'} `} onClick={(e) => { e.preventDefault(); handleCenter(); }}>Center</button>
                                    <button className='ang-btn-disable' onClick={(e) => { e.preventDefault(); handleReset(); }}>Reset</button>
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
                    englishTranslitSize={englishTranslitSize}
                    englishTranslitColor={englishTranslitColor}
                    setEnglishTranslitSize={setEnglishTranslitSize}
                    setEnglishTranslitColor={setEnglishTranslitColor}
                    shahmukhiSize={shahmukhiSize}
                    shahmukhiColor={shahmukhiColor}
                    setshahmukhiSize={setshahmukhiSize}
                    setshahmukhiColor={setshahmukhiColor}
                    isGurumukhi={isGurumukhi}
                    isPhonetic={isPhonetic}
                    isEnglish={isEnglish}
                    isHindi={isHindi}
                    isShahmukhi={isShahmukhi}
                    isSantSinghTransln={isSantSinghTransln}
                    attribStyle={attribStyle}
                    setAttribFont={setAttribFont}
                    setAttribColor={setAttribColor}
                    setAttribSize={setAttribSize}
                    attribFont={attribFont}
                    attribSize={attribSize}
                    attribColor={attribColor}
                />
                : null}
            <section>
                <div className='container'>
                    <div className='d-flex flex-column'>
                        <div className='ang-display mt-5'>
                            <h1>Displaying Verse {headingData.current_page} of {headingData.end_page}</h1>
                            {isSplitView === false ?
                                <div className='ang-wrapper' ref={textContainerRef}>
                                    {angData.map((item, index) => {
                                        const characters = item.punjabi.split(' ');
                                        console.log('COLOR', phoneticFont)
                                        return (
                                            <div className={`ang-itm ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'}`} >
                                                {/* {parseInt(data.line) === parseInt(item.pagelineID)  && */}
                                                <HelmetWrapper
                                                title={`Sri Dasam Granth Sahib Verse ${item.english}`}
                                                description={`This Verse ${item.punjabi} ${item.english} ${item.hindi}`}
                                                keywords="Gurbani Kirtan, Amrit Keertan, Gurbani, Shabad Keertan,  Dasam Granth, Guru granth, granth, kabit, Bhai Gurdas, Vaaran, Varan"
                                                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                                                url={window.location.href}
                                            />{/* } */}
                                                {/* <h2 className='lang-1'  >{item.punjabi}</h2> */}
                                                {isLareevar && isLareevarAssist === false ? <div style={{ fontFamily: gurmukhiFont, fontSize: `${gurmukhiSize}px`, color: gurmukhiColor }} >{item.punjabi.replace(/\s+/g, '')}</div> :
                                                    isLareevar && isLareevarAssist ?
                                                        characters.map((char, index) => (
                                                            <span className='lang-1'
                                                                key={index}
                                                                style={{ color: index % 2 === 0 ? gurmukhiColor : 'red', fontFamily: gurmukhiFont, fontSize: `${gurmukhiSize}px`, }}
                                                            >{char}
                                                            </span>
                                                        )) : isPunctuation && isPunctuationAssist === false ? <div style={{ fontFamily: gurmukhiFont, fontSize: `${gurmukhiSize}px`, color: gurmukhiColor }} >{item.punctuation}</div> :
                                                            isPunctuation && isPunctuationAssist ?
                                                                <div style={{ fontFamily: gurmukhiFont, fontSize: `${gurmukhiSize}px`, color: gurmukhiColor }} dangerouslySetInnerHTML={{ __html: processText(item.punctuation) }} ></div>
                                                                : isGurumukhi ?
                                                                    <div style={{ fontFamily: gurmukhiFont, fontSize: `${gurmukhiSize}px`, color: gurmukhiColor }} >{item.punjabi}</div> : null}
                                                {isPhonetic ? <div style={{ fontFamily: phoneticFont, fontSize: `${phoneticSize}px`, color: phoneticColor }} >{item.translit}</div> : null}
                                                {isEnglish ? <div className='lang-3' style={{ fontSize: `${englishTranslitSize}px`, color: englishTranslitColor }} >{item.roman}</div> : null}
                                                {isHindi ? <div style={{ fontFamily: hindiFont, fontSize: `${hindiSize}px`, color: hindiColor }}>{item.hindi}</div> : null}
                                                {isShahmukhi ? <div className='lang-6' style={{ fontSize: `${shahmukhiSize}px`, color: shahmukhiColor }}>{item.urdu}</div> : null}
                                                {isSantSinghTransln ? <div style={{ fontFamily: englishFont, fontSize: `${englishSize}px`, color: englishColor }}>{item.english}</div> : null}
                                                {isTeekaTranslnDG ? <div className='mt-4' style={{ fontFamily: englishFont, fontSize: `${englishSize}px`, color: englishColor }} >{item.teeka}</div> : null}
                                                {isAttrib ? <div style={{ fontFamily: attribFont, fontSize: `${attribSize}px`, color: attribColor }}>{item.attributes} </div> : null}
                                                {isSocialShare ?

                                                    <div className='socia-share' style={{ marginLeft: '600px' }}>
                                                        <ul>
                                                            <li><button className='ang-btn' onClick={(e) => { e.preventDefault(); navigate('/dasam-granth/page/' + `${item.pageID}` + '/line/' + `${item.lineID}`) }}>Page View</button></li>
                                                            <li><button className='ang-btn' onClick={(e) => { e.preventDefault(); navigate('/dasam-granth/shabad/' + `${item.shabdID}` + '/line/' + `${item.shabdlineID}`) }}>Shabad View</button></li>
                                                            <li>
                                                                <Link className='soc-icon' onClick={() => handleShareModal('facebook')} >
                                                                    <img src={facebook} class="img-fluid donate" alt="Responsive image" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link className='soc-icon' onClick={() => handleShareModal('twitter')} >
                                                                    <img src={twitter} class="img-fluid donate" alt="Responsive image" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link className='soc-icon' onClick={() => handleShareModal('telegram')} >
                                                                    <img src={telegram} class="img-fluid donate" alt="Responsive image" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link className='soc-icon' onClick={() => handleShareModal('whatsapp')} >
                                                                    <img src={whatsapp} class="img-fluid donate" alt="Responsive image" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link className='soc-icon' onClick={() => handleShareModal('mail')} >
                                                                    <img src={mail} class="img-fluid donate" alt="Responsive image" />
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div> : null}
                                            </div>
                                        );
                                    })}
                                </div> :
                                <div className='ang-wrapper' ref={textContainerRef}>
                                    <div className={`ang-itm ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'}`} >
                                        {angData.map((item, index) => {
                                            const characters = item.punjabi.split(' ');
                                            return (
                                                isLareevar && isLareevarAssist === false ? <div style={{ fontFamily: gurmukhiFont, fontSize: `${gurmukhiSize}px`, color: gurmukhiColor }}>{item.punjabi.replace(/\s+/g, '')}</div> :
                                                    isLareevar && isLareevarAssist ?
                                                        characters.map((char, index) => (
                                                            <span className='lang-1'
                                                                key={index}
                                                                style={{ color: index % 2 === 0 ? gurmukhiColor : 'red', fontFamily: gurmukhiFont, fontSize: `${gurmukhiSize}px`, }}
                                                            >{char}
                                                            </span>
                                                        )) : isPunctuation && isPunctuationAssist === false ? <div style={{ fontFamily: gurmukhiFont, fontSize: `${gurmukhiSize}px`, color: gurmukhiColor }} >{item.punctuation}</div> :
                                                            isPunctuation && isPunctuationAssist ?
                                                                <div style={{ fontFamily: gurmukhiFont, fontSize: `${gurmukhiSize}px`, color: gurmukhiColor }} dangerouslySetInnerHTML={{ __html: processText(item.punctuation) }} ></div>
                                                                : isGurumukhi ?
                                                                    <div style={{ fontFamily: gurmukhiFont, fontSize: `${gurmukhiSize}px`, color: gurmukhiColor }} >{item.punjabi}</div> : null

                                            );
                                        })}
                                    </div>
                                    {isPhonetic ?
                                        <div className={`ang-itm ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'}`} >
                                            {angData.map((item, index) => (
                                                <div style={{ fontFamily: phoneticFont, fontSize: `${phoneticSize}px`, color: phoneticColor }} >{item.translit}</div>
                                            ))}
                                        </div> : null}
                                    {isEnglish ?
                                        <div className={`ang-itm ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'}`} >
                                            {angData.map((item, index) => (
                                                <div className='lang-3' style={{ fontSize: `${englishTranslitSize}px`, color: englishTranslitColor }} >{item.roman}</div>
                                            ))}
                                        </div> : null}
                                    {isHindi ?
                                        <div className={`ang-itm ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'}`} >
                                            {angData.map((item, index) => (
                                                <div style={{ fontFamily: hindiFont, fontSize: `${hindiSize}px`, color: hindiColor }}>{item.hindi}</div>
                                            ))}
                                        </div> : null}
                                    {isShahmukhi ?
                                        <div className={`ang-itm ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'}`} >
                                            {angData.map((item, index) => (
                                                <div className='lang-6' style={{ fontSize: `${shahmukhiSize}px`, color: shahmukhiColor }} >{item.urdu}</div>
                                            ))}
                                        </div> : null}
                                    {isSantSinghTransln ?
                                        <div className={`ang-itm ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'}`} >
                                            {angData.map((item, index) => (
                                                <div style={{ fontFamily: englishFont, fontSize: `${englishSize}px`, color: englishColor }}>{item.english}</div>
                                            ))}
                                        </div> : null}
                                    {isTeekaTranslnDG ?
                                        <div className={`ang-itm ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'}`} >
                                            {angData.map((item, index) => (
                                                <div className='lang-6' style={{ fontFamily: englishFont, fontSize: `${englishSize}px`, color: englishColor }} >{item.teeka}</div>
                                            ))}
                                        </div> : null}
                                        {isAttrib ?
                                        <div className={`ang-itm ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'}`} >
                                            {angData.map((item, index) => (
                                                <>
                                                    <div className='lang-6'  style={{ fontFamily: attribFont, fontSize: `${attribSize}px`, color: attribColor }}>{item.attributes} </div>
                                                </>
                                            ))}
                                        </div> : null}

                                </div>}
                        </div>
                    </div>
                </div>
            </section>
            <div className='container my-4' >
                <div className=' d-flex justify-content-end'>
                    <div className='go-line-wrapper' >
                        {angNo > 1 ? <button className='ang-btn-disable' onClick={(e) => { e.preventDefault(); handlePrev(); }}>Previous</button> : null}
                        <button className='ang-btn-disable' onClick={(e) => { e.preventDefault(); handleNext(); }}>Next</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DgVerse