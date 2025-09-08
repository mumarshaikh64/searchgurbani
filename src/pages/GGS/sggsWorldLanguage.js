// import '../../assets/css/dashboard.css';
import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from "react-router";
import { Link, useLocation } from "react-router-dom";
import Axios, { all } from 'axios';
import { API } from "../../config/api";
import { ApiHelper } from '../../helpers/ApiHelper';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import facebook from '../../assets/img/facebook.svg';
import twitter from '../../assets/img/twitter.svg';
import youtube from '../../assets/img/youtube.svg';
import telegram from '../../assets/img/telegram.svg';
import whatsapp from '../../assets/img/whatsapp.svg';
import mail from '../../assets/img/mail.svg';
import Switch from 'react-switch';
import FontChange from '../../components/FontChange';
import Spinner from '../../components/Spinner';
import { Helmet } from "react-helmet";
import HelmetWrapper from '../../components/CommonHelmet';
import { usePathname } from "next/navigation";
import Image from 'next/image';

function SggsInWorldLanguage() {
    const [loader, setLoader] = useState(false);
    // const location = useLocation();
    const pathname = usePathname();
    const shareUrl = 'https://searchgurbani.com';
    const title = 'Search Gurbani : Gurbani Website';
    const [openTransln, setOpenTransln] = useState(false);
    const [isSocialShare, setIsSocialShare] = useState(false);
    const [isSplitView, setIsSplitView] = useState(false);
    const [isPunctuation, setIsPunctuation] = useState(false);
    const [isPunctuationAssist, setIsPunctuationAssist] = useState(false);
    const [isLareevar, setIsLareevar] = useState(false);
    const [isLareevarAssist, setIsLareevarAssist] = useState(false);
    const [openTranslitran, setOpenTranslitran] = useState(false);
    const [translnArr, setTranslnArr] = useState([]);
    const [translitranArr, setTranslitranArr] = useState([]);
    const [worldAngArr, setWorldAngArr] = useState([]);
    const [allData, setAllData] = useState([]);
    const [angNo, setAngNo] = useState("1");
    const [isGurumukhi, setIsGurumukhi] = useState(true);
    const [selectedTiLanguages, setSelectedTiLanguages] = useState(new Set());
    const [selectedTaLanguages, setSelectedTaLanguages] = useState(new Set());
    const [fontSectn, setFontSectn] = useState(false);
    const [guruFont, setGuruFont] = useState(true);
    const [gurmukhiSize, setGurmukhiSize] = useState('18');
    const [phoneticSize, setPhoneticSize] = useState('18');
    const [hindiSize, setHindiSize] = useState('18');
    const [englishSize, setEnglishSize] = useState('18');
    const [gurmukhiColor, setGurmukhiColor] = useState('#333333');
    const [phoneticColor, setPhoneticColor] = useState('#06035b');
    const [hindiColor, setHindiColor] = useState('#880808');
    const [englishColor, setEnglishColor] = useState('#366732');
    const [isCenter, setIsCenter] = useState(false);
    let allText = '';
    useEffect(() => {
        getWorldAng("1");
        getTranslation();
        getTransliteration();
    }, [])
    const getWorldAng = async (pageNo) => {
        setLoader(true)
        await ApiHelper.get(API.getAngWorld + "?page_no=" + pageNo)
            .then((resData) => {
                setLoader(false);
                console.log('World Ang', resData.data.lines);
                setWorldAngArr(resData.data.lines);
                setAllData(resData.data)
            })
            .catch((err) => {
                setLoader(false);
                console.log(err, 'err');
            });
    }
    const getTranslation = async () => {
        setLoader(true)
        await ApiHelper.get(API.getTranslations)
            .then((resData) => {
                setLoader(false);
                console.log('Translation', resData.data);
                setTranslnArr(resData.data);
                const defaultChecked = resData.data.find(lang => lang.language === 'Hindi');
                if (defaultChecked) {
                    setSelectedTaLanguages(new Set([defaultChecked.id]));
                }

            })
            .catch((err) => {
                setLoader(false);
                console.log(err, 'err');
            });
    }
    const getTransliteration = async () => {
        setLoader(true)
        await ApiHelper.get(API.getTrasliterations)
            .then((resData) => {
                setLoader(false);
                console.log('Transliteration', resData.data);
                setTranslitranArr(resData.data);
                const defaultChecked = resData.data.find(lang => lang.language === 'Devanagari');
                if (defaultChecked) {
                    setSelectedTiLanguages(new Set([defaultChecked.id]));
                }
            })
            .catch((err) => {
                setLoader(false);
                console.log(err, 'err');
            });
    }
    const handleSocialShare = (nextChecked) => {
        setIsSocialShare(nextChecked);
    };
    const handleReset = () => {
        setIsGurumukhi(true)
        setSelectedTiLanguages(new Set([59]));
        setSelectedTaLanguages(new Set([23]));
    }
    const handleBegin = () => {
        setAngNo(1);
        getWorldAng(1);
    }
    const handleBack = (ang) => {
        let no = parseInt(ang) - 1
        setAngNo(no.toString());
        getWorldAng(no.toString());
    }
    const handleNext = (ang) => {
        if (angNo > 1) {
            let no = parseInt(ang) + 1
            setAngNo(no.toString());
            getWorldAng(no.toString());
        }
        else {
            let no = 1 + 1
            setAngNo(no.toString());
            getWorldAng(no.toString());
        }

    }
    const handleLast = () => {
        setAngNo(1430);
        getWorldAng(1430);
    }
    const handleTransClose = () => setOpenTransln(false);
    const handleTranslitranClose = () => setOpenTranslitran(false);
    const handleCheckboxChangeTa = (id) => {
        setSelectedTaLanguages(prevSelected => {
            const newSelected = new Set(prevSelected);
            if (newSelected.has(id)) {
                newSelected.delete(id);
            } else {
                newSelected.add(id);
            }
            return newSelected;
        });
    };
    const handleCheckboxChange = (id) => {
        setSelectedTiLanguages(prevSelected => {
            const newSelected = new Set(prevSelected);
            if (newSelected.has(id)) {
                newSelected.delete(id);
            } else {
                newSelected.add(id);
            }
            return newSelected;
        });
    };
    // ----------------------old-------------------------------
    // const handleShareModal = (platform) => {
    //     let shareLink = '';

    //     switch (platform) {
    //         case 'facebook':
    //             shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl + location.pathname)}&t=${encodeURIComponent(title)}`;
    //             break;
    //         case 'twitter':
    //             shareLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl + location.pathname)}&text=${encodeURIComponent(title)}`;
    //             break;
    //         case 'youtube':
    //             // YouTube does not have a direct sharing link for a URL, this is just an example
    //             shareLink = `https://www.youtube.com`;
    //             break;
    //         case 'telegram':
    //             shareLink = `https://telegram.me/share/url?url=${encodeURIComponent(shareUrl + location.pathname)}&text=${encodeURIComponent(title)}`;
    //             break;
    //         case 'whatsapp':
    //             shareLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(title + " " + shareUrl + location.pathname)}`;
    //             break;
    //         case 'mail':
    //             shareLink = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(shareUrl + location.pathname)}`;
    //             break;
    //         default:
    //             break;
    //     }

    //     window.open(shareLink, '_blank');

    // };
    // ------------------------new---------------------------
    const handleShareModal = (platform) => {
        const fullUrl = shareUrl + pathname;
        let shareLink = "";

        switch (platform) {
            case "facebook":
                shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}&t=${encodeURIComponent(title)}`;
                break;
            case "twitter":
                shareLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(title)}`;
                break;
            case "youtube":
                shareLink = `https://www.youtube.com`;
                break;
            case "telegram":
                shareLink = `https://telegram.me/share/url?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(title)}`;
                break;
            case "whatsapp":
                shareLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(title + " " + fullUrl)}`;
                break;
            case "mail":
                shareLink = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(fullUrl)}`;
                break;
            default:
                break;
        }

        if (typeof window !== "undefined") {
            window.open(shareLink, "_blank");
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(allText).then(() => {
            alert('Text copied to clipboard!');
        }).catch(err => {
            console.log('Something went wrong', err);
        });
    };
    return (
        <div>
            {/* <HelmetWrapper
                title={`Sri Guru Granth Sahib Ji World -: Ang : ${angNo} -: ਸ਼੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ -: searchgurbani.com`}
                description={`Explore,Share of World Ang  -${angNo} - of Sri Guru Granth Sahib ji at searchgurbani.com .`}
                keywords="guru granth sahib, granth,  sikh scripture, sikhism + + +"
                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                url={window.location.href}
            /> */}
            {loader && <Spinner />}
            <section className='inner-actions p-4' >
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 p-0'>
                            <div className='in-act-wrapper'>
                                <h1 className='inner-heading' >Sri Guru Granth Sahib </h1>
                                <div className='actions-mains'>
                                    <div className='audio-features mt-0 me-3'>
                                        <button className='ang-btn' onClick={(e) => { e.preventDefault(); isSplitView === false ? setIsSplitView(true) : setIsSplitView(false) }}>Split</button>
                                        <button className='ang-btn' onClick={(e) => { e.preventDefault(); isCenter === false ? setIsCenter(true) : setIsCenter(false) }}>Center</button>
                                    </div>
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
                                    <button className='action-btn-main' onClick={() => window.print()} ><i className="bi bi-printer"></i></button>
                                    <button className='action-btn-main' onClick={copyToClipboard} /* onClick={isSplitView ? handleCopyTextSplit : handleCopyText} */><i className="bi bi-copy"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-12 d-flex-justify-content-end ang-ang'>


                        </div>
                        <div className='col-lg-12 d-flex-justify-content-end ang-ang mt-2'>
                            <div className='go-to-ang position-relative d-none'>

                            </div>
                            <div className='audio-features'>
                                <button className='ang-btn' onClick={(e) => { e.preventDefault(); fontSectn === false ? setFontSectn(true) : setFontSectn(false) }} >Font</button>
                                <button className='ang-btn' onClick={(e) => { e.preventDefault(); setOpenTranslitran(true) }}>Transliteration</button>
                                {/* <button className='ang-btn' onClick={(e) => { e.preventDefault(); isGurumukhi ? setIsGurumukhi(false) : setIsGurumukhi(true) }}>Gurumukhi</button> */}
                                <button className='ang-btn' onClick={(e) => { e.preventDefault(); setOpenTransln(true) }}>Translation</button>
                                <button className='ang-btn' onClick={(e) => { e.preventDefault(); handleReset() }}>Reset</button>
                            </div>
                            <div className='d-flex'>
                                <div className='go-to-ang position-relative'>
                                    <div className='form-group'>
                                        <input type='text' placeholder='go to ang' className='form-control'
                                            onChange={(e) => setAngNo(e.target.value)} value={angNo} ></input>
                                        <button className='ang-btn' onClick={(e) => { e.preventDefault(); getWorldAng(angNo); }}>Go</button>
                                    </div>
                                </div>
                                <div className='control-btn' >
                                    {angNo > 1 &&
                                        <>
                                            <button className='ang-btn' style={{ background: 'var(--current-color, var(--color-1))', color: '#fff' }} onClick={(e) => { e.preventDefault(); handleBegin() }}>Begin</button>
                                            <button className='ang-btn' style={{ background: 'var(--current-color, var(--color-1))', color: '#fff' }} onClick={(e) => { e.preventDefault(); handleBack(angNo); }}>Back</button>
                                        </>
                                    }
                                    {angNo < 1430 &&
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
            {fontSectn ?
                <FontChange
                    gurmukhiSize={gurmukhiSize}
                    phoneticSize={phoneticSize}
                    hindiSize={hindiSize}
                    englishSize={englishSize}
                    gurmukhiColor={gurmukhiColor}
                    phoneticColor={phoneticColor}
                    hindiColor={hindiColor}
                    englishColor={englishColor}
                    setGurmukhiSize={setGurmukhiSize}
                    setPhoneticSize={setPhoneticSize}
                    setHindiSize={setHindiSize}
                    setEnglishSize={setEnglishSize}
                    setGurmukhiColor={setGurmukhiColor}
                    setPhoneticColor={setPhoneticColor}
                    setHindiColor={setHindiColor}
                    setEnglishColor={setEnglishColor}
                    guruFont={guruFont}
                    setGuruFont={setGuruFont}
                />
                : null}
            <section>
                <div className='container'>
                    <div className='d-flex flex-column'>
                        <div className='ang-display mt-3'>
                            <h1>Displaying Ang {allData.current_page} of 1430</h1>
                            {isSplitView === false ?
                                worldAngArr.map((page, index) => {
                                    allText += `${page.text}\n\n`;

                                    if (selectedTiLanguages.size > 0) {
                                        page.ti?.forEach(tiItem => {
                                            if (selectedTiLanguages.has(tiItem.language_id)) {
                                                allText += `${tiItem.text}\n\n`;
                                            }
                                        });
                                    }

                                    if (selectedTaLanguages.size > 0) {
                                        page.ta?.forEach(taItem => {
                                            if (selectedTaLanguages.has(taItem.language_id)) {
                                                allText += `${taItem.text}\n\n`;
                                            }
                                        });
                                    }
                                    allText += `${page.attributes}\n\n`;
                                    return (
                                        <div className='ang-wrapper'>
                                            <div className={`ang-itm ${isCenter && 'center-align'}`} style={{ backgroundColor: index % 2 === 0 ? '#F7FDE9' : 'white' }}>
                                                <div style={{ fontSize: `${gurmukhiSize}px`, color: gurmukhiColor }}>{page.text}</div>
                                                {selectedTiLanguages.size > 0 && page.ti?.map(tiItem => (
                                                    selectedTiLanguages.has(tiItem.language_id) && <div key={tiItem.id} style={{ fontSize: `${phoneticSize}px`, color: phoneticColor }}>{tiItem.text}</div>
                                                ))}
                                                {selectedTaLanguages.size > 0 && page.ta?.map(taItem => (
                                                    selectedTaLanguages.has(taItem.language_id) && <div key={taItem.id} style={{ fontSize: `${hindiSize}px`, color: hindiColor }}>{taItem.text}</div>
                                                ))}
                                                {isSocialShare ?
                                                    <div className='socia-share' style={{ marginLeft: '600px' }}>
                                                        <ul>
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
                                                <h2 className='lang-5' >{page.attributes}</h2>
                                            </div>

                                        </div>
                                    )
                                }) :
                                <div className='ang-wrapper'>

                                    <div className={`ang-itm ${isCenter && 'center-align'}`} >
                                        {worldAngArr.map((page, index) => (
                                            isGurumukhi ? <div style={{ fontSize: `${gurmukhiSize}px`, color: gurmukhiColor }}>{page.original}</div> : null

                                        ))}
                                    </div>


                                    <div className={`ang-itm ${isCenter && 'center-align'}`} >
                                        {worldAngArr.map((page, index) => (
                                            selectedTiLanguages.size > 0 && page.ti?.map(tiItem => (
                                                selectedTiLanguages.has(tiItem.language_id) &&
                                                <div key={tiItem.id} style={{ fontSize: `${hindiSize}px`, color: hindiColor }}>{tiItem.text}</div>
                                            ))
                                        ))}
                                    </div>
                                    <div className={`ang-itm ${isCenter && 'center-align'}`} >
                                        {worldAngArr.map((page, index) => (
                                            selectedTaLanguages.size > 0 && page.ta?.map(taItem => (
                                                selectedTaLanguages.has(taItem.language_id) &&
                                                <div key={taItem.id} style={{ fontSize: `${phoneticSize}px`, color: phoneticColor }}>{taItem.text}</div>
                                            ))
                                        ))}
                                    </div>
                                    <div className={`ang-itm ${isCenter && 'center-align'}`} >
                                        {worldAngArr.map((page, index) => (
                                            <h2 className='lang-5' >{page.attributes}</h2>
                                        ))}
                                    </div>

                                </div>
                            }
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
                                    onChange={(e) => setAngNo(e.target.value)} value={angNo} ></input>
                                <button className='ang-btn' onClick={(e) => { e.preventDefault(); getWorldAng(angNo); }}>Go</button>
                            </div>
                        </div>
                        <div className='navigation-btn-audio'>
                            {angNo > 1 &&
                                <>
                                    <button className='ang-btn' style={{ background: 'var(--current-color, var(--color-1))', color: '#fff' }} onClick={(e) => { e.preventDefault(); handleBegin() }}>Begin</button>
                                    <button className='ang-btn' style={{ background: 'var(--current-color, var(--color-1))', color: '#fff' }} onClick={(e) => { e.preventDefault(); handleBack(angNo); }}>Back</button>
                                </>
                            }
                            {angNo < 1430 &&
                                <>
                                    <button className='ang-btn' style={{ background: 'var(--current-color, var(--color-1))', color: '#fff' }} onClick={(e) => { e.preventDefault(); handleNext(angNo) }}>Next</button>
                                    <button className='ang-btn' style={{ background: 'var(--current-color, var(--color-1))', color: '#fff' }} onClick={(e) => { e.preventDefault(); handleLast(); }}>Last</button>
                                </>}
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={openTransln} onHide={handleTransClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Translation Choose Languages</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='transln'>
                        <ul>
                            {translnArr.map((item, index) => (
                                <li>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                                            checked={selectedTaLanguages.has(item.id)}
                                            onChange={() => handleCheckboxChangeTa(item.id)} />
                                        <label className="form-check-label text-dark" for="flexCheckDefault" style={{ fontWeight: '500' }}>
                                            {item.language}
                                        </label>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                </Modal.Body>
            </Modal>
            <Modal show={openTranslitran} onHide={handleTranslitranClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Transliteration Choose Languages</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='transln'>
                        <ul>
                            {translitranArr.map((item, index) => (
                                <li>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                                            checked={selectedTiLanguages.has(item.id)}
                                            onChange={() => handleCheckboxChange(item.id)} />
                                        <label className="form-check-label text-dark" for="flexCheckDefault" style={{ fontWeight: '500' }}>
                                            {item.language}
                                        </label>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                </Modal.Body>
            </Modal>
        </div>
    )
}

export default SggsInWorldLanguage