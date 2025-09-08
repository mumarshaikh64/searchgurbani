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
import guruGob from '../../../assets/img/content/guruGob.jpg'
import gobind1 from '../../../assets/img/content/gobind1.jpg';
import gobind2 from '../../../assets/img/content/gobind2.jpg';
import HelmetWrapper from '../../../components/CommonHelmet';

function GuruGobind() {
    const [datas, setDatas] = useState([]);
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        await Axios.get('https://backend.searchgurbani.com/api/meta?url=gurus/gurugobind')
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
                title={`Guru Gobind Singh Sahib Ji -: searchgurbani.com`}
                description={`Learn about life story of Guru Gobind Singh ji - searchgurbani.com`}
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
                                    <h3 class="mb-4 raags-heading">Sri Guru Gobind Singh Sahib Ji </h3>
                                    <div className="row ">
                                        <div class="col-lg-2">
                                            <div className='nanak-img mt-2 mb-4' align="center">
                                                <img src={guruGob} class="nanak-imgs" alt="Responsive image" />
                                                {/* <p>(1504-1552, Guruship- 1539-1552)</p> */}
                                            </div>
                                        </div>
                                        <div class="col-lg-10">
                                        <div className='list-div'>
                                            <div className='row'>
                                                <strong className="index-text">INDEX</strong>
                                                <ul className='first-list'>
                                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurugobind'>VISIT OF DUNI CHAND AND RAJA RATTAN RAI</Link></li>
                                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurugobind'>RANJIT NAGARA:</Link></li>
                                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurugobind2'>RAJA BHIM CHAND AND THE GURU</Link></li>
                                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurugobind2'>GURU LEAVES FOR PAUNTA SAHIB</Link></li>
                                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurugobind2'>RAM RAI'S RECLAMATION:</Link></li>
                                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurugobind2'>PIR BUDHU SHAH </Link></li>
                                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurugobind3'>THE BATTLE OF BHANGANI</Link></li>
                                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurugobind3'>RETURN TO ANANDPUR </Link></li>
                                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurugobind3'>EXPEDITION OF ALIF KHAN: </Link></li>
                                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurugobind3'>HUSSAIN KHAN'S EXPEDITION: </Link></li>
                                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurugobind4'>CREATION OF THE KHALSA:</Link></li>
                                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurugobind4'>THE MASTER BECOMES THE DISCIPLE:</Link></li>
                                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurugobind4'>BHAI NAND LAL</Link></li>
                                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurugobind5'>BHAI JOGA SINGH</Link></li>
                                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurugobind5'>POST-KHALSA PERIOD ACTIVITIES:</Link></li>
                                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurugobind5'>FIRST BATTLE OF ANANDPUR</Link></li>
                                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurugobind5'>SECOND BATTLE OF ANANDPUR</Link></li>
                                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurugobind5'>BATTLE OF NIRMOH</Link></li>
                                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurugobind6'>THIRD BATTLE OF ANANDPUR</Link></li>
                                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurugobind6'>FOURTH BATTLE OF ANANDPUR</Link></li>
                                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurugobind6'>FIFTH BATTLE OF ANANDPUR </Link></li>
                                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurugobind6'>BATTLE OF CHAMKAUR</Link></li>
                                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurugobind7'>INNOCENT CHILDREN MARTYRED:</Link></li>
                                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurugobind7'>GURU AT DAMDAMMA SAHIB</Link></li>
                                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurugobind8'>GURU SEES AURANGZEB</Link></li>
                                                    <li className='fonts-colors'><Link className='fonts-colors' to='/gurus/gurugobind9'>GURU AT NADER</Link></li>
                      
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
                                                    <td> <a href='#'>Guru Tegh Bahadur Ji</a> </td>
                                                    
                                                </tr>
                                                <tr>
                                                    <td> <a href='#'> <strong>Mother</strong> </a> </td>
                                                    <td> <a href='#'>Gujri Ji</a> </td>
                                                   
                                                </tr>
                                                <tr>
                                                    <td> <a href='#'> <strong>DATE OF BIRTH</strong> </a> </td>
                                                    <td> <a href='#'>12/22/1666</a> </td>
                                                   
                                                </tr>
                                                <tr>
                                                    <td> <a href='#'> <strong>PLACE OF BIRTH</strong> </a> </td>
                                                    <td> <a href='#'> Patna Sahib</a> </td>
                                                   
                                                </tr>
                                                <tr>
                                                    <td> <a href='#'> <strong>WIFE</strong> </a> </td>
                                                    <td> <a href='#'>Mata Sundari Ji</a> </td>
                                                   
                                                </tr>
                                                <tr>
                                                    <td> <a href='#'> <strong>CHILDREN</strong> </a> </td>
                                                    <td> <a href='#'>  	Ajit Singh, Jujhar Singh, Jorawar Singh & Fateh Singh</a> </td>
                                                   
                                                </tr>
                                                <tr>
                                                    <td> <a href='#'> <strong>AGE, YEAR & TIME AT GUR GADHI</strong> </a> </td>
                                                    <td> <a href='#'>11/11/1675, 33 Year</a> </td>
                                                   
                                                </tr>
                                                <tr>
                                                    <td> <a href='#'> <strong>REGIMES</strong> </a> </td>
                                                    <td> <a href='#'>Aurangjeb, Bahadur Shah</a> </td>
                                                   
                                                </tr>
                                                <tr>
                                                    <td> <a href='#'> <strong>CONTRIBUTION OF BANIES</strong> </a> </td>
                                                    <td> <a href='#'> Jap Sahib, Akal Ustat, Chopai, War Shri Bhagoti, Vachitar Natak, Chobis Avtar Chandi, Charitar, Shastar Nam Mala (Dasam Granth)</a> </td>
                                                   
                                                </tr>
                                                <tr>
                                                    <td> <a href='#'> <strong>AGE</strong> </a> </td>
                                                    <td> <a href='#'> 	42</a> </td>
                                                   
                                                </tr>
                                                <tr>
                                                    <td> <a href='#'> <strong>JYOTI-JOT DAY</strong> </a> </td>
                                                    <td> <a href='#'> 10/07/1708</a> </td>
                                                   
                                                </tr>
                                                <tr>
                                                    <td> <a href='#'> <strong>JYOTI JOT PLACE</strong> </a> </td>
                                                    <td> <a href='#'> Nanded</a> </td>
                                                   
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
                                                ?.replace('src=\"assets\/img\/res\/gobind1.jpg\"', `src="${gobind1}"`)
                                                .replace('src=\"assets\/img\/res\/gobind2.jpg\"', `src="${gobind2}"`)
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
                <div className='page-content right-algn-next'><Link to='/gurus/gurugobind2'>Next</Link></div>

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

    { loader && <Spinner /> }
            </section >

        </div >
    )
}

export default GuruGobind