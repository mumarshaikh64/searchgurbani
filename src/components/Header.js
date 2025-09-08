// import '../assets/css/header.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState, useEffect } from 'react'
import { useRouter } from "next/router";
// import { LinkContainer } from 'react-router-bootstrap';
import Image from "next/image";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import Logo from '../assets/icons/logo.svg';
import ShareIcon from '../assets/icons/share.svg';
import facebook from '../assets/img/facebook.svg';
import twitter from '../assets/img/twitter.svg';
import youtube from '../assets/img/youtube.svg';
import telegram from '../assets/img/telegram.svg';
import whatsapp from '../assets/img/whatsapp.svg';
import mail from '../assets/img/mail.svg';
import logot from '../assets/img/logoT.svg';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ListGroup from 'react-bootstrap/ListGroup';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Axios from 'axios';
import { API } from "../config/api";
import { ApiHelper } from '../helpers/ApiHelper';
import Validation from './Validation';
import { usePage } from './PageContext';

function Header(props) {
  // const navigate = useNavigate();
  // const location = useLocation();
  const router = useRouter();
  const shareUrl = 'https://searchgurbani.com';

  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [pError, setPError] = useState(false);
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { currentPage } = usePage();

  /* useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case '/':
        document.documentElement.style.setProperty('--current-color', 'var(--color-1)');
        break;
      case '/gurbani-search':
        document.documentElement.style.setProperty('--current-color', 'var(--color-2)');
        break;
      case '/guru-granth-sahib/introduction':
      case '/guru-granth-sahib/ang-by-ang':
      case '/guru-granth-sahib/index/chapter':
      case '/guru-granth-sahib/index/author':
      case '/guru-granth-sahib/sggs-world-language':
      case '/guru-granth-sahib/search':
        document.documentElement.style.setProperty('--current-color', 'var(--color-3)');
        document.documentElement.style.setProperty('--current-color-dim', 'var( --color-3L)');
        break;
      case '/amrit-keertan/introduction':
      case '/amrit-keertan/page-by-page':
      case '/amrit-keertan/index/chapter':
      case '/amrit-keertan/index/english':
      case '/amrit-keertan/index/hindi':
      case '/amrit-keertan/index/punjabi':
      case '/amrit-keertan/search':
        document.documentElement.style.setProperty('--current-color', 'var(--color-4)');
        document.documentElement.style.setProperty('--current-color-dim', 'var( --color-4L)');
        break;
      case '/bhai-gurdas-vaaran/introduction':
      case '/bhai-gurdas-vaaran/pauri-by-pauri':
      case '/bhai-gurdas-vaaran/index/vaar':
      case '/bhai-gurdas-vaaran/search':
        document.documentElement.style.setProperty('--current-color', 'var(--color-5)');
        document.documentElement.style.setProperty('--current-color-dim', 'var( --color-5L)');
        break;
      case '/dasam-granth/introduction':
      case '/dasam-granth/page-by-page':
      case '/dasam-granth/index/chapter/pb':
      case '/dasam-granth/index/chapter/en':
      case '/dasam-granth/search':
        document.documentElement.style.setProperty('--current-color', 'var(--color-6)');
        document.documentElement.style.setProperty('--current-color-dim', 'var( --color-6L)');
        break;
      case '/kabit-savaiye/kabit-by-kabit':
      case '/kabit-savaiye/search':
        document.documentElement.style.setProperty('--current-color', 'var(--color-7)');
        document.documentElement.style.setProperty('--current-color-dim', 'var( --color-7L)');
        break;
      case '/bhai-nand-lal/ghazal':
      case '/bhai-nand-lal/quatrains':
      case '/bhai-nand-lal/zindginama':
      case '/bhai-nand-lal/ganjnama':
      case '/bhai-nand-lal/jot-bikas':
      case '/bhai-nand-lal/jot-bikas-persian':
      case '/bhai-nand-lal/rahitnama':
      case '/bhai-nand-lal/tankahnama':
      case '/bhai-nand-lal/search':
        document.documentElement.style.setProperty('--current-color', 'var(--color-8)');
        document.documentElement.style.setProperty('--current-color-dim', 'var( --color-8L)');
        break;
      case '/baanis/japji-sahib':
      case '/baanis/jaap-sahib':
      case '/baanis/tvai-prasadh-savaiye':
      case '/baanis/chaupai-sahib':
      case '/baanis/anand-sahib':
      case '/baanis/rehraas-sahib':
      case '/baanis/kirtan-sohila':
      case '/baanis/akal-ustati':
      case '/baanis/bachitar-natak':
      case '/baanis/shabad-hazare-paatishahi-10':
      case '/baanis/tvai-prasaadh-savaiye-dheenan-kee':
      case '/baanis/anand-sahib-bhog':
      case '/baanis/aarti':
      case '/baanis/laavan-anand-karaj':
      case '/baanis/asa-ki-vaar':
      case '/baanis/sukhmani-sahib':
      case '/baanis/sidh-gosht':
      case '/baanis/ramkali-sadh':
      case '/baanis/dhakanee-oankaar':
      case '/baanis/baavan-akhree':
      case '/baanis/shabad-hazare':
      case '/baanis/baarah-maaha':
      case '/baanis/sukhmana-sahib':
      case '/baanis/dukh-bhanjani-sahib':
      case '/baanis/salok-sehskritee':
      case '/baanis/gathaa':
      case '/baanis/phunhay-m5':
      case '/baanis/chaubolay-m5':
      case '/baanis/salok-kabeer-ji':
      case '/baanis/salok-farid-ji':
      case '/baanis/savaiye-m1':
      case '/baanis/savaiye-m2':
      case '/baanis/savaiye-m3':
      case '/baanis/savaiye-m4':
      case '/baanis/savaiye-m5':
      case '/baanis/salok-m9':
      case '/sundar-gutka':
        document.documentElement.style.setProperty('--current-color', 'var(--color-9)');
        document.documentElement.style.setProperty('--current-color-dim', 'var( --color-9L)');
        break;
      case '/sgdv/isg':
      case '/sgdv':
      case '/mahan-kosh':
      case '/guru-granth-kosh':
      case '/sggs-kosh':
      case '/maansarovar':
      case '/sri-nanak-prakash':
      case '/sri-gur-pratap-suraj-granth':
      case '/faridkot-wala-teeka':
      case '/raags':
        document.documentElement.style.setProperty('--current-color', 'var(--colo-x)');
        document.documentElement.style.setProperty('--current-color-dim', 'var( --colo-xL)');
        break;
      default:
        document.documentElement.style.setProperty('--current-color', 'var(--color-common)');
        document.documentElement.style.setProperty('--current-color-dim', 'var(--color-commonL)');
        break;
    }
  }, [location.pathname]); */
  useEffect(() => {
    // const path = location.pathname;
    const path = router.pathname;

    const setColor = (color, colorDim, colorShabad) => {
      document.documentElement.style.setProperty('--current-color', `var(${color})`);
      document.documentElement.style.setProperty('--current-color-dim', `var(${colorDim})`);
      document.documentElement.style.setProperty('--current-color-shabad', `var(${colorShabad})`);
    };

    if (path === '/') {
      setColor('--color-1', '--color-1L', '--color-1s');
    } else if (path.startsWith('/gurbaniSearch')) {
      setColor('--color-2', '--color-2L', '--color-2s');
    } else if (path.startsWith('/GGS')) {
      setColor('--color-3', '--color-3L', '--color-3s');
    } else if (path.startsWith('/AK')) {
      setColor('--color-4', '--color-4L', '--color-4s');
    } else if (path.startsWith('/BGV')) {
      setColor('--color-5', '--color-5L', '--color-5s');
    } else if (path.startsWith('/DGS')) {
      setColor('--color-6', '--color-6L', '--color-6s');
    } else if (path.startsWith('/KS')) {
      setColor('--color-7', '--color-7L', '--color-7s');
    } else if (path.startsWith('/BNL')) {
      setColor('--color-8', '--color-8L', '--color-8s');
    } else if (path.startsWith('/baanis')) {
      setColor('--color-9', '--color-9L', '--color-9s');
    } else {
      setColor('--color-common', '--color-commonL', '--color-commons');
    }
  }, [router.pathname]);

  //mobile menu Show
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isRegister, setIsRegister] = useState(false);
  const handleRegisterClose = () => setIsRegister(false);
  const handleRegistershow = () => setIsRegister(true);

  const [isLogin, setIsLogin] = useState(false);
  const handleLoginClose = () => setIsLogin(false);
  const handleLoginShow = () => setIsLogin(true);

  // ------------------- old in react ------------------------------
  // const [fix, setFix] = useState(false)

  // function setFixed() {
  //   if (window.scrollY >= 160) {
  //     setFix(true)
  //   }
  //   else {
  //     setFix(false)
  //   }
  // }
  // window.addEventListener("scroll", setFixed)
  // -------------------- new in next js ----------------------------------- 
  const [fix, setFix] = useState(false);

  useEffect(() => {
    function setFixed() {
      if (window.scrollY >= 160) {
        setFix(true);
      } else {
        setFix(false);
      }
    }

    // add listener
    window.addEventListener("scroll", setFixed);

    // call once on mount (in case page is already scrolled)
    setFixed();

    // cleanup when component unmounts
    return () => {
      window.removeEventListener("scroll", setFixed);
    };
  }, []);

  const [share, setShare] = useState(false);
  const handleShareClose = () => setShare(false);
  const handleShare = () => setShare(true);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  // ------------ old -------------------- 
  // const title = document.title;
  // ----------- new ------------------- 
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(document.title);

    const observer = new MutationObserver(() => {
      setTitle(document.title);
    });

    const target = document.querySelector("head"); // ✅ observe head, not title
    if (target) {
      observer.observe(target, {
        childList: true,
        subtree: true,
      });
    }

    return () => observer.disconnect();
  }, []);
  // const shar = `${window.location.origin}${location.pathname}`;
  console.log('gfyfyy,%%%%%%%%%%%5', currentPage)
  const handleShareModal = (platform) => {
    let shareLink = '';
    const type = localStorage.getItem('BnlType');
    const cleanType = type?.replace(/['"]+/g, '');
    const vaar = localStorage.getItem('BgVaar');
    let urlPath = router.pathname;
    console.log('gfyfyy,%%%%%%%%%%%5', currentPage)
    if (router.pathname === "/amrit-keertan/page-by-page" && currentPage) {
      urlPath = `/amrit-keertan/page/${currentPage}`;
      console.log('AMRIT KEERTAN TEST', router.pathname === "/amrit-keertan/page-by-page")
    }
    else if (router.pathname === "/guru-granth-sahib/ang-by-ang" && currentPage) {
      urlPath = `/guru-granth-sahib/ang/${currentPage}`;
      console.log('else part of handle share modal', urlPath)
    } else if (router.pathname === "/dasam-granth/page-by-page" && currentPage) {
      urlPath = `/dasam-granth/page/${currentPage}`;
    }
    else if (router.pathname === `/bhai-nand-lal/${cleanType}` && currentPage) {
      urlPath = `/bhai-nand-lal/${cleanType}/page/${currentPage}`;
    } else if (router.pathname === "/kabit-savaiye/kabit-by-kabit" && currentPage) {
      urlPath = `/kabit-savaiye/kabit/${currentPage}`;
    }
    else if (router.pathname === "/bhai-gurdas-vaaran/pauri-by-pauri" && currentPage) {
      urlPath = `/bhai-gurdas-vaaran/vaar/${vaar}/pauri/${currentPage}`;
      console.log('else part of handle share modal111111111', urlPath)
    }
    else {
      urlPath = router.pathname;

    }
    switch (platform) {
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl + urlPath)}&t=${encodeURIComponent(title)}`;
        break;
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl + urlPath)}&text=${encodeURIComponent(title)}`;
        break;
      case 'youtube':
        // YouTube does not have a direct sharing link for a URL, this is just an example
        shareLink = `https://www.youtube.com`;
        break;
      case 'telegram':
        shareLink = `https://telegram.me/share/url?url=${encodeURIComponent(shareUrl + urlPath)}&text=${encodeURIComponent(title)}`;
        break;
      case 'whatsapp':
        shareLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(title + " " + shareUrl + urlPath)}`;
        break;
      case 'mail':
        shareLink = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(shareUrl + urlPath)}`;
        break;
      default:
        break;
    }

    window.open(shareLink, '_blank');
    handleShareClose();

  };
  const handleEmail = (event) => {
    const value = event.target.value;
    const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    const result = pattern.test(value);
    if (result === false) {
      setEmailError(true)
    }
  }
  const handleRegister = async () => {
    if (firstname !== '' && lastname !== '' && email !== '' && password !== '' && confirmPassword !== '') {
      if (password === confirmPassword) {
        setError(false)
        setLoader(true)
        const params = new FormData();
        params.append('firstName', firstname);
        params.append('lastName', lastname);
        params.append('email', email);
        params.append('password', password);
        params.append('confirmed', confirmPassword);

        console.log('para', params)
        await Axios.post(API.register, params, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
          .then((resData) => {
            setLoader(false)
            console.log('register', resData);
            if (resData.data.firstName !== "") {
              alert('Registered Successfully')
            }
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
          })
          .catch((err) => {
            setLoader(false)
            console.log(err);
          })
      }
      else {
        setPError(true)
      }
    }
    else {
      /* alert('Plese fill mandatory fields'); */
      setLoader(false)
      setError(true)
    }

  }
  const handleLogin = async () => {
    if (email !== '' && password !== '') {
      setError(false)
      setLoader(true)
      const params = new FormData();
      params.append('email', email);
      params.append('password', password);

      console.log('para', params)
      await Axios.post(API.login, params, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then((resData) => {
          setLoader(false)
          console.log('register', resData);
          if (resData.data.status === true) {
            alert('Login Successfully')
          }
          setEmail('');
          setPassword('');
        })
        .catch((err) => {
          setLoader(false)
          console.log(err);
        })
    }
    else {
      setError(true)
      setLoader(false)
    }

  }

  return (
    <header className={fix ? 'header fixed' : 'header'} >
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          {/* old  */}
          {/* <Navbar.Brand as={Link} to="/"> <Image src={Logo} className="img-fluid" alt="Responsive image" /></Navbar.Brand> */}
          {/* new  */}
          <Navbar.Brand as={Link} href="/">
            <Image
              src={Logo}  // file should be inside /public/icons/
              alt="Responsive Logo"
              width={120}
              height={50}
              className="img-fluid"
            />
          </Navbar.Brand>
          <div className='moobile-hd-btns only-mobile' >
            <button onClick={handleShare} className='share'><i className="bi bi-share"></i></button>
          </div>
          {/* old  */}
          {/* <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
              <LinkContainer to="/preferences"><Nav.Link>Site Preferences</Nav.Link></LinkContainer>
              <LinkContainer to="/feedback"><Nav.Link>Feedback</Nav.Link></LinkContainer>
              <LinkContainer to="/site-map"><Nav.Link>Sitemap</Nav.Link></LinkContainer>
              <LinkContainer to="/hukum"><Nav.Link>Today's Hukumnama</Nav.Link></LinkContainer>
            </Nav>
            <button className='register'
              onClick={handleRegistershow}>Register</button>
            <button className='login' onClick={handleLoginShow}>Login</button>
            <button onClick={handleShare} className='share'><i className="bi bi-share"></i></button>
          </Navbar.Collapse> */}
          {/* new  */}
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} href="/">Home</Nav.Link>
              <Nav.Link as={Link} href="/sitePreference">Site Preferences</Nav.Link>
              <Nav.Link as={Link} href="/feedback">Feedback</Nav.Link>
              <Nav.Link as={Link} href="/siteMap">Sitemap</Nav.Link>
              <Nav.Link as={Link} href="/Resources/Hukumnama/">Today's Hukumnama</Nav.Link>
            </Nav>

            <button className="register" onClick={handleRegistershow}>
              Register
            </button>
            <button className="login" onClick={handleLoginShow}>
              Login
            </button>
            <button onClick={handleShare} className="share">
              <i className="bi bi-share"></i>
            </button>
          </Navbar.Collapse>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {/* <ul className='d-flex sub-menu-wrapper' >
                <li>
                  <div className='d-flex side-reg'>
                    <button className='register' onClick={handleRegistershow}>Register</button>
                    <button className='login' onClick={handleLoginShow}>Login</button>
                  </div>
                </li>
                <li> <LinkContainer to="/"><Nav.Link onClick={handleClose}>Home</Nav.Link></LinkContainer> </li>
                <li> <LinkContainer to="/gurbani-search"><Nav.Link onClick={handleClose}>Gurbani Search</Nav.Link></LinkContainer> </li>
                <li>
                  <NavDropdown title="Guru Granth Sahib" id="navbarScrollingDropdown" >
                    <LinkContainer to="/guru-granth-sahib/introduction"><NavDropdown.Item onClick={handleClose} >Introduction</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/guru-granth-sahib/ang-by-ang"><NavDropdown.Item onClick={handleClose}>Ang by Ang</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/guru-granth-sahib/index/chapter"><NavDropdown.Item onClick={handleClose}>SGGS Shabad Index</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/guru-granth-sahib/index/author"><NavDropdown.Item onClick={handleClose}>Author Index</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/guru-granth-sahib/sggs-world-language"><NavDropdown.Item onClick={handleClose}>SGGS in World Languages</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/guru-granth-sahib/search"><NavDropdown.Item onClick={handleClose}>Search Guru Granth Sahib</NavDropdown.Item></LinkContainer>
                  </NavDropdown>
                </li>
                <li>
                  <NavDropdown title="Amrit Keertan" id="navbarScrollingDropdown">
                    <LinkContainer to="/amrit-keertan/introduction"><NavDropdown.Item onClick={handleClose}>Introduction</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/amrit-keertan/page-by-page"><NavDropdown.Item onClick={handleClose}>Page by Page</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/amrit-keertan/index/chapter"><NavDropdown.Item onClick={handleClose}>Chapter Index</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/amrit-keertan/index/english"><NavDropdown.Item onClick={handleClose}>English Index</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/amrit-keertan/index/punjabi"><NavDropdown.Item onClick={handleClose}>Punjabi Index</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/amrit-keertan/index/hindi"><NavDropdown.Item onClick={handleClose}>Hindi Index</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/amrit-keertan/search"><NavDropdown.Item onClick={handleClose}>Search Amrit Keertan</NavDropdown.Item></LinkContainer>
                  </NavDropdown>
                </li>
                <li>
                  <NavDropdown title="Bhai Gurdas Vaaran" id="navbarScrollingDropdown">
                    <LinkContainer to="/bhai-gurdas-vaaran/introduction"><NavDropdown.Item onClick={handleClose}>Introduction</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/bhai-gurdas-vaaran/pauri-by-pauri"><NavDropdown.Item onClick={handleClose}>Pauri by Pauri</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/bhai-gurdas-vaaran/index/vaar"><NavDropdown.Item onClick={handleClose}>Vaar Index</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/bhai-gurdas-vaaran/search"><NavDropdown.Item onClick={handleClose}>Search Gurdas Vaaran </NavDropdown.Item></LinkContainer>
                  </NavDropdown>
                </li>
                <li>
                  <NavDropdown title="Dasam Granth Sahib" id="navbarScrollingDropdown">
                    <LinkContainer to="/dasam-granth/introduction"><NavDropdown.Item onClick={handleClose}>Introduction</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/dasam-granth/page-by-page"><NavDropdown.Item onClick={handleClose}>Page by Page</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/dasam-granth/index/chapter/pb"><NavDropdown.Item onClick={handleClose}>Chapter Index Punjabi</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/dasam-granth/index/chapter/en"><NavDropdown.Item onClick={handleClose}>Chapter Index English</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/dasam-granth/search"><NavDropdown.Item onClick={handleClose}>Search Dasam Granth</NavDropdown.Item></LinkContainer>
                  </NavDropdown>
                </li>
                <li>
                  <NavDropdown title="Kabit Savaiye" id="navbarScrollingDropdown">
                    <LinkContainer to="/kabit-savaiye/kabit-by-kabit"><NavDropdown.Item onClick={handleClose}>Kabit by Kabit</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/kabit-savaiye/search"><NavDropdown.Item onClick={handleClose}>Search Kabit Savaiye</NavDropdown.Item></LinkContainer>
                  </NavDropdown>
                </li>
                <li>
                  <NavDropdown title="Bhai Nand Lal" id="navbarScrollingDropdown">
                    <LinkContainer to="/bhai-nand-lal/ghazal"><NavDropdown.Item onClick={handleClose}>Divan-e-Goya : Ghazals</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/bhai-nand-lal/quatrains"><NavDropdown.Item onClick={handleClose}>Rubaayee</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/bhai-nand-lal/zindginama"><NavDropdown.Item onClick={handleClose}>Zindginama</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/bhai-nand-lal/ganjnama"><NavDropdown.Item onClick={handleClose}>Ganjnama</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/bhai-nand-lal/jot-bikas"><NavDropdown.Item onClick={handleClose}>Jot Bikas(Punjabi)</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/bhai-nand-lal/jot-bikas-persian"><NavDropdown.Item onClick={handleClose}>Jot Bikas(Persian)</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/bhai-nand-lal/rahitnama"><NavDropdown.Item onClick={handleClose}>Rahit Nama</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/bhai-nand-lal/tankahnama"><NavDropdown.Item onClick={handleClose}>Tankah Nama</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/bhai-nand-lal/search"><NavDropdown.Item onClick={handleClose}>Search Bhai Nand Lal</NavDropdown.Item></LinkContainer>
                  </NavDropdown>
                </li>
                <li>
                  <NavDropdown title="Sundar Gutka" id="navbarScrollingDropdown">
                    <LinkContainer to="/sundar-gutka"><NavDropdown.Item onClick={handleClose}>Introduction</NavDropdown.Item></LinkContainer>
                    <NavDropdown title="Nitnem" className='second-level' id="navbarScrollingDropdown" >
                      <LinkContainer to="/baanis/japji-sahib"><NavDropdown.Item onClick={handleClose}>Japji Sahib</NavDropdown.Item></LinkContainer>
                      <LinkContainer to="/baanis/jaap-sahib"><NavDropdown.Item onClick={handleClose}>Jaap Sahib</NavDropdown.Item></LinkContainer>
                      <LinkContainer to="/baanis/tvai-prasadh-savaiye"><NavDropdown.Item onClick={handleClose}>Tvai Prasadh Savaiye</NavDropdown.Item></LinkContainer>
                      <LinkContainer to="/baanis/chaupai-sahib"><NavDropdown.Item onClick={handleClose}>Chaupai Sahib</NavDropdown.Item></LinkContainer>
                      <LinkContainer to="/baanis/anand-sahib"><NavDropdown.Item onClick={handleClose}>Anand Sahib</NavDropdown.Item></LinkContainer>
                      <LinkContainer to="/baanis/rehraas-sahib"><NavDropdown.Item onClick={handleClose}>Rehraas Sahib</NavDropdown.Item></LinkContainer>
                      <LinkContainer to="/baanis/kirtan-sohila"><NavDropdown.Item onClick={handleClose}>Kirtan Sohila</NavDropdown.Item></LinkContainer>
                    </NavDropdown>
                    <NavDropdown title="Guru Granth Sahib" className='second-level' id="navbarScrollingDropdown" >
                      <LinkContainer to="/baanis/anand-sahib-bhog"><NavDropdown.Item onClick={handleClose}>Anand Sahib(Bhog)</NavDropdown.Item></LinkContainer>
                      <LinkContainer to="/baanis/aarti"><NavDropdown.Item onClick={handleClose}>Arti</NavDropdown.Item></LinkContainer>
                      <LinkContainer to="/baanis/laavan-anand-karaj"><NavDropdown.Item onClick={handleClose}>Laavan(Anand Karaj)</NavDropdown.Item></LinkContainer>
                      <LinkContainer to="/baanis/asa-ki-vaar"><NavDropdown.Item onClick={handleClose}>Asa Ki VAar</NavDropdown.Item></LinkContainer>
                      <LinkContainer to="/baanis/sukhmani-sahib"><NavDropdown.Item onClick={handleClose}>Sukhmani Sahib</NavDropdown.Item></LinkContainer>
                      <LinkContainer to="/baanis/sidh-gosht"><NavDropdown.Item onClick={handleClose}>Sidh Gosht</NavDropdown.Item></LinkContainer>
                      <LinkContainer to="/baanis/ramkali-sadh"><NavDropdown.Item onClick={handleClose}>Ramkali Sadh</NavDropdown.Item></LinkContainer>
                      <LinkContainer to="/baanis/dhakanee-oankaar"><NavDropdown.Item onClick={handleClose}>Dhakanee Oankaar</NavDropdown.Item></LinkContainer>
                      <LinkContainer to="/baanis/baavan-akhree"><NavDropdown.Item onClick={handleClose}>Baavan Akhree</NavDropdown.Item></LinkContainer>
                      <LinkContainer to="/baanis/shabad-hazare"><NavDropdown.Item onClick={handleClose}>Shabad Hazare</NavDropdown.Item></LinkContainer>
                      <LinkContainer to="/baanis/baarah-maaha"><NavDropdown.Item onClick={handleClose}>Baarah Maaha</NavDropdown.Item></LinkContainer>
                      <LinkContainer to="/baanis/sukhmana-sahib"><NavDropdown.Item onClick={handleClose}>Sukhmana Sahib</NavDropdown.Item></LinkContainer>
                      <LinkContainer to="/baanis/dukh-bhanjani-sahib"><NavDropdown.Item onClick={handleClose}>Dukh Bhanjani Sahib</NavDropdown.Item></LinkContainer>
                      <LinkContainer to="/baanis/salok-sehskritee"><NavDropdown.Item onClick={handleClose}>Salok Sehskritee</NavDropdown.Item></LinkContainer>
                      <LinkContainer to="/baanis/gathaa"><NavDropdown.Item onClick={handleClose}>Gathaa</NavDropdown.Item></LinkContainer>
                      <LinkContainer to="/baanis/phunhay-m5"><NavDropdown.Item onClick={handleClose}>Phunhay M:5</NavDropdown.Item></LinkContainer>
                      <LinkContainer to="/baanis/chaubolay-m5"><NavDropdown.Item onClick={handleClose}>Chaubolay M:5</NavDropdown.Item></LinkContainer>
                      <LinkContainer to="/baanis/salok-kabeer-ji"><NavDropdown.Item onClick={handleClose}>Salok Kabeer ji</NavDropdown.Item></LinkContainer>
                      <LinkContainer to="/baanis/salok-farid-ji"><NavDropdown.Item onClick={handleClose}>Salok Farid ji</NavDropdown.Item></LinkContainer>
                      <LinkContainer to="/baanis/savaiye-m1"><NavDropdown.Item onClick={handleClose}>Savaiye M:1</NavDropdown.Item></LinkContainer>
                      <LinkContainer to="/baanis/savaiye-m2"><NavDropdown.Item onClick={handleClose}>Savaiye M:2</NavDropdown.Item></LinkContainer>
                      <LinkContainer to="/baanis/savaiye-m3"><NavDropdown.Item onClick={handleClose}>Savaiye M:3</NavDropdown.Item></LinkContainer>
                      <LinkContainer to="/baanis/savaiye-m4"><NavDropdown.Item onClick={handleClose}>Savaiye M:4</NavDropdown.Item></LinkContainer>
                      <LinkContainer to="/baanis/savaiye-m5"><NavDropdown.Item onClick={handleClose}>Savaiye M:5</NavDropdown.Item></LinkContainer>
                      <LinkContainer to="/baanis/salok-m9"><NavDropdown.Item onClick={handleClose}>Salok M:9</NavDropdown.Item></LinkContainer>

                    </NavDropdown>
                    <NavDropdown title="Dasam granth" className='second-level' id="navbarScrollingDropdown" >
                      <LinkContainer to="/baanis/akal-ustati"><NavDropdown.Item onClick={handleClose}>Akal Ustati</NavDropdown.Item></LinkContainer>
                      <LinkContainer to="/baanis/bachitar-natak"><NavDropdown.Item onClick={handleClose}>Bachitar Natak</NavDropdown.Item></LinkContainer>
                      <LinkContainer to="/baanis/shabad-hazare-paatishahi-10"><NavDropdown.Item onClick={handleClose}>Shabad Hazare Paatishahi 10</NavDropdown.Item></LinkContainer>
                      <LinkContainer to="/baanis/tvai-prasaadh-savaiye-dheenan-kee"><NavDropdown.Item onClick={handleClose}>Tvai Prasaadh Savai'ye(Dheenan Kee)</NavDropdown.Item></LinkContainer>
                    </NavDropdown>
                  </NavDropdown>
                </li>
                <li>
                  <NavDropdown title="Resources" id="navbarScrollingDropdown">
                    <NavDropdown title="Hukumnama" className='second-level' id="navbarScrollingDropdown" >
                      <LinkContainer to="/hukumnama"><NavDropdown.Item onClick={handleClose}>Hukumnama Index</NavDropdown.Item></LinkContainer>
                      <LinkContainer to="/hukum"><NavDropdown.Item onClick={handleClose}>Sri Darbar Sahib</NavDropdown.Item></LinkContainer>
                      <LinkContainer to="/hukumnama/cyber"><NavDropdown.Item onClick={handleClose}>Cyber Hukumnama </NavDropdown.Item></LinkContainer>
                    </NavDropdown>
                    <LinkContainer to="/sgdv/isg"><NavDropdown.Item onClick={handleClose}>iSearchGurbani</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/mahan-kosh"><NavDropdown.Item onClick={handleClose}>GurShabad Ratanakar Mahankosh</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/guru-granth-kosh"><NavDropdown.Item onClick={handleClose}>Sri Guru Granth Kosh</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/sggs-kosh"><NavDropdown.Item onClick={handleClose}>SGGS Kosh</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/sri-nanak-prakash"><NavDropdown.Item onClick={handleClose}>Sri Nanak Prakash</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/sri-gur-pratap-suraj-granth"><NavDropdown.Item onClick={handleClose}>Sri Gur Pratap Suraj Granth</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/faridkot-wala-teeka"><NavDropdown.Item onClick={handleClose}>Faridkot Wala Teeka</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/sri-guru-granth-darpan"><NavDropdown.Item onClick={handleClose}>Sri Guru Granth Darpan</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/maansarovar"><NavDropdown.Item onClick={handleClose}>Maansarovar</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/gurus"><NavDropdown.Item onClick={handleClose}>Guru Sahiban</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/bhagats"><NavDropdown.Item onClick={handleClose}>Bhagat Sahiban</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/bhatts"><NavDropdown.Item onClick={handleClose}>Bhatt Sahiban</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/raags"><NavDropdown.Item onClick={handleClose}>Gurbani Raags</NavDropdown.Item></LinkContainer>
                  </NavDropdown>
                </li>
                <li><LinkContainer to="/preferences"><Nav.Link onClick={handleClose}>Site Preferences</Nav.Link></LinkContainer></li>
                <li><LinkContainer to="/feedback"><Nav.Link onClick={handleClose}>Feedback</Nav.Link></LinkContainer></li>
                <li><LinkContainer to="/site-map"><Nav.Link onClick={handleClose}>Sitemap</Nav.Link></LinkContainer></li>
                <li><LinkContainer to="/hukum"><Nav.Link onClick={handleClose}>Today's Hukumnama</Nav.Link></LinkContainer></li>

              </ul> */}
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
      <section className='sub-menu' >
        {/* <Container>
          <ul className='d-flex sub-menu-wrapper' >
            <li> <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer></li>
            <li> <LinkContainer to="/gurbani-search"><Nav.Link>Gurbani Search</Nav.Link></LinkContainer> </li>
            <li>
              <NavDropdown title="Guru Granth Sahib" id="navbarScrollingDropdown">
                <LinkContainer to="/guru-granth-sahib/introduction"><NavDropdown.Item>Introduction</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/guru-granth-sahib/ang-by-ang"><NavDropdown.Item>Ang by Ang</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/guru-granth-sahib/index/chapter"><NavDropdown.Item>SGGS Shabad Index</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/guru-granth-sahib/index/author"><NavDropdown.Item>Author Index</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/guru-granth-sahib/sggs-world-language"><NavDropdown.Item>SGGS in World Languages</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/guru-granth-sahib/search"><NavDropdown.Item>Search Guru Granth Sahib</NavDropdown.Item></LinkContainer>
              
              </NavDropdown>
            </li>
            <li>
              <NavDropdown title="Amrit Keertan" id="navbarScrollingDropdown">
                <LinkContainer to="/amrit-keertan/introduction"><NavDropdown.Item>Introduction</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/amrit-keertan/page-by-page"><NavDropdown.Item>Page by Page</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/amrit-keertan/index/chapter"><NavDropdown.Item>Chapter Index</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/amrit-keertan/index/english"><NavDropdown.Item>English Index</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/amrit-keertan/index/punjabi"><NavDropdown.Item>Punjabi Index</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/amrit-keertan/index/hindi"><NavDropdown.Item>Hindi Index</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/amrit-keertan/search"><NavDropdown.Item>Search Amrit Keertan</NavDropdown.Item></LinkContainer>
              </NavDropdown>
            </li>
            <li>
              <NavDropdown title="Bhai Gurdas Vaaran" id="navbarScrollingDropdown">
                <LinkContainer to="/bhai-gurdas-vaaran/introduction"><NavDropdown.Item>Introduction</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/bhai-gurdas-vaaran/pauri-by-pauri"><NavDropdown.Item>Pauri by Pauri</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/bhai-gurdas-vaaran/index/vaar"><NavDropdown.Item>Vaar Index</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/bhai-gurdas-vaaran/search"><NavDropdown.Item>Search Gurdas Vaaran </NavDropdown.Item></LinkContainer>
              </NavDropdown>
            </li>
            <li>
              <NavDropdown title="Dasam Granth Sahib" id="navbarScrollingDropdown">
                <LinkContainer to="/dasam-granth/introduction"><NavDropdown.Item>Introduction</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/dasam-granth/page-by-page"><NavDropdown.Item>Page by Page</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/dasam-granth/index/chapter/pb"><NavDropdown.Item>Chapter Index Punjabi</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/dasam-granth/index/chapter/en"><NavDropdown.Item>Chapter Index English</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/dasam-granth/search"><NavDropdown.Item>Search Dasam Granth</NavDropdown.Item></LinkContainer>
              </NavDropdown>
            </li>
            <li>
              <NavDropdown title="Kabit Savaiye" id="navbarScrollingDropdown">
                <LinkContainer to="/kabit-savaiye/kabit-by-kabit"><NavDropdown.Item>Kabit by Kabit</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/kabit-savaiye/search"><NavDropdown.Item>Search Kabit Savaiye</NavDropdown.Item></LinkContainer>
              </NavDropdown>
            </li>
            <li>
              <NavDropdown title="Bhai Nand Lal" id="navbarScrollingDropdown">
                <LinkContainer to="/bhai-nand-lal/ghazal"><NavDropdown.Item>Divan-e-Goya : Ghazals</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/bhai-nand-lal/quatrains"><NavDropdown.Item>Rubaayee</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/bhai-nand-lal/zindginama"><NavDropdown.Item>Zindginama</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/bhai-nand-lal/ganjnama"><NavDropdown.Item>Ganjnama</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/bhai-nand-lal/jot-bikas"><NavDropdown.Item>Jot Bikas(Punjabi)</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/bhai-nand-lal/jot-bikas-persian"><NavDropdown.Item>Jot Bikas(Persian)</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/bhai-nand-lal/rahitnama"><NavDropdown.Item>Rahit Nama</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/bhai-nand-lal/tankahnama"><NavDropdown.Item>Tankah Nama</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/bhai-nand-lal/search"><NavDropdown.Item>Search Bhai Nand Lal</NavDropdown.Item></LinkContainer>
              </NavDropdown>
            </li>
            <li>
              <NavDropdown className='res-customs' title="Sundar Gutka" id="navbarScrollingDropdown">
                <LinkContainer to="/sundar-gutka"><NavDropdown.Item>Introduction</NavDropdown.Item></LinkContainer>
                <NavDropdown title="Nitnem" className='second-level' id="navbarScrollingDropdown" >
                  <LinkContainer to="/baanis/japji-sahib"><NavDropdown.Item>Japji Sahib</NavDropdown.Item></LinkContainer>
                  <LinkContainer to="/baanis/jaap-sahib"><NavDropdown.Item>Jaap Sahib</NavDropdown.Item></LinkContainer>
                  <LinkContainer to="/baanis/tvai-prasadh-savaiye"><NavDropdown.Item>Tvai Prasadh Savaiye</NavDropdown.Item></LinkContainer>
                  <LinkContainer to="/baanis/chaupai-sahib"><NavDropdown.Item>Chaupai Sahib</NavDropdown.Item></LinkContainer>
                  <LinkContainer to="/baanis/anand-sahib"><NavDropdown.Item>Anand Sahib</NavDropdown.Item></LinkContainer>
                  <LinkContainer to="/baanis/rehraas-sahib"><NavDropdown.Item>Rehraas Sahib</NavDropdown.Item></LinkContainer>
                  <LinkContainer to="/baanis/kirtan-sohila"><NavDropdown.Item>Kirtan Sohila</NavDropdown.Item></LinkContainer>
                </NavDropdown>
                <NavDropdown title="Guru Granth Sahib" className='second-level' id="navbarScrollingDropdown" >
                  <LinkContainer to="/baanis/anand-sahib-bhog"><NavDropdown.Item>Anand Sahib(Bhog)</NavDropdown.Item></LinkContainer>
                  <LinkContainer to="/baanis/aarti"><NavDropdown.Item>Arti</NavDropdown.Item></LinkContainer>
                  <LinkContainer to="/baanis/laavan-anand-karaj"><NavDropdown.Item>Laavan(Anand Karaj)</NavDropdown.Item></LinkContainer>
                  <LinkContainer to="/baanis/asa-ki-vaar"><NavDropdown.Item>Asa Ki VAar</NavDropdown.Item></LinkContainer>
                  <LinkContainer to="/baanis/sukhmani-sahib"><NavDropdown.Item>Sukhmani Sahib</NavDropdown.Item></LinkContainer>
                  <LinkContainer to="/baanis/sidh-gosht"><NavDropdown.Item>Sidh Gosht</NavDropdown.Item></LinkContainer>
                  <LinkContainer to="/baanis/ramkali-sadh"><NavDropdown.Item>Ramkali Sadh</NavDropdown.Item></LinkContainer>
                  <LinkContainer to="/baanis/dhakanee-oankaar"><NavDropdown.Item>Dhakanee Oankaar</NavDropdown.Item></LinkContainer>
                  <LinkContainer to="/baanis/baavan-akhree"><NavDropdown.Item>Baavan Akhree</NavDropdown.Item></LinkContainer>
                  <LinkContainer to="/baanis/shabad-hazare"><NavDropdown.Item>Shabad Hazare</NavDropdown.Item></LinkContainer>
                  <LinkContainer to="/baanis/baarah-maaha"><NavDropdown.Item>Baarah Maaha</NavDropdown.Item></LinkContainer>
                  <LinkContainer to="/baanis/sukhmana-sahib"><NavDropdown.Item>Sukhmana Sahib</NavDropdown.Item></LinkContainer>
                  <LinkContainer to="/baanis/dukh-bhanjani-sahib"><NavDropdown.Item>Dukh Bhanjani Sahib</NavDropdown.Item></LinkContainer>
                  <LinkContainer to="/baanis/salok-sehskritee"><NavDropdown.Item>Salok Sehskritee</NavDropdown.Item></LinkContainer>
                  <LinkContainer to="/baanis/gathaa"><NavDropdown.Item>Gathaa</NavDropdown.Item></LinkContainer>
                  <LinkContainer to="/baanis/phunhay-m5"><NavDropdown.Item>Phunhay M:5</NavDropdown.Item></LinkContainer>
                  <LinkContainer to="/baanis/chaubolay-m5"><NavDropdown.Item>Chaubolay M:5</NavDropdown.Item></LinkContainer>
                  <LinkContainer to="/baanis/salok-kabeer-ji"><NavDropdown.Item>Salok Kabeer ji</NavDropdown.Item></LinkContainer>
                  <LinkContainer to="/baanis/salok-farid-ji"><NavDropdown.Item>Salok Farid ji</NavDropdown.Item></LinkContainer>
                  <LinkContainer to="/baanis/savaiye-m1"><NavDropdown.Item>Savaiye M:1</NavDropdown.Item></LinkContainer>
                  <LinkContainer to="/baanis/savaiye-m2"><NavDropdown.Item>Savaiye M:2</NavDropdown.Item></LinkContainer>
                  <LinkContainer to="/baanis/savaiye-m3"><NavDropdown.Item>Savaiye M:3</NavDropdown.Item></LinkContainer>
                  <LinkContainer to="/baanis/savaiye-m4"><NavDropdown.Item>Savaiye M:4</NavDropdown.Item></LinkContainer>
                  <LinkContainer to="/baanis/savaiye-m5"><NavDropdown.Item>Savaiye M:5</NavDropdown.Item></LinkContainer>
                  <LinkContainer to="/baanis/salok-m9"><NavDropdown.Item>Salok M:9</NavDropdown.Item></LinkContainer>

                </NavDropdown>
                <NavDropdown title="Dasam granth" className='second-level' id="navbarScrollingDropdown" >
                  <LinkContainer to="/baanis/akal-ustati"><NavDropdown.Item>Akal Ustati</NavDropdown.Item></LinkContainer>
                  <LinkContainer to="/baanis/bachitar-natak"><NavDropdown.Item>Bachitar Natak</NavDropdown.Item></LinkContainer>
                  <LinkContainer to="/baanis/shabad-hazare-paatishahi-10"><NavDropdown.Item>Shabad Hazare Paatishahi 10</NavDropdown.Item></LinkContainer>
                  <LinkContainer to="/baanis/tvai-prasaadh-savaiye-dheenan-kee"><NavDropdown.Item>Tvai Prasaadh Savai'ye(Dheenan Kee)</NavDropdown.Item></LinkContainer>
                </NavDropdown>
              </NavDropdown>
            </li>
            <li>
              <NavDropdown className='res-customs' title="Resources" id="navbarScrollingDropdown">
                <NavDropdown title="Hukumnama" className='second-level' id="navbarScrollingDropdown" >
                  <LinkContainer to="/hukumnama"><NavDropdown.Item>Hukumnama Index</NavDropdown.Item></LinkContainer>
                  <LinkContainer to="/hukum"><NavDropdown.Item>Sri Darbar Sahib</NavDropdown.Item></LinkContainer>
                  <LinkContainer to="/hukumnama/cyber"><NavDropdown.Item>Cyber Hukumnama </NavDropdown.Item></LinkContainer>
                </NavDropdown>
                <LinkContainer to="/sgdv/isg"><NavDropdown.Item>iSearchGurbani</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/mahan-kosh"><NavDropdown.Item>GurShabad Ratanakar Mahankosh</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/guru-granth-kosh"><NavDropdown.Item>Sri Guru Granth Kosh</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/sggs-kosh"><NavDropdown.Item>SGGS Kosh</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/sri-nanak-prakash"><NavDropdown.Item>Sri Nanak Prakash</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/sri-gur-pratap-suraj-granth"><NavDropdown.Item>Sri Gur Pratap Suraj Granth</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/faridkot-wala-teeka"><NavDropdown.Item>Faridkot Wala Teeka</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/sri-guru-granth-darpan"><NavDropdown.Item>Sri Guru Granth Darpan</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/maansarovar"><NavDropdown.Item>Maansarovar</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/gurus"><NavDropdown.Item>Guru Sahiban</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/bhagats"><NavDropdown.Item>Bhagat Sahiban</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/bhatts"><NavDropdown.Item>Bhatt Sahiban</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/raags"><NavDropdown.Item>Gurbani Raags</NavDropdown.Item></LinkContainer>
              </NavDropdown>
            </li>
          </ul>
          <div className='only-mobile'>
            <Link to="/"><h5>Home</h5></Link>
            <Button variant="menu-2" onClick={handleShow}><i className="bi bi-list"></i></Button>


          </div>
        </Container> */}
        <Container>
          <ul className='d-flex sub-menu-wrapper' >
            {/* <li> <Link href="/"><Nav.Link>Home</Nav.Link></Link></li> */}
            <li>
              <Nav.Link as={Link} href="/">
                Home
              </Nav.Link>
            </li>
            <li>
              <Nav.Link as={Link} href="/gurbaniSearch">
                Gurbani Search
              </Nav.Link>
            </li>
            {/* Guru Granth Sahib DropDown  */}
            <li>
              <NavDropdown title="Guru Granth Sahib" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} href="/GGS">
                  Introduction
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/GGS/angByAng">
                  Ang by Ang
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/GGS/sggsIndex">
                  SGGS Shabad Index
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/GGS/authorIndex">
                  Author Index
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/GGS/sggsWorldLanguage">
                  SGGS in World Languages
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/GGS/ggsAdvanceSearch">
                  Search Guru Granth Sahib
                </NavDropdown.Item>
              </NavDropdown>
            </li>
            <li>
            {/* Amrit Keertan DropDown  */}
              <NavDropdown title="Amrit Keertan" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} href="/AK">
                  Introduction
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/AK/pageByPage">
                  Page by Page
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/AK/chapterIndex ">
                  Chapter Index
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/AK/englishIndex">
                  English Index
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/AK/punjabiIndex">
                  Punjabi Index
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/AK/hindiIndex">
                  Hindi Index
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/AK/akSearch">
                  Search Amrit Keertan
                </NavDropdown.Item>
              </NavDropdown>
            </li>
            {/* Bhai Gurdas Vaaran dropdowns  */}
            <li>
              <NavDropdown title="Bhai Gurdas Vaaran" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} href="/BGV">
                  Introduction
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/BGV/pauriByPauri">
                  Pauri by Pauri
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/BGV/vaarIndex">
                  Vaar Index
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/BGV/BgvSearch">
                  Search Gurdas Vaaran
                </NavDropdown.Item>
              </NavDropdown>
            </li>
            {/* Dasam Granth Sahib DropDown  */}
            <li>
              <NavDropdown title="Dasam Granth Sahib" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} href="/DGS/">
                  Introduction
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/DGS/dgPageByPage">
                  Page by Page
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/DGS/dgChapterIndexPB">
                  Chapter Index Punjabi
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/DGS/dgChapterIndexEN">
                  Chapter Index English
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/DGS/dgsSearch">
                  Search Dasam Granth
                </NavDropdown.Item>
              </NavDropdown>
            </li>
            {/* Kabit Savaiye dropdown  */}
            <li>
              <NavDropdown title="Kabit Savaiye" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} href="/KS/kabitByKabit">
                  Kabit by Kabit
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/KS/ksSearch">
                  Search Kabit Savaiye
                </NavDropdown.Item>
              </NavDropdown>
            </li>
            {/* Bhai Nand Lal dropdown  */}
            <li>
              <NavDropdown title="Bhai Nand Lal" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} href="/BNL/ghazals">
                  Divan-e-Goya : Ghazals
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/bhai-nand-lal/quatrains">
                  Rubaayee
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/bhai-nand-lal/zindginama">
                  Zindginama
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/bhai-nand-lal/ganjnama">
                  Ganjnama
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/bhai-nand-lal/jot-bikas">
                  Jot Bikas(Punjabi)
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/bhai-nand-lal/jot-bikas-persian">
                  Jot Bikas(Persian)
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/bhai-nand-lal/rahitnama">
                  Rahit Nama
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/bhai-nand-lal/tankahnama">
                  Tankah Nama
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/bhai-nand-lal/search">
                  Search Bhai Nand Lal
                </NavDropdown.Item>
              </NavDropdown>
            </li>
            <li>
              <NavDropdown className="res-cushrefms" title="Sundar Gutka" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} href="/sundar-gutka">
                  Introduction
                </NavDropdown.Item>

                <NavDropdown title="Nitnem" className="second-level" id="navbarScrollingDropdown">
                  <NavDropdown.Item as={Link} href="/baanis/japji-sahib">Japji Sahib</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/baanis/jaap-sahib">Jaap Sahib</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/baanis/tvai-prasadh-savaiye">Tvai Prasadh Savaiye</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/baanis/chaupai-sahib">Chaupai Sahib</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/baanis/anand-sahib">Anand Sahib</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/baanis/rehraas-sahib">Rehraas Sahib</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/baanis/kirtan-sohila">Kirtan Sohila</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Guru Granth Sahib" className="second-level" id="navbarScrollingDropdown">
                  <NavDropdown.Item as={Link} href="/baanis/anand-sahib-bhog">Anand Sahib(Bhog)</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/baanis/aarti">Arti</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/baanis/laavan-anand-karaj">Laavan(Anand Karaj)</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/baanis/asa-ki-vaar">Asa Ki Vaar</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/baanis/sukhmani-sahib">Sukhmani Sahib</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/baanis/sidh-gosht">Sidh Gosht</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/baanis/ramkali-sadh">Ramkali Sadh</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/baanis/dhakanee-oankaar">Dhakanee Oankaar</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/baanis/baavan-akhree">Baavan Akhree</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/baanis/shabad-hazare">Shabad Hazare</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/baanis/baarah-maaha">Baarah Maaha</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/baanis/sukhmana-sahib">Sukhmana Sahib</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/baanis/dukh-bhanjani-sahib">Dukh Bhanjani Sahib</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/baanis/salok-sehskritee">Salok Sehskritee</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/baanis/gathaa">Gathaa</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/baanis/phunhay-m5">Phunhay M:5</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/baanis/chaubolay-m5">Chaubolay M:5</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/baanis/salok-kabeer-ji">Salok Kabeer Ji</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/baanis/salok-farid-ji">Salok Farid Ji</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/baanis/savaiye-m1">Savaiye M:1</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/baanis/savaiye-m2">Savaiye M:2</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/baanis/savaiye-m3">Savaiye M:3</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/baanis/savaiye-m4">Savaiye M:4</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/baanis/savaiye-m5">Savaiye M:5</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/baanis/salok-m9">Salok M:9</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Dasam Granth" className="second-level" id="navbarScrollingDropdown">
                  <NavDropdown.Item as={Link} href="/baanis/akal-ustati">Akal Ustati</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/baanis/bachitar-natak">Bachitar Natak</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/baanis/shabad-hazare-paatishahi-10">Shabad Hazare Paatishahi 10</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/baanis/tvai-prasaadh-savaiye-dheenan-kee">Tvai Prasaadh Savai'ye (Dheenan Kee)</NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>

            </li>
            <li>
              <NavDropdown className="res-customs" title="Resources" id="navbarScrollingDropdown">
                <NavDropdown title="Hukumnama" className="second-level" id="navbarScrollingDropdown">
                  <NavDropdown.Item as={Link} href="/hukumnama">Hukumnama Index</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/hukum">Sri Darbar Sahib</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/hukumnama/cyber">Cyber Hukumnama</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown.Item as={Link} href="/sgdv/isg">iSearchGurbani</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/mahan-kosh">GurShabad Ratanakar Mahankosh</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/guru-granth-kosh">Sri Guru Granth Kosh</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/sggs-kosh">SGGS Kosh</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/sri-nanak-prakash">Sri Nanak Prakash</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/sri-gur-pratap-suraj-granth">Sri Gur Pratap Suraj Granth</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/faridkot-wala-teeka">Faridkot Wala Teeka</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/sri-guru-granth-darpan">Sri Guru Granth Darpan</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/maansarovar">Maansarovar</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/gurus">Guru Sahiban</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/bhagats">Bhagat Sahiban</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/bhatts">Bhatt Sahiban</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/raags">Gurbani Raags</NavDropdown.Item>
              </NavDropdown>
            </li>
          </ul>
          <div className='only-mobile'>
            <Link href="/"><h5>Home</h5></Link>
            <Button variant="menu-2" onClick={handleShow}><i className="bi bi-list"></i></Button>


          </div>
        </Container>
      </section>
      <Modal show={share} onHide={handleShareClose}>
        <Modal.Header closeButton>
          <Modal.Title>Share</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='socia-share'>
            <ul>
              <li>
                <Link className='soc-icon' onClick={() => handleShareModal('facebook')}>
                  <Image src={facebook} className="img-fluid donate" alt="Responsive image" />
                </Link>
              </li>
              <li>
                <Link className='soc-icon' onClick={() => handleShareModal('twitter')}>
                  <Image src={twitter} className="img-fluid donate" alt="Responsive image" />
                </Link>
              </li>
              <li>
                <Link className='soc-icon' onClick={() => handleShareModal('telegram')}>
                  <Image src={telegram} className="img-fluid donate" alt="Responsive image" />
                </Link>
              </li>
              <li>
                <Link className='soc-icon' onClick={() => handleShareModal('whatsapp')}>
                  <Image src={whatsapp} className="img-fluid donate" alt="Responsive image" />
                </Link>
              </li>
              <li>
                <Link className='soc-icon' onClick={() => handleShareModal('mail')}>
                  <Image src={mail} className="img-fluid donate" alt="Responsive image" />
                </Link>
              </li>
            </ul>
          </div>

        </Modal.Body>
      </Modal>
      <Modal className='reg-now' show={isRegister} onHide={handleRegisterClose}>
        <Modal.Header className='p-4' closeButton>
        </Modal.Header>
        <Modal.Body className='p-4'>
          <div className='login-logo-wr'>
            <h1 className='text-dark' >Register</h1>
          </div>
          <div className='login-logo-wr'>
            <Image src={logot} className="img-fluid login-logo" alt="Responsive image" />
          </div>
          <div className='register-form'>
            <FloatingLabel
              controlId="floatingInput"
              label="First Name"
              className="mb-2">
              <Form.Control type="email" placeholder="name@example.com"
                required
                value={firstname}
                onChange={e => setFirstName(e.target.value)} />
            </FloatingLabel>
            {firstname === "" && error ? (
              <Validation message={'Please enter first name'} />
            ) : null}
            <FloatingLabel
              controlId="floatingInput"
              label="Last Name"
              className="mb-2">
              <Form.Control type="email" placeholder="name@example.com"
                value={lastname}
                onChange={e => setLastName(e.target.value)} />
            </FloatingLabel>
            {lastname === "" && error ? (
              <Validation message={'Please enter last name'} />
            ) : null}
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-2"
            >
              <Form.Control type="email" placeholder="name@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onBlur={handleEmail} />
            </FloatingLabel>
            {email === '' && error ? (
              <Validation message={'Please enter  email'} />
            ) : null}
            {email !== "" && emailError ? (
              <Validation message={'Please enter valid email'} />
            ) : null}
            <FloatingLabel controlId="floatingPassword" className='mb-2' label="Password">
              <Form.Control type="password" placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)} />
              <button className='p-view' >
                {/* <i className="bi bi-eye"></i> */}
                {/* <i className="bi bi-eye-slash"></i> */}
              </button>
            </FloatingLabel>
            {password === "" && error ? (
              <Validation message={'Please enter password'} />
            ) : null}
            <FloatingLabel controlId="floatingPassword" className='' label="Confirm Password">
              <Form.Control type="password" placeholder="Password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)} />
              <button className='p-view' >
                {/* <i className="bi bi-eye"></i> */}
                {/* <i className="bi bi-eye-slash"></i> */}
              </button>
            </FloatingLabel>
            {confirmPassword === "" && error ? (
              <Validation message={'Please enter confirm password'} />
            ) : null}
            {confirmPassword !== "" && password !== '' && pError ? (
              <Validation message={'Password and Confirm Password must be same'} />
            ) : null}

            <button className='btn-primary login w-100 mt-4' onClick={(e) => { e.preventDefault(); handleRegister() }} >Register Now</button>

            {/* <h6 className='text-dark text-center mt-4 ' >Register with</h6>
            <div className='d-flex justify-content-center mt-4'>
              <Link className='soc-icon' onClick={() => handleShareModal('facebook')}>
                <Image src={facebook} className="img-fluid donate" alt="Responsive image" />
              </Link>
            </div> */}
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={isLogin} onHide={handleLoginClose}>
        <Modal.Header closeButton>
        </Modal.Header>

        <Modal.Body className='p-5'>
          <div className='login-logo-wr'>
            <h1 className='text-dark' >Login</h1>
          </div>
          <div className='login-logo-wr'>
            <Image src={logot} className="img-fluid login-logo" alt="Responsive image" />
          </div>
          <div className='register-form'>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-2"
            >
              <Form.Control type="email" placeholder="name@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)} />
            </FloatingLabel>
            {email === "" && error ? (
              <Validation message={'Please enter password'} />
            ) : null}
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control type="password" placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)} />
              <button className='p-view' >
                {/* <i className="bi bi-eye"></i> */}
                {/* <i className="bi bi-eye-slash"></i> */}
              </button>
            </FloatingLabel>
            {password === "" && error ? (
              <Validation message={'Please enter password'} />
            ) : null}
            {/*  <label className='my-3 d-flex'> < a href='#'>Forgot password?</a></label> */}
            <button className='btn-primary login w-100 mt-4' onClick={(e) => { e.preventDefault(); handleLogin() }}>Login Now</button>

            {/*  <h6 className='text-dark text-center mt-4 ' >Login with</h6>
            <div className='d-flex justify-content-center mt-4'>
              <Link className='soc-icon' onClick={() => handleShareModal('facebook')}>
                <Image src={facebook} className="img-fluid donate" alt="Responsive image" />
              </Link>
            </div> */}
          </div>
        </Modal.Body>
        {/* 
   <Modal.footer> */}

        {/* 
   </Modal.footer>
   */}
      </Modal>

    </header>




  )
}

export default Header
