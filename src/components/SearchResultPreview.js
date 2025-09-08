// import '../assets/css/dashboard.css';
// import '../assets/css/style.css';
//Gurbani search//
import React, { useEffect, useState, useRef } from 'react';
// import { useNavigate, useOutletContext } from "react-router";
// import {Link, useLocation} from "react-router-dom";
import Link from 'next/link';
import { useRouter } from 'next/router';
import Axios from 'axios';
import { API } from "../config/api";
import { ApiHelper } from '../helpers/ApiHelper';
import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import VirtualKeyboard from '../components/VirtualKeyboard';
import charMap from '../components/GurumukhiAscii';
import { Color } from 'react-input-color';
import { Helmet } from 'react-helmet';
import HelmetWrapper from './CommonHelmet';
import { useSearchParams } from 'next/navigation';

const transliterateToGurumukhi = (input) => {
    return input
        .split('')
        .map((char) => charMap[char] || char)
        .join('');
};

function SearchResultPreview() {
    // const navigate = useNavigate();
    // const location = useLocation();
    const router = useRouter();
    // const [word, setWord] = useState('');
    const searchParams = useSearchParams();
    const data = {
        Word: searchParams.get('Word')
    };

    // const data = location.state
    const [loader, setLoader] = useState(false);
    const [searchData, setSearchData] = useState([]);
    const [pageData, setpageData] = useState([]);
    const [word, setWord] = useState('');
    const [pageNo, setPageNo] = useState(0);


    // -------------old--------------------- 
    // useEffect(() => {
    //     if (data.Word) {
    //         setWord(data.Word);
    //         console.log('getSearch result', data.Word);
    //         let page=0;
    //         getSearchResult(data.Word,page)
    //     }
    // }, [])
    // -------------new--------------------- 
    useEffect(() => {
        if (!router.isReady) return; // wait for query to be ready

        const { word: queryWord } = router.query;

        if (queryWord) {
            setWord(queryWord);
            console.log('getSearch result', queryWord);
            let page = 0;
            getSearchResult(queryWord, page);
        }
    }, [router.isReady, router.query]);


    /* const getSearchResult = async (word, page) => {
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
    } */
    const getSearchResult = async (word, page) => {
        setLoader(true)
        const params = new FormData();
        params.append('start', '0');
        params.append('length', '20');
        params.append('searchType', 'PHRASE');
        params.append('language', 'PUNJABI');
        params.append('scripture', 'ggs');
        params.append('searchData', word);
        params.append('author', '');
        params.append('raag', '');
        params.append('page', page);
        params.append('page_from', '1');
        params.append('page_to', '1430');
        params.append('tableId', '');
        params.append('case', '');

        console.log('para', params)
        await Axios.post(API.getResSearchResultPreview, params, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then((resData) => {
                setLoader(false)
                console.log('getSearchRESULT', resData.data);
                setSearchData(resData.data.lines)
                setpageData(resData.data.search_results_info)
            })
            .catch((err) => {
                setLoader(false);
                console.log(err);
            })
    }

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
            {/* <HelmetWrapper
                title={`Sri Guru Granth Sahib Search Result   -: searchgurbani.com`}
                description={`A comprehensive web site on research and  exploration of Sri Guru Granth Sahib, Amrit Keertan Gutka, Bhai Gurdas Vaaran, Kabit Bhai Gurdaas ,Sri Dasam Granth Sahib, exegesis , Gurbani, Gurbanee vichaar`}
                keywords=""
                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                url={window.location.href}
            /> */}
            <section className='browse_by_letter p-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='in-act-wrapper'>
                            <h2 className='text-dark mb-4'>Sri Guru Granth Sahib</h2>
                        </div>
                        <div className='in-act-wrapper'>

                            <div className='actions-mains '>
                                <h4 className='text-dark'>Find Results : {data.Word} (PHRASE)</h4>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            <section>
                <div className='container'>
                    <div className='d-flex flex-column'>
                        <div className='in-act-wrapper'>
                            <h6 className='text-dark'></h6>
                            <div className='actions-mains'>
                                {searchData.length > 1 ?
                                    <>
                                        {pageNo > 0 ?
                                            <button className='ang-btn' onClick={() => handlePreviousClick(pageNo)}>Previous</button> : null}
                                        {pageData.showing_to !== pageData.total_results ? <button className='ang-btn' onClick={() => handleNextClick(pageNo)}>Next</button> : null}
                                    </> : null}
                            </div>
                        </div>
                        <div className='ang-display mt-5'>
                            <h1>Displaying Result to {pageData.showing_to} of {pageData.total_results}.</h1>
                            {searchData.length > 0 ?
                                <div className='ang-wrapper'>
                                    {searchData.map((item, index) => {
                                        return (
                                            <div className='ang-itm'>
                                                <div className='' >
                                                    {/* old  */}
                                                    {/* <strong>
                                                        {index + pageData.showing_from}. &nbsp;
                                                        <Link to={`/guru-granth-sahib/ang/${item.pageno}/line/${item.lineno}`}>
                                                            Ang {item.pageno} Line {item.pagelineno} {item.raag} : {item.author}
                                                        </Link>
                                                        <br />
                                                        <Link to={`/guru-granth-sahib/shabad/${item.shabad_id}/line/${item.shabadlineno}`}>
                                                            or Go to Shabad
                                                        </Link>
                                                    </strong> */}
                                                    {/* new  */}
                                                    <strong>
                                                        {index + pageData.showing_from}. &nbsp;
                                                        <Link href={`/guru-granth-sahib/ang/${item.pageno}/line/${item.lineno}`}>
                                                            Ang {item.pageno} Line {item.pagelineno} {item.raag} : {item.author}
                                                        </Link>
                                                        <br />
                                                        <Link href={`/guru-granth-sahib/shabad/${item.shabad_id}/line/${item.shabadlineno}`}>
                                                            or Go to Shabad
                                                        </Link>
                                                    </strong>

                                                    <div className="lang-3">{item.punjabi}</div>
                                                    <div className="lang-4">{item.translit}</div>
                                                    <div className="lang-4">{item.hindi}</div>
                                                    <div className="lang-5">{item.english}</div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div> : <h4 className='text-dark center-align hukuma p-5'>No result found</h4>}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SearchResultPreview