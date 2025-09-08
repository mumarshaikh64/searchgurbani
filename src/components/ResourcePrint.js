// import '../assets/css/ang-by-ang.css';
// import '../assets/css/print.css';
//Gurbani search//
import React, { useEffect, useState, useRef } from 'react';
// import { useNavigate, useOutletContext } from "react-router";
// import { Link, useLocation, useParams } from "react-router-dom";
import Spinner from './Spinner';

const ResourcePrintView = (props) => {
    // const location = useLocation();
    // const navigate = useNavigate();
    const shareUrl = 'https://searchgurbani.com';
    const title = 'Search Gurbani : Gurbani Website';
    const [loader, setLoader] = useState(false);
    const [angNo, setAngNo] = useState("1");
    const [isHindi, setIsHindi] = useState(false);
    const [isCenter, setIsCenter] = useState(false);
    const [gurmukhiFont, setGurmukhiFont] = useState('AnmolUniBani');
    const [phoneticFont, setPhoneticFont] = useState('arial');
    const [hindiFont, setHindiFont] = useState('arial');
    const [englishFont, setEnglishFont] = useState('arial');
    const [gurmukhiSize, setGurmukhiSize] = useState('22');
    const [phoneticSize, setPhoneticSize] = useState('22');
    const [hindiSize, setHindiSize] = useState('22');
    const [englishSize, setEnglishSize] = useState('22');

    useEffect(() => {
        setAngNo(props.pageNo);
        if (props.angData) {
            setLoader(false)
        } else {
            setLoader(true)
        }
    }, [])
    return (
        <div>
            {loader && <Spinner />}
            <div className='main-print'>
                <section className='inner-actions p-4' >
                    <section className='inner-actions p-4' >
                        <div className=''>
                            <div className='row'>
                                <div className=' col-lg-12 p-0 d-flex align-item-center justify-content-between'>
                                    <div className='in-act-wrapper'>
                                        <div className='actions-mains'>
                                            <button className='action-btn-main' onClick={() => window.print()}  ><i className="bi bi-printer"></i></button>
                                        </div>
                                    </div>
                                    <div className='audio-features mt-0'>
                                        <div className='toggle-buttons-inner'>
                                            <label className='me-2' >SearchGurbani.com </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className=''>
                        <div className='row'>
                            <div className='col-lg-12 p-0'>
                                <div className='d-flex justify-content-start'>
                                    <h1 className='inner-heading-prints' >{props.title}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='row'>
                        <div className='col-lg-12 p-0'>
                            <div className='d-flex justify-content-center'>
                                <h6 className=' text-dark' >Displaying Page {props.headingData.page_no} of {props.headingData.lines_count} from Volume {props.headingData.volume_id}</h6>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='d-flex flex-column'>
                            <div className=' mt-2'>
                                <div className='ang-wrapper'>
                                    {props.angData.map((item, index) => {
                                        if (!item) return <p key={index}>Data is missing</p>;

                                        const textLines = item.text ? item.text.split('\n') : [];
                                        const hindiLines = item.hindi ? item.hindi.split('\n') : [];
                                        return (
                                            <div className={`ang-itm ${isCenter && 'center-align'}`} style={{ background: '#f5e8de' }}>                                                
                                                {props.lang === 'Punjabi' ?
                                                    <div className={`formatted-text ${isCenter && 'center-align'} `} >
                                                        {textLines.map((line, index) => (
                                                            <p key={index} className='snp-viwe' >{line}</p>
                                                        ))}
                                                    </div> :
                                                    <div className={`formatted-text ${isCenter && 'center-align'} `} >
                                                        {hindiLines.map((line, index) => (
                                                            <p key={index} className='snp-viwe' >{line}</p>
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
        </div>
    )
}

export default ResourcePrintView