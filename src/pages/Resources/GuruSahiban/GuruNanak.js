import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from "react-router";
import { Link, useLocation } from "react-router-dom";
import '../../../assets/css/dashboard.css';
import '../../../assets/css/intro.css';
import '../../../assets/css/nanak.css';
import Axios from 'axios';
import nanak from '../../../assets/img/nanak.jpg';
import { API } from "../../../config/api";
import { ApiHelper } from '../../../helpers/ApiHelper';
//import imgs from './assets/img/content/ggs_01.jpg'
import introbannar from '../../../assets/img/intro-bannar.webp';
import Spinner from '../../../components/Spinner';
import { Helmet } from 'react-helmet';
import HelmetWrapper from '../../../components/CommonHelmet';

function GuruNanak() {
    const [datas, setDatas] = useState([]);
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        await Axios.get('https://backend.searchgurbani.com/api/meta?url=gurus/gurunanak')
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
                title={`Guru Nanak Dev Ji -: searchgurbani.com`}
                description={`Learn about life story of Guru Nanak Dev ji - searchgurbani.com`}
                keywords="Sikh, sikhism, guru, gobind singh,nanak, har gobind, tegh bahadur, arjan, angad, ramdas,ram das, har krishan,amar das"
                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                url={window.location.href}
            />
            <section className='section-1'>
            <div className="container">
                <div className="second-container intro-bkg">
                    <div className="row ">
                        <div class="col-lg-12">
                        <div className='container align-items-center d-flex justify-content-center advance-search intro-border mt-5'>
                            <div class="px-1 py-1 align-middle  bgv-intro">
                {/*<div className=" justify-content-md-center align-items-center">
                    <div className='banner-img'>
                        <img src={introbannar} class="img-fluid" alt="Responsive image" />
                    </div>
                </div>*/}
                <div className='Gurbani-Raags p-4'>
                    <div className='container'>
                        <h1 class="inner-heading mb-4"></h1> 
                        <div className="row ">
                            <div class="col-lg-12">
                                <div class="px-1 py-1 align-middle mt-0 akl-intro rewamp_wrap">  
                                <h3 class="mb-4 raags-heading">Sri Guru Nanak Dev Ji </h3>
                                {/* <div className='nanak-img mt-2 mb-4'  align="center">
                                    <img src={nanak} class="nanak-imgs" alt="Responsive image" />
                                </div> */}
                                <div className='list-div'>
                                    <div className='row'>
                                <div className='col-lg-2'>
                                <div className='nanak-img mt-2 mb-4'  align="center">
                                    <img src={nanak} class="nanak-imgs" alt="Responsive image" />
                                </div>
                                    </div>        
                                <div class="col-lg-10">
                                <strong className="index-text mb-4">INDEX</strong>
                                <ul  className='first-list'>
                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurunanak'>GURU'S SCHOOLING</Link></li>
                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurunanak'>CEREMONY OF SACRED THREAD</Link></li>
                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurunanak'>COBRA SERVES THE DIVINE MASTER</Link></li>
                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurunanak'>GURU SITS IN SECLUSION</Link></li>
                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurunanak2'>TRUE BARGAIN</Link></li>
                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurunanak2'>GURU'S MARRIAGE</Link></li>
                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurunanak2'>GURU NANAK COMES TO SULTANPUR</Link></li>
                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurunanak2'>GURU'S DISAPPEARANCE</Link></li>
                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurunanak2'>TRAVELS OF GURU NANAK</Link></li>
                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurunanak2'>FIRST STOP AT EMINABAD</Link></li>
                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurunanak3'>SUJJAN THUG</Link></li>
                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurunanak3'>GURU NANAK AT HARDWAR</Link></li>
                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurunanak3'>GURU AT GORAKHMATA</Link></li>
                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurunanak3'>REETHA SAHIB</Link></li>
                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurunanak3'>GURU AT BANARAS</Link></li>
                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurunanak4'>GURU AT GAYA</Link></li>
                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurunanak4'>GURU TO KAMRUP</Link></li>
                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurunanak5'>KAUDA RAKHSHASH</Link></li>
                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurunanak5'>GURU AT JAGAN NATH PURI</Link></li> 
                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurunanak6'>RETURN FROM SANGALDEEP</Link></li>
                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurunanak6'>GURU TO SARSA</Link></li>
                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurunanak6'>TO SULTANPUR</Link></li>
                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurunanak6'>HOME COMING</Link></li>
                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurunanak6'>FOUNDATION OF KARTARPUR</Link></li>
                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurunanak6'>SECOND UDASI</Link></li>
                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurunanak7'>GURU TO KAILASH PARBAT</Link></li>
                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurunanak7'>THIRD UDASI</Link></li>
                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurunanak7'>GURU NANAK AT MECCA</Link></li>
                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurunanak7'>GURU NANAK AT MEDENA</Link></li>
                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurunanak7'>GURU AT BAGHDAD</Link></li>
                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurunanak7'>RETURN FROM BAGHDAD</Link></li>
                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurunanak7'>GURU NANAK AND VALI KANDHARI</Link></li>
                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurunanak9'>GURU AT SAIDPUR</Link></li>
                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurunanak9'>GURU AT KARTARPUR</Link></li>
                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurunanak9'>FORMATION OF SANGAT</Link></li>
                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurunanak9'>LIVING BY HONEST MEANS</Link></li>
                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurunanak9'>COMMON FREE KITCHEN</Link></li>
                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurunanak10'>COMPOSITION AND COLLECTION OF BANI</Link></li>
                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurunanak10'>FURTHER TRAVEL FROM KARTARPUR</Link></li>
                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurunanak10'>GURU AT ACHAL BATALA</Link></li>
                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurunanak10'>ASCENSION OF GURU NANAK</Link></li>      
                                </ul>
                                    </div> 
                               
                                <div class="col-lg-1"></div>
                                </div>
                                 </div>
                                 {/*<div className='table' align="center">
                                 <table className='nanak-table'>
	
	
  <tbody>
      <tr>
        <td>FATHER</td>
        <td>Kalayan Das Ji</td>
        
      </tr>
      <tr>
        <td>MOTHER</td>
        <td>Tripta ji</td>
        
      </tr>
      <tr>
        <td>DATE OF BIRTH</td>
        <td>10/20/1469</td>
       
      </tr>
      <tr>
        <td>PLACE OF BIRTH</td>
        <td>Talwandi (Pak) Nankana Sahib</td>
       
      </tr>
      <tr>
        <td>WIFE</td>
        <td>Sulakhni ji</td>
        
      </tr>

      <tr>
        <td>CHILDREN</td>
        <td>Sri Chand ji & Lakhmi das ji</td>
        
      </tr>

      <tr>
        <td>AGE, YEAR & TIME AT GUR GADHI</td>
        <td>Parkash, 70 years</td>
        
      </tr>

      <tr>
        <td>REGIMES</td>
        <td>Behal, Sakander, Babar, Hamanyu & Ibrahim Lodhi</td>
        
      </tr>

      <tr>
        <td>CONTRIBUTION OF BANIES</td>
        <td>	
        Jap Ji, Sidh Goshat, Sodar, Sohala, Arti Onkar, Asa Di Var, Malar & Madge Di Var, Patti Baramaha. Total 947 Shabads in 19 Rags</td>
        
      </tr>

      <tr>
        <td>AGE</td>
        <td>70</td>
        
      </tr>

      <tr>
        <td>JYOTI-JOT DAY</td>
        <td>05/07/1539</td>
        
      </tr>

      <tr>
        <td>JYOTI JOT PLACEJYOTI-JOT DAY</td>
        <td>Kartar pur</td>
        
      </tr>
     
  </tbody>

</table>
                               
                                 </div>*/}
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
                                                <td> <a href='#'>Kalayan Das Ji</a> </td>
                                                
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
                                        < div className='dates dates-ram'
                                        dangerouslySetInnerHTML={{
                                            __html: datas.html}} 
                                        /> : null}
                                </div>
                            </div>
                        </div> 




                        <hr></hr>
                        <div className='page-content left-algn-next'><Link to='/gurus'>Index</Link></div>
                <div className='page-content right-algn-next'><Link to='/gurus/gurunanak2'>Next</Link></div>                

                    </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>

                {loader && <Spinner />}
            </section>
            
        </div>
    )
}

export default GuruNanak