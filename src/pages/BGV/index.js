// import '../../assets/css/dashboard.css';
// import '../../assets/css/intro.css';
// import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from "react-router";
import Axios from 'axios';
import { API } from "../../config/api";
import { ApiHelper } from '../../helpers/ApiHelper';
//import imgs from './assets/img/content/ggs_01.jpg'
import introbannar from '../../assets/img/intro-bannar.webp';
import Spinner from '../../components/Spinner';
import bgurdasImage from '../../assets/img/content/bgurdas.jpg';
import {Helmet} from "react-helmet";
import HelmetWrapper from '../../components/CommonHelmet';


function BgvIntroduction() {
    const [introData, setIntroData] = useState([]);
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        getIntro()
    }, [])
    const getIntro = async () => {
        await Axios.get('https://backend.searchgurbani.com/api/meta?url=bhai-gurdas-vaaran/introduction')
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
                title={`Introduction to Bhai Gurdas-: ਵਾਰਾਂ ਭਾਈ ਗੁਰਦਾਸ  -: searchgurbani.com`}
                description={`Bhai Gurdas is considered the first interpreter of Gurbani. His writings are considered key to understanding the Sikh holy scriptures.`}
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
                                            ?.replace('<h3 class=\"no-top bold\" style=\"color:#641214;\">Life Bhai Gurdas Ji</h3>','<h2 style="margin-bottom: 25px;font-size: 20px;line-height: 1.1px; font-weight: 700;font-family: Kaisei Decol; color:#641214!important;">Life Bhai Gurdas Ji</h2>')
                                            .replace('src=\"assets/img/content/bgurdas.jpg\" ',`src="${bgurdasImage}"` )
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

export default BgvIntroduction