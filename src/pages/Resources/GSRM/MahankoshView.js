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
import { Color } from 'react-input-color';
import { Helmet } from 'react-helmet';
import HelmetWrapper from '../../../components/CommonHelmet';

const transliterateToGurumukhi = (input) => {
    return input
        .split('')
        .map((char) => charMap[char] || char)
        .join('');
};

function MahankoshView() {
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state || {};
    const [loader, setLoader] = useState(false);
    const [displayedInput, setDisplayedInput] = useState('');
    const [isKeyboard, setIsKeyBoard] = useState(true);
    const [searchData, setSearchData] = useState([]);
    const [pageData, setpageData] = useState([]);
    const [englishInput, setEnglishInput] = useState('');
    const [input, setInput] = useState('');
    const [word, setWord] = useState('');
    const [pageNo, setPageNo] = useState(0);
    const [transliterated, setTransliterated] = useState('');
    const inputRef = useRef(null);
    const alphas = ['ੳ', 'ਅ', 'ੲ', 'ਸ', 'ਹ', 'ਕ', 'ਖ', 'ਗ', 'ਘ', 'ਙ', 'ਚ', 'ਛ', 'ਜ', 'ਝ', 'ਞ', 'ਟ', 'ਠ', 'ਡ', 'ਢ', 'ਣ', 'ਤ', 'ਥ', 'ਦ', 'ਧ', 'ਨ', 'ਪ', 'ਫ', 'ਬ', 'ਭ', 'ਮ', 'ਯ', 'ਰ', 'ਲ', 'ਵ', 'ੜ'];

    useEffect(() => {
        if (data.Word) {
            setWord(data.Word);
            getSearchResult(data.Word, pageNo)
        }
    }, [])
    const getSearchResult = async (word, page) => {
        setLoader(true)
        await Axios.get(API.getResourceResult + '?keyword=' + word + '&alpha=alpha&page=' + page)
            .then((resData) => {
                setLoader(false)
                console.log('getSearch result', resData.data);
                setSearchData(resData.data.lines)
                setpageData(resData.data.search_results_info)
            })
            .catch((err) => {
                setLoader(false)
                console.log(err);
            })
    }
    const handleAlphaClick = (alpha) => {
        setWord(alpha)
        setPageNo(0)
        getSearchResult(alpha, 0)
    };
    const handlePreviousClick = (toNo) => {
        if (toNo > 0) {
            let nextNo = parseInt(toNo) - 1;
            setPageNo(nextNo)
            getSearchResult(word, nextNo)
        }
    };
    const handleNextClick = (toNo) => {
        let totalPage = (parseInt(pageData.total_results) / 25)
        if (toNo < parseInt(totalPage) + 1) {
            let nextNo = parseInt(toNo) + 1;
            setPageNo(nextNo)
            getSearchResult(word, nextNo)
        }
    };
    return (
        <div>
            <HelmetWrapper
                title={`Gur Shabad Ratanakar Mahankosh Index: ${word} -: searchgurbani.com`}
                description={`A comprehensive web site on research and  exploration of Sri Guru Granth Sahib, Amrit Keertan Gutka, Bhai Gurdas Vaaran, Kabit Bhai Gurdaas ,Sri Dasam Granth Sahib, exegesis , Gurbani, Gurbanee vichaar`}
                keywords="Hukum, Hukumnama, Darbar sahib, Harmandir sahib, Amritsar"
                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                url={window.location.href}
            />
            <section className='browse_by_letter p-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='in-act-wrapper'>
                            <h2 className='text-dark mb-4'>Gur Shabad Ratanakar Mahankosh</h2>
                        </div>
                        <ul className='letters' >
                            {alphas.map((alpha) => (
                                <li onClick={() => handleAlphaClick(alpha)}><Link><b>{alpha}</b></Link></li>
                            ))}

                        </ul>
                        <h6 className='text-dark text-center' >Browse by letter</h6>
                        <p className='inner-heading  text-dark' ><h6 className='text-dark'>Here are the results for the letter {word} from Gur Shabad Ratanakar Mahankosh</h6></p>
                        <div className='in-act-wrapper'>
                            <h6 className='text-dark'>Showing words to {pageData.showing_to} of {pageData.total_results}</h6>
                            <div className='actions-mains'>
                                {searchData.length > 1 ?
                                    <>
                                        {pageNo > 0 ?
                                            <button className='ang-btn' onClick={() => handlePreviousClick(pageNo)}>Previous</button> : null}
                                        {pageData.showing_to !== pageData.total_results ? <button className='ang-btn' onClick={() => handleNextClick(pageNo)}>Next</button> : null}
                                    </> : null}
                                <button className='ang-btn' onClick={() => navigate('/mahan-kosh')}>Search Page</button>
                            </div>
                        </div>

                    </div>
                    <div className='d-flex flex-column'>
                        <div className='ang-display'>
                            <div className='ang-wrapper'>
                                {searchData.map((item, index) => {
                                    console.log('Item:', item);
                                    return (
                                        <div className='ang-itm'>
                                            <Link to="/guru-granth-sahib/search-results" state={{ Word: item.word }}>
                                                <span className='sg-name ' style={{ color: '#dd761c' }}><b>{item.word}</b></span></Link> - <span> {item.roman}</span> - <span><b>{item.hindi}</b></span>
                                            <div className='lang-5'>{item.description}</div>
                                            <div className='lang-6 ' style={{ color: '#cd4e06' }}>{item.roman_desc}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MahankoshView