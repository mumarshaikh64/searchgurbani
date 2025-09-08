// import '../assets/css/dashboard.css';
// import '../assets/css/style.css';
//Gurbani search//
import React, { useEffect, useState, useRef, useMemo } from 'react';
// import { useNavigate, useOutletContext } from "react-router";
import { Link, useLocation } from "react-router-dom";
import Axios from 'axios';
import { API } from "../config/api";
import { ApiHelper } from '../helpers/ApiHelper';
import searchbannar from '../assets/img/search-bannar.webp';
import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import charMap from '../components/GurumukhiAscii';
import VirtualKeyboard from '../components/VirtualKeyboard';
import Switch from 'react-switch';
import DataTable from 'react-data-table-component';
import Spinner from '../components/Spinner';
import { Helmet } from "react-helmet";
import HelmetWrapper from '../components/CommonHelmet';
import { useRouter } from 'next/router';

function GurbaniSearch(props) {
    // const navigate = useNavigate();
    const router = useRouter();
    const [loader, setLoader] = useState(false);
    const [isAsvanceSearch, setIsAdvanceSearch] = useState(false);
    const [isAutocomplete, setIsAutocomplete] = useState(false);
    const [isKeyboard, setIsKeyBoard] = useState(false);
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
    const [loading, setLoading] = useState(false);
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedRaag, setSelectedRaag] = useState('');
    const [selectedCat, setSelectedCat] = useState('');
    const [activeTab, setActiveTab] = useState('Granth');
    const inputRef = useRef(null);
    const [transliterated, setTransliterated] = useState('');
    const scriptureToTabEventKey = {
        ggs: 'Granth',
        ak: 'Keertan',
        bgv: 'Vaaran',
        dg: 'Dasam',
        ks: 'Savaiye',
        bnl: 'Nand',
    };

    useEffect(() => {
        getAuthors();
        getRaga();
        getCategory();
        if (props.advanceSearch) {
            setIsAdvanceSearch(props.advanceSearch);
            console.log('SSSS', props.advanceSearch)
        }
        const savedHomeSearch = localStorage.getItem('HomeSearch');
        console.log('Preference', savedHomeSearch);
        if (savedHomeSearch) {
            const preferences = JSON.parse(savedHomeSearch);
            setScripture(preferences.active_tab);
            setSelectedLanguage(preferences.language);
            setPageFrom(preferences.page_from);
            setPageTo(preferences.page_to);
            setDisplayedInput(preferences.q);
            setSelectedOption(preferences.searchType);
            setSelectedAuthor(preferences.selected_author);
            setSelectedRaag(preferences.selected_raag);
            getSearchResult(preferences.q);

        }
    }, [])
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
    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
        console.log('Selected language:', event.target.value);
        setEnglishInput('');
        setDisplayedInput('');
    };
    const transliterateToGurumukhi = (input) => {
        return input
            .split('')
            .map((char) => charMap[char] || char)
            .join('');
        /* .map((char) => charMap[char.toLowerCase()] || charMap[char.toUpperCase()] || char) */

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
    const handleKeyDown = (event) => {
        if (selectedLanguage === 'PUNJABI') {
            const char = event.key;
            if (charMap[char]) {
                event.preventDefault();
                const caretPosition = inputRef.current.selectionStart;
                const newInput = [
                    displayedInput.slice(0, caretPosition),
                    charMap[char],
                    displayedInput.slice(caretPosition)
                ].join('');
                setDisplayedInput(newInput);
                console.log('^^^^^', newInput)
                setTransliterated(transliterateToGurumukhi(newInput));
            }
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
        else if (displayedInput === "") {
            getSearchResult("")
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
        params.append('page', currentPage)
        params.append('limit', perPage)

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
                setTotalRows(resData.data.recordsTotal);
                const searchPref = {
                    active_tab: scripture,
                    language: selectedLanguage,
                    page_from: pageFrom,
                    page_to: pageTo,
                    q: key ? key : displayedInput,
                    searchType: selectedOption,
                    selected_author: selectedAuthor,
                    selected_raag: selectedRaag
                };
                localStorage.setItem('HomeSearch', JSON.stringify(searchPref));
            })
            .catch((err) => {
                setLoader(false)
                console.log(err);
            })
    }
    useEffect(() => {
        getSearchResult();
    }, [currentPage]);
    const handlePageChange = (page) => {
        console.log("Setting current page to:", page);
        setCurrentPage(page);
    };
    useEffect(() => {
        getSearchResult();
    }, [perPage]);
    const handlePerRowsChange = async (newPerPage, page) => {
        setPerPage(newPerPage);
        setCurrentPage(page);
    };
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
                scripture === "bgv" || scripture === "ks" ?
                    // -----------old--------------- 
                    // <div className='btn-dis'>
                    //     <button className='ang-btn-search'
                    //         onClick={() => navigate('/' + `${row.shabadlink}`)}>Go to page</button>
                    // </div>:
                    // <div className='btn-dis'>
                    //     <button className='ang-btn-search'
                    //         onClick={() => navigate('/' + `${row.pageLink}`)}>Go to page</button>
                    // </div>
                    // ------------------new---------------- 
                    <div className='btn-dis'>
                        <button
                            className='ang-btn-search'
                            onClick={() => router.push(`/${row.shabadlink}`)}
                        >
                            Go to page
                        </button>
                    </div> :
                    <div className='btn-dis'>
                        <button
                            className='ang-btn-search'
                            onClick={() => router.push(`/${row.pageLink}`)}
                        >
                            Go to page
                        </button>
                    </div>
            ),
            width: '150px'
        },
        {
            name: "",
            cell: (row) => (
                scripture === "ggs" || scripture === "ak" || scripture === "dg" ?
                    // --------old------     
                    // <div className='btn-dis'>
                    //     <button className='ang-btn-search'
                    //         onClick={() => navigate('/' + `${row.shabadlink}`)}>Go to shabad</button>
                    // </div> : null
                    // ------- new ---------- 
                    (
                        <div className='btn-dis'>
                            <button
                                className='ang-btn-search'
                                onClick={() => router.push('/' + row.shabadlink)}
                            >
                                Go to shabad
                            </button>
                        </div>
                    )
                    : null

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
        router.push('/' + row.shabadlink);
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
                setPerPage(10);
                break;
            case 'Keertan':
                setPageFrom('65');
                setPageTo('1040');
                setScripture('ak');
                setPerPage(10);
                break;
            case 'Vaaran':
                setPageFrom('1');
                setPageTo('41');
                setScripture('bgv');
                setPerPage(10);
                break;
            case 'Dasam':
                setPageFrom('1');
                setPageTo('2820');
                setScripture('dg');
                setPerPage(10);
                break;
            case 'Savaiye':
                setPageFrom('1');
                setPageTo('675');
                setScripture('ks');
                setPerPage(10);
                break;
            case 'Nand':
                setPageFrom('1');
                setPageTo('150');
                setScripture('bnl');
                setPerPage(10);
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
    return (
        <div>
            {/* <HelmetWrapper
                title={`Search Gurbani : Gurbani Research website`}
                description="A comprehensive web site on research and  exploration of Sri Guru Granth Sahib, Amrit Keertan Gutka, Bhai Gurdas Vaaran, Kabit Bhai Gurdaas ,Sri Dasam Granth Sahib, exegesis , Gurbani, Gurbanee vichaar"
                keywords="Gurbaanee Keertan,Gurmat Sangeet, Gurbani Kirtan,Amrit Keertan, Gurbani, Shabad Keertan,  Dasam Granth, Guru granth, granth, kabit, Bhai Gurdas, Vaaran, Varan, Mahankosh, Kosh, Hukumnama, Baanis, Japji, jaap, Sukhmani, Ardaas"
                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                url={window.location.href}
            /> */}
            {/* {loader && <Spinner />} */}
            <section className={`section-2 ${props.advanceSearch && 'home-search'}`}>
                {/* {isAsvanceSearch ? null :
                    <div className=" justify-content-md-center align-items-center">
                        <div className='banner-img'>
                            <img src={searchbannar} className="img-fluid" alt="Responsive image" />
                        </div>
                    </div>} */}
                <div className="fouth-container-adv common-padding">
                    <div className="container align-items-center d-flex justify-content-center advance-search">
                        <div className=' adv-search-bg '>
                            <div className="row w-60 search-main-grd mb-4">
                                <div className="col-12">
                                    <h1 className="main-heading">Instant Gurbani Search</h1>
                                </div>
                                <p className="paragraph">
                                    Instantly search Sri Guru Granth Sahib, Amrit Keertan Gutka, Bhai Gurdas Vaaran, Sri Dasam Granth ,
                                    Kabit Bhai Gurdas and Bhai Nand Lal Bani by typing your keywords:
                                </p>
                                <div className="position-relative">
                                    <input className="form-control border-secondary py-2 search-r" type="search" placeholder='Search'
                                        value={displayedInput} // Display Gurumukhi ASCII in the input field
                                        ref={inputRef}
                                        onChange={handleInputChange}
                                        onKeyDown={handleKeyDown} />
                                    {isAutocomplete ? searchData.length > 0 && (
                                        <ul className='select-dropdown'>
                                            {searchData.map((item, index) => (
                                                <li key={index} style={{ padding: '10px', borderBottom: '1px solid #ddd' }}
                                                    onClick={() => handleItemClick(item)}
                                               /*  onClick={(e) => {e.preventDefault(); setSearchData([]);  setDisplayedInput(item.word);getSearchResult(item.word); }} */>
                                                    {item.word}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : null}
                                    <div className="input-group-append">
                                        {/* ---- old ----  */}
                                        {/* <div className="d-flex justify-content-between reset-bttn ">
                                            <Link className="" onClick={(e) => { e.preventDefault(); setEnglishInput(''); setDisplayedInput(''); }} >Reset</Link>
                                        </div> */}
                                        {/* ---- new ------  */}
                                        <div className="d-flex justify-content-between reset-bttn">
                                            <a  href='javascript:void(0)'
                                                className=""
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setEnglishInput('');
                                                    setDisplayedInput('');
                                                }}
                                            >
                                                Reset
                                            </a>
                                        </div>
                                        
                                        <button className="btn btn-outline-secondary search-divz" type="button"
                                            onClick={(e) => { e.preventDefault(); getSearchResult(selectedLanguage === 'PUNJABI-ASC' ? englishInput : displayedInput) }}>
                                            <i className="bi bi-search"></i>
                                        </button>
                                    </div>
                                </div>

                                <div className="filter">
                                    <div className="main-filters">
                                        <div className='row g-3'>
                                            <div className="col-lg-4">
                                                <div className="form-control auto-com-check">
                                                    <label htmlFor="vehicle1" className='check-label'>Autocomplete</label>
                                                    <input type="checkbox" className='checkbox' value="Bike"
                                                        onChange={(e) => { setIsAutocomplete(e.target.checked) }} checked={isAutocomplete ? 'checked' : ''} />
                                                </div>
                                            </div>

                                            <div className="col-lg-4">

                                                <Form.Select aria-label="Default select example" value={selectedOption}
                                                    onChange={(e) => setSelectedOption(e.target.value)} >
                                                    <option selected >Return Results</option>
                                                    <option value="FL_begin">First Letter Beginning</option>
                                                    <option value="FL_any">First Letter Anywhere</option>
                                                    <option value="PHRASE">Phrase</option>
                                                </Form.Select>
                                            </div>

                                            <div className="col-lg-4">
                                                <Form.Select aria-label="Default select example" value={selectedLanguage} onChange={handleLanguageChange}>
                                                    <option selected>Find results in language</option>
                                                    <option value="ROMAN">Phonetic Roman</option>
                                                    <option value="PUNJABI-ASC">Gurumukhi ASCII</option>
                                                    <option value="PUNJABI">Gurumukhi</option>
                                                </Form.Select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {selectedLanguage === "PUNJABI" ?
                            <section className=' col-12'>
                                <div className=''>
                                    <div className=' p-4'>
                                        {/*  <h1 className='inner-heading' >Sri Guru Granth Sahib</h1> */}
                                        <button className='ang-btn mx-2' onClick={(e) => { e.preventDefault(); setIsKeyBoard(!isKeyboard) }}>Show Keyboard</button>
                                        <label className='me-2' >You can use either Virtual or Physical Keyboard for Gurmukhi Unicode </label>
                                    </div>
                                    {isKeyboard ?
                                        <VirtualKeyboard addChar={addChar} />
                                        : null}
                                </div>
                            </section>
                            : null}

                        {displayedInput !== "" ?

                            <section className=' col-12 search-result search-tabs ' >

                                <div className=''>
                                    <h1 className='main-heading' >Search Results</h1>
                                    <div className='search-tab-main-wrapper' >
                                        <Tabs /* defaultActiveKey="Granth" */ activeKey={activeTab} id="fill-tab-example" className="mb-0 guru-search-tables" fill onSelect={handleTabSelect}>
                                            <Tab eventKey="Granth" title="Sri Guru Granth Sahib" >
                                                {isAsvanceSearch ?
                                                    <div>
                                                        <div className='table-responsive mt-4'>
                                                            <DataTable
                                                                columns={columns}
                                                                data={searchAllResult}
                                                                pagination
                                                                progressPending={loader}
                                                                paginationServer
                                                                paginationTotalRows={totalRows}
                                                                paginationDefaultPage={currentPage}
                                                                onChangeRowsPerPage={handlePerRowsChange}
                                                                onChangePage={handlePageChange}
                                                                fixedHeader
                                                                customStyles={customStyleTable}
                                                                onRowClicked={handleClick}
                                                            /* fixedHeaderScrollHeight={tableHeight} */
                                                            />
                                                        </div>
                                                    </div> :
                                                    <div>
                                                        <div className='additional-filters d-flex justify-content-end'>
                                                            <div className='toggle-buttons-inner'>
                                                                <label className='me-2' >Additional Filters</label>
                                                                <label className='switch'>
                                                                    <Switch
                                                                        onChange={handleFilter}
                                                                        checked={isfilter}
                                                                        uncheckedIcon={false}
                                                                        checkedIcon={false}
                                                                    />
                                                                </label>
                                                            </div>
                                                        </div>
                                                        {isfilter ?
                                                            <div className='add-filter-wrapper'>
                                                                <div className='row g-3 mb-5'>
                                                                    <div className='col-lg-4'>
                                                                        <div className='form-group'>
                                                                            <label>Find results from text written by</label>
                                                                            <Form.Select aria-label="Find results from text written by"
                                                                                onChange={(e) => setSelectedAuthor(e.target.value)}>
                                                                                <option value=""> Any Author</option>
                                                                                {authorArr.map((author, index) => (
                                                                                    <option value={author.ID}>{author.author}</option>
                                                                                ))}
                                                                            </Form.Select>
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-lg-4'>
                                                                        <div className='form-group'>
                                                                            <label>Find results from text related to raag</label>
                                                                            <Form.Select aria-label="Find results from text related to raag"
                                                                                onChange={(e) => setSelectedRaag(e.target.value)}>
                                                                                <option value="">Any Raag</option>
                                                                                {ragaArr.map((rag, index) => (
                                                                                    <option value={rag.id}>{rag.name}</option>
                                                                                ))}
                                                                            </Form.Select>
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-lg-4'>
                                                                        <div className='form-group'>
                                                                            <label>Find results from page between</label>
                                                                            <div className='d-flex search-pages'>
                                                                                <input className='form-control' type='text'
                                                                                    onChange={(e) => setPageFrom(e.target.value)} value={pageFrom} />
                                                                                <label>And</label>
                                                                                <input className='form-control' type='text'
                                                                                    onChange={(e) => setPageTo(e.target.value)} value={pageTo} />
                                                                                <button className='filter-search'
                                                                                    onClick={(e) => { e.preventDefault(); getSearchResult(selectedLanguage === 'PUNJABI-ASC' ? englishInput : displayedInput) }}>Search</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            : null}
                                                        <div className='table-responsive mt-4'>
                                                            <DataTable
                                                                columns={columns}
                                                                data={searchAllResult}
                                                                pagination
                                                                progressPending={loader}
                                                                paginationServer
                                                                paginationTotalRows={totalRows}
                                                                paginationDefaultPage={currentPage}
                                                                onChangeRowsPerPage={handlePerRowsChange}
                                                                onChangePage={handlePageChange}
                                                                fixedHeader
                                                                customStyles={customStyleTable}
                                                                onRowClicked={handleClick}
                                                            /* fixedHeaderScrollHeight={tableHeight} */
                                                            />
                                                        </div>
                                                    </div>}
                                            </Tab>
                                            <Tab eventKey="Keertan" className='p-3' title="Amrit Keertan" >
                                                {isAsvanceSearch ?
                                                    <div>
                                                        <div className='table-responsive mt-4'>
                                                            <DataTable
                                                                columns={columns}
                                                                data={searchAllResult}
                                                                pagination
                                                                progressPending={loader}
                                                                paginationServer
                                                                paginationTotalRows={totalRows}
                                                                paginationDefaultPage={currentPage}
                                                                onChangeRowsPerPage={handlePerRowsChange}
                                                                onChangePage={handlePageChange}
                                                                fixedHeader
                                                                customStyles={customStyleTable}
                                                                onRowClicked={handleClick}
                                                            /* fixedHeaderScrollHeight={tableHeight} */
                                                            />
                                                        </div>
                                                    </div> :
                                                    <div>
                                                        <div className='additional-filters d-flex justify-content-end'>
                                                            <div className='toggle-buttons-inner'>
                                                                <label className='me-2' >Additional Filters</label>
                                                                <label className='switch'>
                                                                    <Switch
                                                                        onChange={handleFilter}
                                                                        checked={isfilter}
                                                                        uncheckedIcon={false}
                                                                        checkedIcon={false}
                                                                    />
                                                                </label>
                                                            </div>
                                                        </div>
                                                        {isfilter ?
                                                            <div className='add-filter-wrapper'>
                                                                <div className='row g-3 mb-5'>
                                                                    <div className='col-lg-4'>
                                                                        <div className='form-group'>
                                                                            <label>Find results from text written by</label>
                                                                            <Form.Select aria-label="Find results from text written by"
                                                                                onChange={(e) => setSelectedAuthor(e.target.value)}>
                                                                                <option value=""> Any Author</option>
                                                                                {authorArr.map((author, index) => (
                                                                                    <option value={author.ID}>{author.author}</option>
                                                                                ))}
                                                                            </Form.Select>
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-lg-4'>
                                                                        <div className='form-group'>
                                                                            <label>Find results from text related to raag</label>
                                                                            <Form.Select aria-label="Find results from text related to raag"
                                                                                onChange={(e) => setSelectedRaag(e.target.value)}>
                                                                                <option value="">Any Raag</option>
                                                                                {ragaArr.map((rag, index) => (
                                                                                    <option value={rag.id}>{rag.name}</option>
                                                                                ))}
                                                                            </Form.Select>
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-lg-4'>
                                                                        <div className='form-group'>
                                                                            <label>Find results from page between</label>
                                                                            <div className='d-flex search-pages'>
                                                                                <input className='form-control' type='text'
                                                                                    onChange={(e) => setPageFrom(e.target.value)} value={pageFrom} />
                                                                                <label>And</label>
                                                                                <input className='form-control' type='text'
                                                                                    onChange={(e) => setPageTo(e.target.value)} value={pageTo} />
                                                                                <button className='filter-search'
                                                                                    onClick={(e) => { e.preventDefault(); getSearchResult(selectedLanguage === 'PUNJABI-ASC' ? englishInput : displayedInput) }}>Search</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            : null}
                                                        {/*  <h6 className='text-dark' >Showing 1 to 0 of 0 entries</h6> */}
                                                        <div className='table-responsive mt-4'>
                                                            <DataTable
                                                                columns={columns}
                                                                data={searchAllResult}
                                                                pagination
                                                                progressPending={loader}
                                                                paginationServer
                                                                paginationTotalRows={totalRows}
                                                                paginationDefaultPage={currentPage}
                                                                onChangeRowsPerPage={handlePerRowsChange}
                                                                onChangePage={handlePageChange}
                                                                fixedHeader
                                                                customStyles={customStyleTable}
                                                                onRowClicked={handleClick}
                                                            /* fixedHeaderScrollHeight={tableHeight} */
                                                            />
                                                        </div>
                                                    </div>}
                                            </Tab>
                                            <Tab eventKey="Vaaran" className='p-3' title="Bhai Gurdas Vaaran">
                                                {isAsvanceSearch ?
                                                    <div>
                                                        <div className='table-responsive mt-4'>
                                                            <DataTable
                                                                columns={columns}
                                                                data={searchAllResult}
                                                                pagination
                                                                progressPending={loader}
                                                                paginationServer
                                                                paginationTotalRows={totalRows}
                                                                paginationDefaultPage={currentPage}
                                                                onChangeRowsPerPage={handlePerRowsChange}
                                                                onChangePage={handlePageChange}
                                                                fixedHeader
                                                                customStyles={customStyleTable}
                                                                onRowClicked={handleClick}
                                                            /* fixedHeaderScrollHeight={tableHeight} */
                                                            />
                                                        </div>
                                                    </div> :
                                                    <div>
                                                        <div className='additional-filters d-flex justify-content-end'>
                                                            <div className='toggle-buttons-inner'>
                                                                <label className='me-2' >Additional Filters</label>
                                                                <label className='switch'>
                                                                    <Switch
                                                                        onChange={handleFilter}
                                                                        checked={isfilter}
                                                                        uncheckedIcon={false}
                                                                        checkedIcon={false}
                                                                    />
                                                                </label>
                                                            </div>
                                                        </div>
                                                        {isfilter ?
                                                            <div className='add-filter-wrapper'>
                                                                <div className='row g-3 mb-5'>
                                                                    <div className='col-lg-4'>
                                                                        <div className='form-group'>
                                                                            <label>Find results from page between</label>
                                                                            <div className='d-flex search-pages'>
                                                                                <input className='form-control' type='text'
                                                                                    onChange={(e) => setPageFrom(e.target.value)} value={pageFrom} />
                                                                                <label>And</label>
                                                                                <input className='form-control' type='text'
                                                                                    onChange={(e) => setPageTo(e.target.value)} value={pageTo} />
                                                                                <button className='filter-search'
                                                                                    onClick={(e) => { e.preventDefault(); getSearchResult(selectedLanguage === 'PUNJABI-ASC' ? englishInput : displayedInput) }}>Search</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            : null}
                                                        <div className='table-responsive mt-4'>
                                                            <DataTable
                                                                columns={columns}
                                                                data={searchAllResult}
                                                                pagination
                                                                progressPending={loader}
                                                                paginationServer
                                                                paginationTotalRows={totalRows}
                                                                paginationDefaultPage={currentPage}
                                                                onChangeRowsPerPage={handlePerRowsChange}
                                                                onChangePage={handlePageChange}
                                                                fixedHeader
                                                                customStyles={customStyleTable}
                                                                onRowClicked={handleClick}
                                                            /* fixedHeaderScrollHeight={tableHeight} */
                                                            />
                                                        </div>
                                                    </div>}
                                            </Tab>
                                            <Tab eventKey="Dasam" className='p-3' title="Sri Dasam Granth Sahib" >
                                                {isAsvanceSearch ?
                                                    <div>
                                                        <div className='table-responsive mt-4'>
                                                            <DataTable
                                                                columns={columns}
                                                                data={searchAllResult}
                                                                pagination
                                                                progressPending={loader}
                                                                paginationServer
                                                                paginationTotalRows={totalRows}
                                                                paginationDefaultPage={currentPage}
                                                                onChangeRowsPerPage={handlePerRowsChange}
                                                                onChangePage={handlePageChange}
                                                                fixedHeader
                                                                customStyles={customStyleTable}
                                                                onRowClicked={handleClick}
                                                            /* fixedHeaderScrollHeight={tableHeight} */
                                                            />
                                                        </div>
                                                    </div> :
                                                    <div>
                                                        <div className='additional-filters d-flex justify-content-end'>
                                                            <div className='toggle-buttons-inner'>
                                                                <label className='me-2' >Additional Filters</label>
                                                                <label className='switch'>
                                                                    <Switch
                                                                        onChange={handleFilter}
                                                                        checked={isfilter}
                                                                        uncheckedIcon={false}
                                                                        checkedIcon={false}
                                                                    />
                                                                </label>
                                                            </div>
                                                        </div>
                                                        {isfilter ?
                                                            <div className='add-filter-wrapper'>
                                                                <div className='row g-3 mb-5'>
                                                                    <div className='col-lg-4'>
                                                                        <div className='form-group'>
                                                                            <label>Find results from page between</label>
                                                                            <div className='d-flex search-pages'>
                                                                                <input className='form-control' type='text'
                                                                                    onChange={(e) => setPageFrom(e.target.value)} value={pageFrom} />
                                                                                <label>And</label>
                                                                                <input className='form-control' type='text'
                                                                                    onChange={(e) => setPageTo(e.target.value)} value={pageTo} />
                                                                                <button className='filter-search'
                                                                                    onClick={(e) => { e.preventDefault(); getSearchResult(selectedLanguage === 'PUNJABI-ASC' ? englishInput : displayedInput) }}>Search</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            : null}
                                                        <div className='table-responsive mt-4'>
                                                            <DataTable
                                                                columns={columns}
                                                                data={searchAllResult}
                                                                pagination
                                                                progressPending={loader}
                                                                paginationServer
                                                                paginationTotalRows={totalRows}
                                                                paginationDefaultPage={currentPage}
                                                                onChangeRowsPerPage={handlePerRowsChange}
                                                                onChangePage={handlePageChange}
                                                                fixedHeader
                                                                customStyles={customStyleTable}
                                                                onRowClicked={handleClick}
                                                            /* fixedHeaderScrollHeight={tableHeight} */
                                                            />
                                                        </div>
                                                    </div>}
                                            </Tab>
                                            <Tab eventKey="Savaiye" className='p-3' title="Kabit Savaiye">
                                                {isAsvanceSearch ?
                                                    <div>
                                                        <div className='table-responsive mt-4'>
                                                            <DataTable
                                                                columns={columns}
                                                                data={searchAllResult}
                                                                pagination
                                                                progressPending={loader}
                                                                paginationServer
                                                                paginationTotalRows={totalRows}
                                                                paginationDefaultPage={currentPage}
                                                                onChangeRowsPerPage={handlePerRowsChange}
                                                                onChangePage={handlePageChange}
                                                                fixedHeader
                                                                customStyles={customStyleTable}
                                                                onRowClicked={handleClick}
                                                            /* fixedHeaderScrollHeight={tableHeight} */
                                                            />
                                                        </div>
                                                    </div> :
                                                    <div>
                                                        <div className='additional-filters d-flex justify-content-end'>
                                                            <div className='toggle-buttons-inner'>
                                                                <label className='me-2' >Additional Filters</label>
                                                                <label className='switch'>
                                                                    <Switch
                                                                        onChange={handleFilter}
                                                                        checked={isfilter}
                                                                        uncheckedIcon={false}
                                                                        checkedIcon={false}
                                                                    />
                                                                </label>
                                                            </div>
                                                        </div>
                                                        {isfilter ?
                                                            <div className='add-filter-wrapper'>
                                                                <div className='row g-3 mb-5'>
                                                                    <div className='col-lg-4'>
                                                                        <div className='form-group'>
                                                                            <label>Find results from page between</label>
                                                                            <div className='d-flex search-pages'>
                                                                                <input className='form-control' type='text'
                                                                                    onChange={(e) => setPageFrom(e.target.value)} value={pageFrom} />
                                                                                <label>And</label>
                                                                                <input className='form-control' type='text'
                                                                                    onChange={(e) => setPageTo(e.target.value)} value={pageTo} />
                                                                                <button className='filter-search'
                                                                                    onClick={(e) => { e.preventDefault(); getSearchResult(selectedLanguage === 'PUNJABI-ASC' ? englishInput : displayedInput) }}>Search</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            : null}
                                                        <div className='table-responsive mt-4'>
                                                            <DataTable
                                                                columns={columns}
                                                                data={searchAllResult}
                                                                pagination
                                                                progressPending={loader}
                                                                paginationServer
                                                                paginationTotalRows={totalRows}
                                                                paginationDefaultPage={currentPage}
                                                                onChangeRowsPerPage={handlePerRowsChange}
                                                                onChangePage={handlePageChange}
                                                                fixedHeader
                                                                customStyles={customStyleTable}
                                                                onRowClicked={handleClick}
                                                            /* fixedHeaderScrollHeight={tableHeight} */
                                                            />
                                                        </div>
                                                    </div>}
                                            </Tab>
                                            <Tab eventKey="Nand" className='p-3' title="Bhai Nand Lal" >
                                                {isAsvanceSearch ?
                                                    <div>
                                                        <div className='table-responsive mt-4'>
                                                            <DataTable
                                                                columns={columns}
                                                                data={searchAllResult}
                                                                pagination
                                                                progressPending={loader}
                                                                paginationServer
                                                                paginationTotalRows={totalRows}
                                                                paginationDefaultPage={currentPage}
                                                                onChangeRowsPerPage={handlePerRowsChange}
                                                                onChangePage={handlePageChange}
                                                                fixedHeader
                                                                customStyles={customStyleTable}
                                                                onRowClicked={handleClick}
                                                            /* fixedHeaderScrollHeight={tableHeight} */
                                                            />
                                                        </div>
                                                    </div> :
                                                    <div>
                                                        <div className='additional-filters d-flex justify-content-end'>
                                                            <div className='toggle-buttons-inner'>
                                                                <label className='me-2' >Additional Filters</label>
                                                                <label className='switch'>
                                                                    <Switch
                                                                        onChange={handleFilter}
                                                                        checked={isfilter}
                                                                        uncheckedIcon={false}
                                                                        checkedIcon={false}
                                                                    />
                                                                </label>
                                                            </div>
                                                        </div>
                                                        {isfilter ?
                                                            <div className='add-filter-wrapper'>
                                                                <div className='row g-3 mb-5'>
                                                                    <div className='col-lg-4'>
                                                                        <div className='form-group'>
                                                                            <label>Search from</label>
                                                                            <Form.Select aria-label="Find results from text related to raag"
                                                                                onChange={(e) => setSelectedCat(e.target.value)}>
                                                                                <option value="">All Category</option>
                                                                                {categoryArr.map((cat, index) => (
                                                                                    <option value={cat.name}>{cat.name}</option>
                                                                                ))}
                                                                            </Form.Select>
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-lg-4'>
                                                                        <div className='form-group'>
                                                                            <label>Find results from page between</label>
                                                                            <div className='d-flex search-pages'>
                                                                                <input className='form-control' type='text'
                                                                                    onChange={(e) => setPageFrom(e.target.value)} value={pageFrom} />
                                                                                <label>And</label>
                                                                                <input className='form-control' type='text'
                                                                                    onChange={(e) => setPageTo(e.target.value)} value={pageTo} />
                                                                                <button className='filter-search'
                                                                                    onClick={(e) => { e.preventDefault(); getSearchResult(selectedLanguage === 'PUNJABI-ASC' ? englishInput : displayedInput) }}>Search</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            : null}
                                                        {/*  <h6 className='text-dark' >Showing 1 to 0 of 0 entries</h6> */}
                                                        <div className='table-responsive mt-4'>
                                                            <DataTable
                                                                columns={columns}
                                                                data={searchAllResult}
                                                                pagination
                                                                progressPending={loader}
                                                                paginationServer
                                                                paginationTotalRows={totalRows}
                                                                paginationDefaultPage={currentPage}
                                                                onChangeRowsPerPage={handlePerRowsChange}
                                                                onChangePage={handlePageChange}
                                                                fixedHeader
                                                                customStyles={customStyleTable}
                                                                onRowClicked={handleClick}
                                                            /* fixedHeaderScrollHeight={tableHeight} */
                                                            />
                                                        </div>
                                                    </div>}
                                            </Tab>
                                        </Tabs>
                                    </div>
                                </div>
                            </section> : null}

                    </div>
                </div>

            </section>


        </div>
    )
}

export default GurbaniSearch