import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from "react-router";
import { Link, useLocation } from "react-router-dom";
// import '../../assets/css/dashboard.css';
// import '../../assets/css/intro.css';
import Axios from 'axios';
import { API } from "../../config/api";
import { ApiHelper } from '../../helpers/ApiHelper';
//import imgs from './assets/img/content/ggs_01.jpg'
import introbannar from '../../assets/img/intro-bannar.webp';
import Spinner from '../../components/Spinner';
import jathaImage from '../../assets/img/content/jatha.jpg';
import tabalaImage from '../../assets/img/content/tabla.jpg';
import raagiImage from '../../assets/img/content/raagi.gif';
import {Helmet} from "react-helmet";
import HelmetWrapper from '../../components/CommonHelmet';

function AkIntroduction() {
    const [introData, setIntroData] = useState([]);
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        getIntro()
    }, [])
    const getIntro = async () => {
        await Axios.get('https://backend.searchgurbani.com/api/meta?url=amrit-keertan/introduction')
            .then((resData) => {
                console.log('INTRO', resData.data.data);
                setIntroData(resData.data.data)

            })
            .catch((err) => {
                console.log(err);
            })
    }
    
    return (

        <div>
            {/* <HelmetWrapper
                title={`Introduction to Amrit Kirtan Gutka-: ਅੰਮ੍ਰਿਤ ਕੀਰਤਨ ਗੁਟਕਾ -: searchgurbani.com`}
                description={`Sikhism has a venerable tradition of Shabad-Kirtan (Chanting of Hymns in congregational gatherings. Down the centuries an uninterrupted flow of Kirtan has been going on the abodes of the Guru, i.e. Gurdwaras.`}
                keywords="Gurbani Kirtan,amrit Keertan, Gurbani, Shabad Keertan,  Dasam Granth, Guru Granth, Granth, Kabit, Bhai Gurdas, Vaaran, Varan"
                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                url={window.location.href}
            /> */}
        <section className='section-1 intro-bg'>
            {/* <div className=" justify-content-md-center align-items-center">
                <div className='banner-img'>
                    <img src={introbannar} class="img-fluid" alt="Responsive image" />
                </div>
            </div> */}


            <div className="container">
                <div className="second-container intro-bkg">
                    <div className="row ">
                        <div class="col-lg-12">
                        <div className='container align-items-center d-flex justify-content-center advance-search intro-border mt-5'>
                            <div class="px-1 py-1 align-middle mt-5 bgv-intro">
                                {/* <h4 className='intro-heading  mt-5'>Boundless scripture of guru granth sahib</h4> */}                                    
                                {introData ?
                                    < div
                                    dangerouslySetInnerHTML={{
                                        __html: introData.html
                                        ?.replace('<h3 class=\"no-top\" style=\"color:#641214;\">Amrit Kirtan</h3>', '<h2 style="margin-bottom: 25px;font-size: 20px;line-height: 1.1px; font-weight: 500;font-family: Kaisei Decol; color:#641214!important;">Amrit Kirtan</h2>')
                                        .replace('src=\"assets/img/content/jatha.jpg\"',`src="${jathaImage}"`)
                                        .replace('src=\"assets/img/content/raagi.gif\"',`src="${raagiImage}"`)
                                        .replace('src=\"assets/img/content/tabla.jpg\"', `src="${tabalaImage}"`)
                                    }} 
                                    /> : null}
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

export default AkIntroduction