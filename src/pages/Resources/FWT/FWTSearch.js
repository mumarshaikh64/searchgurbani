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
function FWTSearch() {
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
                title={`Faridkot Wala Teeka-: ਫਰੀਦਕੋਟ ਵਾਲਾ ਟੀਕਾ -: searchgurbani.com `}
                description={`Faridkot Wala Teeka is classical exegesis of Sri Guru Granth Sahib in Braj Bhasha by a team of scholars of Nirmala Sect.`}
                keywords="Faridkot Wala, Teeka , Granth, Sahib, Nirmala, Guru Granth, Sikh, Gurbani"
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
                        <div class="">
                        <div className='container align-items-center d-flex justify-content-center advance-search intro-border mt-5'>
                            <div class="px-1 py-1 align-middle  bgv-intro">
                    
                        <h1 className='text-dark text-center mb-3' >Faridkot Wala Teeka</h1>
                        {/* <h5 className='text-dark'><strong>Faridkot Wala Teeka</strong></h5> */}
                        <p className='inner-heading  text-dark' >Faridkot Wala Teeka is classical exegesis of Sri
                             Guru Granth Sahib in ‘Braj Bhasha’ by a team of scholars of Nirmala Sect. It was the first attempt 
                             in this field prompted by Rulers of Faridkot State in 19 th century. For all future attempts in this 
                             field, it became an ideal prototype. As it was patronized by
                             the Rulers of Faridkot State, it came to be known as ‘Faridkot Wala Teeka’.</p>
                        <p className='inner-heading  text-dark' >
                        Teekas (commentaries) on Guru Granth Sahib have been written in one form or other ever since the 
                        compilation of Guru Granth Sahib. However, the first formal Teeka in line with the traditional 
                        interpretation of Sikh scriptures was written by Sant Giani Badan Singh Ji of Dera Sekhwan at the 
                        request and encouragement of Maharaja Bikram Singh of Faridkot. It took him six and a half years to 
                        complete it. It was completed in 1883. This Teeka was reviewed by a committee appointed by 
                        Mahant Shamer Singh of Patna. After incorporating the comments of this committee, the first edition of this 
                        Teeka was published [funded] by the Maharaja Balvir Singh of Faridkot in 1906 which was printed by 
                        the Wazir Hind Press (started by Bhai Vir Singh) at Amritsar. The second edition of this Teeka was published by 
                        Maharaja Harinder Singh of Faridkot in 1928. This Teeka is known as the "Faridkoti Teeka."
                        </p>
                        <p className='inner-heading  text-dark' >
                        Pandit Tara Singh Narotam, the contemporary of the author of Faridkoti Teeka, also started the Teeka, 
                        but he died when he finished it up to Basant Rag. Then some people borrowed it from his heir just to review 
                        the draft, but never returned it. Only the Teeka of Sri Rag is available from his draft 
                        which is in the possesion of very few researchers and scholars at this time. It is not generally available.
                        </p>
                        <p className='inner-heading  text-dark' ><i>
                        - Ref. Gurmat Sahit Vivechan (Punjabi, published by Punjab Languages Department). This is an extremely useful book on the history of Gurmat literature. It contains 25 essays by top-notch scholars.
                        </i></p>
                        <div className='col-lg-12 d-flex-justify-content-end ang-ang mt-2 mb-3 mb-align p-0'>
                            <Link to={`/faridkot-wala-teeka/page`}><div className='sub-head-snp'>Browse Page by Page Faridkot Wala Teeka</div></Link>
                            <Link to={`/faridkot-wala-teeka/chapters`}><div className='sub-head-snp'>Chapter Index Faridkot Wala Teeka</div></Link>
                        </div>
                        <h4 className='inner-heading text-center text-dark' >Faridkot Wala Teeka</h4>
                        <div className='position-relative my-3'>
                            <input class="form-control border-secondary py-2 search-r" type="search" placeholder="Search"
                                value={input}
                                ref={inputRef}
                                onChange={handleChange}
                                onKeyDown={handleKeyDown}
                            />                            
                            <div class="input-group-append"><button class="btn btn-outline-secondary search-divz" type="button" onClick={() => input !== "" ? navigate('/faridkot-wala-teeka/search-preview', { state: { Word: input } }) : null}><i class="bi bi-search"></i></button></div>
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
                </div>
                </div>
                </div>
                </div>
                </div>
            </section>
           
        </div>
    )
}

export default FWTSearch