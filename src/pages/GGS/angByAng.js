"use client";
import 'react-h5-audio-player/lib/styles.css';
// import '../../assets/css/ang-by-ang.css'
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useOutletContext } from "react-router";
// import { Link, useLocation } from "react-router-dom";
//import imgs from './assets/img/content/ggs_01.jpg'
import AudioPlayer from 'react-h5-audio-player';
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
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip'
import MouseOverDic from '../../components/MouseOverDic';
import { formatTextForCopy } from '../../components/textFormatter';
import ShareLink from '../../components/ShareLink';
import { MultiSelect } from "react-multi-select-component";
import { Helmet } from "react-helmet";
import HelmetWrapper from '../../components/CommonHelmet';
import { usePage } from '../../components/PageContext';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import Image from 'next/image';

const AngByAng = (props) => {
    // const location = useLocation();
    // const data = location.state;
    const router = useRouter();
    const [data, setData] = useState(null);

    useEffect(() => {
        if (router.query.data) {
            try {
                setData(JSON.parse(router.query.data));
            } catch {
                setData(null);
            }
        }
    }, [router.query.data]);
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
    // const [angNo, setAngNo] = useState("1");
    const [angNo, setAngNo] = useState(() => {
        // Retrieve the stored page from cookies or default to 1
        return Number(Cookies.get('currentPages')) || 1;
    });
    const { setCurrentPage } = usePage("1");
    const [angData, setAngData] = useState([]);
    const [pref, setPref] = useState(initialFormState);
    const [allData, setAllData] = useState([]);
    const [audioList, setAudioList] = useState("");
    const [isAttrib, setIsAttrib] = useState(true);
    const [isAudio1, setIsAudio1] = useState(false);
    const [isAudio2, setIsAudio2] = useState(false);
    const [isAudio3, setIsAudio3] = useState(false);
    const [isAudio4, setIsAudio4] = useState(true);
    const [isMouse, setIsMouse] = useState(false);
    const [lineNo, setLineNo] = useState("");
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
    const [step, setStep] = useState(1);
    const options = [
        { label: "Phonetic", value: "Phonetic" },
        { label: "English", value: "English" },
        { label: "Hindi", value: "Hindi" },
        { label: "Shahmukhi", value: "Shahmukhi" },
    ];
    /* const optionsTrans = [
        { label: "Sant Singh Khalsa", value: "Sant Singh Khalsa", group: "English" },
        { label: "Manmohan Singh", value: "Manmohan Singh", group: "English" },
        { label: "Punjabi", value: "Punjabi" },
        { label: "Guru Granth Darpan", value: "Guru Granth Darpan", group: "Teeka" },
        { label: "Faridkot Teeka", value: "Faridkot Teeka", group: "Teeka" },
        { label: "Faridkot Teeka Hindi", value: "Faridkot Teeka Hindi", group: "Teeka" },
        { label: "SGPC Shabadrth", value: "SGPC Shabadrth", group: "Teeka" }
    ]; */
    const optionsTrans = [
        { label: "English - Sant Singh Khalsa", value: "Sant Singh Khalsa" },
        { label: "English - Manmohan Singh", value: "Manmohan Singh" },
        { label: "Punjabi", value: "Punjabi" },
        { label: "Teeka - Guru Granth Darpan", value: "Guru Granth Darpan" },
        { label: "Teeka - Faridkot Teeka", value: "Faridkot Teeka" },
        { label: "Teeka - Faridkot Teeka Hindi", value: "Faridkot Teeka Hindi" },
        { label: "Teeka - SGPC Shabadrth", value: "SGPC Shabadrth" }
    ];

    console.log('TEST', props)

    useEffect(() => {

        if (props.pageNo !== undefined) {
            console.log('props', props.pageNo)
            setAngNo(props.pageNo);
            setCurrentPage(props.pageNo);
            setLineNo(props.lineNo)
            getAngByAng(props.pageNo)
            getAngByAngAudio("gms", props.pageNo)
        }
        else {
            console.log('TEST')
            setCurrentPage('1');
            getAngByAng(angNo)
            getAngByAngAudio("gms", angNo)
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
            setIsAudio1(preferences.ggs_audio.audio1);
            setIsAudio2(preferences.ggs_audio.audio2);
            setIsAudio3(preferences.ggs_audio.audio3);
            setIsAudio4(preferences.ggs_audio.audio4);
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
                selectedTrans.push({ label: 'English - Sant Singh Khalsa', value: 'Sant Singh Khalsa' })
            }
            if (preferences.translation.ggs.eng_mms === true) {
                selectedTrans.push({ label: 'English - Manmohan Singh', value: 'Manmohan Singh' })
            }
            if (preferences.translation.ggs.punj_mms === true) {
                selectedTrans.push({ label: 'Punjabi', value: 'Punjabi' })
            }
            if (preferences.translation.ggs.ggd === true) {
                selectedTrans.push({ label: 'Teeka - Guru Granth Darpan', value: 'Guru Granth Darpan' })
            }
            if (preferences.translation.ggs.ft === true) {
                selectedTrans.push({ label: 'Teeka - Faridkot Teeka', value: 'Faridkot Teeka' })
            }
            if (preferences.translation.ggs.fth === true) {
                selectedTrans.push({ label: 'Teeka - Faridkot Teeka Hindi', value: 'Faridkot Teeka Hindi' })
            }
            if (preferences.translation.ggs.ss === true) {
                selectedTrans.push({ label: 'Teeka - SGPC Shabadrth', value: 'SGPC Shabadrth' })
            }

        }
    }, [])
    useEffect(() => {
        // Save page number in cookies
        Cookies.set('currentPages', angNo, { expires: 365 }); // Expires in 7 days
    }, [angNo]);
    const getAngByAng = async (pageNo) => {
        setLoader(true)
        console.log('AngNo', pageNo);
        await ApiHelper.get(API.getAngByAng + "?line_no=" + lineNo + "&page=" + pageNo)
            .then((resData) => {
                setLoader(false);
                console.log('Ang', resData.data.lines);
                setAngData(resData.data.lines)
                setAllData(resData.data)
                setCurrentPage(resData.data.current_page);
                window.scrollTo(0, 0);
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
        setCurrentPage(1);
        getAngByAng(1);
        getAngByAngAudio("gms", 1);
        setStep(1)
    }
    const handleBack = (ang) => {
        let no = parseInt(ang) - 1
        setAngNo(no.toString());
        setCurrentPage(no.toString());
        getAngByAng(no.toString());
        getAngByAngAudio("gms", no.toString())
        setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : 1));
    }
    const handleNext = (ang) => {
        console.log('NEXT', ang)
        setStep((prevStep) => prevStep + 1);
        if (angNo > 1) {
            let no = parseInt(ang) + 1
            setAngNo(no.toString());
            setCurrentPage(no.toString());
            getAngByAng(no.toString());
            getAngByAngAudio("gms", no.toString())
        }
        else {
            let no = 1 + 1
            setAngNo(no.toString());
            setCurrentPage(no.toString());
            getAngByAng(no.toString());
            getAngByAngAudio("gms", no.toString())
        }

    }
    const handleLast = () => {
        setAngNo(1430);
        setCurrentPage(1430);
        getAngByAng(1430);
        getAngByAngAudio("gms", 1430)
        setStep(1430);
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [step]);
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
    const handleClickAudio = (paths) => {
        getAngByAngAudio(paths, angNo)
    };
    const handleSelectChange1 = (selectedList) => {
        setSelected(selectedList);
        //const selectedOption = event.target.value;
        console.log('Selected Option:', selectedList)
        selectedList.forEach(option => {
            switch (option.value) {
                case "Phonetic":
                    setIsPhonetic(!isPhonetic);
                    setPref((prevPref) => {
                        const updatedPref = { ...prevPref, transliteration: { ...prevPref.transliteration, roman: !isPhonetic, }, };
                        localStorage.setItem('Preference', JSON.stringify(updatedPref));
                        return updatedPref;
                    });
                    break;
                case "English":
                    setIsEnglish(!isEnglish);
                    setPref((prevPref) => {
                        const updatedPref = { ...prevPref, transliteration: { ...prevPref.transliteration, english: !isEnglish, }, };
                        localStorage.setItem('Preference', JSON.stringify(updatedPref));
                        return updatedPref;
                    });
                    break;
                case "Hindi":
                    setIsHindi(!isHindi);
                    setPref((prevPref) => {
                        const updatedPref = { ...prevPref, transliteration: { ...prevPref.transliteration, hindi: !isHindi, }, };
                        localStorage.setItem('Preference', JSON.stringify(updatedPref));
                        return updatedPref;
                    });
                    break;
                case "Shahmukhi":
                    setIsShahmukhi(!isShahmukhi);
                    setPref((prevPref) => {
                        const updatedPref = { ...prevPref, transliteration: { ...prevPref.transliteration, shahmukhi: !isShahmukhi, }, };
                        localStorage.setItem('Preference', JSON.stringify(updatedPref));
                        return updatedPref;
                    });
                    break;
                default:
                    break;
            }
        });
        /* if (selectedOption === "Phonetic") {
            setIsPhonetic(!isPhonetic)
            setPref((prevPref) => {
                const updatedPref = { ...prevPref, transliteration: { ...prevPref.transliteration, roman: !isPhonetic, }, };
                localStorage.setItem('Preference', JSON.stringify(updatedPref));
                return updatedPref;
            });
        }
        else if (selectedOption === "English") {
            setIsEnglish(!isEnglish)
            setPref((prevPref) => {
                const updatedPref = { ...prevPref, transliteration: { ...prevPref.transliteration, english: !isEnglish, }, };
                localStorage.setItem('Preference', JSON.stringify(updatedPref));
                return updatedPref;
            });
        }
        else if (selectedOption === "Hindi") {
            setIsHindi(!isHindi)
            setPref((prevPref) => {
                const updatedPref = { ...prevPref, transliteration: { ...prevPref.transliteration, hindi: !isHindi, }, };
                localStorage.setItem('Preference', JSON.stringify(updatedPref));
                return updatedPref;
            });
        }
        else {
            setIsShahmukhi(!isShahmukhi)
            setPref((prevPref) => {
                const updatedPref = { ...prevPref, transliteration: { ...prevPref.transliteration, shahmukhi: !isShahmukhi, }, };
                localStorage.setItem('Preference', JSON.stringify(updatedPref));
                return updatedPref;
            });
        } */
    }
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

    const handleSelectTranslan1 = (event) => {
        const selectedOption = event.target.value;
        console.log('Selected Option:', selectedOption)
        if (selectedOption === "Sant Singh Khalsa") {
            setIsSantSinghTransln(!isSantSinghTransln)
            setPref((prevPref) => {
                const updatedPref = { ...prevPref, translation: { ...prevPref.translation, english: !isSantSinghTransln, }, };
                localStorage.setItem('Preference', JSON.stringify(updatedPref));
                return updatedPref;
            });
        }
        else if (selectedOption === "Manmohan Singh") {
            setIsManmohanTransln(!isManmohanTransln)
            setPref((prevPref) => {
                const updatedPref = {
                    ...prevPref, translation: {
                        ...prevPref.translation,
                        ggs: { ...prevPref.translation.ggs, eng_mms: !isManmohanTransln }
                    }
                };
                localStorage.setItem('Preference', JSON.stringify(updatedPref));
                return updatedPref;
            });
        }
        else if (selectedOption === "Punjabi") {
            setIsPunjabiTransln(!isPunjabiTransln)
            setPref((prevPref) => {
                const updatedPref = {
                    ...prevPref, translation: {
                        ...prevPref.translation,
                        ggs: { ...prevPref.translation.ggs, punj_mms: !isPunjabiTransln }
                    }
                };
                localStorage.setItem('Preference', JSON.stringify(updatedPref));
                return updatedPref;
            });
        }
        else if (selectedOption === "Guru Granth Darpan") {
            setIsGuruGranthTeeka(!isGuruGranthTeeka)
            setPref((prevPref) => {
                const updatedPref = {
                    ...prevPref, translation: {
                        ...prevPref.translation,
                        ggs: { ...prevPref.translation.ggs, ggd: !isGuruGranthTeeka }
                    }
                };
                localStorage.setItem('Preference', JSON.stringify(updatedPref));
                return updatedPref;
            });
        }
        else if (selectedOption === "Faridkot Teeka") {
            setIsFaridkotTeeka(!isFaridkotTeeka)
            setPref((prevPref) => {
                const updatedPref = {
                    ...prevPref, translation: {
                        ...prevPref.translation,
                        ggs: { ...prevPref.translation.ggs, ft: !isFaridkotTeeka }
                    }
                };
                localStorage.setItem('Preference', JSON.stringify(updatedPref));
                return updatedPref;
            });
        }
        else if (selectedOption === "Faridkot Teeka Hindi") {
            setIsFaridkotaTeekaHindi(!isFaridkotaTeekaHindi)
            setPref((prevPref) => {
                const updatedPref = {
                    ...prevPref, translation: {
                        ...prevPref.translation,
                        ggs: { ...prevPref.translation.ggs, fth: !isFaridkotaTeekaHindi }
                    }
                };
                localStorage.setItem('Preference', JSON.stringify(updatedPref));
                return updatedPref;
            });
        }
        else {
            setIsSgpcTeeka(!isSgpcTeeka)
            setPref((prevPref) => {
                const updatedPref = {
                    ...prevPref, translation: {
                        ...prevPref.translation,
                        ggs: { ...prevPref.translation.ggs, ss: !isSgpcTeeka }
                    }
                };
                localStorage.setItem('Preference', JSON.stringify(updatedPref));
                return updatedPref;
            });
        }
    }

    const handleSelectTranslan = (selectedList) => {
        setSelectedTrans(selectedList);
        console.log('hjgyufyu', selectedList)
        const isSelected = (value) => selectedList.some(option => option.value === value);

        setIsSantSinghTransln(isSelected("Sant Singh Khalsa"));
        setIsManmohanTransln(isSelected("Manmohan Singh"));
        setIsPunjabiTransln(isSelected("Punjabi"));
        setIsGuruGranthTeeka(isSelected("Guru Granth Darpan"));
        setIsFaridkotTeeka(isSelected("Faridkot Teeka"));
        setIsFaridkotaTeekaHindi(isSelected("Faridkot Teeka Hindi"));
        setIsSgpcTeeka(isSelected("SGPC Shabadrth"));

        setPref((prevPref) => {
            const updatedPref = {
                ...prevPref,
                translation: {
                    ...prevPref.translation,
                    english: isSelected("Sant Singh Khalsa"),
                    ggs: {
                        ...prevPref.translation.ggs,
                        eng_mms: isSelected("Manmohan Singh"),
                        punj_mms: isSelected("Punjabi"),
                        ggd: isSelected("Guru Granth Darpan"),
                        ft: isSelected("Faridkot Teeka"),
                        fth: isSelected("Faridkot Teeka Hindi"),
                        ss: isSelected("SGPC Shabadrth"),
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
        setIsSplitView(false);
        setSelected([{ label: 'Phonetic', value: 'Phonetic' }]);
        setSelectedTrans([{ label: 'English - Sant Singh Khalsa', value: 'Sant Singh Khalsa' }])
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

    /*  const handleShareModal = (platform) => {
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

   }; */
    const handleShareModal = (platform, item) => {
        const shareUrl = window.location.origin;
        // const locationPathname = location.pathname;
        const locationPathname = router.asPath;
        const title = item.punjabi || "Default Title"; // You can use a specific title from the item or a default one

        let shareLink = '';

        switch (platform) {
            case 'facebook':
                shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl + locationPathname)}&t=${encodeURIComponent(title)}`;
                break;
            case 'twitter':
                shareLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl + locationPathname)}&text=${encodeURIComponent(title)}`;
                break;
            case 'youtube':
                shareLink = `https://www.youtube.com`;
                break;
            case 'telegram':
                shareLink = `https://telegram.me/share/url?url=${encodeURIComponent(shareUrl + locationPathname)}&text=${encodeURIComponent(title)}`;
                break;
            case 'whatsapp':
                shareLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(title + " " + shareUrl + locationPathname)}`;
                break;
            case 'mail':
                shareLink = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(shareUrl + locationPathname)}`;
                break;
            default:
                break;
        }

        window.open(shareLink, '_blank');
    };

    /*  const handlePunj = (content) => {       
         let lines = content.split('\n');
         //console.log('@@@@@',lines)
     let newLines = [];
     let keywords = allData.keywords;
    // console.log('@@@@@',keywords)
     let mouseover = isMouse;
 
     for (let i = 0; i < lines.length; i++) {
       let words = lines[i].split(' ');
    
 
       let newWords = [];
 
       for (let j = 0; j < words.length; j++) {
         let word = words[j];
         console.log('@@@@@!22222222222',keywords[word])
         let nextWord = words[j + 1];
         let len = word.length;
         let lastChar = word[len - 1];
 
         if (nextWord === ',') {
           newWords.push(`<small>${word}</small>`);
         } else if (nextWord === ';') {
           newWords.push(`<strong>${word}</strong>`);
         } else if (lastChar === ',') {
           newWords.push(`<small>${word.slice(0, -1)}</small><i>,</i>`);
         } else if (lastChar === ';') {
           newWords.push(`<strong>${word.slice(0, -1)}</strong><i>;</i>`);
         } else if (!isPunctuation && !isLareevar && keywords[word] && mouseover) {
             newWords.push(`<span className="pointer"><a href="/sggs-kosh/do-search/${word}" title="${keywords[word]}">${word}</a></span>`);
            
         } else {
           newWords.push(`<span>${word}</span>`);
         }
       }
 
       newLines.push(newWords.join(' '));
     }
 
     return newLines.join('\n').trim();
     } 
     const createMarkup = (punj) => {
         return { __html: handlePunj(punj) };
       }; */
    const handleCopyText = () => {
        if (textContainerRef.current) {
            console.log('scriptre:', 'ggs');
            const textToCopy = formatTextForCopy(angData, isLareevar, isLareevarAssist, isPunctuation, isPunctuationAssist,
                isPhonetic, isGurumukhi, isHindi, isEnglish, isShahmukhi, isSantSinghTransln, isManmohanTransln, isPunjabiTransln, isGuruGranthTeeka, isFaridkotTeeka,
                isFaridkotaTeekaHindi, isSgpcTeeka, isAttrib);
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
                title={`Sri Guru Granth Sahib Ji -: Ang : ${angNo} -: ਸ਼੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ -: searchgurbani.com`}
                description={`Explore,Share and Listen to Audio of Ang  -${angNo} - of Sri Guru Granth Sahib ji at searchgurbani.com .`}
                keywords="Gurmat Sangeet, Gurubani ,Kirtan,Amrit,Gurbani, Shabad, Keertan, English ,translation ,Phonetic, Transliteration, Hindi ,Sikh scriptures,sikhism, sikh, mahan kosh,hukamnama, dasam granth,granth,gurdas,guru,raag, vaaran,varan,kabit,nand lal,ang,gurdwara,hukumnama,bhagats;"
                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                url={window.location.href}
            /> */}
            {loader && <Spinner />}
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
                                    <button className='action-btn-main' onClick={() => window.open(`/guru-granth-sahib/ang/${angNo}/print-view`, '_blank', 'height=700,width=700')} ><i className="bi bi-printer"></i></button>
                                    <button className='action-btn-main' onClick={isSplitView ? handleCopyTextSplit : handleCopyText}><i className="bi bi-copy"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-12 d-flex-justify-content-end ang-ang  mt-3'>

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
                                <button className={`ang-btn-enable ${!displaySectn && 'ang-btn-disable'} `} onClick={(e) => { e.preventDefault(); displaySectn === false ? setDisplaySectn(true) : setDisplaySectn(false); }}>Display</button>
                                <button className={`ang-btn-enable ${!fontSectn && 'ang-btn-disable'} `} onClick={(e) => { e.preventDefault(); fontSectn === false ? setFontSectn(true) : setFontSectn(false) }}>Font</button>

                            </div>

                            <div className='go-line-wrapper' >
                                <div className='go-to-ang position-relative'>
                                    <div className='form-group'>
                                        <input type='text' placeholder='go to ang' className='form-control'
                                            onChange={(e) => { e.preventDefault(); setAngNo(e.target.value); setCurrentPage(e.target.value); }} value={angNo}></input>
                                        <button className='ang-btn' onClick={(e) => { e.preventDefault(); setStep(angNo); getAngByAng(angNo); getAngByAngAudio("gms", angNo); window.scrollTo(0, 0); }}>Go</button>
                                    </div>
                                </div>
                                <div className='navigation-btn-audio'>

                                    {angNo > 1 &&
                                        <>
                                            <button className='ang-btn' style={{ background: 'var(--current-color, var(--color-1))', color: '#fff' }} onClick={(e) => { e.preventDefault(); handleBegin() }}>Begin</button>
                                            <button className='ang-btn' style={{ background: 'var(--current-color, var(--color-1))', color: '#fff' }} onClick={(e) => { e.preventDefault(); handleBack(angNo); }}>Back</button>
                                        </>
                                    }
                                    {allData.current_page < 1430 &&
                                        <>
                                            <button className='ang-btn' style={{ background: 'var(--current-color, var(--color-1))', color: '#fff' }} onClick={(e) => { e.preventDefault(); handleNext(angNo) }}>Next</button>
                                            <button className='ang-btn' style={{ background: 'var(--current-color, var(--color-1))', color: '#fff' }} onClick={(e) => { e.preventDefault(); handleLast(); }}>Last</button>
                                        </>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='audio-p pt-2' >
                <div className='container-lg'>
                    <div className='d-flex flex-column'>
                        <div className='audio-player-m'>
                            <Image src={athumb} className="img-fluid aud-thumb" alt="Responsive image" />

                            <Image src={awave} className="img-fluid wave" alt="Responsive image" />
                        </div>
                        <AudioPlayer
                            autoPlayAfterSrcChange={false}
                            autoPlay={false}
                            src={"https://backend.searchgurbani.com/" + audioList}
                        />
                        <div className='pagination'>
                            <div className='pg d-flex'>
                                <a className={isAudio1 ? 'page-itm active' : 'page-itm'} onClick={(e) => {
                                    e.preventDefault(); handleClickAudio('sat');
                                    setIsAudio1(true); setIsAudio2(false); setIsAudio3(false); setIsAudio4(false);
                                }}>1</a>
                                <a className={isAudio2 ? 'page-itm active' : 'page-itm'} onClick={(e) => {
                                    e.preventDefault(); handleClickAudio('jas');
                                    setIsAudio1(false); setIsAudio2(true); setIsAudio3(false); setIsAudio4(false);
                                }}>2</a>
                                <a className={isAudio3 ? 'page-itm active' : 'page-itm'} onClick={(e) => {
                                    e.preventDefault(); handleClickAudio('jag');
                                    setIsAudio1(false); setIsAudio2(false); setIsAudio3(true); setIsAudio4(false);
                                }}>3</a>
                                <a className={isAudio4 ? 'page-itm active' : 'page-itm'} onClick={(e) => {
                                    e.preventDefault(); handleClickAudio('gms');
                                    setIsAudio1(false); setIsAudio2(false); setIsAudio3(false); setIsAudio4(true);
                                }}>4</a>
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
                                    {/* <Form.Select className='w-11' aria-label="Default select example" onChange={handleSelectTranslan}>
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
                            <h1>Displaying Ang {allData.current_page} of 1430</h1>
                            {isSplitView === false ?
                                <div className='ang-wrapper' ref={textContainerRef}>
                                    {angData.map((item, index) => {
                                        const characters = item.punjabi.split(' ');
                                        //const meaning = handlePunj(item.punjabi);
                                        console.log('COLOR', phoneticFont)
                                        return (
                                            <div key={index} className={`ang-itm ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'} ${parseInt(props.lineNo) === parseInt(item.lineno) && 'ang-itm-shabad'}`} >
                                                <div className='font-size-issue'>
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
                                                                    : isMouse ? < MouseOverDic content={item.punjabi} keyWord={allData?.keywords}
                                                                        mouse={isMouse} punctation={isPunctuation} lareevar={isLareevar}
                                                                        gurmukhiFont={gurmukhiFont} gurmukhiColor={gurmukhiColor} gurmukhiSize={gurmukhiSize} /> :
                                                                        isGurumukhi ?
                                                                            <div style={{ fontFamily: gurmukhiFont, fontSize: `${gurmukhiSize}px`, color: gurmukhiColor }} >{item.punjabi}</div> : null}




                                                    {isPhonetic ? <div style={{ fontFamily: phoneticFont, fontSize: `${phoneticSize}px`, color: phoneticColor }} >{item.translit}</div> : null}
                                                    {isEnglish ? <div style={{ fontSize: `${englishTranslitSize}px`, color: englishTranslitColor }} className='lang-3' >{item.roman}</div> : null}
                                                    {isHindi ? <div style={{ fontFamily: hindiFont, fontSize: `${hindiSize}px`, color: hindiColor }}>{item.hindi}</div> : null}
                                                    {isShahmukhi ? <div className='lang-6' style={{ fontSize: `${shahmukhiSize}px`, color: shahmukhiColor }}>{item.urdu}</div> : null}
                                                    {isSantSinghTransln ? <div style={{ fontFamily: englishFont, fontSize: `${englishSize}px`, color: englishColor }}>{item.english}</div> : null}
                                                    {isManmohanTransln ? <div className='mb-4 mt-4' style={{ fontFamily: englishFont, fontSize: `${englishSize}px`, color: englishColor }}>{item.eng_mms}</div> : null}
                                                    {isPunjabiTransln ? <div className='mb-4' style={{ fontFamily: englishFont, fontSize: `${englishSize}px`, color: englishColor }}>{item.punj_mms}</div> : null}
                                                    {isGuruGranthTeeka ? <div style={{ fontFamily: englishFont, fontSize: `${englishSize}px`, color: englishColor }}>{item.ss_line}</div> : null}
                                                    {isGuruGranthTeeka ? <div className='mb-4' style={{ fontFamily: englishFont, fontSize: `${englishSize}px`, color: englishColor }}>{item.ss_pad}</div> : null}
                                                    {isFaridkotTeeka ? <div style={{ fontFamily: englishFont, fontSize: `${englishSize}px`, color: englishColor }}>{item.fwt}</div> : null}
                                                    {isFaridkotTeeka ? <div style={{ fontFamily: englishFont, fontSize: `${englishSize}px`, color: englishColor }}>{item.fwt_2}</div> : null}
                                                    {isFaridkotTeeka ? <div className='mb-4' style={{ fontFamily: englishFont, fontSize: `${englishSize}px`, color: englishColor }}>{item.fwt_3}</div> : null}
                                                    {isFaridkotaTeekaHindi ? <div className='mb-4' style={{ fontFamily: englishFont, fontSize: `${englishSize}px`, color: englishColor }}>{item.fwt_hindi}</div> : null}
                                                    {isSgpcTeeka ? <div style={{ fontFamily: englishFont, fontSize: `${englishSize}px`, color: englishColor }}>{item.sgpc_1}</div> : null}
                                                    {isSgpcTeeka ? <div style={{ fontFamily: englishFont, fontSize: `${englishSize}px`, color: englishColor }} >{item.sgpc_2}</div> : null}
                                                    {isSgpcTeeka ? <div className='mb-4' style={{ fontFamily: englishFont, fontSize: `${englishSize}px`, color: englishColor }}>{item.sgpc_3}</div> : null}
                                                    {isAttrib ? <>
                                                        <div style={{ fontFamily: attribFont, fontSize: `${attribSize}px`, color: attribColor }}>{item.attributes} </div>
                                                        {/* <div style={{ fontSize: `${attribSize}px`, color: attribColor }}>{item.raag + " " + item.author}</div> */}</> : null}
                                                </div>
                                                {isSocialShare ?
                                                    <ShareLink data={item} poet='ggs' />


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
                                                isLareevar && isLareevarAssist === false ? <div className={`${parseInt(props.lineNo) === parseInt(item.lineno) && 'ang-itm-shabad'}`} style={{ fontFamily: gurmukhiFont, fontSize: `${gurmukhiSize}px`, color: gurmukhiColor }} >{item.punjabi.replace(/\s+/g, '')}</div> :
                                                    isLareevar && isLareevarAssist ?
                                                        characters.map((char, index) => (
                                                            <span className={`lang-1 ${parseInt(props.lineNo) === parseInt(item.lineno) && 'ang-itm-shabad'}`}
                                                                key={index}
                                                                style={{ color: index % 2 === 0 ? gurmukhiColor : 'red', fontFamily: gurmukhiFont, fontSize: `${gurmukhiSize}px`, }}
                                                            >{char}
                                                            </span>
                                                        )) : isPunctuation && isPunctuationAssist === false ? <div className={`${parseInt(props.lineNo) === parseInt(item.lineno) && 'ang-itm-shabad'}`} style={{ fontFamily: gurmukhiFont, fontSize: `${gurmukhiSize}px`, color: gurmukhiColor }} >{item.punctuation}</div> :
                                                            isPunctuation && isPunctuationAssist ?
                                                                <div className={`${parseInt(props.lineNo) === parseInt(item.lineno) && 'ang-itm-shabad'}`} style={{ fontFamily: gurmukhiFont, fontSize: `${gurmukhiSize}px`, color: gurmukhiColor }} dangerouslySetInnerHTML={{ __html: processText(item.punctuation) }} ></div>
                                                                : isMouse ? < MouseOverDic content={item.punjabi} keyWord={allData?.keywords} mouse={isMouse} punctation={isPunctuation} lareevar={isLareevar} /> :
                                                                    isGurumukhi ?
                                                                        <div className={`${parseInt(props.lineNo) === parseInt(item.lineno) && 'ang-itm-shabad'}`} style={{ fontFamily: gurmukhiFont, fontSize: `${gurmukhiSize}px`, color: gurmukhiColor }} >{item.punjabi}</div> : null

                                            );
                                        })}
                                    </div>
                                    {isPhonetic ?
                                        <div className={`ang-itm ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'}`} >
                                            {angData.map((item, index) => (
                                                <div className={`${parseInt(props.lineNo) === parseInt(item.lineno) && 'ang-itm-shabad'}`} style={{ fontFamily: phoneticFont, fontSize: `${phoneticSize}px`, color: phoneticColor }} >{item.translit}</div>
                                            ))}
                                        </div> : null}
                                    {isEnglish ?
                                        <div className={`ang-itm ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'}`} >
                                            {angData.map((item, index) => (
                                                <div style={{ fontSize: `${englishTranslitSize}px`, color: englishTranslitColor }} className={`lang-3 ${parseInt(props.lineNo) === parseInt(item.lineno) && 'ang-itm-shabad'}`} >{item.roman}</div>
                                            ))}
                                        </div> : null}
                                    {isHindi ?
                                        <div className={`ang-itm ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'}`} >
                                            {angData.map((item, index) => (
                                                <div className={`${parseInt(props.lineNo) === parseInt(item.lineno) && 'ang-itm-shabad'}`} style={{ fontFamily: hindiFont, fontSize: `${hindiSize}px`, color: hindiColor }}>{item.hindi}</div>
                                            ))}
                                        </div> : null}
                                    {isShahmukhi ?
                                        <div className={`ang-itm ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'}`} >
                                            {angData.map((item, index) => (
                                                <div className={`lang-6 ${parseInt(props.lineNo) === parseInt(item.lineno) && 'ang-itm-shabad'}`} style={{ fontSize: `${shahmukhiSize}px`, color: shahmukhiColor }}>{item.urdu}</div>
                                            ))}
                                        </div> : null}
                                    {isSantSinghTransln ?
                                        <div className={`ang-itm ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'}`} >
                                            {angData.map((item, index) => (
                                                <div className={`${parseInt(props.lineNo) === parseInt(item.lineno) && 'ang-itm-shabad'}`} style={{ fontFamily: englishFont, fontSize: `${englishSize}px`, color: englishColor }}>{item.english}</div>
                                            ))}
                                        </div> : null}
                                    {isManmohanTransln ?
                                        <div className={`ang-itm ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'}`} >
                                            {angData.map((item, index) => (
                                                <div className={`lang-6 ${parseInt(props.lineNo) === parseInt(item.lineno) && 'ang-itm-shabad'}`} style={{ fontSize: `${englishSize}px`, color: englishColor }} >{item.eng_mms}</div>
                                            ))}
                                        </div> : null}
                                    {isPunjabiTransln ?
                                        <div className={`ang-itm ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'}`} >
                                            {angData.map((item, index) => (
                                                <div className={`lang-6 ${parseInt(props.lineNo) === parseInt(item.lineno) && 'ang-itm-shabad'}`} style={{ fontFamily: englishFont, fontSize: `${englishSize}px`, color: englishColor }}>{item.punj_mms}</div>
                                            ))}
                                        </div> : null}
                                    {isGuruGranthTeeka ?
                                        <div className={`ang-itm ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'}`} >
                                            {angData.map((item, index) => (
                                                <>
                                                    <div className={`lang-6 ${parseInt(props.lineNo) === parseInt(item.lineno) && 'ang-itm-shabad'}`} style={{ fontFamily: englishFont, fontSize: `${englishSize}px`, color: englishColor }}>{item.ss_line}</div>
                                                    <div className={`lang-6 ${parseInt(props.lineNo) === parseInt(item.lineno) && 'ang-itm-shabad'}`} style={{ fontFamily: englishFont, fontSize: `${englishSize}px`, color: englishColor }}>{item.ss_pad}</div></>
                                            ))}
                                        </div> : null}
                                    {isFaridkotTeeka ?
                                        <div className={`ang-itm ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'}`} >
                                            {angData.map((item, index) => (
                                                <>
                                                    <div className={`lang-6 ${parseInt(props.lineNo) === parseInt(item.lineno) && 'ang-itm-shabad'}`} style={{ fontFamily: englishFont, fontSize: `${englishSize}px`, color: englishColor }} >{item.fwt}</div>
                                                    <div className={`lang-6 ${parseInt(props.lineNo) === parseInt(item.lineno) && 'ang-itm-shabad'}`} style={{ fontFamily: englishFont, fontSize: `${englishSize}px`, color: englishColor }} >{item.fwt_2}</div>
                                                    <div className={`lang-6 ${parseInt(props.lineNo) === parseInt(item.lineno) && 'ang-itm-shabad'}`} style={{ fontFamily: englishFont, fontSize: `${englishSize}px`, color: englishColor }}>{item.fwt_3}</div>
                                                </>
                                            ))}
                                        </div> : null}
                                    {isFaridkotaTeekaHindi ?
                                        <div className={`ang-itm ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'}`} >
                                            {angData.map((item, index) => (
                                                <div className={`lang-6 ${parseInt(props.lineNo) === parseInt(item.lineno) && 'ang-itm-shabad'}`} style={{ fontFamily: englishFont, fontSize: `${englishSize}px`, color: englishColor }}>{item.fwt_hindi}</div>
                                            ))}
                                        </div> : null}
                                    {isSgpcTeeka ?
                                        <div className={`ang-itm ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'}`} >
                                            {angData.map((item, index) => (
                                                <>
                                                    <div className={`lang-6 ${parseInt(props.lineNo) === parseInt(item.lineno) && 'ang-itm-shabad'}`} style={{ fontFamily: englishFont, fontSize: `${englishSize}px`, color: englishColor }} >{item.sgpc_1}</div>
                                                    <div className={`lang-6 ${parseInt(props.lineNo) === parseInt(item.lineno) && 'ang-itm-shabad'}`} style={{ fontFamily: englishFont, fontSize: `${englishSize}px`, color: englishColor }}>{item.sgpc_2}</div>
                                                    <div className={`lang-6 ${parseInt(props.lineNo) === parseInt(item.lineno) && 'ang-itm-shabad'}`} style={{ fontFamily: englishFont, fontSize: `${englishSize}px`, color: englishColor }}>{item.sgpc_3}</div>
                                                </>
                                            ))}
                                        </div> : null}
                                    {isAttrib ?
                                        <div className={`ang-itm ${isCenter && 'center-align'} ${isDarkMode && 'dark-mode'}`} >
                                            {angData.map((item, index) => (
                                                <>
                                                    <div className={`${parseInt(props.lineNo) === parseInt(item.lineno) && 'ang-itm-shabad'}`} style={{ fontFamily: attribFont, fontSize: `${attribSize}px`, color: attribColor }}>{item.attributes} </div>
                                                    {/* <div className={`${parseInt(props.lineNo) === parseInt(item.lineno) && 'ang-itm-shabad' }`} style={{ fontSize: `${attribSize}px`, color: attribColor }}>{item.raag + " " + item.author}</div> */}
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
                                    onChange={(e) => { setAngNo(e.target.value); setCurrentPage(e.target.value); }} value={angNo}></input>
                                <button className='ang-btn' onClick={(e) => { e.preventDefault(); getAngByAng(angNo); getAngByAngAudio("gms", angNo); }}>Go</button>
                            </div>
                        </div>
                        <div className='navigation-btn-audio'>

                            {angNo > 1 &&
                                <>
                                    <button className='ang-btn' style={{ background: 'var(--current-color, var(--color-1))', color: '#fff' }} onClick={(e) => { e.preventDefault(); handleBegin() }}>Begin</button>
                                    <button className='ang-btn' style={{ background: 'var(--current-color, var(--color-1))', color: '#fff' }} onClick={(e) => { e.preventDefault(); handleBack(angNo); }}>Back</button>
                                </>
                            }
                            {allData.current_page < 1430 &&
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

export default AngByAng