// import '../assets/css/dashboard.css';
// import '../assets/css/style.css';
import React, { useEffect, useState } from 'react';
// import { useNavigate, useOutletContext } from "react-router";
import { useRouter } from "next/router";
// import { Link, useLocation } from "react-router-dom";
import Link from "next/link";
import rightimg from '../assets/img/right-img.svg';
import astore from '../assets/img/apple-store.svg';
import pstore from '../assets/img/play-store.svg';
import mobilephn from '../assets/img/mobile.svg';
import inerlogo from '../assets/img/iner-logo-mid.svg';
import applelogo from '../assets/img/apple_icon.svg';
import windowlogo from '../assets/img/windows_icon.svg';
import hand from '../assets/img/hand.svg';
import bannarone from '../assets/img/banner/03.jpg';
import bannartwo from '../assets/img/banner/01.jpg';
import bannarthree from '../assets/img/banner/05.jpg';
import bannarfour from '../assets/img/banner/06.jpg';
import Form from 'react-bootstrap/Form';
import 'animate.css';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios';
import { API } from "../config/api";
import { ApiHelper } from '../helpers/ApiHelper';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import charMap from '../components/GurumukhiAscii';
import VirtualKeyboard from '../components/VirtualKeyboard';
import Switch from 'react-switch';
import DataTable from 'react-data-table-component';
import HomeSearch from './homeSearch';
import { Helmet } from "react-helmet";
import Carousel from 'react-bootstrap/Carousel';
import Spinner from '../components/Spinner';
import HelmetWrapper from '../components/CommonHelmet';
import Image from 'next/image';
const initialFormState = {
    translation: {
        ggs: {
            eng_mms: false,
            punj_mms: false,
            ggd: false,
            ft: false,
            fth: false,
            ss: false,
        },
        bgv: {
            teeka: false,
            teeka_roman: false,
            teeka_hindi: false,
        },
        dg: {
            teeka: false,
        },
        ks: {
            teeka: false,
            teeka_roman: false,
            teeka_hindi: false,
        },
        bnl: {
            teeka: false,
            teekahindi: false,
        },
        english: true,
    },
    transliteration: {
        roman: true,
        english: false,
        hindi: false,
        shahmukhi: false,
        main_lang: true,
        lareevar: false,
        lareevar_assist: false,
        punctuation: false,
        punctuation_assist: false,
    },
    displayMode: {
        split_view: false,
        center_align: false,
        dark_mode: false,
    },
    font: {
        gurmukhi: {
            name: 'RaajaaMediumMedium',
            color: '#333333',
            size: 24,
        },
        english: {
            name: 'arial',
            color: '#366732',
            size: 18,
        },
        hindi: {
            name: 'arial',
            color: '#880808',
            size: 18,
        },
        phonetic: {
            name: 'AndikaBasicRegular',
            color: '#06035b',
            size: 18,
        },
        attributes: {
            name: 'AnmolUniBani',
            color: '#670464',
            size: 16,
        },
        englishTranslit: {
            name: 'arial',
            color: '#0882BF',
            size: 18,
        },
        shahmukhi: {
            name: 'arial',
            color: '#BF6008',
            size: 18,
        }
    },
    mouseover_gurmukhi_dic: false,
    show_attributes: true,
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
        audio1: false,
        audio2: false,
        audio3: false,
        audio4: true,
    }
};
const sgFormState = {
    showEnglish: false,
    showPhonetic: false,
    showHindi: false,
};

