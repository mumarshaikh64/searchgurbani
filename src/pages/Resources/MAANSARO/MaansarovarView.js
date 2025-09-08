//Gurbani search//
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useOutletContext } from "react-router";
import { Link, useLocation } from "react-router-dom";
import '../../../assets/css/dashboard.css';
import '../../../assets/css/style.css';
import '../../../assets/css/resource.css'
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

const words = [
    ['ਰਿੰਗ']
];
function MaansarovarView() {
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
    const alphas = ['ਕ', 'ਖ', 'ਗ', 'ਘ', 'ਙ', 'ਚ', 'ਛ', 'ਜ', 'ਝ', 'ਞ', 'ਟ', 'ਠ', 'ਡ',
        'ਢ', 'ਣ', 'ਤ', 'ਥ', 'ਦ', 'ਧ', 'ਨ', 'ਪ', 'ਫ', 'ਬ', 'ਭ', 'ਮ', 'ਯ', 'ਰ', 'ਲ', 'ਵ', 'ਸ', 'ਹ', 'ਖ਼'];

    useEffect(() => {
        if (data.Word) {
            setWord(data.Word);
            getSearchResult(data.Word, pageNo)
        }
    }, [])
    const getSearchResult = async (word, page) => {
        setLoader(true)
        await Axios.get(API.getMaansarovarWords + '?keyword=' + word + '&alpha=alpha')
            .then((resData) => {
                setLoader(false)
                console.log('getSearch result', resData.data);
                setSearchData(resData.data.words)

            })
            .catch((err) => {
                setLoader(false)
                console.log(err);
            })
    }
    useEffect(() => {
        console.log('getSearch length', searchData.length);
    }, [searchData])
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
                title={`Maansarovar -: searchgurbani.com`}
                description={`A comprehensive web site on research and  exploration of Sri Guru Granth Sahib, Amrit Keertan Gutka, Bhai Gurdas Vaaran, Kabit Bhai Gurdaas ,Sri Dasam Granth Sahib, exegesis , Gurbani, Gurbanee vichaar`}
                keywords="Hukum, Hukumnama, Darbar sahib, Harmandir sahib, Amritsar"
                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                url={window.location.href}
            />
            <HelmetWrapper
                title={`Maansarovar -: searchgurbani.com`}
                description={`A comprehensive web site on research and  exploration of Sri Guru Granth Sahib, Amrit Keertan Gutka, Bhai Gurdas Vaaran, Kabit Bhai Gurdaas ,Sri Dasam Granth Sahib, exegesis , Gurbani, Gurbanee vichaar`}
                keywords="Hukum, Hukumnama, Darbar sahib, Harmandir sahib, Amritsar"
                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                url={window.location.href}
            />
            <section className='browse_by_letter p-5'>
                <div className='container'>
                    <div className='row'>
                        <h2 className='text-dark text-center mb-4'>Maansarovar - Words</h2>
                        <ul className='letters' >
                            {alphas.map((alpha) => (
                                <li onClick={() => handleAlphaClick(alpha)}><Link><b>{alpha}</b></Link></li>
                            ))}

                        </ul>
                        <h6 className='text-dark text-center' >Browse by letter</h6>
                        <div className='in-act-wrapper'>
                            <h6 className='text-dark'>Words found for &nbsp;<b>'{word}'</b></h6>
                            <div className='actions-mains'>
                                <button className='ang-btn' onClick={() => navigate('/maansarovar')}>Search Page</button>
                            </div>
                        </div>

                    </div>
                    <div className='d-flex flex-column'>
                        <div className='ang-display '>
                            <div className="words-grid">
                                {searchData.map((item, index) => (
                                    <Link to={`/maansarovar/quotations/${item.word}`}>
                                        <div className="word-cell" >
                                            {item.word}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MaansarovarView