// import '../assets/css/dashboard.css';
// import '../assets/css/style.css';
// import '../assets/css/footer.css';
import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from "react-router-dom";
import Link from "next/link";
import Logo from '../assets/icons/logo.svg';
import icon1 from '../assets/img/icon-1.svg';
import icon2 from '../assets/img/icon-2.svg';
import icon3 from '../assets/img/icon-3.svg';
import icon4 from '../assets/img/icon-4.svg';
import { useRouter } from 'next/router';
import Image from 'next/image';
const Footer = (props) => {
  // const location = useLocation();
  const location = useRouter();
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  /* useEffect(() => {
    // Listen for the `beforeinstallprompt` event
    const handleBeforeInstallPrompt = (e) => {
        console.log("beforeinstallprompt event fired");
      e.preventDefault(); // Prevent the default install prompt
      setDeferredPrompt(e); // Save the event for later use
      //setShowPopup(true); 
      console.log('showPopup',showPopup)// Show the custom popup
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []); */

  /* useEffect(() => {
    // Google Analytics Script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-ELCHCL0MXJ';

    const script2 = document.createElement('script');
    script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-ELCHCL0MXJ');
    `;

    document.head.appendChild(script1);
    document.head.appendChild(script2);

    return () => {
        document.head.removeChild(script1);
        document.head.removeChild(script2);
    };
}, []); */

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault(); // Prevent default banner
      setDeferredPrompt(e); // Save the event
      //setShowPopup(true); // Show your custom popup
      console.log("beforeinstallprompt event captured");
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);
  const handleInstallClick = () => {
    console.log('User accepted ');
    if (deferredPrompt) {
      deferredPrompt.prompt(); // Show the native install prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        setDeferredPrompt(null); // Clear the saved prompt
        //setShowPopup(false); // Hide the popup
      });
    }
  };

  return (
    <footer>
      <div className="seventh-container  common-padding" >
        <div className="container-fluid">
          <div className="">
            <div className='footer-logo'>
              <Image src={Logo} className="rounded mx-auto d-block footer-img mt-4" align="center" alt="Responsive image" />
              {/*<img src={Groupicon} className="rounded mx-auto d-block footer-img mt-4" align="center" alt="Responsive image" />*/}
              {/* -----------old -----------------------  */}
              {/* <div className='f-soc-icons'>
                <Link data-mdb-ripple-init className="btn text-white btn-floating m-1" to="https://www.facebook.com/SearchGurbani" target="_blank"
                  role="button">
                  <img src={icon1} className="" align="center" alt="Responsive image" />
                </Link>
                <Link data-mdb-ripple-init className="btn text-white btn-floating m-1" to="https://twitter.com/intent/follow?source=followbutton&variant=1.0&screen_name=searchgurbani" target="_blank"
                  role="button">
                  <img src={icon2} className="" align="center" alt="Responsive image" />
                </Link>
                <Link data-mdb-ripple-init className="btn text-white btn-floating m-1" to="https://www.youtube.com/user/SearchGurbani/" target="_blank"
                  role="button">
                  <img src={icon3} className="" align="center" alt="Responsive image" />
                </Link>
                <Link data-mdb-ripple-init className="btn text-white btn-floating m-1" to="https://t.me/searchgurbani" target="_blank"
                  role="button">
                  <img src={icon4} className="" align="center" alt="Responsive image" />
                </Link>
              </div> */}
              {/* --------------new next ---------------  */}
              <div className="f-soc-icons">
                <a
                  href="https://www.facebook.com/SearchGurbani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn text-white btn-floating m-1"
                  role="button"
                >
                  <Image src={icon1} alt="Facebook" className="" />
                </a>

                <a
                  href="https://twitter.com/intent/follow?source=followbutton&variant=1.0&screen_name=searchgurbani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn text-white btn-floating m-1"
                  role="button"
                >
                  <Image src={icon2} alt="Twitter" className="" />
                </a>

                <a
                  href="https://www.youtube.com/user/SearchGurbani/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn text-white btn-floating m-1"
                  role="button"
                >
                  <Image src={icon3} alt="YouTube" className="" />
                </a>

                <a
                  href="https://t.me/searchgurbani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn text-white btn-floating m-1"
                  role="button"
                >
                  <Image src={icon4} alt="Telegram" className="" />
                </a>
              </div>


            </div>

            <div className='mt-4'>

              {location.pathname === '/' && (
                <nav className="d-flex navbar navbar-default my-4 pre-f-links">
                  {/* old react */}
                  {/* <ul className="mx-auto nav ">
                                        <li className="active"><Link to={`/music/page/${1}`}>Indian Classical Music and Sikh Kirtan</Link></li>
                                        <li><Link to={`/compilation/page/${1}`}> Compilation of Sri Guru Granth Sahib ( Adi Birh Bare) </Link></li>
                                    </ul> */}
                  {/* new next */}
                  <ul className="mx-auto nav">
                    <li className="active">
                      <Link href="/music/page/1">Indian Classical Music and Sikh Kirtan</Link>
                    </li>
                    <li>
                      <Link href="/compilation/page/1">Compilation of Sri Guru Granth Sahib (Adi Birh Bare)</Link>
                    </li>
                  </ul>
                </nav>
              )}

              {/* {showPopup && (
        <div className="install-popup">
          <p>Install our app for a better experience!</p>
          <button onClick={handleInstallClick}>Install</button>
        </div>
      )} */}
              <nav className="d-flex navbar navbar-default my-4 pre-f-links">
                {/* old  */}
                {/* <ul className="mx-auto nav ">
                  <li className="active"><Link onClick={handleInstallClick}>Use this site often ? Install our app for a better experience!</Link></li>
                </ul> */}
                {/* new  */}
                <ul className="mx-auto nav">
                  <li className="active">
                    <a
                      href='javascrip:void(0)'
                      onClick={handleInstallClick}
                      className="text-blue-600 underline cursor-pointer bg-transparent border-0 p-0"
                    >
                      Use this site often? Install our app for a better experience!
                    </a>
                  </li>
                </ul>
              </nav>
              <nav>
                {/* old react */}
                {/* <ul className="mx-auto nav ">
                                    <li className="active"><Link to='/'>Home</Link></li>
                                    <li><Link to='/preferences'>Site Preferences</Link></li>
                                    <li><Link to='/unicode'>Unicode Fonts </Link></li>
                                    <li><Link to='/feedback'> Feedback</Link></li>
                                    <li><Link to='/privacy-policy'> Privacy Policy</Link></li>
                                    <li><Link to='/site-map'> Sitemap </Link></li>
                                    <li><Link to="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=A88CQMEXSYCG8"> <span className='fontz-color'>Donate to SearchGurbani</span></Link></li>
                                </ul> */}
                {/* new next js  */}
                <ul className="mx-auto nav ">
                  <li className="active"><Link href='/'>Home</Link></li>
                  <li><Link href='/preferences'>Site Preferences</Link></li>
                  <li><Link href='/unicode'>Unicode Fonts </Link></li>
                  <li><Link href='/feedback'> Feedback</Link></li>
                  <li><Link href='/privacy-policy'> Privacy Policy</Link></li>
                  <li><Link href='/site-map'> Sitemap </Link></li>
                  <li><Link href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=A88CQMEXSYCG8"> <span className='fontz-color'>Donate to SearchGurbani</span></Link></li>
                </ul>
              </nav>
            </div>


          </div>
        </div>
      </div>
      <div className="five-container-footer p-3" >
        <div className="container-lg">
          <div className="row ">
            <div className='copyright-wrp'>
              <p className='footer-left-heading mb-0'>© SearchGurbani 2024 All rights reserved.</p>
              <div className='d-flex '>
                {/* <Link to='/'>Terms & Conditions </Link> */}
                {/* <Link to='/privacy-policy'></Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
