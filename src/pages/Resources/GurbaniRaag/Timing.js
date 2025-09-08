import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from "react-router";
import { Link, useLocation } from "react-router-dom";
import '../../../assets/css/dashboard.css';
import '../../../assets/css/intro.css';
import Axios from 'axios';
import { API } from "../../../config/api";
import { ApiHelper } from '../../../helpers/ApiHelper';
//import imgs from './assets/img/content/ggs_01.jpg'
import introbannar from '../../../assets/img/intro-bannar.webp';
import Spinner from '../../../components/Spinner';
import jathaImage from '../../../assets/img/content/jatha.jpg';
import tabalaImage from '../../../assets/img/content/tabla.jpg';
import raagiImage from '../../../assets/img/content/raagi.gif';
import { Helmet } from 'react-helmet';
import HelmetWrapper from '../../../components/CommonHelmet';

function Timing() {
    const [raag, setRaag] = useState([]);
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        getRaags()
    }, [])
    const getRaags = async () => {
        await Axios.get('https://backend.searchgurbani.com/api/meta?url=raags/raags_time')
            .then((resData) => {
                console.log('INTRO', resData.data.data);
                setRaag(resData.data.data)

            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <HelmetWrapper
                title={`Gurbani Raag Time -: searchgurbani.com`}
                description={`Learn about Times  in Gurbani Raags - searchgurbani.com`}
                keywords=""
                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                url={window.location.href}
            />
            <div className='container'>
                <div className="second-container intro-bkg">
                    <div className="row ">
                        <div class="col-lg-12">
                            <div className='container align-items-center d-flex justify-content-center advance-search intro-border mt-5'>
                                <div class="px-1 py-1 align-middle  bgv-intro">
                                    <section className='section-1'>
                                        {/* <div className=" justify-content-md-center align-items-center">
                    <div className='banner-img'>
                        <img src={introbannar} class="img-fluid" alt="Responsive image" />
                    </div>
                </div> */}
                                        <div className='Gurbani-Raags p-4'>
                                            <div className='container'>
                                                <h1 class="inner-heading mb-4"></h1>
                                                <div className="row ">


                                                    <div class="col-lg-12">
                                                        <div class="px-1 py-1 align-middle mt-0 dev-giri rag-common rewamp_wrap rewamp-head-centerss">
                                                            {/* <h4 className='intro-heading  mt-5'>Boundless scripture of guru granth sahib</h4> */}
                                                            <h2>Timings of Gurbani Raags</h2>
                                                            <hr></hr>
                                                            {raag ?
                                                                < div
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: raag.html
                                                                    }}
                                                                /> : null}
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        {loader && <Spinner />}
                                    </section>
                                    <section>
                                        <div className='container'>
                                            <div className='row'>
                                                <div className='col-lg-12'>
                                                    <div className='tablprimary'>
                                                        <h6 className='text-dark sub_heading-p mt-5' >Day Time</h6>
                                                        <div className='table-responsive'>
                                                            <table className='table'>
                                                                <thead>
                                                                    <tr>
                                                                        <th> 6 - 9 am</th>
                                                                        <th>9 - 12 am</th>
                                                                        <th>12 - 3 pm</th>
                                                                        <th>3 - 6 pm</th>
                                                                    </tr>

                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <th>Period 1 (D1)</th>
                                                                        <th>Period 2 (D2)</th>
                                                                        <th>Period 3 (D3)</th>
                                                                        <th>Period 4 (D4)</th>
                                                                    </tr>
                                                                    <tr>
                                                                        <td> <a href='#'> Bhairari</a> </td>
                                                                        <td> <a href='#'> Sarang</a> </td>
                                                                        <td> <a href='#'> Vadhans</a> </td>
                                                                        <td> <a href='#'> Maajh</a> </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td> <a href='#'> Devgandhari</a> </td>
                                                                        <td> <a href='#'> Suhi</a> </td>
                                                                        <td> <a href='#'> Maru</a> </td>
                                                                        <td> <a href='#'> Gauri</a> </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td> <a href='#'> </a> </td>
                                                                        <td> <a href='#'> Bilaval</a> </td>
                                                                        <td> <a href='#'> Dhanasari</a> </td>
                                                                        <td> <a href='#'> Tukhari</a> </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td> <a href='#'></a> </td>
                                                                        <td> <a href='#'> Gujri</a> </td>
                                                                        <td> <a href='#'> Tilang</a> </td>
                                                                        <td> <a href='#'> </a> </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td> <a href='#'></a> </td>
                                                                        <td> <a href='#'>Gond</a> </td>
                                                                        <td> <a href='#'></a> </td>
                                                                        <td> <a href='#'></a> </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td> <a href='#'></a> </td>
                                                                        <td> <a href='#'> Todi</a> </td>
                                                                        <td> <a href='#'></a> </td>
                                                                        <td> <a href='#'></a> </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>

                                                    <div className='tablprimary mt-5'>
                                                        <h6 className='text-dark sub_heading-p mt-5' >Night Time</h6>
                                                        <div className='table-responsive'>
                                                            <table className='table'>
                                                                <thead>
                                                                    <tr>
                                                                        <th> 6 - 9 am</th>
                                                                        <th>9 - 12 am</th>
                                                                        <th>12 - 3 pm</th>
                                                                        <th>3 - 6 pm</th>
                                                                    </tr>

                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <th>Period 1 (N1)</th>
                                                                        <th>Period 2 (N2)</th>
                                                                        <th>Period 3 (N3)</th>
                                                                        <th>Period 4 (N4)</th>
                                                                    </tr>
                                                                    <tr>
                                                                        <td> <a href='#'> Sri Raag</a> </td>
                                                                        <td> <a href='#'> Bihaagara</a> </td>
                                                                        <td> <a href='#'> Jaijawanti</a> </td>
                                                                        <td> <a href='#'> Aasa</a> </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td> <a href='#'> Basant</a> </td>
                                                                        <td> <a href='#'> Nat-Naraayan</a> </td>
                                                                        <td> <a href='#'> Bhairaav</a> </td>
                                                                        <td> <a href='#'> Raamkali</a> </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td> <a href='#'> Maali-Gaura</a> </td>
                                                                        <td> <a href='#'> Sorath</a> </td>
                                                                        <td> <a href='#'> </a> </td>
                                                                        <td> <a href='#'> Parbhati</a> </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td> <a href='#'> Jaitasari</a> </td>
                                                                        <td> <a href='#'> Malaar</a> </td>
                                                                        <td> <a href='#'> </a> </td>
                                                                        <td> <a href='#'> </a> </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td> <a href='#'> Kedaara</a> </td>
                                                                        <td> <a href='#'> Kaanra</a> </td>
                                                                        <td> <a href='#'> </a> </td>
                                                                        <td> <a href='#'> </a> </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td> <a href='#'> Kalyaan</a> </td>
                                                                        <td> <a href='#'> </a> </td>
                                                                        <td> <a href='#'> </a> </td>
                                                                        <td> <a href='#'> </a> </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div></div></div></div></div></div>
        </div>
    )
}

export default Timing