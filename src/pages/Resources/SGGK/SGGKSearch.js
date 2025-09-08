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
function SGGKSearch(props) {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const [displayedInput, setDisplayedInput] = useState('');
    const [isKeyboard, setIsKeyBoard] = useState(true);
    const [searchData, setSearchData] = useState([]);
    const [englishInput, setEnglishInput] = useState('');
    const [input, setInput] = useState('');
    const [transliterated, setTransliterated] = useState('');
    const inputRef = useRef(null);
    const alphas = ['ੳ', 'ਅ', 'ੲ', 'ਸ', 'ਹ', 'ਕ', 'ਖ', 'ਗ', 'ਘ', 'ਙ', 'ਚ', 'ਛ', 'ਜ', 'ਝ', 'ਞ', 'ਟ', 'ਠ', 'ਡ', 'ਢ', 'ਣ', 'ਤ', 'ਥ', 'ਦ', 'ਧ', 'ਨ', 'ਪ', 'ਫ', 'ਬ', 'ਭ', 'ਮ', 'ਯ', 'ਰ', 'ਲ', 'ਵ', 'ੜ'];

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
        await Axios.get(API.getResourceWords + '?q=' + input + '&table_name=' + 'Sri Guru Granth Kosh')
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
        navigate('/guru-granth-kosh/view', { state: { Word: alpha } })
    };
    const handleItemClick = (item) => {
        setInput(item.word);  // Set the selected word to input field
        setSearchData([]);
        //getSearchResult(item.word);
    };
    return (
        <div>
            <HelmetWrapper
                title={`Sri Guru Granth Kosh - Dr Gurcharan Singh -: ਗੁਰੂ ਗ੍ਰੰਥ ਕੋਸ਼ -: searchgurbani.com`}
                description={`Sri Guru Granth Kosh by Dr Gurcharan Singh is a dictionary of Sikh Scriptures and books on Sikh Religion.`}
                keywords="Sri Guru ,Granth ,Kosh"
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
                            <div class="px-1 py-1 align-middle mt-5 bgv-intro">
                        <ul className='letters' >
                            {alphas.map((alpha) => (
                                <li onClick={() => handleAlphaClick(alpha)} ><Link><b>{alpha}</b></Link></li>
                            ))}

                        </ul>
                        <h6 className='text-dark text-center' >Browse by letter</h6>
                        <p className='inner-heading text-center text-dark' ><b>Sri Guru Granth Kosh</b> by Dr Gurcharan Singh is a dictionary of Sikh Scriptures and books on Sikh Religion.</p>
                        <p className='inner-heading text-center text-dark' >You can either
                            type in the word you are looking for in the box below or browse by letter</p>

                        <h1 className='inner-heading text-center text-dark' > Guru Granth Kosh</h1>
                        <div className='position-relative my-3'>
                            <input class="form-control border-secondary py-2 search-r" type="search" placeholder="Search"
                                value={input}
                                ref={inputRef}
                                onChange={handleChange}
                                onKeyDown={handleKeyDown}
                            />
                            {searchData.length > 0 ? (
                                <ul className='select-dropdown'>
                                    {searchData.map((item, index) => (
                                        <li key={index} style={{ padding: '10px', borderBottom: '1px solid #ddd' }}
                                            onClick={() => handleItemClick(item)}
                                        > {item.word}
                                        </li>
                                    ))}
                                </ul>
                            ) : null}
                            <div class="input-group-append"><button class="btn btn-outline-secondary search-divz" type="button" onClick={() => input !== "" ? navigate('/guru-granth-kosh/view', { state: { Word: input } }) : null}><i class="bi bi-search"></i></button></div>
                            </div>

                    </div>
                    <section className='p-3 w-100'>
                <div className='container'>
                    <div className=' p-4 '>
                        <button className='ang-btn mx-2' onClick={(e) => { e.preventDefault(); setIsKeyBoard(!isKeyboard) }}>Show Keyboard</button>
                        <label className='me-2' >You can use either Virtual or Physical Keyboard for Gurmukhi Unicode </label>
                    </div>
                    {isKeyboard ?
                        <VirtualKeyboard addChar={addChar} /> : null}
                </div>
            </section></div>
                </div></div></div></div>
            </section>
        
        </div>
    )
}

export default SGGKSearch