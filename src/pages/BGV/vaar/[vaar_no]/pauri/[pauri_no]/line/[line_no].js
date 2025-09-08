//Gurbani search//
import React, { useEffect, useState, useRef } from 'react';
// import { useNavigate, useOutletContext } from "react-router";
import { Link, useLocation, useParams } from "react-router-dom";
//import imgs from './assets/img/content/ggs_01.jpg'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import '../../assets/css/ang-by-ang.css'
// import { API } from "../../config/api";
import { API } from "../../../../../../../config/api";
import { ApiHelper } from '../../../../../../../helpers/ApiHelper';
import Spinner from '../../../../../../../components/Spinner';
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';
// import athumb from '../assets/img/audio-thumb.svg';
import athumb from '../../../../../../../assets/img/audio-thumb.svg';
import awave from '../../../../../../../assets/img/wave.svg';
import Switch from 'react-switch';
import facebook from '../../../../../../../assets/img/facebook.svg';
import twitter from '../../../../../../../assets/img/twitter.svg';
import youtube from '../../../../../../../assets/img/youtube.svg';
import telegram from '../../../../../../../assets/img/telegram.svg';
import whatsapp from '../../../../../../../assets/img/whatsapp.svg';
import mail from '../../../../../../../assets/img/mail.svg';
import FontChange from '../../../../../../../components/FontChange';
import initialFormState from '../../../../../../../components/defalutPref';
import MouseOverDic from '../../../../../../../components/MouseOverDic';
import { formatTextForCopyBvgAndKs } from '../../../../../../../components/TextCopyBvgAndKs';
import { MultiSelect } from "react-multi-select-component";
import { Helmet } from "react-helmet";
import HelmetWrapper from '../../../../../../../components/CommonHelmet';
import { usePage } from '../../../../../../../components/PageContext';
import { useRouter } from 'next/router';
import Image from 'next/image';

const PauriByPauri = (props) => {
    // const location = useLocation();
    // const { vaar_no, pauri_no, line_no } = useParams();
    const params = useParams();
    const vaar_no = params?.vaar_no;
    const pauri_no = params?.pauri_no;
    const line_no = params?.line_no;
    const navigate = useRouter();
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
    const { setCurrentPage } = usePage("1");
    const [angData, setAngData] = useState([]);
    const [headingData, setHeadingData] = useState([]);
    const [pref, setPref] = useState(initialFormState);
    const [isAttrib, setIsAttrib] = useState(true);
    const [lineNo, setLineNo] = useState("");
    const [lastNo, setLastNo] = useState("");
    const [vaarNo, setVaarNo] = useState("1");
    const [isMouse, setIsMouse] = useState(false);
    const [attribStyle, setAttribStyle] = useState(true);
    const [gurmukhiFont, setGurmukhiFont] = useState('AnmolUniBani');
    const [phoneticFont, setPhoneticFont] = useState('arial');
    const [hindiFont, setHindiFont] = useState('arial');
    const [englishFont, setEnglishFont] = useState('arial');
    const [attribFont, setAttribFont] = useState('AnmolUniBani');

    const [gurmukhiSize, setGurmukhiSize] = useState('22');
    const [phoneticSize, setPhoneticSize] = useState('22');
    const [hindiSize, setHindiSize] = useState('22');
    const [englishSize, setEnglishSize] = useState('22');
    const [attribSize, setAttribSize] = useState('22');
    const [shahmukhiSize, setshahmukhiSize] = useState('18');
    const [englishTranslitSize, setEnglishTranslitSize] = useState('18');

    const [gurmukhiColor, setGurmukhiColor] = useState('rgb(51, 51, 51)');
    const [phoneticColor, setPhoneticColor] = useState('rgb(6, 3, 91)');
    const [hindiColor, setHindiColor] = useState('rgb(136, 8, 8)');
    const [englishColor, setEnglishColor] = useState('rgb(54, 103, 50)');
    const [attribColor, setAttribColor] = useState('rgb(54, 103, 50)');
    const [shahmukhiColor, setshahmukhiColor] = useState('#BF6008');
    const [englishTranslitColor, setEnglishTranslitColor] = useState('#0882BF');
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
        { label: "Teeka Roman", value: "Teeka Roman" },
        { label: "Teeka Hindi", value: "Teeka Hindi" },
    ];

    useEffect(() => {
        if (vaar_no && vaar_no !== "" && pauri_no && pauri_no !== "" && line_no && line_no !== "") {
            console.log('props', pauri_no)
            setVaarNo(vaar_no)
            setAngNo(pauri_no);
            setCurrentPage(pauri_no);
            getPauruByPauriIndex(pauri_no)
            localStorage.setItem('BgVaar', JSON.stringify(vaar_no));
        }
        else if (vaar_no && vaar_no !== "" && pauri_no && pauri_no !== "") {
            console.log('props11111111111', pauri_no)
            setVaarNo(vaar_no)
            setAngNo(pauri_no);
            setCurrentPage(pauri_no);
            getPauruByPauriIndex(pauri_no)
            localStorage.setItem('BgVaar', JSON.stringify(vaar_no));
        }
        else {
            getAngByAng("1")
            setCurrentPage("1");
            let bgVaar= 1;
            localStorage.setItem('BgVaar', JSON.stringify(bgVaar));
        }
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
            setIsTeekaTransln(preferences.translation.bgv.teeka);
            setIsTeekaHindiTransln(preferences.translation.bgv.teeka_hindi);
            setIsTeekaRomanTransln(preferences.translation.bgv.teeka_roman);
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
            if (preferences.translation.bgv.teeka === true) {
                selectedTrans.push({ label: "Teeka", value: "Teeka" })
            }
            if (preferences.translation.bgv.teeka_roman === true) {
                selectedTrans.push({ label: "Teeka Roman", value: "Teeka Roman" })
            }
            if (preferences.translation.bgv.teeka_hindi === true) {
                selectedTrans.push({ label: "Teeka Hindi", value: "Teeka Hindi" })
            }
        }
    }, [])
    const getAngByAng = async (pageNo) => {
        setLoader(true)
        console.log('Ang No', pageNo);
        await ApiHelper.get(API.getPauruByPauri + "?vaar_no=" + vaarNo + "&pauri_no=" + pageNo)
            .then((resData) => {
                setLoader(false);
                console.log('Ang', resData.data);
                setAngData(resData.data.lines);
                setHeadingData(resData.data);
                setCurrentPage(resData.data.current_pauri);
                window.scrollTo(0, 0);
            })
            .catch((err) => {
                setLoader(false);
                /* setMessage("Error !!! Please try again"); */
                console.log(err, 'err');
            });
    }
    const getPauruByPauriIndex = async (pauriNo) => {
        setLoader(true)
        await ApiHelper.get(API.getVaarPauri + vaar_no + "/pauri/" + pauriNo + "/line/" + "1")
            .then((resData) => {
                setLoader(false);
                console.log('Ang', resData.data);
                setAngData(resData.data.lines);
                setHeadingData(resData.data)
                setLastNo(resData.data.pauri_count)
            })
            .catch((err) => {
                setLoader(false);
                /* setMessage("Error !!! Please try again"); */
                console.log(err, 'err');
            });
    }
    const handleBegin = () => {
        setAngNo(1);
        setCurrentPage(1);
        getAngByAng(1);
    }
    const handleBack = (ang) => {
        let no = parseInt(ang) - 1
        setAngNo(no.toString());
        setCurrentPage(no.toString());
        getAngByAng(no.toString());
    }
    const handleNext = (ang) => {
        console.log('NEXT', ang)
        if (angNo > 1) {
            let no = parseInt(ang) + 1
            setAngNo(no.toString());
            setCurrentPage(no.toString());
            getAngByAng(no.toString());
        }
        else {
            let no = 1 + 1
            setAngNo(no.toString());
            setCurrentPage(no.toString());
            getAngByAng(no.toString());
        }

    }
    const handleLast = () => {
        setAngNo(headingData.pauri_count);
        setCurrentPage(headingData.pauri_count);
        getAngByAng(headingData.pauri_count);
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
        const isTeekaRomanTranslnSelected = selectedList.some(option => option.value === "Teeka Roman");
        const isTeekaHindiTranslnSelected = selectedList.some(option => option.value === "Teeka Hindi");

        setIsSantSinghTransln(isSantSinghTranslnSelected);
        setIsTeekaTransln(isTeekaTranslnSelected);
        setIsTeekaRomanTransln(isTeekaRomanTranslnSelected);
        setIsTeekaHindiTransln(isTeekaHindiTranslnSelected);

        setPref((prevPref) => {
            const updatedPref = {
                ...prevPref,
                translation: {
                    ...prevPref.translation,
                    english: isSantSinghTranslnSelected,
                    bgv: {
                        ...prevPref.translation.bgv,
                        teeka: isTeekaTranslnSelected,
                        teeka_hindi: isTeekaHindiTranslnSelected,
                        teeka_roman: isTeekaRomanTranslnSelected,
                    },
                },
            };
            localStorage.setItem('Preference', JSON.stringify(updatedPref));
            return updatedPref;
        });
    }
    /* const handleSelectTranslan = (event) => {
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
    else if (selectedOption === "Teeka") {
        setIsTeekaTransln(!isTeekaTransln)
        setPref((prevPref) => {            
            const updatedPref = {...prevPref,translation: {...prevPref.translation,
                bgv: {...prevPref.translation.bgv, teeka: !isTeekaTransln}}};
              localStorage.setItem('Preference', JSON.stringify(updatedPref));
            return updatedPref;
          });
    }
    else if (selectedOption === "Teeka Roman") {
        setIsTeekaRomanTransln(!isTeekaRomanTransln)
        setPref((prevPref) => {            
            const updatedPref = {...prevPref,translation: {...prevPref.translation,
                bgv: {...prevPref.translation.bgv, teeka_roman: !isTeekaRomanTransln}}};
              localStorage.setItem('Preference', JSON.stringify(updatedPref));
            return updatedPref;
          });
    }
    else{
        setIsTeekaHindiTransln(!isTeekaHindiTransln)
        setPref((prevPref) => {            
            const updatedPref = {...prevPref,translation: {...prevPref.translation,
                bgv: {...prevPref.translation.bgv, teeka_hindi: !isTeekaHindiTransln}}};
              localStorage.setItem('Preference', JSON.stringify(updatedPref));
            return updatedPref;
          });
    }
} */
    const handleReset = () => {
        setIsPhonetic(true);
        setIsEnglish(false);
        setIsHindi(false);
        setIsShahmukhi(false);
        setIsSantSinghTransln(true);
        setIsTeekaTransln(false);
        setIsTeekaRomanTransln(false);
        setIsTeekaHindiTransln(false);
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
    const handleShareModal = (platform, vaar,pauri,line,punjabi,translit) => {
        let shareLink = '';
        const title = document.title;
        switch (platform) {
            case 'facebook':
                shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl + `/shared/bhai-gurdas-vaaran/vaar/${vaar}/pauri/${pauri}/line/${line}`)}&t=${encodeURIComponent(`${punjabi} ${translit}`)}`;
                break;
            case 'twitter':
                shareLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl + `/shared/bhai-gurdas-vaaran/vaar/${vaar}/pauri/${pauri}/line/${line}`)}&text=${encodeURIComponent(`${punjabi} ${translit}`)}`;
                break;
            case 'youtube':
                // YouTube does not have a direct sharing link for a URL, this is just an example
                shareLink = `https://www.youtube.com`;
                break;
            case 'telegram':
                shareLink = `https://telegram.me/share/url?url=${encodeURIComponent(shareUrl + `/shared/bhai-gurdas-vaaran/vaar/${vaar}/pauri/${pauri}/line/${line}`)}&text=${encodeURIComponent(`${punjabi} ${translit}`)}`;
                break;
            case 'whatsapp':
                shareLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${punjabi} ${translit}` + " " + shareUrl + `/shared/bhai-gurdas-vaaran/vaar/${vaar}/pauri/${pauri}/line/${line}`)}`;
                break;
            case 'mail':
                shareLink = `mailto:?subject=${encodeURIComponent(`${punjabi} ${translit}`)}&body=${encodeURIComponent(shareUrl + `/shared/bhai-gurdas-vaaran/vaar/${vaar}/pauri/${pauri}/line/${line}`)}`;
                break;
            default:
                break;
        }

        window.open(shareLink, '_blank');

    };
    const handleCopyText = () => {
        if (textContainerRef.current) {
            const textToCopy = formatTextForCopyBvgAndKs(angData, isLareevar, isLareevarAssist, isPunctuation, isPunctuationAssist,
                isPhonetic, isGurumukhi, isHindi, isEnglish, isShahmukhi, isSantSinghTransln, isTeekaTransln, isTeekaRomanTransln, isTeekaHindiTransln, isAttrib
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
            {/* <HelmetWrapper
                title={`Vaaran Bhai Gurdas -: Vaar${headingData.current_vaar} - Pauri ${headingData.current_pauri} - ${headingData.pauri_info && headingData.pauri_info.length > 0
                    ? headingData.pauri_info[0].pauri_name_roman
                    : 'Unknown Pauri'
                } -: searchgurbani.com`}
                description={`Vaaran Bhai Gurdas:- Vaar${headingData.current_vaar} - Pauri ${headingData.current_pauri}-${headingData.pauri_info && headingData.pauri_info.length > 0
                            ? headingData.pauri_info[0].pauri_name_roman 
                            : 'Unknown Pauri'
                        } ${headingData.pauri_info && headingData.pauri_info.length > 0
                            ? headingData.pauri_info[0].pauri_name_punjabi 
                            : 'Unknown Pauri'
                        }:-searchgurbani.com`}
                keywords="Gurbani Kirtan,Amrit Keertan,Bhai Gurdas,vaar, Gurbani, Shabad Keertan,granth, Vaaran, VaranInvocation"
                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                url={window.location.href}
            /> */}
            {loader && <Spinner />}
            <section className='inner-actions p-4' >
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 p-0'>
                            <div className='center-align'>
                                {headingData.pauri_info && headingData.pauri_info[0] && (
                                    <>
                                        <h2 className='text-dark'>{headingData.pauri_info[0].pauri_name_roman}</h2>
                                        <h3 className='text-dark'>{headingData.pauri_info[0].pauri_name_punjabi}</h3>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className='col-lg-12 p-0'>
                            <div className='in-act-wrapper'>
                                <h1 className='inner-heading' >Bhai Gurdas Vaaran</h1>
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
                                    <button className='action-btn-main' onClick={() => window.open(`/bhai-gurdas-vaaran/vaar/${vaarNo}/pauri/${angNo}/print-view`, '_blank', 'height=700,width=700')}><i class="bi bi-printer"></i></button>
                                    <button className='action-btn-main' onClick={isSplitView ? handleCopyTextSplit : handleCopyText}><i class="bi bi-copy"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-12 d-flex-justify-content-end ang-ang'>
                            <div className='d-flex lab-wrap'>
                                <div className='go-to-ang position-relative'>
                                    <div className='form-group'>
                                        <input type='text' placeholder='go to pauri' className='form-control'
                                            onChange={(e) => {setAngNo(e.target.value); setCurrentPage(e.target.value)}} value={angNo}></input>
                                        <button className='ang-btn' onClick={(e) => { e.preventDefault(); getAngByAng(angNo); }}>Go</button>
                                    </div>

                                </div>
                                <div className='go-to-ang position-relative flex-1'>
                                    {angNo > 1 &&
                                        <>
                                            <button className='ang-btn' style={{ background: 'var(--current-color, var(--color-1))', color: '#fff' }} onClick={(e) => { e.preventDefault(); handleBegin() }}>Begin</button>
                                            <button className='ang-btn' style={{ background: 'var(--current-color, var(--color-1))', color: '#fff' }} onClick={(e) => { e.preventDefault(); handleBack(angNo); }}>Back</button>
                                        </>
                                    }

                                    {angNo < headingData.pauri_count &&
                                        <>
                                            <button className='ang-btn' style={{ background: 'var(--current-color, var(--color-1))', color: '#fff' }} onClick={(e) => { e.preventDefault(); handleNext(angNo) }}>Next</button>
                                            <button className='ang-btn' style={{ background: 'var(--current-color, var(--color-1))', color: '#fff' }} onClick={(e) => { e.preventDefault(); handleLast(); }}>Last</button>
                                        </>}
                                </div>
                            </div>
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
                                <button className='ang-btn-disable' onClick={(e) => { e.preventDefault(); navigate.push(`/BGV/vaar-index/${"1"}`) }}>Vaar Index</button>

                            </div>
                        </div>
                    </div>
                </div>
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
                                        <option>Teeka Roman</option>
                                        <option>Teeka Hindi</option>
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
                            <h1>Displaying Vaar {headingData.current_vaar}, Pauri {headingData.current_pauri} of {headingData.pauri_count}</h1>
                            {isSplitView === false ?
                                <div className='ang-wrapper' ref={textContainerRef}>
                                    {angData.map((item, index) => {
                                        const characters = item.punjabi.split(' ');
                                        console.log('COLOR', phoneticFont)
                                        return (
                                            <div className={`ang-itm ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'}`} >
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
                                                                : isMouse ? < MouseOverDic content={item.punjabi} keyWord={headingData?.keywords}
                                                                    mouse={isMouse} punctation={isPunctuation} lareevar={isLareevar}
                                                                    gurmukhiFont={gurmukhiFont} gurmukhiColor={gurmukhiColor} gurmukhiSize={gurmukhiSize} /> :
                                                                    isGurumukhi ?
                                                                        <div style={{ fontFamily: gurmukhiFont, fontSize: `${gurmukhiSize}px`, color: gurmukhiColor }} >{item.punjabi}</div> : null}
                                                {isPhonetic ? <div style={{ fontFamily: phoneticFont, fontSize: `${phoneticSize}px`, color: phoneticColor }} >{item.translit}</div> : null}
                                                {isEnglish ? <div style={{ fontSize: `${englishTranslitSize}px`, color: englishTranslitColor }} >{item.roman}</div> : null}
                                                {isHindi ? <div style={{ fontFamily: hindiFont, fontSize: `${hindiSize}px`, color: hindiColor }}>{item.hindi}</div> : null}
                                                {isShahmukhi ? <div style={{ fontSize: `${shahmukhiSize}px`, color: shahmukhiColor }}>{item.urdu}</div> : null}
                                                {isSantSinghTransln ? <div style={{ fontFamily: englishFont, fontSize: `${englishSize}px`, color: englishColor }}>{item.english}</div> : null}
                                                {isTeekaTransln ? <div className='mt-4' style={{ fontFamily: englishFont, fontSize: `${englishSize}px`, color: englishColor }}>{item.teeka}</div> : null}
                                                {isTeekaRomanTransln ? <div className='mt-4' style={{ fontFamily: englishFont, fontSize: `${englishSize}px`, color: englishColor }}>{item.teeka_roman}</div> : null}
                                                {isTeekaHindiTransln ? <div className='mt-4' style={{ fontFamily: englishFont, fontSize: `${englishSize}px`, color: englishColor }} >{item.teeka_hindi}</div> : null}
                                                {isAttrib ? <div style={{ fontFamily: attribFont, fontSize: `${attribSize}px`, color: attribColor }}>{item.attributes} </div> : null}
                                                {isSocialShare ?
<>
                                                    <div className='socia-share' style={{ marginLeft: '600px' }}>
                                                        <ul>
                                                            <li>
                                                                <a className='soc-icon' onClick={() => handleShareModal('facebook' , item.vaarID, item.paurino, item.pauri_lineno, item.punjabi,item.translit)} >
                                                                    <Image src={facebook} class="img-fluid donate" alt="Responsive image" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className='soc-icon' onClick={() => handleShareModal('twitter', item.vaarID, item.paurino, item.pauri_lineno, item.punjabi,item.translit)} >
                                                                    <Image src={twitter} class="img-fluid donate" alt="Responsive image" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className='soc-icon' onClick={() => handleShareModal('telegram', item.vaarID, item.paurino, item.pauri_lineno, item.punjabi,item.translit)} >
                                                                    <Image src={telegram} class="img-fluid donate" alt="Responsive image" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className='soc-icon' onClick={() => handleShareModal('whatsapp', item.vaarID, item.paurino, item.pauri_lineno, item.punjabi,item.translit)} >
                                                                    <Image src={whatsapp} class="img-fluid donate" alt="Responsive image" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className='soc-icon' onClick={() => handleShareModal('mail', item.vaarID, item.paurino, item.pauri_lineno, item.punjabi,item.translit)} >
                                                                    <Image src={mail} class="img-fluid donate" alt="Responsive image" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    {/* <div className='socia-share' style={{ marginLeft: '600px' }}>
                                                        <ul>
                                                            <li>
                                                                <Link className='soc-icon' onClick={() => handleShareModal('facebook')} >
                                                                    <Image src={facebook} class="img-fluid donate" alt="Responsive image" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link className='soc-icon' onClick={() => handleShareModal('twitter')} >
                                                                    <Image src={twitter} class="img-fluid donate" alt="Responsive image" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link className='soc-icon' onClick={() => handleShareModal('telegram')} >
                                                                    <Image src={telegram} class="img-fluid donate" alt="Responsive image" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link className='soc-icon' onClick={() => handleShareModal('whatsapp')} >
                                                                    <Image src={whatsapp} class="img-fluid donate" alt="Responsive image" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link className='soc-icon' onClick={() => handleShareModal('mail')} >
                                                                    <Image src={mail} class="img-fluid donate" alt="Responsive image" />
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div> */}</>
                                                     : null}
                                            </div>
                                        );
                                    })}
                                </div> :
                                <div className='ang-wrapper' ref={textContainerRef}>
                                    <div className={`ang-itm ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'}`} >
                                        {angData.map((item, index) => {
                                            const characters = item.punjabi.split(' ');
                                            return (
                                                isLareevar && isLareevarAssist === false ? <div style={{ fontFamily: gurmukhiFont, fontSize: `${gurmukhiSize}px`, color: gurmukhiColor }} >{item.punjabi.replace(/\s+/g, '')}</div> :
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
                                                               : isMouse ? < MouseOverDic content={item.punjabi} keyWord={headingData?.keywords}
                                                                    mouse={isMouse} punctation={isPunctuation} lareevar={isLareevar}
                                                                    gurmukhiFont={gurmukhiFont} gurmukhiColor={gurmukhiColor} gurmukhiSize={gurmukhiSize} /> :
                                                                    isGurumukhi ?
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
                                                <div style={{ fontSize: `${englishTranslitSize}px`, color: englishTranslitColor }} >{item.roman}</div    >
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
                                                <div style={{ fontSize: `${shahmukhiSize}px`, color: shahmukhiColor }}>{item.urdu}</div>
                                            ))}
                                        </div> : null}
                                    {isSantSinghTransln ?
                                        <div className={`ang-itm ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'}`} >
                                            {angData.map((item, index) => (
                                                <div style={{ fontFamily: englishFont, fontSize: `${englishSize}px`, color: englishColor }}>{item.english}</div>
                                            ))}
                                        </div> : null}
                                    {isTeekaTransln ?
                                        <div className={`ang-itm ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'}`} >
                                            {angData.map((item, index) => (
                                                <div style={{ fontFamily: englishFont, fontSize: `${englishSize}px`, color: englishColor }} >{item.teeka}</div>
                                            ))}
                                        </div> : null}
                                    {isTeekaRomanTransln ?
                                        <div className={`ang-itm ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'}`} >
                                            {angData.map((item, index) => (
                                                <div style={{ fontFamily: englishFont, fontSize: `${englishSize}px`, color: englishColor }}>{item.teeka_roman}</div>
                                            ))}
                                        </div> : null}
                                    {isTeekaHindiTransln ?
                                        <div className={`ang-itm ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'}`} >
                                            {angData.map((item, index) => (
                                                <div style={{ fontFamily: englishFont, fontSize: `${englishSize}px`, color: englishColor }} >{item.teeka_hindi}</div>
                                            ))}
                                        </div> : null}
                                    {isAttrib ?
                                        <div className={`ang-itm ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'}`} >
                                            {angData.map((item, index) => (
                                                <>
                                                    <div style={{ fontFamily: attribFont, fontSize: `${attribSize}px`, color: attribColor }}>{item.attributes} </div>
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
                        <div className='go-to-ang position-relative'>
                            <div className='form-group'>
                                <input type='text' placeholder='go to ang' className='form-control'
                                    onChange={(e) => {setAngNo(e.target.value); setCurrentPage(e.target.value)}} value={angNo}></input>
                                <button className='ang-btn' onClick={(e) => { e.preventDefault(); getAngByAng(angNo); }}>Go</button>
                            </div>
                        </div>
                        <div className='navigation-btn-audio'>

                            {angNo > 1 &&
                                <>
                                    <button className='ang-btn' style={{ background: 'var(--current-color, var(--color-1))', color: '#fff' }} onClick={(e) => { e.preventDefault(); handleBegin() }}>Begin</button>
                                    <button className='ang-btn' style={{ background: 'var(--current-color, var(--color-1))', color: '#fff' }} onClick={(e) => { e.preventDefault(); handleBack(angNo); }}>Back</button>
                                </>
                            }

                            {angNo < headingData.pauri_count &&
                                <>
                                    <button className='ang-btn' style={{ background: 'var(--current-color, var(--color-1))', color: '#fff' }} onClick={(e) => { e.preventDefault(); handleNext(angNo) }}>Next</button>
                                    <button className='ang-btn' style={{ background: 'var(--current-color, var(--color-1))', color: '#fff' }} onClick={(e) => { e.preventDefault(); handleLast(); }}>Last</button>
                                </>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PauriByPauri