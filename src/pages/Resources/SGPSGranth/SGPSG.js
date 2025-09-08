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
function SGPSGSearch() {
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
                title={`Sri Gur Pratap Suraj Granth-: ਸ੍ਰੀ ਗੁਰ ਪ੍ਰਤਾਪ ਸੂਰਜ ਗਰੰਥ -: searchgurbani.com `}
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
                            <div class="px-1 py-1 align-middle  bgv-intro">
                
                        <h1 className='text-dark text-center mb-3' >Sri Gur Pratap Suraj Granth</h1>
                        {/* <h5 className='text-dark'><strong>Sri Gur Pratap Suraj Granth</strong></h5> */}
                        <p className='inner-heading  text-dark' >Authored by ‘Kavi Churamani’ Bhai Santokh Singh ji,
                            Doyen of Nirmala Sect, ‘Sri Gur Partap Suraj Granth’ popularly known as ‘Suraj Parkash’ is a voluminous
                            classical medieval source of Sikh History and Philosophy. Its ‘Katha’ (Religious Discourse) in almost all
                            prominent Gurdwaras is the gauge of its authenticity and popularity among the Sikh masses.</p>
                        <p className='inner-heading  text-dark' >
                            Bhai Santokh Singh's monumental work in Braj verse portraying in comprehensive detail the lives
                            of the Ten Gurus of the Sikh faith and the career of Banda Singh Bahadur. Besides being an historical
                            narrative of great significance, it is an outstanding creation in the style epic, and is the most
                            voluminous of all poetic compositions in Hindi/Punjabi literature. Its language is Braj Bhasa which was
                            the literary Hindi of that time though its script is Gurmukhi. Notwithstanding certain drawbacks which
                            scholars with training in modern historiography may point out, it remains the most valuable source book
                            on Sikh history of the period of the Gurus and, indeed, on the very roots of the entire Sikh tradition.
                            For the massive flow of its poetry, the vast range of its figures and images and for the abundance of
                            detail, Sri Gur Pratap Suraj Granth,Suraj Prakash in shorter, popular form, is worthy to rank with the classics in this genre.
                        </p>
                        <p className='inner-heading  text-dark' >
                            The title of the main work carries a symbolic meaning summed up in the cosmic metaphor of suraj,
                            i.e. the sun. The poet himself explains, "As the sun rises, the darkness of the night vanishes, thieves and thugs
                            hide themselves, owls and bats go to slumber and the stars disappear, so with the advent of the Gurus,
                            the rays of their spiritual light spread all around dispelling the darkness of ignorance."
                        </p>
                        <p className='inner-heading  text-dark' >
                            The work is divided into two parts. The first, Sri Gur Nanak Prakash in two sections, is the story of the
                            life of Guru Nank. The second, Sri Gur Pratap Suraj proper, is divided into portions, rut (season),
                            according to the twelve signs of the zodiac, sub-divided into chapters called arisu (rays). In the Sri Gur Nanak Parkash portion,
                            the style of the narrative tends to be more elaborate, with many a stanza given to homage to the Gurus,
                            the Guru Granth Sahib and to the patron deities of learning. The latter part, which deals with the
                            lives of succeeding nine Gurus and Banda Singh Bahadur, contains 51,829 verse pieces in 22 cantos.
                            The expression here is less rhetoric. Both the parts are further sub-divided into numerous sections
                            according to the episodes narrated, each named after the sun's course, viz. the twelve zodaical signs,
                            the six seasons and the two solstices (winter and summer solstices) which in turn comprise 1151 sunbeams,
                            each one comprising a chapter. The phrase and imagery in both the parts of the book generally require expert explanation.
                            This has been provided, painstakingly and exhaustively, by Bhai Vir Singh in a 14-volume annotated
                            edition brought out in 1927-35. Bhai Vir Singh has also added notes where necessary.
                        </p>
                        <p className='inner-heading  text-dark' >
                        It is usual for gianis (learned scholars) to hold serial discourses on the text of Suraj Prakash in gurdwaras, normally in the afternoons or evenings.
                        </p>
                        <div className='col-lg-12 d-flex-justify-content-end ang-ang mt-2 mb-3 mb-align p-0 '>
                            <Link to={`/sri-gur-pratap-suraj-granth/volumes`}><div className='sub-head-snp'>Volume Index</div></Link>
                            <Link to={`/sri-gur-pratap-suraj-granth/page`}><div className='sub-head-snp'>Browse Page by Page</div></Link>
                        </div>
                        <h4 className='inner-heading text-center text-dark' >Sri Gur Pratap Suraj Granth</h4>
                        <div className='position-relative my-3'>
                            <input class="form-control border-secondary py-2 search-r" type="search" placeholder="Search"
                                value={input}
                                ref={inputRef}
                                onChange={handleChange}
                                onKeyDown={handleKeyDown}
                            />
                            <div class="input-group-append"><button class="btn btn-outline-secondary search-divz" type="button" onClick={() => input !== "" ? navigate('/sri-gur-pratap-suraj-granth/search-preview', { state: { Word: input } }) : null}><i class="bi bi-search"></i></button></div>
                        </div>

                    </div>
                    <section className='p-3  col-lg-12'>
                <div className='container'>
                    <div className=' p-4'>
                        <button className='ang-btn mx-2' onClick={(e) => { e.preventDefault(); setIsKeyBoard(!isKeyboard) }}>Show Keyboard</button>
                        <label className='me-2' >You can use either Virtual or Physical Keyboard for Gurmukhi Unicode </label>
                    </div>
                    {isKeyboard ?
                        <VirtualKeyboard addChar={addChar} /> : null}
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

export default SGPSGSearch