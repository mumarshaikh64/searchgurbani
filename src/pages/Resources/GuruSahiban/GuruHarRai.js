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
import guruHarRai from '../../../assets/img/content/guruHarRai.jpg'
import ghrai2 from '../../../assets/img/content/ghrai2.jpg';
import ghrai1 from '../../../assets/img/content/ghrai1.jpg';
import ghrai3 from '../../../assets/img/content/ghrai3.jpg';
import ghrai5 from '../../../assets/img/content/ghrai5.jpg';
import HelmetWrapper from '../../../components/CommonHelmet';

function GuruHarRai() {
    const [datas, setDatas] = useState([]);
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        await Axios.get('https://backend.searchgurbani.com/api/meta?url=gurus/guruharrai')
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
                title={`Guru Har Rai Ji -: searchgurbani.com `}
                description={`Learn about life story of Guru Har Rai ji - searchgurbani.com`}
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
                                <div class="px-1 py-1 align-middle mt-0 akl-intro rewamp_wrap Guru-Har">
                                    <h3 class="mb-4 raags-heading">Sri Guru Har Rai Ji </h3>
                                    <div className="row ">
                                        <div class="col-lg-2">
                                            <div className='nanak-img mt-2 mb-4' align="center">
                                                <img src={guruHarRai} class="nanak-imgs" alt="Responsive image" />
                                                {/* <p>(1504-1552, Guruship- 1539-1552)</p> */}
                                            </div>
                                        </div>
                                        <div class="col-lg-10">
                                        <div className='list-div'>
                                            <div className='row'>
                                                <strong className="index-text">INDEX</strong>
                                                <ul className='first-list'>
                                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/guruhargobindi'>GURU'S PREACHING TOURS:</Link></li>
                                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/guruhargobindi'>THE GURU, HIS SON RAM RAI AND MUGHAL EMPEROR:</Link></li>
                                                   
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
                                        {/*<thead>
                                            <tr>
                                                <th> 6 - 9 am</th>
                                                <th>9 - 12 am</th>
                                                <th>12 - 3 pm</th>
                                                <th>3 - 6 pm</th>
                                            </tr>
                                            
                                        </thead>*/}
                                        <tbody>
                                        {/*<tr>
                                                <th>Period 1 (D1)</th>
                                                <th>Period 2 (D2)</th>
                                                <th>Period 3 (D3)</th>
                                                <th>Period 4 (D4)</th>
                                            </tr>*/}
                                            <tr>
                                                <td> <a href='#'><strong>Father</strong> </a> </td>
                                                <td> <a href='#'> Baba Gurdita Ji</a> </td>
                                                
                                            </tr>
                                            <tr>
                                                <td> <a href='#'> <strong>Mother</strong> </a> </td>
                                                <td> <a href='#'> Nihal Kaur Ji</a> </td>
                                               
                                            </tr>
                                            <tr>
                                                <td> <a href='#'> <strong>DATE OF BIRTH</strong> </a> </td>
                                                <td> <a href='#'> 01/16/1630</a> </td>
                                               
                                            </tr>
                                            <tr>
                                                <td> <a href='#'> <strong>PLACE OF BIRTH</strong> </a> </td>
                                                <td> <a href='#'> Kiratpur Sahib, Ropar</a> </td>
                                               
                                            </tr>
                                            <tr>
                                                <td> <a href='#'> <strong>WIFE</strong> </a> </td>
                                                <td> <a href='#'> Ram Kaur Ji, Krishan Kaur ji</a> </td>
                                               
                                            </tr>
                                            <tr>
                                                <td> <a href='#'> <strong>CHILDREN</strong> </a> </td>
                                                <td> <a href='#'> Ram Rai Ji & Harkrishan Sahib Ji</a> </td>
                                               
                                            </tr>
                                            <tr>
                                                <td> <a href='#'> <strong>AGE, YEAR & TIME AT GUR GADHI</strong> </a> </td>
                                                <td> <a href='#'> 03/08/1644, 17 Years and 6 Months</a> </td>
                                               
                                            </tr>
                                            <tr>
                                                <td> <a href='#'> <strong>REGIMES</strong> </a> </td>
                                                <td> <a href='#'> Shah Jahan & Aurangjeb</a> </td>
                                               
                                            </tr>
                                            <tr>
                                                <td> <a href='#'> <strong>CONTRIBUTION OF BANIES</strong> </a> </td>
                                                <td> <a href='#'> None</a> </td>
                                               
                                            </tr>
                                            <tr>
                                                <td> <a href='#'> <strong>AGE</strong> </a> </td>
                                                <td> <a href='#'> 32</a> </td>
                                               
                                            </tr>
                                            <tr>
                                                <td> <a href='#'> <strong>JYOTI-JOT DAY</strong> </a> </td>
                                                <td> <a href='#'> 10/06/1661</a> </td>
                                               
                                            </tr>
                                            <tr>
                                                <td> <a href='#'> <strong>JYOTI JOT PLACE</strong> </a> </td>
                                                <td> <a href='#'> Kiratpur Sahib</a> </td>
                                               
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
                                                ?.replace('src=\"assets\/img\/res\/ghrai2.jpg\"', `src="${ghrai2}"`)
                                                .replace('src=\"assets\/img\/res\/ghrai1.jpg\"', `src="${ghrai1}"`)
                                                .replace('src=\"assets\/img\/res\/ghrai3.jpg\"', `src="${ghrai3}"`)
                                                .replace('src=\"assets\/img\/res\/ghrai5.jpg\"', `src="${ghrai5}"`)
                                        }}
                                    /> : null}
                            </div>
                        </div>
                    </div>
                    </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='page-content left-algn-next'><Link to='/gurus'>Index</Link></div>
                </div>
        </div> 

    { loader && <Spinner /> }
            </section >

        </div >
    )
}

export default GuruHarRai