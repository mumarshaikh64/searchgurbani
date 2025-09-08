"use client";
import React, { useEffect, useState } from 'react';
// import { useNavigate, useOutletContext } from "react-router";
// import { Link, useLocation } from "react-router-dom";
// import '../assets/css/dashboard.css';
import Axios from 'axios';
import Form from 'react-bootstrap/Form';
import initialFormState from '../components/defalutPref';
import { Helmet } from "react-helmet";
import HelmetWrapper from '../components/CommonHelmet';
import Link from 'next/link';

function SitePreference() {
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
    const [isTeekaTransln, setIsTeekaTransln] = useState(false);
    const [isTeekaRomanTransln, setIsTeekaRomanTransln] = useState(false);
    const [isTeekaHindiTransln, setIsTeekaHindiTransln] = useState(false);
    const [isTeekaTranslnDG, setIsTeekaTranslnDG] = useState(false);
    const [isTeekaTranslnKK, setIsTeekaTranslnKK] = useState(false);
    const [isTeekaRomanTranslnKK, setIsTeekaRomanTranslnKK] = useState(false);
    const [isTeekaHindiTranslnKK, setIsTeekaHindiTranslnKK] = useState(false);
    const [isTeekaTranslnBNL, setIsTeekaTranslnBNL] = useState(false);
    const [isTeekaHindiTranslnBNL, setIsTeekaHindiTranslnBNL] = useState(false);
    const [isMouse, setIsMouse] = useState(false);
    const [isAttrib, setIsAttrib] = useState(true);
    const [isAudio1, setIsAudio1] = useState(false);
    const [isAudio2, setIsAudio2] = useState(false);
    const [isAudio3, setIsAudio3] = useState(false);
    const [isAudio4, setIsAudio4] = useState(true);

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

    const [gurmukhiColor, setGurmukhiColor] = useState('rgb(51, 51, 51)');
    const [phoneticColor, setPhoneticColor] = useState('rgb(6, 3, 91)');
    const [hindiColor, setHindiColor] = useState('rgb(136, 8, 8)');
    const [englishColor, setEnglishColor] = useState('rgb(54, 103, 50)');
    const [attribColor, setAttribColor] = useState('rgb(54, 103, 50)');
    const [savedPreference, setSavedPreference] = useState(null);

    useEffect(() => {
        const savedPreference = localStorage.getItem('Preference');
        console.log('Preference', savedPreference);
        // useEffect(() => {
        //     // Only runs in the browser
        //     const pref = localStorage.getItem("Preference");
        //     if (pref) {
        //         setSavedPreference(pref);
        //     }
        // }, []);
        if (savedPreference) {
            const preferences = JSON.parse(savedPreference);
            setIsSocialShare(preferences.social_flag);
            setIsMouse(preferences.mouseover_gurmukhi_dic);
            setIsPunctuation(preferences.transliteration.punctuation);
            setIsPunctuationAssist(preferences.transliteration.punctuation_assist);
            setIsLareevar(preferences.transliteration.lareevar);
            setIsLareevarAssist(preferences.transliteration.lareevar_assist)
            setIsPhonetic(preferences.transliteration.roman);
            setIsEnglish(preferences.transliteration.english);
            setIsHindi(preferences.transliteration.hindi);
            setIsShahmukhi(preferences.transliteration.shahmukhi);
            setIsGurumukhi(preferences.transliteration.main_lang);
            setIsTeekaTransln(preferences.translation.bgv.teeka);
            setIsTeekaHindiTransln(preferences.translation.bgv.teeka_hindi);
            setIsTeekaRomanTransln(preferences.translation.bgv.teeka_roman);
            setIsTeekaTranslnBNL(preferences.translation.bnl.teeka);
            setIsTeekaHindiTranslnBNL(preferences.translation.bnl.teekahindi);
            setIsTeekaTranslnDG(preferences.translation.dg.teeka);
            setIsManmohanTransln(preferences.translation.ggs.eng_mms);
            setIsPunjabiTransln(preferences.translation.ggs.punj_mms);
            setIsGuruGranthTeeka(preferences.translation.ggs.ggd);
            setIsFaridkotTeeka(preferences.translation.ggs.ft);
            setIsFaridkotaTeekaHindi(preferences.translation.ggs.fth);
            setIsSgpcTeeka(preferences.translation.ggs.ss);
            setIsTeekaTranslnKK(preferences.translation.ks.teeka);
            setIsTeekaHindiTranslnKK(preferences.translation.ks.teeka_hindi);
            setIsTeekaRomanTranslnKK(preferences.translation.ks.teeka_roman);
            setIsSantSinghTransln(preferences.translation.english);
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
            setAttribFont(preferences.font.attributes.name)
            setAttribColor(preferences.font.attributes.color)
            setAttribSize(preferences.font.attributes.size)
        }

    }, [])
    const [form, setForm] = useState(() => {
        // const savedForm = localStorage.getItem('Preference');
        const savedForm = savedPreference;
        return JSON.parse(savedForm);
    });

    const handleFontChange = (event, language) => {
        const { value } = event.target;
        switch (language) {
            case 'gurmukhi':
                setGurmukhiFont(value);
                break;
            case 'phonetic':
                setPhoneticFont(value);
                break;
            case 'hindi':
                setHindiFont(value);
                break;
            case 'english':
                setEnglishFont(value);
                break;
            case 'attributes':
                setAttribFont(value);
                break;
            default:
                break;
        }
    };

    const handleSizeChange = (event, language) => {
        const { value } = event.target;
        switch (language) {
            case 'gurmukhi':
                setGurmukhiSize(value);
                break;
            case 'phonetic':
                setPhoneticSize(value);
                break;
            case 'hindi':
                setHindiSize(value);
                break;
            case 'english':
                setEnglishSize(value);
                break;
            case 'attributes':
                setAttribSize(value);
                break;
            default:
                break;
        }
    };

    const handleColorChange = (event, language) => {
        const { value } = event.target;
        console.log('##############', event.target)
        switch (language) {
            case 'gurmukhi':
                setGurmukhiColor(value);
                break;
            case 'phonetic':
                setPhoneticColor(value);
                break;
            case 'hindi':
                setHindiColor(value);
                break;
            case 'english':
                setEnglishColor(value);
                break;
            case 'attributes':
                setAttribColor(value);
                break;
            default:
                break;
        }
    };
    const saveChanges = () => {
        console.log('Split', isSplitView);
        console.log('Lareevar', isLareevar);
        console.log('Shamukhi', isShahmukhi);
        const changes = {
            translation: {
                ggs: {
                    eng_mms: isManmohanTransln,
                    punj_mms: isPunjabiTransln,
                    ggd: isGuruGranthTeeka,
                    ft: isFaridkotTeeka,
                    fth: isFaridkotaTeekaHindi,
                    ss: isSgpcTeeka,
                },
                bgv: {
                    teeka: isTeekaTransln,
                    teeka_roman: isTeekaRomanTransln,
                    teeka_hindi: isTeekaHindiTransln,
                },
                dg: {
                    teeka: isTeekaTranslnDG,
                },
                ks: {
                    teeka: isTeekaTranslnKK,
                    teeka_roman: isTeekaRomanTranslnKK,
                    teeka_hindi: isTeekaHindiTranslnKK,
                },
                bnl: {
                    teeka: isTeekaTranslnBNL,
                    teekahindi: isTeekaHindiTranslnBNL,
                },
                english: isSantSinghTransln,
            },
            transliteration: {
                roman: isPhonetic,
                english: isEnglish,
                hindi: isHindi,
                shahmukhi: isShahmukhi,
                main_lang: isGurumukhi,
                lareevar: isLareevar,
                lareevar_assist: false,
                punctuation: isPunctuation,
                punctuation_assist: false,
            },
            displayMode: {
                split_view: isSplitView,
                center_align: false,
                dark_mode: false,
            },
            font: {
                gurmukhi: {
                    name: gurmukhiFont,
                    color: gurmukhiColor,
                    size: gurmukhiSize,
                },
                english: {
                    name: englishFont,
                    color: englishColor,
                    size: englishSize,
                },
                hindi: {
                    name: hindiFont,
                    color: hindiColor,
                    size: hindiSize,
                },
                phonetic: {
                    name: phoneticFont,
                    color: phoneticColor,
                    size: phoneticSize,
                },
                attributes: {
                    name: attribFont,
                    color: attribColor,
                    size: attribSize,
                }
            },
            mouseover_gurmukhi_dic: isMouse,
            show_attributes: isAttrib,
            social_flag: false,
            share: {
                translation: {
                    english: true,
                },
                transliteration: {
                    roman: true,
                    english: false,
                    hindi: false,
                    shahmukhi: false
                }
            },
            ggs_audio: {
                audio1: isAudio1,
                audio2: isAudio2,
                audio3: isAudio3,
                audio4: isAudio4,
            }
        };
        localStorage.setItem('Preference', JSON.stringify(changes));
    };
    const resetChanges = () => {
        localStorage.setItem('Preference', JSON.stringify(initialFormState));
        window.location.reload();
    };

    return (
        <>
            {/* <HelmetWrapper
                title={`Search Gurbani Site Preferences`}
                description="Search Gurbani Site Preferences"
                keywords=""
                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                url={window.location.href}
            /> */}
            <section className='site-preference ' >
                <div className='container-lg intro-bkg'>
                    <div className='row'>
                        <div className="col-lg-12">
                            <div className='container align-items-center d-flex justify-content-center advance-search intro-border mt-5'>
                                <div className="px-1 py-1 align-middle mt-5 bgv-intro">
                                    <h1 className='inner-heading mb-4' >Gurbani Search Preferences</h1>
                                    <p>Please check the languages and attributes you want to view while browsing the Sri Guru Granth Sahib Ji , Amrit Keertan Gutka ,Vaaran Bhai Gurdas , Kabit Bhai Gurdas and Sri Dasam Granth Sahib</p>
                                    <div className='col-lg-12 mt-3'>
                                        <div className='sP_itm'>
                                            <h4 className='p_s_head text-dark' >DISPLAY OPTIONS:</h4>
                                            <p className='tagline_p' >Select how would you like the text to be displayed</p>
                                            <div className='d-flex'>
                                                <div className="form-check me-3">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                                                        value={isSplitView}
                                                        checked={!isSplitView}
                                                        onChange={e => setIsSplitView(false)} />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                        Display Line by Line
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                                        value={isSplitView}
                                                        checked={isSplitView}
                                                        onChange={e => setIsSplitView(true)} />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                        Display by Paragraphs
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='sP_itm'>
                                            <h4 className='p_s_head text-dark' >LANGUAGE SELECTION :</h4>
                                            <p className='tagline_p' >Select the Language(s)/ Translation(s) / Description(s) that you would like displayed: </p>
                                            <h5 className='text-dark mb-4' >Common Languages for Guru Granth Sahib, Amrit Keertan, Bhai
                                                Gurdas Vaaran, Dasam Granth Sahib, Kabit Bhai Gurudas and Bhai Nand Lal:</h5>
                                            <h6 className='text-dark sub_heading-p mt-5' >Gurmukhi Option:</h6>
                                            <div className='d-flex'>
                                                <div className="form-check me-3">
                                                    <input className="form-check-input" type="radio" name="Gption" id="Gption1"
                                                        value={isGurumukhi}
                                                        checked={isGurumukhi}
                                                        onChange={e => { setIsGurumukhi(true); setIsPunctuation(false); setIsLareevar(false); }} />
                                                    <label className="form-check-label" htmlFor="Gption1">
                                                        Gurmukhi
                                                    </label>
                                                </div>
                                                <div className="form-check me-3">
                                                    <input className="form-check-input" type="radio" name="Gption" id="Gption2"
                                                        value={isPunctuation}
                                                        checked={isPunctuation}
                                                        onChange={e => { setIsPunctuation(true); setIsGurumukhi(false); setIsLareevar(false); }} />
                                                    <label className="form-check-label" htmlFor="Gption2">
                                                        Punctuations Gurmukhi
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="Gption" id="Gption3"
                                                        value={isLareevar}
                                                        checked={isLareevar}
                                                        onChange={e => setIsLareevar(true)} />
                                                    <label className="form-check-label" htmlFor="Gption3">
                                                        Lareevar
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='sP_itm'>
                                            <h6 className='text-dark sub_heading-p mt-5' >Additional Languages Options:</h6>
                                            <div className='d-flex flex-column'>
                                                <div className="form-check me-3">
                                                    <input type="checkbox" className="form-check-input" value="Bike"
                                                        onChange={(e) => { setIsPhonetic(e.target.checked) }} checked={isPhonetic ? 'checked' : ''} />
                                                    <label className="form-check-label" htmlFor="ALanguages1">
                                                        Phonetic English
                                                    </label>
                                                </div>
                                                <div className="form-check me-3">
                                                    <input type="checkbox" className="form-check-input" value="Bike"
                                                        onChange={(e) => { setIsHindi(e.target.checked) }} checked={isHindi ? 'checked' : ''} />
                                                    <label className="form-check-label" htmlFor="ALanguages2">
                                                        Hindi Transliteration
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" value="Bike"
                                                        onChange={(e) => { setIsSantSinghTransln(e.target.checked) }} checked={isSantSinghTransln ? 'checked' : ''} />
                                                    <label className="form-check-label" htmlFor="ALanguages3">
                                                        English Translation
                                                    </label>
                                                </div>
                                                <div className="form-check me-3">
                                                    <input type="checkbox" className="form-check-input" value="Bike"
                                                        onChange={(e) => { setIsEnglish(e.target.checked) }} checked={isEnglish ? 'checked' : ''} />
                                                    <label className="form-check-label" htmlFor="ALanguages4">
                                                        English Transliteration
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" value="Bike"
                                                        onChange={(e) => { setIsShahmukhi(e.target.checked) }} checked={isShahmukhi ? 'checked' : ''} />
                                                    <label className="form-check-label" htmlFor="ALanguages5">
                                                        Shahmukhi Transliteration
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='sP_itm'>
                                            <h6 className='text-dark sub_heading-p mt-5' >Additional Translations available on Guru Granth Shahib:</h6>
                                            <div className='d-flex flex-column'>
                                                <div className="form-check me-3">
                                                    <input type="checkbox" className="form-check-input" value="Bike"
                                                        onChange={(e) => { setIsPunjabiTransln(e.target.checked) }} checked={isPunjabiTransln ? 'checked' : ''} />
                                                    <label className="form-check-label" htmlFor="Translations1">
                                                        Translation of Sri Guru Granth Sahib ji (by S. Manmohan Singh) - Punjabi
                                                    </label>
                                                </div>

                                                <div className="form-check me-3">
                                                    <input type="checkbox" className="form-check-input" value="Bike"
                                                        onChange={(e) => { setIsManmohanTransln(e.target.checked) }} checked={isManmohanTransln ? 'checked' : ''} />
                                                    <label className="form-check-label" htmlFor="Translations2">
                                                        Translation of Sri Guru Granth Sahib ji (by S. Manmohan Singh) - English
                                                    </label>
                                                </div>

                                                <div className="form-check me-3">
                                                    <input type="checkbox" className="form-check-input" value="Bike"
                                                        onChange={(e) => { setIsGuruGranthTeeka(e.target.checked) }} checked={isGuruGranthTeeka ? 'checked' : ''} />
                                                    <label className="form-check-label" htmlFor="Translations3">
                                                        Guru Granth Sahib Darpan (by Prof. Sahib Singh)
                                                    </label>
                                                </div>

                                                <div className="form-check me-3">
                                                    <input type="checkbox" className="form-check-input" value="Bike"
                                                        onChange={(e) => { setIsFaridkotTeeka(e.target.checked) }} checked={isFaridkotTeeka ? 'checked' : ''} />
                                                    <label className="form-check-label" htmlFor="Translations4">
                                                        Faridkot Wala Teeka
                                                    </label>
                                                </div>

                                                <div className="form-check me-3">
                                                    <input type="checkbox" className="form-check-input" value="Bike"
                                                        onChange={(e) => { setIsSgpcTeeka(e.target.checked) }} checked={isSgpcTeeka ? 'checked' : ''} />
                                                    <label className="form-check-label" htmlFor="Translations4">
                                                        Shabadarth Sri Guru Granth Sahib ji published by SGPC Amritsar
                                                    </label>
                                                </div>

                                                <div className="form-check me-3">
                                                    <input type="checkbox" className="form-check-input" value="Bike"
                                                        onChange={(e) => { setIsFaridkotaTeekaHindi(e.target.checked) }} checked={isFaridkotaTeekaHindi ? 'checked' : ''} />
                                                    <label className="form-check-label" htmlFor="Translations5">
                                                        Faridkot Wala Teeka in Hindi
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='sP_itm'>
                                            <h6 className='text-dark sub_heading-p mt-5' >Additional Translations available on Bhai Gurdas Vaaran:</h6>
                                            <div className='d-flex flex-column'>
                                                <div className="form-check me-3">
                                                    <input type="checkbox" className="form-check-input" value="Bike"
                                                        onChange={(e) => { setIsTeekaTransln(e.target.checked) }} checked={isTeekaTransln ? 'checked' : ''} />
                                                    <label className="form-check-label" htmlFor="TranslationsBG1">
                                                        Vaaran Bhai Gurdas Teeka by Giani Hazara Singh (Edited by Bhai Veer Singh ) - Gurmukhi
                                                    </label>
                                                </div>

                                                <div className="form-check me-3">
                                                    <input type="checkbox" className="form-check-input" value="Bike"
                                                        onChange={(e) => { setIsTeekaHindiTransln(e.target.checked) }} checked={isTeekaHindiTransln ? 'checked' : ''} />
                                                    <label className="form-check-label" htmlFor="TranslationsBG2">
                                                        Vaaran Bhai Gurdas Teeka by Giani Hazara Singh (Edited by Bhai Veer Singh ) - Hindi
                                                    </label>
                                                </div>

                                                <div className="form-check me-3">
                                                    <input type="checkbox" className="form-check-input" value="Bike"
                                                        onChange={(e) => { setIsTeekaRomanTransln(e.target.checked) }} checked={isTeekaRomanTransln ? 'checked' : ''} />
                                                    <label className="form-check-label" htmlFor="TranslationsBG3">
                                                        Vaaran Bhai Gurdas Teeka by Giani Hazara Singh (Edited by Bhai Veer Singh ) - Phonetic English
                                                    </label>
                                                </div>


                                            </div>
                                        </div>

                                        <div className='sP_itm'>
                                            <h6 className='text-dark sub_heading-p mt-5' >Additional Translations available on Sri Dasam Granth:</h6>
                                            <div className='d-flex flex-column'>
                                                <div className="form-check me-3">
                                                    <input type="checkbox" className="form-check-input" value="Bike"
                                                        onChange={(e) => { setIsTeekaTranslnDG(e.target.checked) }} checked={isTeekaTranslnDG ? 'checked' : ''} />
                                                    <label className="form-check-label" htmlFor="TranslationsBGV1">
                                                        Dasam Granth teeka (by Rattan Singh Jaggi)
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='sP_itm'>
                                            <h6 className='text-dark sub_heading-p mt-5' >Additional Translations available on Kabbit Savaiye:</h6>
                                            <div className='d-flex flex-column'>
                                                <div className="form-check me-3">
                                                    <input type="checkbox" className="form-check-input" value="Bike"
                                                        onChange={(e) => { setIsTeekaTranslnKK(e.target.checked) }} checked={isTeekaTranslnKK ? 'checked' : ''} />
                                                    <label className="form-check-label" htmlFor="TranslationsKS1">
                                                        Kabit Bhai Gurdas Teeka by Sant Sampuran Singh - Gurmukhi
                                                    </label>
                                                </div>

                                                <div className="form-check me-3">
                                                    <input type="checkbox" className="form-check-input" value="Bike"
                                                        onChange={(e) => { setIsTeekaHindiTranslnKK(e.target.checked) }} checked={isTeekaHindiTranslnKK ? 'checked' : ''} />
                                                    <label className="form-check-label" htmlFor="TranslationsKS2">
                                                        Kabit Bhai Gurdas Teeka by Sant Sampuran Singh - Hindi
                                                    </label>
                                                </div>

                                                <div className="form-check me-3">
                                                    <input type="checkbox" className="form-check-input" value="Bike"
                                                        onChange={(e) => { setIsTeekaRomanTranslnKK(e.target.checked) }} checked={isTeekaRomanTranslnKK ? 'checked' : ''} />
                                                    <label className="form-check-label" htmlFor="TranslationsKS3">
                                                        Kabit Bhai Gurdas Teeka by Sant Sampuran Singh - Phonetic English
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='sP_itm'>
                                            <h6 className='text-dark sub_heading-p mt-5' >Additional Translations available on Bhai Nand Lal:</h6>
                                            <div className='d-flex flex-column'>
                                                <div className="form-check me-3">
                                                    <input type="checkbox" className="form-check-input" value="Bike"
                                                        onChange={(e) => { setIsTeekaTranslnBNL(e.target.checked) }} checked={isTeekaTranslnBNL ? 'checked' : ''} />
                                                    <label className="form-check-label" htmlFor="TranslationsBNL1">
                                                        Teeka Bhai Nand Lal Baani
                                                    </label>
                                                </div>
                                                <div className="form-check me-3">
                                                    <input type="checkbox" className="form-check-input" value="Bike"
                                                        onChange={(e) => { setIsTeekaHindiTranslnBNL(e.target.checked) }} checked={isTeekaHindiTranslnBNL ? 'checked' : ''} />
                                                    <label className="form-check-label" htmlFor="TranslationsBNL1">
                                                        Teeka Bhai Nand Lal Baani - Hindi
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='sP_itm'>
                                            <h4 className='p_s_head text-dark' >GURMUKHI DICTIONARY</h4>
                                            <p className='tagline_p' >Select to view instant Gurmukhi words meanings. Passing the mouseover Gurmukhi word will show the meaning, on click will open a popup window with English and Gurmukhi</p>
                                            <div className='d-flex'>
                                                <div className="form-check me-3">
                                                    {/* <input className="form-check-input" type="radio" name="flexRadioDefaultx" id="flexRadioDefaultx1"
                                        value={isMouse}
                                        checked={isMouse}
                                        onChange={e => setIsMouse(true)} /> */}
                                                    <input type="checkbox" className="form-check-input" value="Bike"
                                                        onChange={(e) => { setIsMouse(e.target.checked) }} checked={isMouse ? 'checked' : ''} />
                                                    <label className="form-check-label" htmlFor="flexRadioDefaultx1">
                                                        Mouseover Gurmukhi Dictionary
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='sP_itm'>
                                            <h4 className='p_s_head text-dark' >SHOW ATTRIBUTES (Page Line No., Author, Raag)</h4>

                                            <div className='d-flex'>
                                                <div className="form-check me-3">
                                                    {/* <input className="form-check-input" type="radio" name="flexRadioDefaultxy" id="flexRadioDefaultxy1"
                                        value={isAttrib}
                                        checked={isAttrib}
                                        onChange={e => setIsAttrib(true)} /> */}
                                                    <input type="checkbox" className="form-check-input" value="Bike"
                                                        onChange={(e) => { setIsAttrib(e.target.checked) }} checked={isAttrib ? 'checked' : ''} />
                                                    <label className="form-check-label" htmlFor="flexRadioDefaultxy1">
                                                        Show Attributes (Page line #, Author, Raag)
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='sP_itm'>
                                            <h4 className='p_s_head text-dark' >GURBANI AUDIO OPTIONS</h4>

                                            <div className='d-flex flex-column'>
                                                <div className="form-check me-3">
                                                    <input className="form-check-input" type="radio" name="Audio-options" id="Audio-options1"
                                                        value={isAudio1}
                                                        checked={isAudio1}
                                                        onChange={e => setIsAudio1(true)} />
                                                    <label className="form-check-label" htmlFor="Audio-options1">
                                                        Bhai Satnam Singh Sethi
                                                    </label>
                                                </div>
                                                <div className="form-check me-3">
                                                    <input className="form-check-input" type="radio" name="Audio-options" id="Audio-options2"
                                                        value={isAudio2}
                                                        checked={isAudio2}
                                                        onChange={e => setIsAudio2(true)} />
                                                    <label className="form-check-label" htmlFor="Audio-options2">
                                                        Shudh Gurbani Ucharan Audio by Bhagat Jaswant Singh
                                                    </label>
                                                </div>
                                                <div className="form-check me-3">
                                                    <input className="form-check-input" type="radio" name="Audio-options" id="Audio-options3"
                                                        value={isAudio3}
                                                        checked={isAudio3}
                                                        onChange={e => setIsAudio3(true)} />
                                                    <label className="form-check-label" htmlFor="Audio-options3">
                                                        Bhai Jagtar Singh ji
                                                    </label>
                                                </div>
                                                <div className="form-check me-3">
                                                    <input className="form-check-input" type="radio" name="Audio-options" id="Audio-options4"
                                                        value={isAudio4}
                                                        checked={isAudio4}
                                                        onChange={e => setIsAudio1(true)} />
                                                    <label className="form-check-label" htmlFor="Audio-options4">
                                                        Bhai Mehnga Singh ji
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row mt-5'>
                                            <h4 className='p_s_head text-dark' >FONT SELECTION:</h4>
                                            <p className='tagline_p' >Select fonts to display for Gurmukhi, Phonetic English, Hindi Transliteration English translation and Attributes.</p>
                                            <div className='col-lg-3 color-picker'>
                                                <label className='mb-2' >Gurmukhi:</label>
                                                {/* <Form.Select aria-label="Default select example" className='mb-3'>
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                </Form.Select> */}
                                                <Form.Select className='mb-3' value={gurmukhiFont} onChange={(e) => handleFontChange(e, 'gurmukhi')}>
                                                    <option value="AnmolUniBani">Default</option>
                                                    <option value="RaajaaMediumMedium">Raajaa</option>
                                                    <option value="RaajaaBoldBold">Raajaa Bold</option>
                                                    <option value="RaajBold">Raaj</option>
                                                    <option value="AdhiapakMarkerMedium">Adhiapak</option>
                                                    <option value="PrabhkiRegular">Prabhki</option>
                                                    <option value="KarmicSanjMedium">Karmic sanj</option>
                                                </Form.Select>

                                                <div className='form-control d-flex color-area'>
                                                    <input type="color" value={gurmukhiColor} onChange={(e) => handleColorChange(e, 'gurmukhi')} />
                                                    <Form.Range value={gurmukhiSize} min={10} max={90} onChange={(e) => handleSizeChange(e, 'gurmukhi')} />
                                                </div>
                                            </div>
                                            <div className='col-lg-3 color-picker'>
                                                <label className='mb-2' >Phonetic English:</label>
                                                <Form.Select className='mb-3' value={phoneticFont} onChange={(e) => handleFontChange(e, 'phonetic')}>

                                                    <option value="arial">Default</option>
                                                    <option value="Puritan20Italic">Puritan</option>
                                                    <option value="AndikaBasicRegular">Andika</option>
                                                    <option value="ArchitectsDaughterRegular">Architect</option>
                                                    <option value="QuattrocentoRomanRegular">Quattrocento</option>
                                                    <option value="DroidSansRegular">Droid Sans</option>
                                                    <option value="DroidSerifBold">Droid Bold</option>
                                                </Form.Select>

                                                <div className='form-control d-flex color-area'>
                                                    <input type="color" value={phoneticColor} onChange={(e) => handleColorChange(e, 'phonetic')} />
                                                    <Form.Range value={phoneticSize} min={10} max={90} onChange={(e) => handleSizeChange(e, 'phonetic')} />
                                                </div>
                                            </div>
                                            <div className='col-lg-3 color-picker'>
                                                <label className='mb-2' >Hindi:</label>
                                                <Form.Select className='mb-3' value={hindiFont} onChange={(e) => handleFontChange(e, 'hindi')}>
                                                    <option value="arial">Default</option>
                                                    <option value="JaipurRegular">Jaipur Regular</option>
                                                    <option value="Gurumaa150Bold">Gurumaa Regular</option>
                                                    <option value="RaghindiRegular">Raghu Regular</option>
                                                    <option value="gargiMedium">Gargi Medium</option>
                                                    <option value="CDACGISTYogeshNormal">Yogesh Normal</option>
                                                    <option value="CDACGISTSurekhNormal">Surekh Normal</option>
                                                </Form.Select>

                                                <div className='form-control d-flex color-area'>
                                                    <input type="color" value={hindiColor} onChange={(e) => handleColorChange(e, 'hindi')} />
                                                    <Form.Range value={hindiSize} min={10} max={90} onChange={(e) => handleSizeChange(e, 'hindi')} />
                                                </div>
                                            </div>
                                            <div className='col-lg-3 color-picker'>
                                                <label className='mb-2' >English Translation:</label>
                                                <Form.Select className='mb-3' value={englishFont} onChange={(e) => handleFontChange(e, 'english')}>
                                                    <option value="arial">
                                                        Default
                                                    </option>
                                                    <option value="Puritan20Italic">Puritan</option>
                                                    <option value="AndikaBasicRegular">Andika</option>
                                                    <option value="ArchitectsDaughterRegular">Architect</option>
                                                    <option value="QuattrocentoRomanRegular">Quattrocento</option>
                                                    <option value="DroidSansRegular">Droid Sans</option>
                                                    <option value="DroidSerifBold"> Droid Bold</option>
                                                </Form.Select>

                                                <div className='form-control d-flex color-area'>
                                                    <input type="color" value={englishColor} onChange={(e) => handleColorChange(e, 'english')} />
                                                    <Form.Range value={englishSize} min={10} max={90} onChange={(e) => handleSizeChange(e, 'english')} />
                                                </div>
                                            </div>
                                            <div className='col-lg-3 color-picker'>
                                                <label className='mb-2' >Attributes:</label>
                                                {/* <Form.Select aria-label="Default select example" className='mb-3'>
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                </Form.Select> */}
                                                {/* <Form.Select className='mb-3' value={attribFont} onChange={(e) => handleFontChange(e, 'attributes')}>
                                    <option value="AnmolUniBani">Default</option>
                                    <option value="RaajaaMediumMedium">Raajaa</option>
                                    <option value="RaajaaBoldBold">Raajaa Bold</option>
                                    <option value="RaajBold">Raaj</option>
                                    <option value="AdhiapakMarkerMedium">Adhiapak</option>
                                    <option value="PrabhkiRegular">Prabhki</option>
                                    <option value="KarmicSanjMedium">Karmic sanj</option>
                                </Form.Select> */}

                                                <div className='form-control d-flex color-area'>
                                                    <input type="color" value={attribColor} onChange={(e) => handleColorChange(e, 'attributes')} />
                                                    <Form.Range value={attribSize} min={10} max={90} onChange={(e) => handleSizeChange(e, 'attributes')} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='container mt-5'>
                                            <div className='raga-links'>
                                                <Link href='/raags/raags_time'>Go Back</Link>
                                                <Link href="#" onClick={() => resetChanges()}>Reset to Defaults</Link>
                                                <Link href="#" onClick={() => saveChanges()}>Submit Changes</Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SitePreference