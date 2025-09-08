import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from "react-router";
import { Link, useLocation } from "react-router-dom";
import '../../../assets/css/dashboard.css';
import '../../../assets/css/intro.css';
import '../../../assets/css/nanak.css';
import Axios from 'axios';
import { API } from "../../../config/api";
import { ApiHelper } from '../../../helpers/ApiHelper';
//import imgs from './assets/img/content/ggs_01.jpg'
import introbannar from '../../../assets/img/intro-bannar.webp';
import Spinner from '../../../components/Spinner';
import { Helmet } from 'react-helmet';
import guruBaha from '../../../assets/img/content/guruBaha.jpg'
import gtb from '../../../assets/img/content/makhanlubana.jpg';
import gtb3 from '../../../assets/img/content/gtb3.jpg';
import gtb1 from '../../../assets/img/content/gtb1.jpg';
import gtb2 from '../../../assets/img/content/gtb2.jpg';
import HelmetWrapper from '../../../components/CommonHelmet';

function GuruBahadur() {
    const [datas, setDatas] = useState([]);
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        await Axios.get('https://backend.searchgurbani.com/api/meta?url=gurus/guruteghbhadur')
            .then((resData) => {
                console.log('INTRO', resData.data.data);
                setDatas(resData.data.data)

            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <HelmetWrapper
                title={`Guru Tegh Bhadur Sahib Ji -: searchgurbani.com`}
                description={`Learn about life story of Guru Tegh Bahadur ji - searchgurbani.com`}
                keywords="Sikh, sikhism, guru, gobind singh,nanak, har gobind, tegh bahadur, arjan, angad, ramdas,ram das, har krishan,amar das"
                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                url={window.location.href}
            />
            <section className='section-1'>
                <div className=" justify-content-md-center align-items-center">
                    <div className='banner-img'>
                        <img src={introbannar} class="img-fluid" alt="Responsive image" />
                    </div>
                </div>

                <div className='Gurbani-Raags p-4'>
                    <div className='container'>
                        <h1 class="inner-heading mb-4"></h1>
                        <div className="second-container intro-bkg">
                    <div className="row ">
                        <div class="col-lg-12">
                        <div className='container align-items-center d-flex justify-content-center advance-search intro-border mt-5'>
                            <div class="px-1 py-1 align-middle  bgv-intro">
                                <div class="px-1 py-1 align-middle mt-0 akl-intro rewamp_wrap">
                                    <h3 class="mb-4 raags-heading">Sri Guru Tegh Bhadur Sahib Ji </h3>
                                    <div className="row ">
                                        <div class="col-lg-2">
                                            <div className='nanak-img mt-2 mb-4' align="center">
                                                <img src={guruBaha} class="nanak-imgs" alt="Responsive image" />
                                                {/* <p>(1504-1552, Guruship- 1539-1552)</p> */}
                                            </div>
                                        </div>
                                         <div class="col-lg-10">
                                        <div className='list-div'>
                                            <div className='row'>
                                                <strong className="index-text">INDEX</strong>
                                                <ul className='first-list'>
                                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/guruteghbhadur'>GURU VISITS AMRITSAR</Link></li>
                                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/guruteghbhadur'>FOUNDATION OF CITY OF ANANDPUR</Link></li>
                                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/guruteghbhadur'>GURU ON MISSIONARY TOUR</Link></li>
                                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/guruteghbhadur'>GURU AT KURUKSHETRA</Link></li>
                                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/guruteghbhadur'>GURU IN UTTAR PRADESH </Link></li>
                                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/guruteghbhadur'>GURU IN BIHAR PROVINCE</Link></li>
                                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/guruteghbhadur'>GURU TO BENGAL</Link></li>
                                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/guruteghbhadur1'>BIRTH OF A SON </Link></li>
                                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/guruteghbhadur1'>AURANGZEB'S CAMPAIGN OF RELIGIOUS PERSECUTION</Link></li>
                                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/guruteghbhadur1'>KASHMIRI BRAHMANS COME TO GURU </Link></li>
                                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/guruteghbhadur1'>GURU SUMMONED TO DELHI </Link></li>
                                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/guruteghbhadur1'>MARTYRDOM OF GURU TEGH BAHADUR</Link></li>
                      
                                                </ul>
                                            </div>
                                        </div>
                                    </div>  
                                    </div>
                                 <div className='container'>
                                    <div className='row'>
                                        <div className='col-lg-12'>
                                            <div className='tablprimary'>
                                                <h6 className='text-dark sub_heading-p mt-5' >Fast Facts</h6>
                                                <div className='table-responsive'>
                                                    <table className='table'>
                                                        
                                                    <tbody>
                                        {/*<tr>
                                                <th>Period 1 (D1)</th>
                                                <th>Period 2 (D2)</th>
                                                <th>Period 3 (D3)</th>
                                                <th>Period 4 (D4)</th>
                                            </tr>*/}
                                            <tr>
                                                <td> <a href='#'><strong>Father</strong> </a> </td>
                                                <td> <a href='#'>Har Gobind Sahib Ji</a> </td>
                                                
                                            </tr>
                                            <tr>
                                                <td> <a href='#'> <strong>Mother</strong> </a> </td>
                                                <td> <a href='#'> Nanki Ji</a> </td>
                                               
                                            </tr>
                                            <tr>
                                                <td> <a href='#'> <strong>DATE OF BIRTH</strong> </a> </td>
                                                <td> <a href='#'>04/01/1621</a> </td>
                                               
                                            </tr>
                                            <tr>
                                                <td> <a href='#'> <strong>PLACE OF BIRTH</strong> </a> </td>
                                                <td> <a href='#'>  Amritsar</a> </td>
                                               
                                            </tr>
                                            <tr>
                                                <td> <a href='#'> <strong>WIFE</strong> </a> </td>
                                                <td> <a href='#'>Gujri Ji</a> </td>
                                               
                                            </tr>
                                            <tr>
                                                <td> <a href='#'> <strong>CHILDREN</strong> </a> </td>
                                                <td> <a href='#'>  Gobind Singh Ji</a> </td>
                                               
                                            </tr>
                                            <tr>
                                                <td> <a href='#'> <strong>AGE, YEAR & TIME AT GUR GADHI</strong> </a> </td>
                                                <td> <a href='#'>03/20/1665, 10 Year and 6 Months.</a> </td>
                                               
                                            </tr>
                                            <tr>
                                                <td> <a href='#'> <strong>REGIMES</strong> </a> </td>
                                                <td> <a href='#'>Aurangzeb</a> </td>
                                               
                                            </tr>
                                            <tr>
                                                <td> <a href='#'> <strong>CONTRIBUTION OF BANIES</strong> </a> </td>
                                                <td> <a href='#'> 115 Shabads & Shaloks</a> </td>
                                               
                                            </tr>
                                            <tr>
                                                <td> <a href='#'> <strong>AGE</strong> </a> </td>
                                                <td> <a href='#'> 57</a> </td>
                                               
                                            </tr>
                                            <tr>
                                                <td> <a href='#'> <strong>JYOTI-JOT DAY</strong> </a> </td>
                                                <td> <a href='#'> 11/11/1675</a> </td>
                                               
                                            </tr>
                                            <tr>
                                                <td> <a href='#'> <strong>JYOTI JOT PLACE</strong> </a> </td>
                                                <td> <a href='#'> Delhi</a> </td>
                                               
                                            </tr>
                                          
                                           
                                          
                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                        </div>
                                        <div className='col-lg-2'></div>
                                    </div>
                                </div>  
                                {datas ?

                                    < div className='dates'
                                        dangerouslySetInnerHTML={{
                                            __html: datas.html
                                                ?.replace('src=\"assets\/img\/res\/makhanlubana.jpg\"', `src="${gtb}"`)
                                                .replace('src=\"assets\/img\/res\/gtb3.jpg\"', `src="${gtb3}"`)
                                                .replace('src=\"assets\/img\/res\/gtb1.jpg\"', `src="${gtb1}"`)
                                                .replace('src=\"assets\/img\/res\/gtb2.jpg\"', `src="${gtb2}"`)
                                        }}
                                    /> : null}
                            </div>
                        </div>
                    </div>
                    </div>
                        </div>
                    </div>

                </div>
                <hr></hr>
                        <div className='page-content left-algn-next'><Link to='/gurus'>Index</Link></div>
                <div className='page-content right-algn-next'><Link to='/gurus/guruteghbhadur1'>Next</Link></div>
        </div>

                

    { loader && <Spinner /> }
            </section >

        </div >
    )
}

export default GuruBahadur