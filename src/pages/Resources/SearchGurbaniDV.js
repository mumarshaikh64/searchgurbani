//Gurbani search//
import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from "react-router";
import { Link, useLocation } from "react-router-dom";
import '../../assets/css/dashboard.css';
import '../../assets/css/style.css';

import inerlogo from '../../assets/img/iner-logo-mid.svg';
import windows from '../../assets/icons/windows.svg';
import mac from '../../assets/icons/mac.svg';
import ubuntu from '../../assets/icons/ubuntu.svg';
import javaicon from '../../assets/icons/jv.svg';
import pdf from '../../assets/icons/pdf.svg';
import appstore from '../../assets/icons/appstore.svg';
import plastore from '../../assets/icons/platstore.svg';
import poster from '../../assets/img/isg-poster-sm.jpg';
import Modal from 'react-bootstrap/Modal';
import { Helmet } from 'react-helmet';
import HelmetWrapper from '../../components/CommonHelmet';

function SearchGurbaniDV() {

    return (
        <div>
            <HelmetWrapper
                title={`Search Gurbani Desktop Version 2.5- the Gurbani Search Software`}
                description={`A comprehensive web site on research and  exploration of Sri Guru Granth Sahib, Amrit Keertan Gutka, Bhai Gurdas Vaaran, Kabit Bhai Gurdaas ,Sri Dasam Granth Sahib, exegesis , Gurbani, Gurbanee vichaar`}
                keywords=""
                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                url={window.location.href}
            />
            <section className='section-1 intro-bg'>
            <div className="container">
                <div className="second-container intro-bkg">
                    <div className="row ">
                        <div class="col-lg-12">
                        <div className='container align-items-center d-flex justify-content-center advance-search intro-border mt-5'>
                            <div class="px-1 py-1 align-middle mt-5 bgv-intro">
             
               
                 
                <div className="second-container intro-bkg">
                    <div className='row'>
                        <div className='col-lg-9'>
                            <h1 className='text-dark mb-2' >Search Gurbani Desktop Version 2.5 - the Gurbani Search Software</h1>
                            {/* <h3 className='text-dark mt-5'>Search Gurbani Desktop Version 2.5 - the Gurbani Search Software</h3> */}
                            <p>Search Gurbani Desktop Version (SGDV) brings to you a unique and comprehensive approach to explore and
                                experience the word of God. We have the Sri Guru Granth Sahib Ji , Amrit Keertan Gutka and
                                Bhai Gurdaas Vaaran and Sri Dasam Granth Sahib in entireity. You can explore these
                                scriptures page by page or search for a keyword in either one or all of the scriptures.</p>
                        </div>
                        <div className='col-lg-3 d-flex justify-content-end'>
                            <div className='app-thumb'>
                                <img src={inerlogo} class="img-fluid web-dw-logo" alt="Responsive image" />
                            </div>
                        </div>
                        <div className='col-lg-12'>                            
                            <h4 className='p_s_head text-dark mb-3' >Search Gurbani Desktop Version 2.5 :</h4>
                            <h6 className='text-dark'>After over couple of years of work, we are happy to announce launch of SGDV 2.5</h6>
                            <ul>
                                <li>Sri Guru Granth Sahib Ji : Gurmukhi, Romanisation, Translations in English,Transliterations in English, Hindi, 
                                    Urdu. Exegesis by Prof Manmohan Singh, Faridkot Teeka, Guru Granth Darpan, Lareedar Gurmukhi.</li>
                                <li>Amrit Keertan Gutka: Gurmukhi, English Translation, Hindi and English Transliterations</li>
                                <li>Bhai Gurdas Vaaran: Gurmukhi, English Translation, Hindi and English Transliterations</li>
                                <li>Sri Dasam Granth : Gurmukhi, English Translation, Hindi and English Transliterations</li>
                                <li>Dictionaries: Mahankosh, Guru Granth Kosh, SGGS Words</li>
                                <li>Hukumnamas</li>
                                <li>Recited Baanis. </li>
                            </ul>
                        </div>
                        <h4 className='p_s_head text-dark mb-3' >SGDV is cross platform software, can be installed on Windows/ MAC OSx/ Linux</h4>
                        <div className='col-lg-8'>
                       
                            <table class="table table-responsive">
                                <thead>
                                    <tr>
                                        <th colSpan={2} scope="col">Download Search Gurbani Desktop Version 2.5</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><img src={windows} class="dw-logos me-2" alt="Responsive image" />Windows (60 MB)</td>
                                        <td> <Link to="https://www.data.searchgurbani.com/downloads/sgdv25/SGDV_windows_2_5_x86_jre.exe" target="_blank" className='dwnld-btn'><i class="bi bi-download"></i>Download</Link> </td>
                                    </tr>
                                    <tr>
                                        <td><img src={windows} class="dw-logos me-2" alt="Responsive image" />Windows 64 bit (60 MB)</td>
                                        <td> <Link to="https://www.data.searchgurbani.com/downloads/sgdv25/SGDV_windows_2_5_x64_jre.exe" target="_blank" className='dwnld-btn'><i class="bi bi-download"></i>Download</Link> </td>
                                    </tr>
                                    <tr>
                                        <td><img src={mac} class="dw-logos me-2" alt="Responsive image" />Mac OSX Installer  (44 MB)</td>
                                        <td> <Link to="https://www.data.searchgurbani.com/downloads/sgdv25/Search_Gurbani.dmg" target="_blank" className='dwnld-btn'><i class="bi bi-download"></i>Download</Link> </td>
                                    </tr>
                                    <tr>
                                        <td><img src={ubuntu} class="dw-logos me-2" alt="Responsive image" />Linux Installer  (44 MB)</td>
                                        <td> <Link to="https://www.data.searchgurbani.com/downloads/sgdv25/SGDV_unix_2_5.sh" target="_blank" className='dwnld-btn'><i class="bi bi-download"></i>Download</Link> </td>
                                    </tr>
                                    <tr>
                                        <td><img src={pdf} class="dw-logos me-2" alt="Responsive image" />SGDV v 2.5 Guide</td>
                                        <td> <Link to="https://www.data.searchgurbani.com/downloads/sgdv25/SGDV2.5.pdf" target="_blank" className='dwnld-btn'><i class="bi bi-download"></i>Download</Link> </td>
                                    </tr>                                    
                                </tbody>
                            </table>
                        </div>
                        <div className='col-lg-4 mb-3'>
                            <img src={poster} class="poster" alt="Responsive image" />
                        </div>
                        <div className='col-lg-12'>
                            <h4 className='p_s_head text-dark mb-3' >SGDV Requirements</h4>
                            <ul>
                                <li>SGDV is cross platform software, can be installed on Windows/ MAC OSx/ Linux</li>
                                <li>Java Run Enviornment</li>
                                <li>Recommended Version 6 Update 5 or higher: <Link to="http://java.com/en/download/manual.jsp" target="_blank"><b>Details and Downloads</b></Link></li>
                                <li>RAM : atleast 512 MB</li>
                                <li>Disk Space: 400MB</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default SearchGurbaniDV