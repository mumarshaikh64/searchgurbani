import React, { useEffect, useState, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import initialFormState from './defalutPref';

const FontChange = ({ gurmukhiFont, setGurmukhiFont,
    phoneticFont, setPhoneticFont,
    hindiFont, setHindiFont,
    englishFont, setEnglishFont,
    gurmukhiSize, setGurmukhiSize,
    phoneticSize, setPhoneticSize,
    hindiSize, setHindiSize,
    englishSize, setEnglishSize,
    gurmukhiColor, setGurmukhiColor,
    phoneticColor, setPhoneticColor,
    hindiColor, setHindiColor,
    englishColor, setEnglishColor,
    englishTranslitSize , englishTranslitColor,
    setEnglishTranslitSize ,setEnglishTranslitColor,
    shahmukhiSize, shahmukhiColor, 
    setshahmukhiSize, setshahmukhiColor, isGurumukhi,
    isPhonetic, isEnglish, isHindi, isShahmukhi, isSantSinghTransln,
    guruFont, setGuruFont, attribStyle,
    setAttribFont, setAttribColor, setAttribSize,
    attribFont, attribSize, attribColor
}) => {
    const [pref, setPref] = useState(initialFormState);
    useEffect(() => {
        console.log('hjgjyugyuk,', guruFont);
        if (guruFont !== true) {
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
                setHindiSize(preferences.font.hindi.size);
                setEnglishFont(preferences.font.english.name);
                setEnglishColor(preferences.font.english.color);
                setEnglishSize(preferences.font.english.size);
            }
        }
    }, [])

    const handleFontChange = (event, language) => {
        const { value } = event.target;
        switch (language) {
            case 'gurmukhi':
                setGurmukhiFont(value);
                setPref((prevPref) => {
                    const updatedPref = {
                        ...prevPref, font: {
                            ...prevPref.font,
                            gurmukhi: { ...prevPref.font.gurmukhi, name: value }
                        }
                    };
                    localStorage.setItem('Preference', JSON.stringify(updatedPref));
                    return updatedPref;
                });
                break;
            case 'phonetic':
                setPhoneticFont(value);
                setPref((prevPref) => {
                    const updatedPref = {
                        ...prevPref, font: {
                            ...prevPref.font,
                            phonetic: { ...prevPref.font.phonetic, name: value }
                        }
                    };
                    localStorage.setItem('Preference', JSON.stringify(updatedPref));
                    return updatedPref;
                });
                break;
            case 'hindi':
                setHindiFont(value);
                setPref((prevPref) => {
                    const updatedPref = {
                        ...prevPref, font: {
                            ...prevPref.font,
                            hindi: { ...prevPref.font.hindi, name: value }
                        }
                    };
                    localStorage.setItem('Preference', JSON.stringify(updatedPref));
                    return updatedPref;
                });
                break;
            case 'english':
                setEnglishFont(value);
                setPref((prevPref) => {
                    const updatedPref = {
                        ...prevPref, font: {
                            ...prevPref.font,
                            english: { ...prevPref.font.english, name: value }
                        }
                    };
                    localStorage.setItem('Preference', JSON.stringify(updatedPref));
                    return updatedPref;
                });
                break;
            case 'attributes':
                setAttribFont(value);
                setPref((prevPref) => {
                    const updatedPref = {
                        ...prevPref, font: {
                            ...prevPref.font,
                            attributes: { ...prevPref.font.attributes, name: value }
                        }
                    };
                    localStorage.setItem('Preference', JSON.stringify(updatedPref));
                    return updatedPref;
                });
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
                setPref((prevPref) => {
                    const updatedPref = {
                        ...prevPref, font: {
                            ...prevPref.font,
                            gurmukhi: { ...prevPref.font.gurmukhi, size: value }
                        }
                    };
                    localStorage.setItem('Preference', JSON.stringify(updatedPref));
                    return updatedPref;
                });
                break;
            case 'phonetic':
                setPhoneticSize(value);
                setPref((prevPref) => {
                    const updatedPref = {
                        ...prevPref, font: {
                            ...prevPref.font,
                            phonetic: { ...prevPref.font.phonetic, size: value }
                        }
                    };
                    localStorage.setItem('Preference', JSON.stringify(updatedPref));
                    return updatedPref;
                });
                break;
            case 'hindi':
                setHindiSize(value);
                setPref((prevPref) => {
                    const updatedPref = {
                        ...prevPref, font: {
                            ...prevPref.font,
                            hindi: { ...prevPref.font.hindi, size: value }
                        }
                    };
                    localStorage.setItem('Preference', JSON.stringify(updatedPref));
                    return updatedPref;
                });
                break;
            case 'english':
                setEnglishSize(value);
                setPref((prevPref) => {
                    const updatedPref = {
                        ...prevPref, font: {
                            ...prevPref.font,
                            english: { ...prevPref.font.english, size: value }
                        }
                    };
                    localStorage.setItem('Preference', JSON.stringify(updatedPref));
                    return updatedPref;
                });
                break;
            case 'attributes':
                setAttribSize(value);
                setPref((prevPref) => {
                    const updatedPref = {
                        ...prevPref, font: {
                            ...prevPref.font,
                            attributes: { ...prevPref.font.attributes, size: value }
                        }
                    };
                    localStorage.setItem('Preference', JSON.stringify(updatedPref));
                    return updatedPref;
                });
                break;
            case 'shahmukhi':
                setshahmukhiSize(value);
                setPref((prevPref) => {
                    const updatedPref = {
                        ...prevPref, font: {
                            ...prevPref.font,
                            shahmukhi: { ...prevPref.font.shahmukhi, size: value }
                        }
                    };
                    localStorage.setItem('Preference', JSON.stringify(updatedPref));
                    return updatedPref;
                });
                break;
                case 'englishTranslit':
                    setEnglishTranslitSize(value);
                    setPref((prevPref) => {
                        const updatedPref = {
                            ...prevPref, font: {
                                ...prevPref.font,
                                englishTranslit: { ...prevPref.font.englishTranslit, size: value }
                            }
                        };
                        localStorage.setItem('Preference', JSON.stringify(updatedPref));
                        return updatedPref;
                    });
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
                setPref((prevPref) => {
                    const updatedPref = {
                        ...prevPref, font: {
                            ...prevPref.font,
                            gurmukhi: { ...prevPref.font.gurmukhi, color: value }
                        }
                    };
                    localStorage.setItem('Preference', JSON.stringify(updatedPref));
                    return updatedPref;
                });
                break;
            case 'phonetic':
                setPhoneticColor(value);
                setPref((prevPref) => {
                    const updatedPref = {
                        ...prevPref, font: {
                            ...prevPref.font,
                            phonetic: { ...prevPref.font.phonetic, color: value }
                        }
                    };
                    localStorage.setItem('Preference', JSON.stringify(updatedPref));
                    return updatedPref;
                });
                break;
            case 'hindi':
                setHindiColor(value);
                setPref((prevPref) => {
                    const updatedPref = {
                        ...prevPref, font: {
                            ...prevPref.font,
                            hindi: { ...prevPref.font.hindi, color: value }
                        }
                    };
                    localStorage.setItem('Preference', JSON.stringify(updatedPref));
                    return updatedPref;
                });
                break;
            case 'english':
                setEnglishColor(value);
                setPref((prevPref) => {
                    const updatedPref = {
                        ...prevPref, font: {
                            ...prevPref.font,
                            english: { ...prevPref.font.english, color: value }
                        }
                    };
                    localStorage.setItem('Preference', JSON.stringify(updatedPref));
                    return updatedPref;
                });
                break;
            case 'attributes':
                setAttribColor(value);
                setPref((prevPref) => {
                    const updatedPref = {
                        ...prevPref, font: {
                            ...prevPref.font,
                            attributes: { ...prevPref.font.attributes, color: value }
                        }
                    };
                    localStorage.setItem('Preference', JSON.stringify(updatedPref));
                    return updatedPref;
                });
                break;
                case 'shahmukhi':
                setshahmukhiColor(value);
                setPref((prevPref) => {
                    const updatedPref = {
                        ...prevPref, font: {
                            ...prevPref.font,
                            shahmukhi: { ...prevPref.font.shahmukhi, color: value }
                        }
                    };
                    localStorage.setItem('Preference', JSON.stringify(updatedPref));
                    return updatedPref;
                });
                break;
                case 'englishTranslit':
                    setEnglishTranslitColor(value);
                    setPref((prevPref) => {
                        const updatedPref = {
                            ...prevPref, font: {
                                ...prevPref.font,
                                englishTranslit: { ...prevPref.font.englishTranslit, color: value }
                            }
                        };
                        localStorage.setItem('Preference', JSON.stringify(updatedPref));
                        return updatedPref;
                    });
                    break;
            default:
                break;
        }
    };
    /* const [gurmukhiFont, setGurmukhiFont] = useState('AnmolUniBani');
    const [phoneticFont, setPhoneticFont] = useState('arial');
    const [hindiFont, setHindiFont] = useState('arial');
    const [englishFont, setEnglishFont] = useState('arial');

    const [gurmukhiSize, setGurmukhiSize] = useState('22');
    const [phoneticSize, setPhoneticSize] = useState('30');
    const [hindiSize, setHindiSize] = useState('30');
    const [englishSize, setEnglishSize] = useState('30');

    const [gurmukhiColor, setGurmukhiColor] = useState('rgb(51, 51, 51)');
    const [phoneticColor, setPhoneticColor] = useState('rgb(6, 3, 91)');
    const [hindiColor, setHindiColor] = useState('rgb(136, 8, 8)');
    const [englishColor, setEnglishColor] = useState('rgb(54, 103, 50)'); */
    const handleResetGur = () => {
        if (guruFont === true) {
            setGurmukhiSize('18');
            setGurmukhiColor('#333333');
        }
        else {
            setGurmukhiFont('RaajaaMediumMedium');
            setGurmukhiSize('24');
            setGurmukhiColor('#333333');
            setPref((prevPref) => {
                const updatedPref = {
                    ...prevPref, font: {
                        ...prevPref.font,
                        gurmukhi: { ...prevPref.font.gurmukhi, name: 'RaajaaMediumMedium', color: '#333333', size: 24, }
                    }
                };
                localStorage.setItem('Preference', JSON.stringify(updatedPref));
                return updatedPref;
            });
        }

    }
    const handleResetPhonetic = () => {
        if (guruFont === true) {
            setPhoneticSize('18');
            setPhoneticColor('#06035b');
        }
        else {
            setPhoneticFont('AndikaBasicRegular');
            setPhoneticSize('18');
            setPhoneticColor('#06035b');
            setPref((prevPref) => {
                const updatedPref = {
                    ...prevPref, font: {
                        ...prevPref.font,
                        phonetic: { ...prevPref.font.phonetic, name: 'AndikaBasicRegular', color: '#06035b', size: 18, }
                    }
                };
                localStorage.setItem('Preference', JSON.stringify(updatedPref));
                return updatedPref;
            });
        }

    }
    const handleResetHindi = () => {
        if (guruFont === true) {
            setHindiSize('18');
            setHindiColor('#880808');
        }
        else {
            setHindiFont('arial');
            setHindiSize('18');
            setHindiColor('#880808');
            setPref((prevPref) => {
                const updatedPref = {
                    ...prevPref, font: {
                        ...prevPref.font,
                        hindi: { ...prevPref.font.hindi, name: 'arial', color: '#880808', size: 18, }
                    }
                };
                localStorage.setItem('Preference', JSON.stringify(updatedPref));
                return updatedPref;
            });
        }

    }
    const handleResetEng = () => {
        setEnglishFont('arial');
        setEnglishSize('18');
        setEnglishColor('#366732');
        setPref((prevPref) => {
            const updatedPref = {
                ...prevPref, font: {
                    ...prevPref.font,
                    english: { ...prevPref.font.english, name: 'arial', color: '#366732', size: 18, }
                }
            };
            localStorage.setItem('Preference', JSON.stringify(updatedPref));
            return updatedPref;
        });
    }
    const handleResetAttrib = () => {
        setAttribFont('AnmolUniBani');
        setAttribSize('16');
        setAttribColor('#670464');
        setPref((prevPref) => {
            const updatedPref = {
                ...prevPref, font: {
                    ...prevPref.font,
                    attributes: { ...prevPref.font.attributes, name: 'arial', color: '#670464', size: 16, }
                }
            };
            localStorage.setItem('Preference', JSON.stringify(updatedPref));
            return updatedPref;
        });

    }
    const handleResetShahmukhi = () => {        
        setshahmukhiSize('18');
        setshahmukhiColor('#BF6008');
    }
    const handleResetEnglishTranslit = () => {        
        setEnglishTranslitColor('#0882BF');
        setEnglishTranslitSize('18');
    }

    return (
        <div>
            <section className='font p-5 pb-0'>
                <div className='container'>
                    <div className='d-flex rw'>
                        <div className='font-wrapper'>
                            <div className='font-itm'>
                                <div className='font-lang'><label>Gurmukhi:</label></div>
                                {guruFont === true ? null :
                                    <div className='font-name'>
                                        <Form.Select value={gurmukhiFont} onChange={(e) => handleFontChange(e, 'gurmukhi')}>
                                            <option value="AnmolUniBani">Default</option>
                                            <option value="RaajaaMediumMedium">Raajaa</option>
                                            <option value="RaajaaBoldBold">Raajaa Bold</option>
                                            <option value="RaajBold">Raaj</option>
                                            <option value="AdhiapakMarkerMedium">Adhiapak</option>
                                            <option value="PrabhkiRegular">Prabhki</option>
                                            <option value="KarmicSanjMedium">Karmic sanj</option>
                                        </Form.Select>
                                    </div>}
                                <div className='font-siz'>
                                    <Form.Range value={gurmukhiSize} min={10} max={90} onChange={(e) => handleSizeChange(e, 'gurmukhi')} />
                                </div>
                                <div className='font-color'>
                                    {/*  <input type="color" value="#ff0000" /> */}
                                    <input type="color" value={gurmukhiColor} onChange={(e) => handleColorChange(e, 'gurmukhi')} />
                                </div>
                                <div className='font-reset'>
                                    <button className='ang-btn' onClick={(e) => { e.preventDefault(); handleResetGur(); }}>Reset</button>
                                </div>

                            </div>
                            {isPhonetic &&
                                <div className='font-itm'>
                                    <div className='font-lang'><label>{guruFont ? "Transliteration:" : "Phonetic English:"}</label></div>
                                    {guruFont === true ? null :
                                        <div className='font-name'>
                                            <Form.Select value={phoneticFont} onChange={(e) => handleFontChange(e, 'phonetic')}>

                                                <option value="arial">Default</option>
                                                <option value="Puritan20Italic">Puritan</option>
                                                <option value="AndikaBasicRegular">Andika</option>
                                                <option value="ArchitectsDaughterRegular">Architect</option>
                                                <option value="QuattrocentoRomanRegular">Quattrocento</option>
                                                <option value="DroidSansRegular">Droid Sans</option>
                                                <option value="DroidSerifBold">Droid Bold</option>
                                            </Form.Select>
                                        </div>}
                                    <div className='font-siz'>
                                        <Form.Range value={phoneticSize} min={10} max={90} onChange={(e) => handleSizeChange(e, 'phonetic')} />
                                    </div>
                                    <div className='font-color'>
                                        {/* <input type="color" value="#660826" /> */}
                                        <input type="color" value={phoneticColor} onChange={(e) => handleColorChange(e, 'phonetic')} />
                                    </div>
                                    <div className='font-reset'>
                                        <button className='ang-btn' onClick={(e) => { e.preventDefault(); handleResetPhonetic(); }}>Reset</button>
                                    </div>

                                </div>}
                            {guruFont &&
                                <div className='font-itm'>
                                    <div className='font-lang'><label>{guruFont ? "Transliteration:" : "Phonetic English:"}</label></div>
                                    {guruFont === true ? null :
                                        <div className='font-name'>
                                            <Form.Select value={phoneticFont} onChange={(e) => handleFontChange(e, 'phonetic')}>

                                                <option value="arial">Default</option>
                                                <option value="Puritan20Italic">Puritan</option>
                                                <option value="AndikaBasicRegular">Andika</option>
                                                <option value="ArchitectsDaughterRegular">Architect</option>
                                                <option value="QuattrocentoRomanRegular">Quattrocento</option>
                                                <option value="DroidSansRegular">Droid Sans</option>
                                                <option value="DroidSerifBold">Droid Bold</option>
                                            </Form.Select>
                                        </div>}
                                    <div className='font-siz'>
                                        <Form.Range value={phoneticSize} min={10} max={90} onChange={(e) => handleSizeChange(e, 'phonetic')} />
                                    </div>
                                    <div className='font-color'>
                                        {/* <input type="color" value="#660826" /> */}
                                        <input type="color" value={phoneticColor} onChange={(e) => handleColorChange(e, 'phonetic')} />
                                    </div>
                                    <div className='font-reset'>
                                        <button className='ang-btn' onClick={(e) => { e.preventDefault(); handleResetPhonetic(); }}>Reset</button>
                                    </div>

                                </div>}
                            {isHindi &&
                                <div className='font-itm'>
                                    <div className='font-lang'><label>{guruFont ? "Translation:" : "Hindi:"}</label></div>
                                    {guruFont === true ? null :
                                        <div className='font-name'>
                                            <Form.Select value={hindiFont} onChange={(e) => handleFontChange(e, 'hindi')}>
                                                <option value="arial">Default</option>
                                                <option value="JaipurRegular">Jaipur Regular</option>
                                                <option value="Gurumaa150Bold">Gurumaa Regular</option>
                                                <option value="RaghindiRegular">Raghu Regular</option>
                                                <option value="gargiMedium">Gargi Medium</option>
                                                <option value="CDACGISTYogeshNormal">Yogesh Normal</option>
                                                <option value="CDACGISTSurekhNormal">Surekh Normal</option>
                                            </Form.Select>
                                        </div>}
                                    <div className='font-siz'>
                                        <Form.Range value={hindiSize} min={10} max={90} onChange={(e) => handleSizeChange(e, 'hindi')} />
                                    </div>
                                    <div className='font-color'>
                                        {/* <input type="color" value="#017385" /> */}
                                        <input type="color" value={hindiColor} onChange={(e) => handleColorChange(e, 'hindi')} />
                                    </div>
                                    <div className='font-reset'>
                                        <button className='ang-btn' onClick={(e) => { e.preventDefault(); handleResetHindi(); }}>Reset</button>
                                    </div>

                                </div>}
                            {guruFont &&
                                <div className='font-itm'>
                                    <div className='font-lang'><label>{guruFont ? "Translation:" : "Hindi:"}</label></div>
                                    {guruFont === true ? null :
                                        <div className='font-name'>
                                            <Form.Select value={hindiFont} onChange={(e) => handleFontChange(e, 'hindi')}>
                                                <option value="arial">Default</option>
                                                <option value="JaipurRegular">Jaipur Regular</option>
                                                <option value="Gurumaa150Bold">Gurumaa Regular</option>
                                                <option value="RaghindiRegular">Raghu Regular</option>
                                                <option value="gargiMedium">Gargi Medium</option>
                                                <option value="CDACGISTYogeshNormal">Yogesh Normal</option>
                                                <option value="CDACGISTSurekhNormal">Surekh Normal</option>
                                            </Form.Select>
                                        </div>}
                                    <div className='font-siz'>
                                        <Form.Range value={hindiSize} min={10} max={90} onChange={(e) => handleSizeChange(e, 'hindi')} />
                                    </div>
                                    <div className='font-color'>
                                        {/* <input type="color" value="#017385" /> */}
                                        <input type="color" value={hindiColor} onChange={(e) => handleColorChange(e, 'hindi')} />
                                    </div>
                                    <div className='font-reset'>
                                        <button className='ang-btn' onClick={(e) => { e.preventDefault(); handleResetHindi(); }}>Reset</button>
                                    </div>

                                </div>}
                            
                                {isEnglish &&
                                <div className='font-itm'>
                                    <div className='font-lang'><label>English:</label></div>
                                    {guruFont === true ? null :
                                        <div className='font-name'>

                                        </div>}
                                    <div className='font-siz'>
                                        <Form.Range value={englishTranslitSize} min={10} max={90} onChange={(e) => handleSizeChange(e, 'englishTranslit')} />
                                    </div>
                                    <div className='font-color'>
                                        {/*  <input type="color" value="#ff0000" /> */}
                                        <input type="color" value={englishTranslitColor} onChange={(e) => handleColorChange(e, 'englishTranslit')} />
                                    </div>
                                    <div className='font-reset'>
                                        <button className='ang-btn' onClick={(e) => { e.preventDefault(); handleResetEnglishTranslit(); }}>Reset</button>
                                    </div>

                                </div>}

                                {isShahmukhi &&
                                <div className='font-itm'>
                                    <div className='font-lang'><label>Shahmukhi:</label></div>
                                    {guruFont === true ? null :
                                        <div className='font-name'>

                                        </div>}
                                    <div className='font-siz'>
                                        <Form.Range value={shahmukhiSize} min={10} max={90} onChange={(e) => handleSizeChange(e, 'shahmukhi')} />
                                    </div>
                                    <div className='font-color'>
                                        {/*  <input type="color" value="#ff0000" /> */}
                                        <input type="color" value={shahmukhiColor} onChange={(e) => handleColorChange(e, 'shahmukhi')} />
                                    </div>
                                    <div className='font-reset'>
                                        <button className='ang-btn' onClick={(e) => { e.preventDefault(); handleResetShahmukhi(); }}>Reset</button>
                                    </div>

                                </div>}
                                {guruFont === true ? null :
                                isSantSinghTransln &&
                                <div className='font-itm'>
                                    {/* <div className='font-lang'><label>English Translation:</label></div> */}
                                    <div className='font-lang'><label>Translation:</label></div>

                                    <div className='font-name'>
                                       {/*  <Form.Select value={englishFont} onChange={(e) => handleFontChange(e, 'english')}>
                                            <option value="arial">
                                                Default
                                            </option>
                                            <option value="Puritan20Italic">Puritan</option>
                                            <option value="AndikaBasicRegular">Andika</option>
                                            <option value="ArchitectsDaughterRegular">Architect</option>
                                            <option value="QuattrocentoRomanRegular">Quattrocento</option>
                                            <option value="DroidSansRegular">Droid Sans</option>
                                            <option value="DroidSerifBold"> Droid Bold</option>
                                        </Form.Select> */}
                                    </div>
                                    <div className='font-siz'>
                                        <Form.Range value={englishSize} min={10} max={90} onChange={(e) => handleSizeChange(e, 'english')} />
                                    </div>
                                    <div className='font-color'>
                                        {/* <input type="color" value="#4a6607" /> */}
                                        <input type="color" value={englishColor} onChange={(e) => handleColorChange(e, 'english')} />
                                    </div>
                                    <div className='font-reset'>
                                        <button className='ang-btn' onClick={(e) => { e.preventDefault(); handleResetEng(); }}>Reset</button>
                                    </div>

                                </div>}

                            {attribStyle === true ?
                                <div className='font-itm'>
                                    <div className='font-lang'><label>Attributes:</label></div>
                                    {guruFont === true ? null :
                                        <div className='font-name'>
                                            {/* <Form.Select value={attribFont} onChange={(e) => handleFontChange(e, 'attributes')}>
                                            <option value="AnmolUniBani">Default</option>
                                            <option value="RaajaaMediumMedium">Raajaa</option>
                                            <option value="RaajaaBoldBold">Raajaa Bold</option>
                                            <option value="RaajBold">Raaj</option>
                                            <option value="AdhiapakMarkerMedium">Adhiapak</option>
                                            <option value="PrabhkiRegular">Prabhki</option>
                                            <option value="KarmicSanjMedium">Karmic sanj</option>
                                        </Form.Select> */}
                                        </div>}
                                    <div className='font-siz'>
                                        <Form.Range value={attribSize} min={10} max={90} onChange={(e) => handleSizeChange(e, 'attributes')} />
                                    </div>
                                    <div className='font-color'>
                                        {/*  <input type="color" value="#ff0000" /> */}
                                        <input type="color" value={attribColor} onChange={(e) => handleColorChange(e, 'attributes')} />
                                    </div>
                                    <div className='font-reset'>
                                        <button className='ang-btn' onClick={(e) => { e.preventDefault(); handleResetAttrib(); }}>Reset</button>
                                    </div>

                                </div> : null}
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FontChange;
