//Gurbani search//
import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from "react-router";
import { Link, useLocation } from "react-router-dom";
import '../../assets/css/dashboard.css';
import '../../assets/css/style.css';
import '../../assets/css/intro.css';
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
import {Helmet} from "react-helmet";
import HelmetWrapper from '../../components/CommonHelmet';
import Image from 'next/image';

function ISearchGurbani() {
    const [share, setShare] = useState(false);
  const handleShareClose = () => setShare(false);
  const handleShare = () => setShare(true);
  const handleShareModal = (platform) => {
    handleShareClose();

  };
   
    return (
        <div>
            <HelmetWrapper
                title={`iSearchGurbani v4.0 Gurbani Search Software-: searchgurbani.com`}
                description={`Download iSearchGurbani: A cross Platform software for exploring sikh scriptures and displaying Gurbani text on projectors . Available for PC, Mac, Linux , Android smartphones and tablets and IPhone and Ipad`}
                keywords="Mobile Version, Gurbani, Shabad Keertan,  Dasam Granth, Guru Granth, Granth, Bhai Gurdas, Vaaran, Varan, Mahankosh, Kosh, Hukumnama, Baanis, Japji, Jaap, Sukhmani, Ardaas"
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
                        <div className='col-lg-9  '>
                            <h1 className='text-dark mb-2' >iSearchGurbani 4.0 for Windows, Mac and Linux</h1>
                            <p>iSearchGurbani ( iSG) is a cross platform software bringing you
                                  a simplistic approach to search and explore Gurbani . iSG includes 
                                  complete Sri Guru Granth Sahib , Bhai Gurdas Vaaran , Kabit Bhai Gurdas,
                                   Bhai Nand Lal Baani and Baani’s from Sri Dasam Granth Sahib.
                                    iSearchGurbani ( iSG) has a built in slideshow/projector feature,
                                     which automatically displays text to an additional monitor or
                                      projector screen configured as extended monitor.</p>
                                <button className='install mb-5' onClick={handleShare} >Install Now</button>
                            
                        </div>
                        <div className='col-lg-3 d-flex justify-content-end'>
                            <div className='app-thumb'>
                            <Image src={inerlogo} class="img-fluid web-dw-logo" alt="Responsive image" />
                            </div>
                        </div>
                        <div className='col-lg-12'>
                        <h4 className='p_s_head text-dark main-rd' >READ SGGS:</h4>          
                            <p className='tagline_p' >Explore and relish Sri Guru Granth Sahib Ang by Ang.</p>
                            <h4 className='p_s_head text-dark' >BAANIS:</h4>          
                            <p className='tagline_p' >Daily Nitnem baanis and other Baanis like Sukhmani Sahib, Asa di vaar with easy navigation and pagination.</p>
                            <h4 className='p_s_head text-dark' >GURBANI SEARCH:</h4> 
                            <p className='tagline_p' >INSTANT SEARCH WITH INPUT OF ONE ALPHABET</p>
                            <p className='tagline_p' >Advanced search of Shabads from Sri Guru Granth Sahib 
                                , Bhai Gurdas Vaaran , Kabit Bhai Gurdas, Bhai Nand Lal Baani and Sri Dasam Granth Sahib. First Letter Beginning and Anywhere in Romanization and Gurmukhi
                                    Search can be precise by adding consonants to first letter, exclude the matras which represent the vowels
                                Gurmukhi search is ' Case sensitive'</p>
                             <h4 className='p_s_head text-dark mb-3' >NEW FEATURES:ISEARCHGURBANI 4.0 ( September 2018 )</h4> 
                             <ul className='my-5 features-dw' >
                                <li>New instant Search alogrithm for instant search of shabads</li>
                                <li>Lareevar Gurmukhi with Lareevar Assist</li>
                                <li>Set Shabad Start: Set the line of Shabad as Asthai, for quick display</li>
                                <li>Keyboard Shortcuts</li>
                                <li>Baanis and Hukumnamas</li>
                                <li>Full Screen Customization: Font Size, Font Color, Background Image or Color.</li>
                                <li>Set Language Display Order in Full Screen </li>
                                <li>Secondary ( Pramaan) Search</li>
                                <li>Display Message to Community ( Full Screen)</li>
                                <li>Save SGGS Ang/Baani/Searched Shabad as a Favorite.</li>
                             </ul>
                        </div>
                        <div className='col-lg-8'>
                        <table class="table table-responsive">
                            <thead>
                                <tr>
                                <th colSpan={2} scope="col">Download iSearchGurbani 4.0</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><Image src={windows} class="dw-logos me-2" alt="Responsive image" />Windows (48 MB)</td>
                                    <td> <Link to="https://www.backend.searchgurbani.com/downloads/isg4/media/isearchgurbaniv4.exe" target="_blank" className='dwnld-btn'><i class="bi bi-download"></i>Download</Link> </td>
                                </tr>
                                <tr>
                                    <td><Image src={mac} class="dw-logos me-2" alt="Responsive image" />Apple Mac OSX  (48 MB)</td>
                                    <td> <Link to="https://www.backend.searchgurbani.com/downloads/isg4/media/isearchgurbaniv4.dmg" target="_blank" className='dwnld-btn'><i class="bi bi-download"></i>Download</Link> </td>
                                </tr>
                                <tr>
                                    <td><Image src={ubuntu} class="dw-logos me-2" alt="Responsive image" />Ubuntu / Unix  (48 MB)</td>
                                    <td> <Link to="https://www.backend.searchgurbani.com/downloads/isg4/media/isearchgurbaniv4.sh" target="_blank" className='dwnld-btn'><i class="bi bi-download"></i>Download</Link> </td>
                                </tr>
                                <tr>
                                    <td><Image src={javaicon} class="dw-logos me-2" alt="Responsive image" />Download JRE here</td>
                                    <td> <Link to="https://www.backend.searchgurbani.com/downloads/isg4/jre/JavaSetup8u211.exe" target="_blank" className='dwnld-btn'><i class="bi bi-download"></i>Download</Link> </td>
                                </tr>
                                <tr>
                                    <td><Image src={pdf} class="dw-logos me-2" alt="Responsive image" />iSearchGurbani Install Guide  (1 MB)</td>
                                    <td> <Link to="https://www.backend.searchgurbani.com/downloads/isg4/media/isearchgurbaniv4-install.pdf" target="_blank" className='dwnld-btn'><i class="bi bi-download"></i>Download</Link> </td>
                                </tr>
                                <tr>
                                    <td><Image src={appstore} class="dw-logos me-2" alt="Responsive image" />iSearchGurbani for Iphone & Ipad</td>
                                    <td> <Link to="https://apps.apple.com/in/app/isearchgurbani/id6744822993" target="_blank" className='dwnld-btn'><i class="bi bi-download"></i>Download</Link> </td>
                                </tr>
                                <tr>
                                    <td><Image src={plastore} class="dw-logos me-2" alt="Responsive image" />iSearchGurbani for Android Phones and Tablets</td>
                                    <td> <Link to="https://play.google.com/store/apps/details?id=com.isearch.gurbani" target="_blank" className='dwnld-btn'><i class="bi bi-download"></i>Download</Link> </td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        <div className='col-lg-4 mb-3'>
                        <Image src={poster} class="poster" alt="Responsive image" />
                        </div>
                        <div className='col-lg-12'>
                        <h4 className='p_s_head text-dark mb-2' >iSG Requirements</h4> 
                             <ul>
                                <li>iSearchGurbani is cross platform software, can be installed on Windows/ MAC OSx/ Linux</li>
                                <li>Java Run Enviornment</li>
                                <li>Recommended Version 6 Update 5 or higher: <Link to="https://www.data.searchgurbani.com/downloads/isg4/jre/JavaSetup8u211.exe" target="_blank"><b>Download JRE here</b></Link></li>
                                <li>RAM : atleast 128 MB</li>
                                <li>Disk Space: 100MB</li>
                             </ul>
                        </div>
                    </div>
                    </div>
                    
                    </div>  </div>  </div>  
                </div>
                </div>
                </div> </section>
            <Modal show={share} onHide={handleShareClose}>
        <Modal.Header closeButton>
          <Modal.Title>Download</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='socia-share'>
            <ul>
              <li>
                <a className='soc-icon' to="https://www.backend.searchgurbani.com/downloads/isg4/media/isearchgurbaniv4.exe" target="_blank" onClick={() => handleShareClose()}>
                  <Image src={windows} class="img-fluid donate" alt="Responsive image" />
                </a>
              </li>
              <li>
                <a className='soc-icon' to="https://www.backend.searchgurbani.com/downloads/isg4/media/isearchgurbaniv4.dmg" target="_blank" onClick={() => handleShareClose()}>
                  <Image src={mac} class="img-fluid donate" alt="Responsive image" />
                </a>
              </li>
              <li>
                <a className='soc-icon' to="https://www.backend.searchgurbani.com/downloads/isg4/media/isearchgurbaniv4.sh" target="_blank" onClick={() => handleShareClose()}>
                  <Image src={ubuntu} class="img-fluid donate" alt="Responsive image" />
                </a>
              </li>
              <li>
                <a className='soc-icon' to="https://www.backend.searchgurbani.com/downloads/isg4/jre/JavaSetup8u211.exe" target="_blank" onClick={() => handleShareClose()}>
                  <Image src={javaicon} class="img-fluid donate" alt="Responsive image" />
                </a>
              </li>
              <li>
                <a className='soc-icon' to="https://www.backend.searchgurbani.com/downloads/isg4/media/isearchgurbaniv4-install.pdf" target="_blank" onClick={() => handleShareClose()}>
                  <Image src={pdf} class="img-fluid donate" alt="Responsive image" />
                </a>
              </li>
              <li>
                <a className='soc-icon' to="https://apps.apple.com/in/app/isearchgurbani/id6744822993" target="_blank" onClick={() => handleShareClose()}>
                  <Image src={appstore} class="img-fluid donate" alt="Responsive image" />
                </a>
              </li>
              <li>
                <a className='soc-icon' to="https://play.google.com/store/apps/details?id=com.isearch.gurbani" target="_blank" onClick={() => handleShareModal()}>
                  <Image src={plastore} class="img-fluid donate" alt="Responsive image" />
                </a>
              </li>
            </ul>
          </div>

        </Modal.Body>
      </Modal>
        </div>
    )
}

export default ISearchGurbani