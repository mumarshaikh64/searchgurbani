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
import {Helmet} from "react-helmet";
import HelmetWrapper from '../../components/CommonHelmet';

function DgsIntroduction() {
    const [introData, setIntroData] = useState([]);
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        getIntro()
    }, [])
    const getIntro = async () => {
        await Axios.get('https://backend.searchgurbani.com/api/meta?url=dasam-granth/introduction')
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
                title={`Introduction to Sri Dasam Granth Sahib : ਸ੍ਰੀ ਦਸਮ ਗ੍ਰੰਥ ਸਾਹਿਬ -: searchgurbani.com`}
                description={`The complete literary works of Guru Gobind Singh Ji are compiled in the Dasam Granth. These were put together in the present form some time after the guru left this worldly form by Bhai Mani Singh and some other leading sikhs who were always present in the darbar`}
                keywords="Dasam, Granth, Jaap, Akaal, Ustat, Bacchitar, Zafarnama"
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
                     
                                <div class="px-1 py-1 align-middle mt-5 dsg-intro bgv-intro">
                                    {/* <h4 className='intro-heading  mt-5'>Boundless scripture of guru granth sahib</h4> */}                                    
                                    {introData ?
                                        < div className=''
                                        dangerouslySetInnerHTML={{
                                            __html: introData.html
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

export default DgsIntroduction