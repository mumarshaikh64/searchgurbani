//Gurbani search//
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useOutletContext } from "react-router";
import { Link, useLocation } from "react-router-dom";
import '../../../assets/css/dashboard.css';
import '../../../assets/css/style.css';
import Axios from 'axios';
import { API } from "../../../config/api";
import { ApiHelper } from '../../../helpers/ApiHelper';
import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import VirtualKeyboard from '../../../components/VirtualKeyboard';
import charMap from '../../../components/GurumukhiAscii';
import searchbannar from '../../../assets/img/search-bannar.webp';
import { Helmet } from 'react-helmet';
import HelmetWrapper from '../../../components/CommonHelmet';

const transliterateToGurumukhi = (input) => {
    return input
        .split('')
        .map((char) => charMap[char] || char)
        .join('');
};
function SGGDSearch() {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const [displayedInput, setDisplayedInput] = useState('');
    const [isKeyboard, setIsKeyBoard] = useState(true);
    const [searchData, setSearchData] = useState([]);
    const [englishInput, setEnglishInput] = useState('');
    const [input, setInput] = useState('');
    const [transliterated, setTransliterated] = useState('');
    const inputRef = useRef(null);

    const handleKeyDown = (event) => {
        const char = event.key;
        if (charMap[char]) {
            event.preventDefault();
            const caretPosition = inputRef.current.selectionStart;
            const newInput = [
                input.slice(0, caretPosition),
                charMap[char],
                input.slice(caretPosition)
            ].join('');
            setInput(newInput);
            console.log('^^^^^', newInput)
            setTransliterated(transliterateToGurumukhi(newInput));
        }
    };
    const handleChange = (event) => {
        const newValue = event.target.value;
        setInput(newValue);
        setTransliterated(transliterateToGurumukhi(newValue));
    };
    const addChar = (char) => {
        setInput((prevValue) => prevValue + char);
    };
    useEffect(() => {
        if (input !== "") {
            getSearchWords();
        }
        else {
            setSearchData([])
        }
    }, [input])
    const getSearchWords = async () => {
        setLoader(true)
        await Axios.get(API.getResourceWords + '?q=' + input + '&table_name=' + 'GurShabad Ratanakar Mahankosh')
            .then((resData) => {
                setLoader(false)
                console.log('getSearch', resData.data);
                setSearchData(resData.data)
            })
            .catch((err) => {
                setLoader(false)
                console.log(err);
            })
    }
    const handleAlphaClick = (alpha) => {
        navigate('/maansarovar/words', { state: { Word: alpha } })
    };
    const handleItemClick = (item) => {
        setInput(item.word);  // Set the selected word to input field
        setSearchData([]);
        //getSearchResult(item.word);
    };
    return (
        <div>
            <HelmetWrapper
                title={`Sri Guru Granth Sahib Darpan -: ਸ੍ਰੀ ਗੁਰੂ ਗਰੰਥ ਸਾਹਿਬ ਦਰਪਣ -: Prof Sahib Singh -: searchgurbani.com`}
                description={`A comprehensive web site on research and  exploration of Sri Guru Granth Sahib, Amrit Keertan Gutka, Bhai Gurdas Vaaran, Kabit Bhai Gurdaas ,Sri Dasam Granth Sahib, exegesis , Gurbani, Gurbanee vichaar`}
                keywords="Hukum, Hukumnama, Darbar sahib, Harmandir sahib, Amritsar"
                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                url={window.location.href}
            />
            {/* <section className='section-1'>
                <div className=" justify-content-md-center align-items-center">
                    <div className='banner-img'>
                        <img src={searchbannar} class="img-fluid" alt="Responsive image" />
                    </div>
                </div>
            </section> */}
            <section className='browse_by_letter p-5'>
            <div className="container">
                <div className="second-container intro-bkg">
                    <div className="row ">
                        <div class="col-lg-12">
                        <div className='container align-items-center d-flex justify-content-center advance-search intro-border mt-5'>
                            <div class="px-1 py-1 align-middle   bgv-intro">
                    
                        <h1 className='text-dark text-center mb-3' >Sri Guru Granth Sahib Darpan</h1>
                        {/* <h5 className='text-dark'><strong>Sri Guru Granth Sahib Darpan</strong></h5> */}

                        <p className='inner-heading  text-dark text-center' >
                            Siri Guru Granth Darpan by Professor Sahib Singh Gurmukhi text to Punjabi (Gurmukhi) translation of all of Siri Guru Granth Sahib.
                        </p>
                        <div className='col-lg-12 d-flex center-align ang-ang mt-2 mb-3  mb-align p-0'>
                            <Link to={`/sri-guru-granth-darpan/page`}><div className='sub-head-snp'>Browse Page by Page Sri Guru Granth Sahib Darpan</div></Link>

                        </div>
                        <h4 className='inner-heading text-center text-dark' >Sri Guru Granth Sahib Darpan</h4>
                        <div className='position-relative my-3'>
                            <input class="form-control border-secondary py-2 search-r" type="search" placeholder="Search"
                                value={input}
                                ref={inputRef}
                                onChange={handleChange}
                                onKeyDown={handleKeyDown}
                            />
                            <div class="input-group-append"><button class="btn btn-outline-secondary search-divz" type="button" onClick={() => input !== "" ? navigate('/sri-guru-granth-darpan/search-preview', { state: { Word: input } }) : null}><i class="bi bi-search"></i></button></div>
                        </div>

                    </div>
                    <section className='p-3 col-lg-12'>
                <div className='container'>
                    <div className=' p-4'>
                        <button className='ang-btn mx-2' onClick={(e) => { e.preventDefault(); setIsKeyBoard(!isKeyboard) }}>Show Keyboard</button>
                        <label className='me-2' >You can use either Virtual or Physical Keyboard for Gurmukhi Unicode </label>
                    </div>
                    {isKeyboard ?
                        <VirtualKeyboard addChar={addChar} /> : null}
                </div>
            </section>
            <section className='browse_by_letter p-5'>
                <div className='container'>
                <p className='inner-heading  text-dark' >SAHIB SINGH, PROFESSOR (1892-1977), grammarian and theologian, was born on 16 SAHIB SINGH,
                    PROFESSORFebruary 1892 in a Hindu family of the village of Phattevali in Sialkot district of undivided Punjab. He was originally
                    named Natthu Ram by his father, Hiranand, who kept a small shop in the village. Soon the family shifted to Tharpal, another village
                    in the same district. As a youth, Natthu Rain was apprenticed to the village Maulawi, Hayat Shah, son of the famous Punjabi poet,
                    Hasham, upon whom his royal patron, Ranjit Sirigh, the Maharaja of the Punjab, had settled a permanent jagir.Winning a scholarship
                    at his middle standard examination, Natthu Ram joined the high school at Pasrur where he received in 1906 the rites of the Khalsa
                    and his new name Sahib Singh. The untimely death of his father made the situation hard for him, yet he managed to plough through
                    first Dyal Sirigh College, Lahore, and then the Government College, Lahore. At the latter, he obtained his bachelor's degree.
                    In 1917, he joined as a lecturer in Sanskrit at Guru Nanak Khalsa College, Gujranwala.</p>
                <p className='inner-heading  text-dark' >Sahib Sihgh, now commonly known as Professor Sahib Singh, took part in the Gurdwara Reform movement in the
                    twenties of the century. He was appointed joint secretary of the Shiromani Gurdwara Parbandhak Committee in 1921.
                    During this period he suffered jail twice-once during the Guru ka Bagh agitation (1922) and then in the Jaito
                    morcha (1924). In 1927 he returned briefly to his college in Gujranwala which he soon quit to join the Khalsa
                    College at Amritsar. From 1929 to 1952 he remained at Khalsa College producing a succession of learned works
                    and commentaries on the Sikh sacred texts. Retiring from the Khalsa College, Amritsar, after many a long year
                    of unbroken and luminous scholarly work, he became principal of the Shahid Sikh missionary College.
                    He also worked as principal at the Gurmat College, Patiala.
                </p>
                <p className='inner-heading  text-dark' >Professor Sahib Singh was known for his erudition and assiduous
                    pursuit of scholarship. Nearly 50 of his works were published between 1927 and 1977. These included
                    exposition of several of the Sikh sacred texts and his monumental 10-volume commentary on Sikh Scripture,
                    Sri Guru Granth Sahib Darpan, published during 1962-64. A most original and earlier work was his Gurbani
                    Viakaran, a textual grammar of the Guru Granth Sahib. No exegetical work since the publication of this book
                    in 1932 has been possible without resort to the fundamental principles enunciated in it, especially those
                    concerning the interpretation of vowel endings in inflexions of nouns and verbs. Sahib Singh made a
                    notable contribution to Punjabi prose through his essays on moral and spiritual themes, religious
                    philosophy and issues in history arid biography.
                    Sahib Singh's contribution to Sikh studies and Punjabi letters received wide recognition in his own lifetime.
                    The Punjabi Sahitya Akademi, Ludhiana, honoured him in 1970 with a life fellowship, and Punjabi University,
                    Patiala, conferred upon him, in 1971, the degree of Doctor of Literature (honoris causa). Earlier,
                    the Shiromani Gurdwara Parbandhak Committee had made award to him for his Gurbani Viakaran, and the Government
                    of Patiala and East Punjab States Union had honoured him in 1952 marking his services to Punjabi literature.</p>
                <p className='inner-heading  text-dark' >Professor Sahib Sihgh died of Parkinson's disease at Amritsar on 29 October 1977.</p>
                </div>
            </section>
                </div>
                </div>
                </div>
                </div>
                </div>
            </section>
          
        </div>
    )
}

export default SGGDSearch