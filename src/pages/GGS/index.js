// import '../../assets/css/dashboard.css';
// import '../../assets/css/intro.css';
import React, { useEffect, useState } from 'react';
// import { useNavigate, useOutletContext } from "react-router";
// import { Link, useLocation } from "react-router-dom";
import Axios from 'axios';
import { API } from "../../config/api";
import { ApiHelper } from '../../helpers/ApiHelper';
//import imgs from './assets/img/content/ggs_01.jpg'
import introbannar from '../../assets/img/intro-bannar.webp';
import Spinner from '../../components/Spinner';
// import ggsImage from '../../assets/img/content/ggs_01.jpg';
import ggsImage from '../../../public/images/ggs_01.jpg';
import {Helmet} from "react-helmet";
import HelmetWrapper from '../../components/CommonHelmet';

function GgsIntroduction() {
    const [introData, setIntroData] = useState([]);
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        getIntro()
    }, [])
    const getIntro = async () => {
        await Axios.get('https://backend.searchgurbani.com/api/meta?url=guru-granth-sahib/introduction')
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
                title={`Introduction to Sri Guru Granth Sahib Ji -: ਸ਼੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ -: searchgurbani.com`}
                description={`The Guru Granth Sahib is a sacred scripture and is the Eternal Guru of the Sikhs. Because it is a scripture suitable of a universal religion, many world class philosophers and holy men consider it a unique treasure`}
                keywords="Guru, Granth, Nanak, Angad, Arjan,sikh, Sikhism, Raag,ang,scripture,gurbani"
                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                url={window.location.href}
            /> */}
            <section className='section-1 intro-bg'>
                {/* <div className=" justify-content-md-center align-items-center">
                    <div className='banner-img'>
                        <img src={introbannar} className="img-fluid" alt="Responsive image" />
                    </div>
                </div> */}
                <div className="container">
                    <div className="second-container intro-bkg">
                        <div className="row ">
                            <div className="col-lg-12">
                                <div className='container align-items-center d-flex justify-content-center advance-search intro-border mt-5'>
                                    <div className="px-1 py-1 align-middle mt-5 intro-p">
                                    {/* <h4 className='intro-heading  mt-5'>Boundless scripture of guru granth sahib</h4> */}                                    
                                    {introData ?
                                        < div
                                        dangerouslySetInnerHTML={{
                                            __html: introData.html
                                                ?.replace('../../../public/images/ggs_01.jpg"', `src="${ggsImage}`)
                                                .replace('<h2>BOUNDLESS SCRIPTURE OF GURU GRANTH SAHIB</h2>', '<h2 style="font-size: 30px;line-height: 40.98px; font-weight: 700;font-family: Kaisei Decol; color: rgba(51, 51, 51, 1) !important;">BOUNDLESS SCRIPTURE OF GURU GRANTH SAHIB</h2>')
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

export default GgsIntroduction