//Gurbani search//
import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from "react-router";
import { Link, useLocation } from "react-router-dom";
import '../assets/css/dashboard.css';
import '../assets/css/style.css';
import '../assets/css/intro.css';
import inerlogo from '../assets/img/iner-logo-mid.svg';
import windows from '../assets/icons/windows.svg';
import mac from '../assets/icons/mac.svg';
import ubuntu from '../assets/icons/ubuntu.svg';
import javaicon from '../assets/icons/jv.svg';
import pdf from '../assets/icons/pdf.svg';
import appstore from '../assets/icons/appstore.svg';
import plastore from '../assets/icons/platstore.svg';
import poster from '../assets/img/isg-poster-sm.jpg';
import Modal from 'react-bootstrap/Modal';
import { Helmet } from "react-helmet";
import HelmetWrapper from '../components/CommonHelmet';

function PrivacyPolicy() {
    const [share, setShare] = useState(false);
    const handleShareClose = () => setShare(false);
    const handleShare = () => setShare(true);
    const handleShareModal = (platform) => {
        handleShareClose();

    };

    return (
        <div>
            <HelmetWrapper
                title={`Privacy Policy-: searchgurbani.com`}
                description={`A comprehensive web site on research and  exploration of Sri Guru Granth Sahib, Amrit Keertan Gutka, Bhai Gurdas Vaaran, Kabit Bhai Gurdaas ,Sri Dasam Granth Sahib, exegesis , Gurbani, Gurbanee vichaar`}
                keywords=""
                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                url={window.location.href}
            />
            <section className='section-1 intro-bg'>
                <div className="container">
                    <div className="second-container intro-bkg">
                        <div className="row ">
                            <div className="col-lg-12">
                                <div className='container  d-flex justify-content-center advance-search intro-border mt-5'>
                                    <div className="px-1 py-1 align-middle mt-2 bgv-intro">
                                        <div className="second-container intro-bkg">
                                            <div className='row'>
                                                <div className='col-lg-12  '>
                                             
                                                    <h3 className="mb-2 raags-heading">Privacy Policy for SearchGurbani.com & iSearchGurbani </h3>

                                                    <div>
                                                        <p className='paragraph '>
                                                        Effective date: Feb 01 2021 <br/><br/>
                                                        Gateway to Sikhism operates the https://www.searchgurbani.com/ website and iSearchGurbani for Android &iOS (the “Service”). <br/><br/>

                                                        This page informs you of our policies regarding the collection, use, and disclosure of personal
                                                        data when you use our Service and the choices you have associated with that data.<br/><br/>

                                                        {/* We use your data to provide and improve the Service. By using the Service, you agree to the 
                                                        collection and use of information in accordance with this policy. Unless otherwise defined 
                                                        in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our 
                                                        Terms and Conditions, accessible from https://totalery.com/    <br/>   <br/> */}
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <h1 className='main-heading pvit-policy text-start'> Information Collection And Use</h1>
                                                        <p className='paragraph '>
                                                        We collect several different types of information for various purposes to provide and improve our Service to you.        
                                                        </p>
                                                        <h1 className='main-heading pvit-policy text-start'> Types of Data Collected</h1>
                                                        <h1 className='main-heading pvit-policy text-start'> Personal Data</h1>
                                                        <p className='paragraph '>
                                                        While using our Service, we may ask you to provide us with certain personally identifiable information that can 
                                                        be used to contact or identify you (“Personal Data”). Personally identifiable information may include, 
                                                        but is not limited to:<br/>
                                                        <br/>
                                                        Email address<br/><br/>

                                                        First name and last name<br/><br/>

                                                        Cookies and Usage Data<br/><br/>

                                                        Comments<br/> <br/>
                                                        When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.
                                                        <br/> <br/>
                                                        An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.
                                                        <br/><br/> 
                                                        <h1 className='main-heading pvit-policy text-start'>Media</h1>
                                                        </p>
                                                        <p className='paragraph '>If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.</p>
                                                        
                                                        <h1 className='main-heading pvit-policy text-start'>Embedded content from other websites</h1>
                                                        
                                                        <p className='paragraph '>
                                                        Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.
                                                        <br/><br/> 
                                                        These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracing your interaction with the embedded content if you have an account and are logged in to that website.
                                                        </p>
                                                        <h1 className='main-heading pvit-policy text-start'>Usage Data</h1>
                                                      
                                                        <p className='paragraph '>We may also collect information how the Service is accessed and used (“Usage Data”). This Usage Data may include information such as your computer’s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
                                                    
                                                        <h1 className='main-heading pvit-policy text-start'> Tracking & Cookies Data</h1>
                                                        <p className='paragraph '>
                                                        We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.
                                                        <br/> <br/> 
                                                        Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.
                                                        <br/> <br/> 
                                                        You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
                                                         </p>

                                                         <h1 className='main-heading pvit-policy text-start'>Examples of Cookies we use:</h1>

                                                         <p className='paragraph '>Session Cookies. We use Session Cookies to operate our Service.
                                                         <br/> <br/> 
                                                        Preference Cookies. We use Preference Cookies to remember your preferences and various settings.
                                                        <br/> <br/> 
                                                        Security Cookies. We use Security Cookies for security purposes.</p>
                                                        
                                                        <h1 className='main-heading pvit-policy text-start'>Use of Data</h1>

                                                        <p className='paragraph '>Gateway to Sikhism uses the collected data for various purposes:
                                                        <br/> <br/> 
                                                            To provide and maintain the Service
                                                            <br/> <br/> 
                                                            To notify you about changes to our Service
                                                            <br/> <br/> 
                                                            To allow you to participate in interactive features of our Service when you choose to do so
                                                            <br/> <br/> 
                                                            To provide customer care and support
                                                            <br/> <br/> 
                                                            To provide analysis or valuable information so that we can improve the Service
                                                            <br/> <br/> 
                                                            To monitor the usage of the Service
                                                            <br/> <br/> 
                                                            To detect, prevent and address technical issues</p>
                                                            <h1 className='main-heading pvit-policy text-start'>Transfer Of Data</h1>

                                                            <p className='paragraph '> Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.
                                                            <br/> <br/> 
                                                            Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
                                                            <br/> <br/> 
                                                            Gateway to Sikhism will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.
                                                            </p>

                                                            <h1 className='main-heading pvit-policy text-start'>Disclosure Of Data</h1>

                                                            <h1 className='main-heading pvit-policy text-start'>Legal Requirements</h1>

                                                            <p className='paragraph '> Gateway to Sikhism may disclose your Personal Data in the good faith belief that such action is necessary to:

                                                            To comply with a legal obligation
                                                            <br/> <br/> 
                                                            To protect and defend the rights or property of Gateway to Sikhism
                                                            <br/> <br/> 
                                                            To prevent or investigate possible wrongdoing in connection with the Service
                                                            <br/> <br/> 
                                                            To protect the personal safety of users of the Service or the public
                                                            <br/> <br/> 
                                                            To protect against legal liability</p>

                                                            <h1 className='main-heading pvit-policy text-start'>Security Of Data</h1>

                                                            <p className='paragraph '>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
                                                           
                                                            <h1 className='main-heading pvit-policy text-start'>License Of Our WordPress Products</h1>
                                                            
                                                            <p className='paragraph '>All our WordPress plugins, themes and their source code available for download on this website are licensed under the GNU General Public License (http://www.gnu.org/licenses/gpl.html) version 2.0 or later.</p>

<h1 className='main-heading pvit-policy text-start'>Service Providers</h1>

<p className='paragraph '>We may employ third party companies and individuals to facilitate our Service (“Service Providers”), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</p>

<p className='paragraph '>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>

<h1 className='main-heading pvit-policy text-start'>Analytics</h1>

<p className='paragraph '>We may use third-party Service Providers to monitor and analyze the use of our Service.</p>
<br/> <br/>         

<p className='paragraph '>Google AnalyticsGoogle Analytics is a web analytics service offered 
by Google that tracks and reports website traffic. Google uses the data collected to track and monitor
 the use of our Service. This data is shared with other Google services. Google may use the collected 
 data to contextualize and personalize the ads of its own advertising network.You can opt-out of having 
 made your activity on the Service available to Google Analytics by installing the Google Analytics
  opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js, 
  and dc.js) from sharing information with Google Analytics about visits activity.For more information 
  on the privacy practices of Google, please visit the Google Privacy & Terms web page:
   https://policies.google.com/privacy?hl=en</p>

<h1 className='main-heading pvit-policy text-start'>Links To Other Sites</h1>

<p className='paragraph '>Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party’s site. We strongly advise you to review the Privacy Policy of every site you visit.
</p>
<p className='paragraph '>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
</p>
<h1 className='main-heading pvit-policy text-start'>Children’s Privacy</h1>
<p className='paragraph '>Our Service does not address anyone under the age of 18 (“Children”).</p>

<p className='paragraph '>We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.
    </p>       


    <h1 className='main-heading pvit-policy text-start'>   Changes To This Privacy Policy</h1>

    <p className='paragraph '>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>

    <p className='paragraph '>We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the “effective date” at the top of this Privacy Policy.</p>

    <p className='paragraph '>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

<h1 className='main-heading pvit-policy text-start'>Contact Us</h1>

<p className='paragraph '>If you have any questions about this Privacy Policy, please contact us:</p>

<p className='paragraph '>By email: gatewaytosikhism@gmail.com</p>

<p className='paragraph '>By visiting this page on our website: https://www.searchgurbani.com/feedback</p>                                              
    
    
    
    
    
      </div>


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

export default PrivacyPolicy