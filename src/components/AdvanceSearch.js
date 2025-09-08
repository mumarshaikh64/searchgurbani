// import '../assets/css/dashboard.css';
// import '../assets/css/advan-search.css';
import React, { useEffect, useState, useRef } from 'react';
// import { useNavigate, useOutletContext } from "react-router";
import { useRouter } from 'next/router';
// import { Link, useLocation } from "react-router-dom";
import Link from "next/link";
import Axios from 'axios';
import { API } from "../config/api";
import { ApiHelper } from '../helpers/ApiHelper';
import Form from 'react-bootstrap/Form';
import searchbannar from '../assets/img/search-bannar.webp';
import Table from 'react-bootstrap/Table';
import charMap from '../components/GurumukhiAscii';
import VirtualKeyboard from '../components/VirtualKeyboard';
import Switch from 'react-switch';
import DataTable from 'react-data-table-component';
import Spinner from './Spinner';
import { Helmet } from "react-helmet";
import HelmetWrapper from './CommonHelmet';
import ggsImg from '../assets/img/sg-ggs1.png'


function AdvancedSearch(props) {
    // const navigate = useNavigate();
    const navigate = useRouter();

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
    const [scripture, setScripture] = useState('');
    const [pageFrom, setPageFrom] = useState('');
    const [pageTo, setPageTo] = useState('');
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
    useEffect(() => {
        console.log("@@@@@@@@@", props.scripture)
        setPageFrom(props.pageFrom);
        setPageTo(props.pageTo);
        setScripture(props.scripture);
        getAuthors();
        getRaga();
        getCategory();
        let savedHomeSearch = null;
        if (props.scripture === 'ggs') {
            savedHomeSearch = localStorage.getItem('GGSSearch');
        } else if (props.scripture === 'ak') {
            savedHomeSearch = localStorage.getItem('AKSearch');
        } else if (props.scripture === 'bgv') {
            savedHomeSearch = localStorage.getItem('BGVSearch');
        } else if (props.scripture === 'dg') {
            savedHomeSearch = localStorage.getItem('DGSearch');
        } else if (props.scripture === 'ks') {
            savedHomeSearch = localStorage.getItem('KSSearch');
        } else {
            savedHomeSearch = localStorage.getItem('BNLSearch');
        }

        /* switch (props.scripture) {
            case 'ggs':
                savedHomeSearch = localStorage.getItem('GGSSearch');
                break;
            case 'ak':
                savedHomeSearch = localStorage.getItem('AKSearch');
                break;
            case 'bgv':
                savedHomeSearch = localStorage.getItem('BGVSearch');
                break;
            case 'dg':
                savedHomeSearch = localStorage.getItem('DGSearch');
                break;
            case 'ks':
                savedHomeSearch = localStorage.getItem('KSSearch');
                break;
            default:
                break;
        } */
        console.log('Preference', savedHomeSearch);
        if (savedHomeSearch) {
            try {
                const preferences = JSON.parse(savedHomeSearch);
                setSelectedCat(preferences.bnlSelect);
                setScripture(preferences.scripture);
                setSelectedLanguage(preferences.language);
                setPageFrom(preferences.page_from);
                setPageTo(preferences.page_to);
                setDisplayedInput(preferences.q);
                setSelectedOption(preferences.searchType);
                setSelectedAuthor(preferences.selected_author);
                setSelectedRaag(preferences.selected_raag);
                getSearchResult(preferences.q);

            } catch (error) {
                console.error("Error parsing saved preferences", error);
            }
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
            .map((char) => charMap[char.toLowerCase()] || charMap[char.toUpperCase()] || char)
            .join('');
    };
    const handleInputChange = (e) => {
        const input = e.target.value;
        setLoader(false)
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
                setSearchAllResult(resData.data.data);
                setTotalRows(resData.data.recordsTotal);
                const searchPref = {
                    bnlSelect: selectedCat,
                    language: selectedLanguage,
                    page_from: pageFrom,
                    page_to: pageTo,
                    q: key ? key : displayedInput,
                    scripture: scripture,
                    searchType: selectedOption,
                    selected_author: selectedAuthor,
                    selected_raag: selectedRaag
                };
                switch (scripture) {
                    case 'ggs':
                        localStorage.setItem('GGSSearch', JSON.stringify(searchPref));
                        break;
                    case 'ak':
                        localStorage.setItem('AKSearch', JSON.stringify(searchPref));
                        break;
                    case 'bgv':
                        localStorage.setItem('BGVSearch', JSON.stringify(searchPref));
                        break;
                    case 'dg':
                        localStorage.setItem('DGSearch', JSON.stringify(searchPref));
                        break;
                    case 'ks':
                        localStorage.setItem('KSSearch', JSON.stringify(searchPref));
                        break;
                    case 'bnl':
                        localStorage.setItem('BNLSearch', JSON.stringify(searchPref));
                        break;
                    default:
                        break;
                }
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
        //    ------------------------- BGV & KS -------------------------------------------
        // {
        //     name: "",
        //     cell: (row) => (
        //         props.scripture === "bgv" || props.scripture === "ks" ?
        //             <div className='btn-dis'>
        //                 <button className='ang-btn-search'
        //                     onClick={() => {
        //                         const cleanshabadlink = row.shabadlink.replace(/^guru-granth-sahib\//, "");
        //                         navigate.push(`/GGS/${cleanshabadlink}`);
        //                     }}>Go to page</button>
        //             </div> : props.scripture === "ggs" || props.scripture === "ak" || props.scripture === "dg" ?
        //                 <div className='btn-dis'>
        //                     <button className='ang-btn-search'
        //                         onClick={() => {
        //                             const cleanLink = row.pageLink.replace(/^guru-granth-sahib\//, "");
        //                             navigate.push(`/GGS/${cleanLink}`);
        //                         }}>Go to page</button>
        //                 </div> : null
        //     ),
        //     width: '150px'
        // },
        // new dynamic functionality (Go to page)
        {
            name: "",
            cell: (row) => {
                const goToPageGGS = () => {
                    const clean = row.pageLink.replace(/^guru-granth-sahib\//, "");
                    navigate.push(`/GGS/${clean}`);
                };

                const goToPageAK = () => {
                    const clean = row.pageLink.replace(/^amrit-keertan\//, "");
                    navigate.push(`/AK/${clean}`);
                };

                const goToPageDG = () => {
                    const clean = row.pageLink.replace(/^dasam-granth\//, "");
                    navigate.push(`/DGS/${clean}`);
                };

                const goToPageBGV = () => {
                    const clean = row.shabadlink.replace(/^bhai-gurdas-vaaran\//, "");
                    navigate.push(`/BGV/${clean}`);
                };

                const goToPageKS = () => {
                    const clean = row.shabadlink.replace(/^kabit-savaiye\//, "");
                    navigate.push(`/KS/${clean}`);
                };

                if (props.scripture === "ggs") {
                    return (
                        <div className="btn-dis">
                            <button className="ang-btn-search" onClick={goToPageGGS}>
                                Go to page (GGS)
                            </button>
                        </div>
                    );
                }

                if (props.scripture === "ak") {
                    return (
                        <div className="btn-dis">
                            <button className="ang-btn-search" onClick={goToPageAK}>
                                Go to page (AK)
                            </button>
                        </div>
                    );
                }

                if (props.scripture === "dg") {
                    return (
                        <div className="btn-dis">
                            <button className="ang-btn-search" onClick={goToPageDG}>
                                Go to page (DG)
                            </button>
                        </div>
                    );
                }

                if (props.scripture === "bgv") {
                    return (
                        <div className="btn-dis">
                            <button className="ang-btn-search" onClick={goToPageBGV}>
                                Go to page (BGV)
                            </button>
                        </div>
                    );
                }

                if (props.scripture === "ks") {
                    return (
                        <div className="btn-dis">
                            <button className="ang-btn-search" onClick={goToPageKS}>
                                Go to page (KS)
                            </button>
                        </div>
                    );
                }

                return null;
            },
            width: "150px",
        },
        //    ------------------------- GGS ak dg-------------------------------------------
        // {
        //     name: "",
        //     cell: (row) => (
        //         props.scripture === "ggs" || props.scripture === "ak" || props.scripture === "dg" ?

        //             <div className='btn-dis'>
        //                 <button className='ang-btn-search'
        //                     onClick={() => {
        //                         const cleanshabadlink = row.shabadlink.replace(/^guru-granth-sahib\//, "");
        //                         navigate.push(`/GGS/${cleanshabadlink}`);
        //                     }}>Go to shabad</button>
        //             </div> :
        //             props.scripture === "bnl" ?
        //                 <div className='btn-dis'>
        //                     <button className='ang-btn-search'
        //                         onClick={() => {
        //                         const cleanshabadlink = row.shabadlink.replace(/^guru-granth-sahib\//, "");
        //                         navigate.push(`/GGS/${cleanshabadlink}?title=${encodeURIComponent(row.punjabi)}`);
        //                     }}>Go to shabad</button>
        //                 </div>
        //                 : null
        //     )
        // },
        // new functionality (Go to shabad)
        {
            name: "",
            cell: (row) => {
                const goToGGS = () => {
                    const clean = row.shabadlink.replace(/^guru-granth-sahib\//, "");
                    navigate.push(`/GGS/${clean}`);
                };

                const goToAK = () => {
                    const clean = row.shabadlink.replace(/^amrit-keertan\//, "");
                    navigate.push(`/AK/${clean}`);
                };

                const goToDG = () => {
                    const clean = row.shabadlink.replace(/^dasam-granth\//, "");
                    navigate.push(`/DGS/${clean}`);
                };

                const goToBNL = () => {
                    const clean = row.shabadlink.replace(/^guru-granth-sahib\//, "");
                    navigate.push(`/BNL/${clean}?title=${encodeURIComponent(row.punjabi)}`);
                };

                if (props.scripture === "ggs") {
                    return (
                        <div className="btn-dis">
                            <button className="ang-btn-search" onClick={goToGGS}>
                                Go to Shabad (GGS)
                            </button>
                        </div>
                    );
                }

                if (props.scripture === "ak") {
                    return (
                        <div className="btn-dis">
                            <button className="ang-btn-search" onClick={goToAK}>
                                Go to Shabad (AK)
                            </button>
                        </div>
                    );
                }

                if (props.scripture === "dg") {
                    return (
                        <div className="btn-dis">
                            <button className="ang-btn-search" onClick={goToDG}>
                                Go to Shabad (DG)
                            </button>
                        </div>
                    );
                }

                if (props.scripture === "bnl") {
                    return (
                        <div className="btn-dis">
                            <button className="ang-btn-search" onClick={goToBNL}>
                                Go to Shabad (BNL)
                            </button>
                        </div>
                    );
                }

                return null;
            },
        }


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
    //------------ old react ---------------
    // const handleClick = (row) => {
    //     console.log('ROWWWW', row.shabadlink)
    //     /* setRowItem(row); */

    //     if (props.scripture === 'bnl') {
    //         navigate('/' + `${row.shabadlink}`, { state: { Title: row.punjabi } })
    //     }
    //     else {
    //         navigate('/' + `${row.shabadlink}`)
    //     }
    // }
    //------------------- new next--------------------- 
    const handleClick = (row) => {
        console.log('ROWWWW', row.shabadlink)
        /* setRowItem(row); */

        if (props.scripture === 'bnl') {
            navigate.push(`/${row.shabadlink}`, { state: { Title: row.punjabi } })
        }
        else {
            navigate.push(`/${row.shabadlink}`)
        }
    }

    useEffect(() => {
        //setActiveTab(scriptureToTabEventKey[scripture]);
    }, [scripture]);
    /* useEffect(() => {
        if (scripture) {
            getSearchResult(selectedLanguage === 'PUNJABI-ASC' ? englishInput : displayedInput);
        }
    }, [scripture, pageFrom, pageTo]); */
    return (
        <div>
            {/* <HelmetWrapper
                title={`${props.title} -: searchgurbani.com`}
                description={`${props.title} -: searchgurbani.com`}
                keywords="Gurmat Sangeet, Gurubani ,Kirtan,Amrit,Gurbani, Shabad, Keertan, English ,translation ,Phonetic, Transliteration, Hindi ,Sikh scriptures,sikhism, sikh, mahan kosh,hukamnama, dasam granth,granth,gurdas,guru,raag, vaaran,varan,kabit,nand lal,ang,gurdwara,hukumnama,bhagats;"
                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                url={window.location.href}
            /> */}
            <div>
                <section className='section-1'>

                    <div className="fouth-container-adv common-padding">
                        <div className="container align-items-center d-flex justify-content-center advance-search">
                            <div className='adv-search-bg'>
                                <div className="row w-60 search-main-grd">
                                    <div className="col-12">
                                        <h1 className="main-heading mb-4">{props.title}</h1>
                                    </div>

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
                                            <div className="d-flex justify-content-between reset-bttn ">
                                                {/* <a className="" href="#">Reset</a> */}
                                                <a className="" onClick={(e) => { e.preventDefault(); setEnglishInput(''); setDisplayedInput(''); }} >Reset</a>
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
                                                {props.scripture === 'bnl' ?
                                                    <>
                                                        <div className="col-lg-12">
                                                            <Form.Select aria-label="Find results from Category"
                                                                onChange={(e) => setSelectedCat(e.target.value)}>
                                                                <option value="">All Category</option>
                                                                {categoryArr.map((cat, index) => (
                                                                    <option value={cat.name}>{cat.name}</option>
                                                                ))}
                                                            </Form.Select>
                                                        </div>

                                                        {/*  <div className="col-lg-6">
                                                        <div className="form-control auto-com-check">
                                                            <label htmlFor="vehicle1" className='check-label'>Search from</label>
                                                            <div data-mdb-input-init className="form-outline d-flex count-div" >
                                                                <input type="number" id="typeNumber" className="form-control no-up"
                                                                    onChange={(e) => setPageFrom(e.target.value)} value={pageFrom} />
                                                                <p className='and-para'>to</p>
                                                                <input type="number" id="typeNumber" className="form-control no-up"
                                                                    onChange={(e) => setPageTo(e.target.value)} value={pageTo} />
                                                            </div>
                                                        </div>
                                                    </div> */}

                                                    </>
                                                    : null}

                                                {props.scripture === "ggs" || props.scripture === "ak" ?
                                                    <>
                                                        <div className="col-lg-6">
                                                            <Form.Select aria-label="Find results from text related to raag"
                                                                onChange={(e) => setSelectedRaag(e.target.value)}>
                                                                <option value="">Any Raag</option>
                                                                {ragaArr.map((rag, index) => (
                                                                    <option value={rag.id}>{rag.name}</option>
                                                                ))}
                                                            </Form.Select>


                                                        </div>

                                                        <div className="col-lg-6">
                                                            <Form.Select aria-label="Find results from text written by"
                                                                onChange={(e) => setSelectedAuthor(e.target.value)}>
                                                                <option value=""> Any Author</option>
                                                                {authorArr.map((author, index) => (
                                                                    <option value={author.ID}>{author.author}</option>
                                                                ))}
                                                            </Form.Select>

                                                        </div>
                                                    </>
                                                    : null}


                                                {props.scripture !== "bnl" &&
                                                    <div className="col-lg-12">
                                                        <div className="form-control auto-com-check">
                                                            <label htmlFor="vehicle1" className='check-label'>Find results from page between</label>
                                                            <div data-mdb-input-init className="form-outline d-flex count-div" >
                                                                <input type="number" id="typeNumber" className="form-control no-up"
                                                                    onChange={(e) => setPageFrom(e.target.value)} value={pageFrom} />
                                                                <p className='and-para'>and</p>
                                                                <input type="number" id="typeNumber" className="form-control no-up"
                                                                    onChange={(e) => setPageTo(e.target.value)} value={pageTo} />
                                                            </div>
                                                        </div>
                                                    </div>}
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>

                            {selectedLanguage === "PUNJABI" ?
                                <section className='col-12'>
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
                            {/* <h1 className='main-heading' >Search Results</h1>
                            <div className='search-tab-main-wrapper' >
                                <div className='table-responsive mt-4'>
                                    <DataTable
                                        columns={columns}
                                        data={searchAllResult}
                                        pagination
                                        fixedHeader
                                        customStyles={customStyleTable}
                                        onRowClicked={handleClick}
                                    fixedHeaderScrollHeight={tableHeight} 
                                    />
                                </div>
                            </div> */}
                            {displayedInput !== "" ?

                                <>
                                    <h1 className='main-heading' >Search Results</h1>
                                    <div className='search-tab-main-wrapper' >
                                        <div className='table-responsive mt-4'>
                                            {/* <DataTable
                                                    columns={columns}
                                                    data={searchAllResult}
                                                    pagination
                                                    fixedHeader
                                                    customStyles={customStyleTable}
                                                    onRowClicked={handleClick}
                                                /> */}
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
                                    </div>
                                </> : null}
                        </div>
                    </div>

                </section>

                {/* {displayedInput !== "" ?
                    <section className='search-result common-padding' >
                        
                        <div className='container-lg'>
                            <h1 className='main-heading' >Search Results</h1>
                            <div className='search-tab-main-wrapper' >
                                <div className='table-responsive mt-4'>
                                    <DataTable
                                        columns={columns}
                                        data={searchAllResult}
                                        pagination
                                        fixedHeader
                                        customStyles={customStyleTable}
                                        onRowClicked={handleClick}
                                    />
                                </div>
                            </div>
                        </div>
                    </section> : null} */}
            </div>
        </div>
    )
}

export default AdvancedSearch