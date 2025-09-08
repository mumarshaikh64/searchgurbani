// import '../../../assets/css/dashboard.css';
// import '../../../assets/css/style.css';
// import '../../../assets/css/sds.css';
import React, { useEffect, useState, useRef } from 'react';
// import { useNavigate, useOutletContext } from "react-router";
import sdsbannar from '../../../assets/img/sds-banner.jpg';
import { ApiHelper } from '../../../helpers/ApiHelper';
import { API } from '../../../config/api';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Helmet } from "react-helmet";
import HelmetWrapper from '../../../components/CommonHelmet';
import { useRouter } from 'next/router';
import Image from 'next/image';

function SriDarbarSahib(props) {
    // const navigate = useNavigate();
    const router = useRouter();
    const [loader, setLoader] = useState(false);
    const [date, setDate] = useState(new Date());
    const [hukumnama, setHukumnama] = useState([]);
    const datePickerRef = useRef(null);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    //const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
    useEffect(() => {
        if (props) {
            console.log('props', props.hukum_date)
            getHukumnama(props.hukum_date)
        }
        else {
            getHukumnama(date)
        }
       
    }, [])    
    const getHukumnama = async (date) => {
        console.log('HUkumNama1111', moment(date).format('YYYY-MM-DD'));
        setLoader(true)
        await ApiHelper.get(API.getHukumnama + '?dt=' + moment(date).format('YYYY-MM-DD'))
            .then((resData) => {
                setLoader(false);
                console.log('HUkumNama', resData.data);
                setHukumnama(resData.data)
            })
            .catch((err) => {
                setLoader(false);
                /* setMessage("Error !!! Please try again"); */
                console.log(err, 'err');
            });
    }
    const handleChange = (selectedDate) => {
        setDate(selectedDate);
        // navigate(`/hukum/${moment(selectedDate).format('YYYY-MM-DD')}`)
        router.push(`/Resources/Hukumnama/${moment(selectedDate).format("YYYY-MM-DD")}`);
        getHukumnama(selectedDate);
        setTimeout(() => {
            setIsCalendarOpen(false);
        }, 100);
    };
    const handleIconClick = () => {
        setIsCalendarOpen(true);
    };
    return (
        <div>
            {/* <HelmetWrapper
                title={`Harmandir Sahib Hukumnama - ${moment(props.hukum_date ? props.hukum_date : date).format('ddd DD MMMM, YYYY')} -: searchgurbani.com`}
                description={`${hukumnama?.contentEnglish}`}
                keywords="Hukum, Hukumnama, Darbar sahib, Harmandir sahib, Amritsar"
                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                url={window.location.href}
            /> */}
            <section>
                <div class=" justify-content-md-center align-items-center">
                    <div class="banner-img">
                        <Image src={sdsbannar} class="img-fluid" alt="Responsive image" />
                    </div>
                </div>
            </section>

            <section>
                <div className='container py-5'>
                    <div className="row ">
                        <div className="second-container intro-bkg">

                            <div class="col-lg-12">
                                <div className='container advance-search intro-border mt-5 '>
                                <div class="px-1  d-flex align-middle mt-3  mb-3 bgv-intro">
                                        <div className=' col-md-4 '>
                                            <audio src={hukumnama[0]?.aud_hukam} className='text-left' autoplay controls ></audio>
                                            <p className='audio-text text-center mb-left' >Audio Hukumnama </p>
                                        </div>

                                        <div className=' col-md-4 text-center'>

                                            <button className='date-bttn' onClick={handleIconClick}>
                                                <div className='datename'>
                                                    <DatePicker
                                                        selected={props.hukum_date? props.hukum_date : date}
                                                        onChange={handleChange}
                                                        dateFormat="dd-MM-yyyy"
                                                        ref={datePickerRef}
                                                        open={isCalendarOpen}
                                                        onClickOutside={() => setIsCalendarOpen(false)}
                                                    />
                                                    <i class="bi bi-calendar"></i>
                                                </div>
                                            </button>
                                        </div>

                                        <div className=' col-md-4'>
                                            <audio src={hukumnama[0]?.aud_katha} className=' text-right' autoplay controls ></audio>
                                            <p className='audio-text text-center mb-left' >Katha of Hukumnama </p>
                                        </div>
                                    </div>


                                </div>
                                <section className='container align-items-center d-flex justify-content-center advance-search intro-border mt-5'>
                                    {hukumnama?.hukum_message ?
                                        <h3 className='text-dark center-align hukuma mt-3 mb-3'>{hukumnama?.hukum_message}</h3> :
                                        <>
                                            <div className='huku-date '>{hukumnama?.hukamdatetime}</div>
                                            <div className='punj-title'>{hukumnama?.titlePunjabi}</div>
                                            <div className='punj-content'>{hukumnama?.contentPunjabi}</div>
                                            <div className="text-container-footer">
                                                <p className='punj-l-footer'>{hukumnama?.leftFooterPunjabi}</p>
                                                <p className='punj-r-footer'>{hukumnama?.rightFooterPunjabi}</p>
                                            </div>
                                            <div className='viya-punj'>{hukumnama?.viyakhyaPunjabi}</div>
                                            <div className='title-eng'>{hukumnama?.titleEnglish}</div>
                                            <div className='content-english'>{hukumnama?.contentEnglish}</div>
                                            <div className="text-container">
                                                <p className='punj-l-footer'>{hukumnama?.leftFooterEnglish}</p>
                                                <p className='punj-r-footer'>{hukumnama?.rightFooterEnglish}</p>
                                            </div>
                                        </>}
                                </section>
                            </div>  </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default SriDarbarSahib