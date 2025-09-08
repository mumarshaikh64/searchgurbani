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

function Taal() {
    const [raag, setRaag] = useState([]);
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        getRaags()
    }, [])
    const getRaags = async () => {
        await Axios.get('https://backend.searchgurbani.com/api/meta?url=taal')
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
                title={`Taals in Gurmat Sangeet -: searchgurbani.com`}
                description={`Tal, (variously transliterated as &quot;tala&quot;, &quot;taal&quot; or &quot;taala&quot;) is the Indian system of rhythm.`}
                keywords="tali, khali, vibhag, matra, bol, theka, lay, sam, avartan, taal dadra, taal rupak, taal teen"
                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                url={window.location.href}
            />
            <section className='section-1'>
                {/* <div className=" justify-content-md-center align-items-center">
                    <div className='banner-img'>
                        <img src={introbannar} class="img-fluid" alt="Responsive image" />
                    </div>
                </div> */}
                <div className='Gurbani-Raags p-4'>
                    <div className='container'>
                        <div className="second-container intro-bkg">
                            <div className="row ">
                                <div class="col-lg-12">
                                    <div className='container align-items-center d-flex justify-content-center advance-search intro-border mt-5'>
                                        <div class="px-1 py-1 align-middle  bgv-intro">
                                            <h1 class="inner-heading mb-4"></h1>
                                            <div className="row ">

                                                <div class="col-lg-12">
                                                    <h2 className='inner-heading mb-4 raags-heading' >Taals in Gurmat Sangeet</h2>
                                                    <hr></hr>
                                                    <div class="px-1 py-1 align-middle mt-0 akl-intro taal-custom rag-common rewamp_wrap taal-wrapp">
                                                        {/* <h4 className='intro-heading  mt-5'>Boundless scripture of guru granth sahib</h4> */}
                                                        {raag ?
                                                            < div
                                                                dangerouslySetInnerHTML={{
                                                                    __html: raag.html
                                                                }}
                                                            /> : null}
                                                    </div>
                                                </div>
                                            </div>
                                        </div></div></div></div></div>
                    </div>
                </div>

                {loader && <Spinner />}
            </section>

        </div>
    )
}

export default Taal