function Home() {
    // const navigate = useNavigate();
    const router = useRouter();
    const [isYoutube, setIsYoutube] = useState(false);
    const [loader, setLoader] = useState(false);
    const [isAutocomplete, setIsAutocomplete] = useState(false);
    const [isKeyboard, setIsKeyBoard] = useState(true);
    const [selectedOption, setSelectedOption] = useState('FL_begin');
    const [selectedLanguage, setSelectedLanguage] = useState('ROMAN');
    const [searchData, setSearchData] = useState([]);
    const [englishInput, setEnglishInput] = useState(''); // English input
    const [displayedInput, setDisplayedInput] = useState('');
    const [authorArr, setAuthorArr] = useState([]);
    const [ragaArr, setRagaArr] = useState([]);
    const [categoryArr, setCategoryArr] = useState([]);
    const [isfilter, setIsFilter] = useState(true);
    const [selectedAuthor, setSelectedAuthor] = useState('');
    const [scripture, setScripture] = useState('ggs');
    const [pageFrom, setPageFrom] = useState('1');
    const [pageTo, setPageTo] = useState('1430');
    const [searchAllResult, setSearchAllResult] = useState([]);
    const [selectedRaag, setSelectedRaag] = useState('');
    const [selectedCat, setSelectedCat] = useState('');
    const [activeTab, setActiveTab] = useState('Granth');
    const [videoId, setVideoId] = useState('');
    const [datas, setDatas] = useState([]);
    const [head1, setHead1] = useState('');
    const [content1, setContent1] = useState('');
    const [head2, setHead2] = useState('');
    const [content2, setContent2] = useState('');
    const [head3, setHead3] = useState('');
    const [content3, setContent3] = useState('');
    const [head4, setHead4] = useState('');
    const [content4, setContent4] = useState('');
    const [content5, setContent5] = useState('');
    const [banners, setBanners] = useState([]);
    const [tag, setTag] = useState('');
    const [form, setForm] = useState(initialFormState);
    const [sgForm, setSgForm] = useState(sgFormState);

    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [showInstallButton, setShowInstallButton] = useState(false);
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const scriptureToTabEventKey = {
        ggs: 'Granth',
        ak: 'Keertan',
        bvg: 'Vaaran',
        dg: 'Dasam',
        ks: 'Savaiye',
        bnl: 'Nand',
    };
    useEffect(() => {
        localStorage.setItem('BnlType', JSON.stringify('ghazal'));
        let vaar = 1;
        localStorage.setItem('BgVaar', JSON.stringify(vaar));
        const savedForm = localStorage.getItem('Preference');
        console.log('###', initialFormState)
        /* if (savedForm) {
            localStorage.setItem('Preference', JSON.stringify(form));
          }  */
        //localStorage.setItem('Preference', JSON.stringify(initialFormState));
        console.log('TESTING')
        if (!savedForm) {
            localStorage.setItem('Preference', JSON.stringify(form));
        }
        const sgForm = localStorage.getItem('sgPreference');
        console.log('************', sgForm)
        if (!sgForm) {
            localStorage.setItem('sgPreference', JSON.stringify(sgFormState));
        }
        getData();
        getBanner();
        getAuthors();
        getRaga();
        getCategory();

        const handleBeforeInstallPrompt = (e) => {
            // Prevent the default mini-infobar
            e.preventDefault();
            // Save the event for later
            setDeferredPrompt(e);
            // Show your custom install UI
            setShowInstallButton(true);
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };

    }, [])

    useEffect(() => {

        // Set a timer to show the pop-up after 5 seconds
        const timer = setTimeout(() => {
            //setIsPopupVisible(true);
            const hasSeenPopup = localStorage.getItem('hasSeenPopup');

            if (!hasSeenPopup) {
                // Show the pop-up if it's the first time
                setIsPopupVisible(true);

                // Set the flag in localStorage
                localStorage.setItem('hasSeenPopup', 'true');
            }
        }, 8000);

        // Cleanup the timer when the component unmounts
        return () => clearTimeout(timer);
    }, []);
    const getData = async () => {
        await ApiHelper.post(API.getHomeData)
            .then((resData) => {
                console.log('INTRO', resData.data);
                setDatas(resData.data)
                setHead1(resData.data[0].HEADING1);
                setContent1(resData.data[0].CONTENT1);
                setHead2(resData.data[0].HEADING2);
                setContent2(resData.data[0].CONTENT2);
                setHead3(resData.data[0].HEADING3);
                setContent3(resData.data[0].CONTENT3);
                setHead4(resData.data[0].HEADING4);
                setContent4(resData.data[0].CONTENT4);
                setContent5(resData.data[0].CONTENT5);
                setTag(resData.data[0].TAG);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const getBanner = async () => {
        setLoader(true)
        await ApiHelper.post(API.getBanner)
            .then((resData) => {
                setLoader(false)
                console.log('BANNER', resData.data.data);
                setBanners(resData.data.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const getAuthors = async () => {
        setLoader(true)
        await ApiHelper.get(API.getAuthor)
            .then((resData) => {
                setLoader(false);
                console.log('Author', resData);
                setAuthorArr(resData.data);
            })
            .catch((err) => {
                setLoader(false);
                console.log(err, 'err');
            });
    }
    const getRaga = async () => {
        setLoader(true)
        await ApiHelper.get(API.getRagas)
            .then((resData) => {
                setLoader(false);
                console.log('Raga', resData);
                setRagaArr(resData.data);
            })
            .catch((err) => {
                setLoader(false);
                console.log(err, 'err');
            });
    }
    const getCategory = async () => {
        setLoader(true)
        await ApiHelper.get(API.getAllCategory)
            .then((resData) => {
                setLoader(false);
                console.log('category', resData.data);
                setCategoryArr(resData.data);
            })
            .catch((err) => {
                setLoader(false);
                console.log(err, 'err');
            });
    }

    const handleInstallClick = () => {
        if (deferredPrompt) {
            // Show the native install prompt
            deferredPrompt.prompt();
            // Wait for the user to respond to the prompt
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the install prompt');
                } else {
                    console.log('User dismissed the install prompt');
                }
                // Clear the saved prompt
                setDeferredPrompt(null);
                setShowInstallButton(false);
                setIsPopupVisible(false);
            });
        }
    };
    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
        console.log('Selected language:', event.target.value);
        setEnglishInput('');
        setDisplayedInput('');
    };
    const transliterateToGurumukhi = (input) => {
        return input
            .split('')
            .map((char) => charMap[char.toLowerCase()] || charMap[char.toUpperCase()] || char)
            .join('');
    };
    const handleInputChange = (e) => {
        const input = e.target.value;
        if (selectedLanguage === 'PUNJABI-ASC') {
            // Check if the input length has decreased (backspace)
            if (input.length < displayedInput.length) {
                const newEnglishInput = englishInput.slice(0, -1);
                setEnglishInput(newEnglishInput);
                setDisplayedInput(transliterateToGurumukhi(newEnglishInput));
            } else {
                // Append the new character to the previous input
                const newChar = input[input.length - 1];
                const newEnglishInput = englishInput + newChar;
                setEnglishInput(newEnglishInput);
                setDisplayedInput(transliterateToGurumukhi(newEnglishInput));
            }
        } else {
            setDisplayedInput(input);
        }
    };
    const handleItemClick = (item) => {
        setDisplayedInput(item.word);  // Set the selected word to input field
        setSearchData([]);  // Clear the dropdown
        setIsAutocomplete(false);
        getSearchResult(item.word);
    };
    const addChar = (char) => {
        setDisplayedInput((prevValue) => prevValue + char);
    };
    useEffect(() => {
        if (displayedInput !== "" && isAutocomplete === true) {
            getSearchWords();
            getSearchResult(selectedLanguage === 'PUNJABI-ASC' ? englishInput : displayedInput)
        }
        else if (displayedInput !== "" && isAutocomplete === false) {
            getSearchResult(selectedLanguage === 'PUNJABI-ASC' ? englishInput : displayedInput)
        }
        else {
            setSearchData([])
        }
        /* if (displayedInput === "") {
            setSearchData([])
        } */
    }, [displayedInput])
    useEffect(() => {
        if (englishInput === "") {
            setSearchData([])
        }
    }, [englishInput])

    const getSearchWords = async () => {
        setLoader(true)
        const params = new FormData();
        params.append('q', selectedLanguage === 'PUNJABI-ASC' ? englishInput : displayedInput);
        params.append('searchtype', selectedOption);
        params.append('language', selectedLanguage);
        params.append('ggs', 'true');
        params.append('ak', 'true');
        params.append('bgv', 'true');
        params.append('dg', 'true');
        params.append('ks', 'true');
        params.append('bnl', 'true')

        console.log('para', params)
        /* await ApiHelper.post(API.uploadFile, params) */
        await Axios.post(API.getAllSearchWords, params, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then((resData) => {
                setLoader(false)
                console.log('getSearch', resData.data.allwords);
                setSearchData(resData.data.allwords)
            })
            .catch((err) => {
                setLoader(false)
                console.log(err);
            })
    }
    const handleFilter = (nextChecked) => {
        setIsFilter(nextChecked);
    };
    const getSearchResult = async (key) => {
        setLoader(true)
        const params = new FormData();
        params.append('start', '0');
        params.append('length', '20');
        params.append('Searchtype', selectedOption);
        params.append('language', selectedLanguage);
        params.append('scripture', scripture);
        params.append('SearchData', key ? key : displayedInput);
        params.append('author', selectedAuthor);
        params.append('raag', selectedRaag);
        params.append('page_from', pageFrom);
        params.append('page_to', pageTo)
        params.append('bnlSelect', selectedCat)

        console.log('para', params)
        /* await ApiHelper.post(API.uploadFile, params) */
        await Axios.post(API.getSearchData, params, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then((resData) => {
                setLoader(false)
                console.log('getSearchRESULT', resData.data.data);
                setSearchAllResult(resData.data.data)
            })
            .catch((err) => {
                setLoader(false)
                console.log(err);
            })
    }
    const columns = [
        {
            name: 'ID',
            selector: 'serialNumber',
            sortable: false,
            cell: (row, index) => <div>{index + 1}</div>,
            width: '69px'
        },
        {
            name: "Phonetic Roman",
            selector: row => row.translit,
        },
        {
            name: "Gurumukhi",
            selector: row => row.punjabi,
        },
        {
            name: "",
            cell: (row) => (
                <div className="btn-dis">
                    <button
                        className="ang-btn"
                        onClick={() => router.push("/" + row.pageLink)}
                    >
                        Go to page
                    </button>
                </div>
                // <div className='btn-dis'>
                //     <button className='ang-btn'
                //         onClick={() => navigate('/' + `${row.pageLink}`)}>Go to page</button>
                // </div>
            )
        },
    ]
    const customStyleTable = {
        head: {
            style: {
                fontSize: '15px',
                fontWeight: 500,
                backgroundColor: "#F5F5F5"
            },
        },
        headRow: {
            style: {
                backgroundColor: '#66666',
                minHeight: '52px',
                borderBottomWidth: '1px',
                borderBottomStyle: 'solid',
            },
        },
        rows: {
            style: {
                position: 'relative',
                cursor: 'pointer', // Change cursor to pointer for the whole row
            },
        },
    };
    const handleClick = (row) => {
        console.log('ROWWWW', row.shabadlink)
        /* setRowItem(row); */
        // navigate('/' + `${row.shabadlink}`)
        router.push('/' + row.shabadlink)

    }
    useEffect(() => {
        setActiveTab(scriptureToTabEventKey[scripture]);
    }, [scripture]);
    const handleTabSelect = (eventKey) => {
        console.log('Selected tab:', eventKey);
        setActiveTab(eventKey);
        switch (eventKey) {
            case 'Granth':
                setPageFrom('1');
                setPageTo('1430');
                setScripture('ggs');
                break;
            case 'Keertan':
                setPageFrom('65');
                setPageTo('1040');
                setScripture('ak');
                break;
            case 'Vaaran':
                setPageFrom('1');
                setPageTo('41');
                setScripture('bvg');
                break;
            case 'Dasam':
                setPageFrom('1');
                setPageTo('2820');
                setScripture('dg');
                break;
            case 'Savaiye':
                setPageFrom('1');
                setPageTo('675');
                setScripture('ks');
                break;
            case 'Nand':
                setPageFrom('1');
                setPageTo('150');
                setScripture('bnl');
                break;
            default:
                break;
        }
    };
    useEffect(() => {
        if (scripture) {
            getSearchResult(selectedLanguage === 'PUNJABI-ASC' ? englishInput : displayedInput);
        }
    }, [scripture, pageFrom, pageTo]);
    const handleYoutubeClose = () => setIsYoutube(false);
    const handleYoutubeShow = () => setIsYoutube(true);
    const getMostRecentVideoId = async () => {
        const playlistId = 'UUtMzmAmF_zS3ryeADetzzKg'; // YouTube playlist ID
        const apiKey = 'AIzaSyBMlJs853beIdarfkd-wiEX9uruS8-Lcv0'; // Your YouTube Data API key
        const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=1&playlistId=${playlistId}&key=${apiKey}`);
        const data = await response.json();
        if (data.items && data.items.length > 0) {
            return data.items[0].snippet.resourceId.videoId;
        }
        return null;
    }
    const openMostRecentVideoInNewTab = async () => {
        //setLoading(true);
        const videoId = await getMostRecentVideoId();
        if (videoId) {
            setVideoId(videoId);
            setIsYoutube(true);
            // window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
        } else {
            alert('Failed to fetch the most recent video.');
        }
        //setLoading(false);
    }

    const handleClosePopup = () => {
        setIsPopupVisible(false);
    };

    // const [url, setUrl] = useState('');

    return (
        <div>
            {/* <HelmetWrapper
                title={`Search Gurbani : Gurbani Research website`}
                description="A comprehensive web site on research and  exploration of Sri Guru Granth Sahib, Amrit Keertan Gutka, Bhai Gurdas Vaaran, Kabit Bhai Gurdaas ,Sri Dasam Granth Sahib, exegesis , Gurbani, Gurbanee vichaar"
                keywords="Gurbaanee Keertan,Gurmat Sangeet, Gurbani Kirtan,Amrit Keertan, Gurbani, Shabad Keertan,  Dasam Granth, Guru granth, granth, kabit, Bhai Gurdas, Vaaran, Varan, Mahankosh, Kosh, Hukumnama, Baanis, Japji, jaap, Sukhmani, Ardaas"
                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                url={window.location.href}
            /> */}

            {loader && <Spinner />}
            <Carousel fade >
                {banners.map((item, index) => (
                    <Carousel.Item interval={2000}>
                        <div className="overlay"></div>
                        <Image width={1200}   // must be a number
                            height={400} src={API.bannerPath + item.photo_name} className="d-block w-100" alt="Responsive image" />
                        <Carousel.Caption>
                            {/* <h3>Your Path to Spiritual Wisdom</h3> */}
                            <p>{tag}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>



            <section className='p-0' >

                {/*---first---**/}
                <div className="container">
                    <div className="second-container">
                        <div className="row ">
                            <div className="col-lg-7 abt-content">
                                <div className="px-1 py-1 align-middle">
                                    <h1 className='main-heading text-start  mt-5'>{head1}</h1>
                                    < div
                                        dangerouslySetInnerHTML={{
                                            __html: content1
                                        }}
                                    />
                                    {/* <p className='second-para  mt-4'> Sri Guru Granth Sahib is indeed unique in its thought,
                                        literary expression and the message it continues to communicate centuries after it was written.
                                        Exalted thought needs to be transported on the vehicle of language to reach the masses.
                                        Poetic expression lifts prose to a higher plane. When verse and music meld,
                                        their beauty and sweetness makes mind transcend the humdrum of rational existence.</p> */}
                                    {/* <div className=" py-2">
                                        <button type="button" className="btn btn-outline-primary second-bttn"
                                            onClick={(e) => { e.preventDefault(); navigate('/dicover-more') }}>Discover More</button>
                                    </div> */}
                                </div>
                            </div>

                            <div className="col-lg-5  mt-5 d-flex">
                                <Image width={100} height={100} src={rightimg} className="img-fluid" alt="Responsive image" />
                            </div>
                        </div>
                    </div>
                </div>
                {/*---end first---**/}

                {/*---second---**/}
                <div className="third-container bck-color mt-5" >
                    <div className="container">
                        <div className='row'>
                            <div className="my-5">
                                {/*<h2>Meet Our Expert</h2>*/}
                                < p className='third-para'
                                    dangerouslySetInnerHTML={{
                                        __html: content2
                                    }}
                                />

                                {/* {showInstallButton && (
        <div className="install-popup">
          <p>Install this app for a better experience!</p>
          <button onClick={handleInstallClick}>Install</button>
        </div>
      )} */}
                                {/* <p className='third-para'>On auspicious occasion of 321st Foundation Day of Khalsa Panth,
                                    Vaisakhi 2020, Gateway to Sikhism is proud to launch SearchGurbani.com
                                    the Fifth Edition with Instant Gurbani Search and Dynamic Prefernces for
                                    every scripture. NEW Sundar Gutka Section and SGGS World Section with
                                    Sri Guru Granth Sahib ji with 53 Translations and 22 Transliterations
                                    adapted from BaniDB and improved content and functionality under Resources
                                    . <Link to='/preferences'>Go to Site Preferences</Link> for all options available for you.</p> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/*---end second---**/}

                {/*---third---**/}
                {/* <div className="fouth-container common-padding">
                        <div className="container align-items-center d-flex justify-content-center">
                            <div className="row w-60 search-main-grd">
                                <div className="col-12">
                                    <h1 className="main-heading">Instant Gurbani Search</h1>
                                </div>
                                <p className="paragraph">
                                     Instantly search Sri Guru Granth Sahib, Amrit Keertan Gutka, Bhai Gurdas Vaaran, Sri Dasam Granth ,
                                     Kabit Bhai Gurdas and Bhai Nand Lal Bani by typing your keywords:
                                </p>
                                <div className="position-relative">
                                    <input className="form-control border-secondary py-2 search-r" type="search" placeholder='Search' />
                                        <div className="input-group-append">
                                            <button className="btn btn-outline-secondary search-divz" type="button">
                                            <i className="bi bi-search"></i>
                                            </button>
                                        </div>
                                </div>

                                <div className="filter">
                                    <div className="main-filters">
                                    <div className='row g-3'>
                                        <div className="col-lg-3">
                                            <div className="form-control auto-com-check">
                                                <label htmlFor="vehicle1" className='check-label'>Autocomplete</label>
                                                <input type="checkbox" className='checkbox' value="Bike" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-control auto-com-check">
                                                <label htmlFor="vehicle1" className='check-label'>Advance Search</label>
                                                <input type="checkbox" className='checkbox' value="Bike" />
                                            </div>
                                        </div>

                                        <div className="col-lg-3">

                                            <Form.Select aria-label="Default select example">
                                                <option selected >Return Results</option>
                                                <option value="1">First Letter Begining</option>
                                                <option value="2">First Letter Anywhere</option>
                                                <option value="3">Phrase</option>
                                             </Form.Select>
                                        </div>

                                        <div className="col-lg-3">
                                            <Form.Select aria-label="Default select example">
                                                <option selected>Find results in language</option>
                                                <option value="1">Phonetic Roman</option>
                                                <option value="2">Gurumukhi ASCII</option>
                                                <option value="3">Gurumukhi</option>
                                            </Form.Select>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                <HomeSearch advanceSearch="true" />
                {/*---end third---**/}

                <section className='gurbani-video' >
                    <div className='container'>
                        <div className='row w-100'>
                            <div className='video-wrapper'>
                                <h1 className='main-heading home-main-hed text-light' >Gurbani Videos</h1>
                                <Link href="#" className='play' onClick={openMostRecentVideoInNewTab}><i className="bi bi-play-circle"></i>Play Video</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='gurbani-Hukumnamas p-5' >
                    <div className='container'>
                        <div className='row '>
                            <div className='video-wrapper'>
                                <h1 className='main-heading hum-head text-light' >Hukumnamas</h1>
                                <div className='huk-link' >
                                    <Link href="#" className='play' onClick={(e) => { e.preventDefault(); navigate('/hukum') }}>Harmandir Sahib <i className="me-5 bi bi-arrow-right-circle"></i></Link>
                                    <Link href="#" className='play' onClick={(e) => { e.preventDefault(); navigate('/hukumnama/cyber') }} > Cyber Hukum  <i className="bi bi-arrow-right-circle"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='gurbani-tips common-padding'>
                    <div className='container'>
                        <div className='row w-100'>
                            <h1 className='main-heading text-start' >{head2}</h1>
                            < div
                                dangerouslySetInnerHTML={{
                                    __html: content3
                                }}
                            />
                            {/* <ul>
                                <li>Please click on 'Preferences' tab in Top and Bottom Menu Bar or <Link to='/preferences'>-=Here=-</Link>to set your languages preferences.</li>
                                <li>Instructions to Download and install Fonts</li>
                                <li>Search option "First Letter Beginning" searches for verses beginning with the "first alphabet of the words in the verse in sequence"</li>
                                <li>Search option "First Letter Anywhere" searches for the "first alphabet of the words in sequence" anywhere in the verse including beginning.</li>
                                <li>Search option "Phrase " searches for the exact phrase anywhere in the verse including beginning.</li>
                                <li>Dropdown Suggestion and autocomplete options available for all searches.</li>
                                <li>Pootha Maatha Ki Assees : example keywords: p m k a; pt m k a; pt mt k ; pt mt k as; and so on..</li>
                            </ul> */}
                        </div>
                    </div>
                </section>

                <section className='app-download common-padding' >
                    <div className='container'>
                        <div className='row'>
                            <div className='dw-wrapper'>
                                <div className='download-today'>
                                    <div className='dwld-img'>
                                        <Image width={100} height={100} src={mobilephn} className="img-fluid dwnld-mobile" alt="Responsive image" />
                                    </div>
                                    <div className='download-details'>
                                        <h1 className='download-now' >Download Today</h1>
                                        <p className='paragraph'>
                                            SearchGurbani.com proudly announces the release of iSearchGurbani 4.0 for the
                                            iPhone & iPad at Apple iTunes store. and for v. 4.0 Android Platform at Google Play Store.
                                        </p>
                                        {/* <h6>iSearchGurbani Features:</h6> */}
                                        <h6>{head4}</h6>
                                        <div className='features-g'>
                                            < div
                                                dangerouslySetInnerHTML={{
                                                    __html: content5
                                                }}
                                            />
                                            {/* <ul>
                                                <li>-SGGS Ang by Ang . SGGS Chapter Index</li>
                                                <li>-SGGS Shabad Index</li>
                                                <li>-Bhai Gurdas Vaaran Index</li>
                                                <li>-Kabit by Kabit</li>
                                            </ul>
                                            <ul>
                                                <li>-Sri Dasam Granth Chapter Index</li>
                                                <li>-Sri Dasam Granth Page by Page</li>
                                                <li style={{ cursor: 'pointer' }} onClick={(e) => { e.preventDefault(); navigate('/isearchgurbani-features') }}>-Bhai Nand Lal Baani Index ...View More</li>
                                            </ul> */}
                                        </div>
                                        {/* <div className='download-btns'>
                                        <h6>iSearchGurbani V.4.0 for IOS launching soon</h6>
                                             <Link className='store-download' to="https://apps.apple.com/in/app/isearchgurbani/id6744822993">
                                                <Image src={astore} className="img-fluid donate" alt="Responsive image" />
                                            </Link> 
                                            <Link className='store-download no-shadow' to="https://play.google.com/store/apps/details?id=com.isearch.gurbani">
                                                <Image src={pstore} className="img-fluid donate" alt="Responsive image" />
                                            </Link> 
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="desktop-download common-padding pt-3" >
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='dw-wrapper'>
                                    <div className='desktop-download-itm'>
                                        <div>
                                            <Image width={100} height={100} src={inerlogo} className="img-fluid web-dw-logo" alt="Responsive image" />
                                        </div>
                                        <div>
                                            <h1 className='main-heading mt-0' >{head3}</h1>
                                        </div>
                                        <div>
                                            {/* <p className='paragraph' > is a cross platform software bringing you a simplistic approach to search and explore Gurbani .
                                                iSG includes complete Sri Guru Granth Sahib , Bhai Gurdas Vaaran , Kabit Bhai Gurdas, Bhai
                                                Nand Lal Baani and Baani's from Sri Dasam Granth Sahib. iSearchGurbani ( iSG) has a built
                                                in slideshow/projector feature, which automatically displays text to an additional monitor
                                                or projector screen configured as extended monitor. iSearchGurbani v4 is cross platform
                                                software, can be installed on Windows/ MAC OSx/ Linux
                                            </p> */}
                                            < div
                                                dangerouslySetInnerHTML={{
                                                    __html: content4
                                                }}
                                            />
                                        </div>



                                        <div className='download-btns'>
                                            <Link className='store-download' href="/sgdv/isg">
                                                <Image src={windowlogo} className="img-fluid desk-icon" alt="Responsive image" />
                                                Download for Windows
                                            </Link>
                                            <Link className='store-download' href="/sgdv/isg">
                                                <Image src={applelogo} className="img-fluid desk-icon" alt="Responsive image" />
                                                Download for Mac
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='gurbani-video' >
                    <div className='container'>
                        <div className='row w-100'>
                            <div className='video-wrapper'>
                                <h1 className='main-heading text-light only-web' >Click Here to Donate for development of iSearchGurbani</h1>
                                <h1 className='main-heading text-light only-mobile' >Click Here to </h1>
                                <Link className='play' href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=A88CQMEXSYCG8">
                                    <Image src={hand} className="img-fluid donate" alt="Responsive image" />
                                    Donate Now</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </section>


            <Modal className="play-modals" show={isYoutube} onHide={handleYoutubeClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Play Videos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='socia-share'>
                        {videoId && (
                            <iframe
                                /* width="560"
                                height="315" */
                                className="custom-iframe"
                                src={`https://www.youtube.com/embed/${videoId}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        )}
                    </div>

                </Modal.Body>
            </Modal>

            {/* <Modal className="play-modals"  show={isPopupVisible} onHide={handleClosePopup}>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className='app-install d-flex flex-column g-3 justify-content-center align-items-center'>
                <div className='app-thumb s-thump' >
                            <Image src={inerlogo} className="img-fluid web-dw-logo" alt="Responsive image" />
                            </div>
                            <h4 className='text-dark mb-2 text-center'>Install this app for a better experience!</h4>
                            <p className='text-center px-3'>Enhance your browsing experience by installing our website as an app. Enjoy quicker access, smoother performance, and offline capabilities directly from your home screen!</p>
                            <div className='btn-grp d-flex justify-content-center mt-2'>
                            <button className='install mb-5' onClick={handleInstallClick} >Install Now</button>
                            </div>
                
          </div>
          
                </Modal.Body>
            </Modal> */}



        </div>
    )
}

export default Home
