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
import guruKrish from '../../../assets/img/content/guruKrish.jpg'
import ghark2 from '../../../assets/img/content/ghark2.jpg';
import ghark1 from '../../../assets/img/content/ghark1.jpg';
import ghark3 from '../../../assets/img/content/ghark3.jpg';
import ghark4 from '../../../assets/img/content/ghark4.jpg';
import ghark5 from '../../../assets/img/content/ghark5.jpg';
import HelmetWrapper from '../../../components/CommonHelmet';

function GuruHarKrishnan() {
    const [datas, setDatas] = useState([]);
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        await Axios.get('https://backend.searchgurbani.com/api/meta?url=gurus/guruharkrishan')
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
                title={`Guru HarKishan Ji -: searchgurbani.com`}
                description={`Learn about life story of Guru Har Krishan ji - searchgurbani.com`}
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
                                    <h3 class="mb-4 raags-heading">Sri Guru HarKishan Sahib Ji </h3>
                                    <div className="row ">
                                        <div class="col-lg-6">
                                            <div className='nanak-img mt-2 mb-4' align="center">
                                                <img src={guruKrish} class="guru-imgs" alt="Responsive image" />
                                                {/* <p>(1504-1552, Guruship- 1539-1552)</p> */}
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
                                                <td> <a href='#'> Guru Har Rai Ji</a> </td>
                                                
                                            </tr>
                                            <tr>
                                                <td> <a href='#'> <strong>Mother</strong> </a> </td>
                                                <td> <a href='#'> Krishan Kaur ji</a> </td>
                                               
                                            </tr>
                                            <tr>
                                                <td> <a href='#'> <strong>DATE OF BIRTH</strong> </a> </td>
                                                <td> <a href='#'> 01/07/1656</a> </td>
                                               
                                            </tr>
                                            <tr>
                                                <td> <a href='#'> <strong>PLACE OF BIRTH</strong> </a> </td>
                                                <td> <a href='#'> Kiratpur Sahib, Ropar</a> </td>
                                               
                                            </tr>
                                            <tr>
                                                <td> <a href='#'> <strong>WIFE</strong> </a> </td>
                                                <td> <a href='#'> None</a> </td>
                                               
                                            </tr>
                                            <tr>
                                                <td> <a href='#'> <strong>CHILDREN</strong> </a> </td>
                                                <td> <a href='#'> None</a> </td>
                                               
                                            </tr>
                                            <tr>
                                                <td> <a href='#'> <strong>AGE, YEAR & TIME AT GUR GADHI</strong> </a> </td>
                                                <td> <a href='#'>	10/06/1661, 2 year and 6 months.</a> </td>
                                               
                                            </tr>
                                            <tr>
                                                <td> <a href='#'> <strong>REGIMES</strong> </a> </td>
                                                <td> <a href='#'>Aurangjeb</a> </td>
                                               
                                            </tr>
                                            <tr>
                                                <td> <a href='#'> <strong>CONTRIBUTION OF BANIES</strong> </a> </td>
                                                <td> <a href='#'> None</a> </td>
                                               
                                            </tr>
                                            <tr>
                                                <td> <a href='#'> <strong>AGE</strong> </a> </td>
                                                <td> <a href='#'> 8</a> </td>
                                               
                                            </tr>
                                            <tr>
                                                <td> <a href='#'> <strong>JYOTI-JOT DAY</strong> </a> </td>
                                                <td> <a href='#'> 03/30/1664</a> </td>
                                               
                                            </tr>
                                            <tr>
                                                <td> <a href='#'> <strong>JYOTI JOT PLACE</strong> </a> </td>
                                                <td> <a href='#'>	
                                                Delhi</a> </td>
                                               
                                            </tr>
                                          
                                           
                                          
                                        </tbody>
                                    </table>
                                </div>
                                            </div>

                                        </div>
                                        <div className='col-lg-2'></div>
                                    </div>
                                </div> 
                                        
                                    </div>
                              
                                {datas ?

                                    < div className='dates'
                                        dangerouslySetInnerHTML={{
                                            __html: datas.html
                                                ?.replace('src=\"assets\/img\/res\/ghark2.jpg\"', `src="${ghark2}"`)
                                                .replace('src=\"assets\/img\/res\/ghark1.jpg\"', `src="${ghark1}"`)
                                                .replace('src=\"assets\/img\/res\/ghark3.jpg\"', `src="${ghark3}"`)
                                                .replace('src=\"assets\/img\/res\/ghark4.jpg\"', `src="${ghark4}"`)
                                                .replace('src=\"assets\/img\/res\/ghark5.jpg\"', `src="${ghark5}"`)
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

export default GuruHarKrishnan