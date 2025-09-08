// import '../assets/css/resource.css';
//Gurbani search//
import React, { useEffect, useState, useRef } from 'react';
// import { useNavigate, useOutletContext } from "react-router";
// import { Link, useLocation, useParams } from "react-router-dom";
import { useRouter } from 'next/router';
//import imgs from './assets/img/content/ggs_01.jpg'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { API } from "../config/api";
import { ApiHelper } from '../helpers/ApiHelper';
import Spinner from '../components/Spinner';
import Form from 'react-bootstrap/Form';
import { Helmet } from 'react-helmet';
import HelmetWrapper from './CommonHelmet';

const ResourcePage = (props) => {
    // const location = useLocation();
    // const navigate = useNavigate();
      const router = useRouter();
    const volNo = props.volumeNo || '1';
    const page = props.pageno || '1';
    console.log('PAGE VOLume Start', volNo)
    const shareUrl = 'https://searchgurbani.com';
    const title = 'Search Gurbani : Gurbani Website';
    const [loader, setLoader] = useState(false);
    const [isHindi, setIsHindi] = useState(false);
    const [isCenter, setIsCenter] = useState(true);
    const [angNo, setAngNo] = useState("1");
    const [angData, setAngData] = useState([]);
    const [allData, setAllData] = useState([]);
    const [gurmukhiSize, setGurmukhiSize] = useState('22');

    useEffect(() => {
        getAngByAng(page)
        setAngNo(props.pageno)
    }, [])
    const getAngByAng = async (pageNo) => {
        console.log(' VOLume', props.volumeNo)
        console.log('PAGE ', pageNo)
        setLoader(true)
        //await ApiHelper.get(API.getResPage + props.nameApi + "?volume_id=" + volNo + "&page_no=" + pageNo)
        if (props.poet === 'fwt' || 'sggd') {
            await ApiHelper.get(API.getResPage + props.nameApi + "?volume_id=" + volNo + "&page_no=" + pageNo)
                .then((resData) => {
                    setLoader(false);
                    console.log('Ang', resData.data.lines);
                    setAngData(resData.data.lines)
                    setAllData(resData.data)
                })
                .catch((err) => {
                    setLoader(false);
                    /* setMessage("Error !!! Please try again"); */
                    console.log(err, 'err');
                });
        }
        else {
            await ApiHelper.get(API.getResPage + props.nameApi + "?page_no=" + pageNo + "&&label=volume&volume_id=" + volNo)
                .then((resData) => {
                    setLoader(false);
                    console.log('Ang', resData.data.lines);
                    setAngData(resData.data.lines)
                    setAllData(resData.data)
                })
                .catch((err) => {
                    setLoader(false);
                    /* setMessage("Error !!! Please try again"); */
                    console.log(err, 'err');
                });
        }
    }
    const handleSizeChange = (event) => {
        const { value } = event.target;
        setGurmukhiSize(value);

    };
    const handleBegin = () => {
        setAngNo(1);
        getAngByAng(1);
    }
    const handleBack = (ang) => {
        let no = parseInt(ang) - 1
        setAngNo(no.toString());
        getAngByAng(no.toString());
    }
    const handleNext = (ang) => {
        if (angNo > 1) {
            let no = parseInt(ang) + 1
            setAngNo(no.toString());
            getAngByAng(no.toString());
        }
        else {
            let no = 1 + 1
            setAngNo(no.toString());
            getAngByAng(no.toString());
        }

    }
    const handleLast = () => {
        setAngNo(allData.lines_count);
        getAngByAng(allData.lines_count);
    }
    return (
        <div>
            {/* <HelmetWrapper
                title={`${props.title} - Page ${allData.page_no}-: searchgurbani.com `}
                description={`Explore ${props.title} page ${allData.page_no}`}
                keywords=""
                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                url={window.location.href}
            /> */}
            {loader && <Spinner />}
            <section className='inner-actions p-4' >
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 p-0'>
                            <div className='in-act-wrapper'>
                                <h1 className='inner-heading' >{props.title}</h1>
                                <div className='actions-mains'>
                                    <button className='ang-btn' onClick={(e) => { e.preventDefault(); setIsCenter(true); }}>Center</button>
                                    <button className='ang-btn' onClick={(e) => { e.preventDefault(); setIsCenter(false) }}>Left</button>
                                    <Form.Range value={gurmukhiSize} min={10} max={90} onChange={(e) => handleSizeChange(e)} />
                                    {props.apiName === 'sri-nanak-prakash' ?
                                        <button className='action-btn-main' onClick={() => window.open(`/sri-nanak-prakash/page/${angNo}/volume/${volNo}/${isHindi ? 'Hindi' : 'Punjabi'}/print-view`, '_blank', 'height=700,width=700')}><i className="bi bi-printer"></i></button> :
                                        props.apiName === 'sri-gur-pratap-suraj-granth' ?
                                            <button className='action-btn-main' onClick={() => window.open(`/sri-gur-pratap-suraj-granth/page/${angNo}/volume/${volNo}/${isHindi ? 'Hindi' : 'Punjabi'}/print-view`, '_blank', 'height=700,width=700')}><i className="bi bi-printer"></i></button> :
                                            props.apiName === 'faridkot-wala-teeka' ?
                                                <button className='action-btn-main' onClick={() => window.open(`/faridkot-wala-teeka/page/${angNo}/volume/${volNo}/${isHindi ? 'Hindi' : 'Punjabi'}/print-view`, '_blank', 'height=700,width=700')}><i className="bi bi-printer"></i></button> :
                                                <button className='action-btn-main' onClick={() => window.open(`/sri-guru-granth-darpan/page/${angNo}/volume/${volNo}/${isHindi ? 'Hindi' : 'Punjabi'}/print-view`, '_blank', 'height=700,width=700')}><i className="bi bi-printer"></i></button>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-12 d-flex-justify-content-end ang-ang'>
                            <div className='go-to-ang position-relative'>
                                <div className='form-group'>
                                    <input type='text' placeholder='go to ang' className='form-control'
                                        onChange={(e) => setAngNo(e.target.value)} value={angNo}></input>
                                    <button className='ang-btn' onClick={(e) => { e.preventDefault(); getAngByAng(angNo); }}>Go</button>
                                </div>
                            </div>
                            <div className='audio-features'>
                                <button className='ang-btn' onClick={(e) => { e.preventDefault(); isHindi === false ? setIsHindi(true) : setIsHindi(false) }}>{isHindi === false ? 'View in Hindi' : 'View in Gurumukhi'}</button>
                                <button className='ang-btn' onClick={() => navigate(`/${props.apiName}`)}>Search Page</button>
                                {/* old  */}
                                {/* {props.apiName !== 'sri-guru-granth-darpan' ? (
                                    props.apiName !== 'faridkot-wala-teeka' ? (
                                        <button className='ang-btn' onClick={(e) => { e.preventDefault(); navigate(`/${props.apiName}/chapters/${volNo}`) }}>
                                            Chapter Index
                                        </button>
                                    ) : (
                                        <button className='ang-btn' onClick={(e) => { e.preventDefault(); navigate(`/${props.apiName}/chapters`) }}>
                                            Chapter Index
                                        </button>
                                    )
                                ) : null} */}
                                {/* new  */}
                                {props.apiName !== "sri-guru-granth-darpan" ? (
                                    props.apiName !== "faridkot-wala-teeka" ? (
                                        <button
                                            className="ang-btn"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                router.push(`/${props.apiName}/chapters/${volNo}`);
                                            }}
                                        >
                                            Chapter Index
                                        </button>
                                    ) : (
                                        <button
                                            className="ang-btn"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                router.push(`/${props.apiName}/chapters`);
                                            }}
                                        >
                                            Chapter Index
                                        </button>
                                    )
                                ) : null}
                                {angNo > 1 &&
                                    <>
                                        <button className='ang-btn' onClick={(e) => { e.preventDefault(); handleBegin() }}>Begin</button>
                                        <button className='ang-btn' onClick={(e) => { e.preventDefault(); handleBack(angNo); }}>Back</button>
                                    </>}

                                <button className='ang-btn' onClick={(e) => { e.preventDefault(); handleNext(angNo) }}>Next</button>
                                <button className='ang-btn' onClick={(e) => { e.preventDefault(); handleLast(); }}>Last</button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='container'>
                    <div className='d-flex flex-column'>
                        <div className='ang-display mt-5'>
                            <h1>Displaying Page {allData.page_no} of {allData.lines_count} from Volume {allData.volume_id}</h1>
                            <div className='ang-wrapper'>
                                {angData.map((item, index) => {
                                    console.log('$$$$', isCenter)
                                    return (
                                        <div className={`ang-itm ${isCenter && 'center-align'}`} style={{ background: '#f5e8de' }}>
                                            {/* <div className={`display-text lang-4 ${isCenter && 'center-align'} `}>{item.text}
                                            </div> */}
                                            {isHindi === false ?
                                                <div className={`formatted-text ${isCenter && 'center-align'} `} >
                                                    {item.text.split('\n').map((line, index) => (
                                                        <p key={index} className='snp-viwe' style={{ fontSize: `${gurmukhiSize}px`, }}>{line}</p>
                                                    ))}
                                                </div> :
                                                <div className={`formatted-text ${isCenter && 'center-align'} `} >
                                                    {item.hindi.split('\n').map((line, index) => (
                                                        <p key={index} className='snp-viwe' style={{ fontSize: `${gurmukhiSize}px`, }}>{line}</p>
                                                    ))}
                                                </div>
                                            }
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

export default ResourcePage