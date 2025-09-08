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

import gurutwo from '../../../assets/img/guru2.jpg';
import angad1 from '../../../assets/img/content/gangad1.jpg';
import angad4 from '../../../assets/img/content/gangad4.jpg';
import HelmetWrapper from '../../../components/CommonHelmet';

function GuruAngad() {
    const [datas, setDatas] = useState([]);
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        await Axios.get('https://backend.searchgurbani.com/api/meta?url=gurus/guruangad')
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
                title={`Guru  Angad Dev Ji -: searchgurbani.com `}
                description={`Learn about life story of Guru Angad Dev ji - searchgurbani.com`}
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
                        <div className="container">
                <div className="second-container intro-bkg">
                    <div className="row ">
                        <div class="col-lg-12">
                        <div className='container align-items-center d-flex justify-content-center advance-search intro-border mt-5'>
                            <div class="px-1 py-1 align-middle mt-5 bgv-intro">
                                <div class="px-1 py-1 align-middle mt-0 akl-intro rewamp_wrap">
                                    <h3 class="mb-4 raags-heading">Sri Guru  Angad Dev Ji </h3>
                                    <div className="row ">
                                        <div class="col-lg-2">
                                            <div className='nanak-img mt-2 mb-0 d-flex flex-column' align="center">
                                                <img src={gurutwo} class="nanak-imgs" alt="Responsive image" />
                                                <p>(1504-1552, Guruship- 1539-1552)</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-10">
                                            <div className='list-div'>
                                                <div className='row'>
                                                    <strong className="index-text">INDEX</strong>
                                                    <ul className='first-list'>
                                                        <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/guruangad'>GURU ANGAD IN SECLUSION</Link></li>
                                                        <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/guruangad'>EMPEROR HUMAYUN COMES TO THE GURU</Link></li>
                                                        <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/guruangad2'>GURMUKHI SCRIPT</Link></li>

                                                        <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/guruangad2'>BABA AMAR DAS COMES TO GURU ANGAD</Link></li>

                                                        <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/guruangad3'>CITY OF GOINDWAL</Link></li>
                                                        <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/guruangad3'>GURU ANGAD AND TAPA </Link></li>
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
                                                <td> <a href='#'> Pheru Mal Ji</a> </td>
                                                
                                            </tr>
                                            <tr>
                                                <td> <a href='#'> <strong>Mother</strong> </a> </td>
                                                <td> <a href='#'> Tripta ji</a> </td>
                                               
                                            </tr>
                                            <tr>
                                                <td> <a href='#'> <strong>DATE OF BIRTH</strong> </a> </td>
                                                <td> <a href='#'> 10/20/1469</a> </td>
                                               
                                            </tr>
                                            <tr>
                                                <td> <a href='#'> <strong>PLACE OF BIRTH</strong> </a> </td>
                                                <td> <a href='#'> Talwandi (Pak) Nankana Sahib</a> </td>
                                               
                                            </tr>
                                            <tr>
                                                <td> <a href='#'> <strong>WIFE</strong> </a> </td>
                                                <td> <a href='#'> Sulakhni ji</a> </td>
                                               
                                            </tr>
                                            <tr>
                                                <td> <a href='#'> <strong>CHILDREN</strong> </a> </td>
                                                <td> <a href='#'> Sri Chand ji & Lakhmi das ji</a> </td>
                                               
                                            </tr>
                                            <tr>
                                                <td> <a href='#'> <strong>AGE, YEAR & TIME AT GUR GADHI</strong> </a> </td>
                                                <td> <a href='#'> Parkash, 70 years</a> </td>
                                               
                                            </tr>
                                            <tr>
                                                <td> <a href='#'> <strong>REGIMES</strong> </a> </td>
                                                <td> <a href='#'> 	
                                                Behal, Sakander, Babar, Hamanyu & Ibrahim Lodhi</a> </td>
                                               
                                            </tr>
                                            <tr>
                                                <td> <a href='#'> <strong>CONTRIBUTION OF BANIES</strong> </a> </td>
                                                <td> <a href='#'> 	
                                                Jap Ji, Sidh Goshat, Sodar, Sohala, Arti Onkar, Asa Di Var, Malar & Madge Di Var, Patti Baramaha. Total 947 Shabads in 19 Rags</a> </td>
                                               
                                            </tr>
                                            <tr>
                                                <td> <a href='#'> <strong>AGE</strong> </a> </td>
                                                <td> <a href='#'> 70</a> </td>
                                               
                                            </tr>
                                            <tr>
                                                <td> <a href='#'> <strong>JYOTI-JOT DAY</strong> </a> </td>
                                                <td> <a href='#'> 05/07/1539</a> </td>
                                               
                                            </tr>
                                            <tr>
                                                <td> <a href='#'> <strong>JYOTI JOT PLACE</strong> </a> </td>
                                                <td> <a href='#'> Kartar pur</a> </td>
                                               
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
                                        < div className='dates-ram rewamp_wrap'
                                            dangerouslySetInnerHTML={{
                                                __html: datas.html
                                                    ?.replace('src=\"..\/..\/..\/..\/assets\/img\/res\/gangad1.jpg\"', `src="${angad1}"`)
                                                    .replace('src=\"..\/..\/..\/..\/assets\/img\/res\/gangad4.jpg\" ', `src="${angad4}"`)
                                            }}
                                        /> : null}
                                </div>
                            </div>
                        </div>
                        </div>
                            </div></div>
                        </div>
                        <hr></hr>
                        <div className='page-content left-algn-next'><Link to='/gurus'>Index</Link></div>
                <div className='page-content right-algn-next'><Link to='/gurus/guruangad2'>Next</Link></div>
                

                    </div>
                </div>

                {/*  <div className='Gurbani-Raags p-4'>
                    <div className='container'>
                        <h1 class="inner-heading mb-4"></h1> 
                        <div className="row ">
                            <div class="col-lg-12">
                                <div class="px-1 py-1 align-middle mt-0 akl-intro">                                 
                                    {datas ?
                                        < div
                                        dangerouslySetInnerHTML={{
                                            __html: datas.html
                                        ?.replace('src=\"..\/..\/..\/..\/assets\/img\/res\/gangad1.jpg\"',`src="${angad1}"`)
                                        .replace('src=\"..\/..\/..\/..\/assets\/img\/res\/gangad4.jpg\" ',`src="${angad4}"`)}} 
                                        /> : null}
                                </div>
                            </div>
                        </div>                 

                    </div>
                </div> */}

                {loader && <Spinner />}
            </section>

        </div>
    )
}

export default GuruAngad