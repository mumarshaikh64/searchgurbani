import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from "react-router";
import { Link, useLocation } from "react-router-dom";
import '../../../assets/css/dashboard.css';
import '../../../assets/css/intro.css';
import '../../../assets/css/nanak.css';
import '../../../assets/css/guru-amar-das.css';
import Axios from 'axios';
import nanak from '../../../assets/img/nanak.jpg';
import { API } from "../../../config/api";
import { ApiHelper } from '../../../helpers/ApiHelper';
//import imgs from './assets/img/content/ggs_01.jpg'
import introbannar from '../../../assets/img/intro-bannar.webp';
import Spinner from '../../../components/Spinner';
import { Helmet } from 'react-helmet';
import HelmetWrapper from '../../../components/CommonHelmet';

function Mali() {
    const [datas, setDatas] = useState([]);
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false);
    const [audioList, setAudioList] = useState("");
    useEffect(() => {
        getData()
        getAngByAngAudio()
    }, [])
    const getData = async () => {
        await Axios.get('https://backend.searchgurbani.com/api/meta?url=raags/raag-maligaura')
            .then((resData) => {
                console.log('INTRO', resData.data.data);
                setDatas(resData.data.data)

            })
            .catch((err) => {
                console.log(err);
            })
    }
    const getAngByAngAudio = async () => {
        setLoader(true)
        await ApiHelper.get(API.getAngByAngAudio + "?path=raags/raag_mailgaura")
            .then((resData) => {
                setLoader(false);
                console.log('Audio', resData);
                setAudioList(resData.data.data)

            })
            .catch((err) => {
                setLoader(false);
                console.log(err, 'err');
            });
    }
    return (
        <div>
            <HelmetWrapper
                title={`Raag Maligaura -: searchgurbani.com`}
                description={`Learn about Gurbani Raag Maligaura- searchgurbani.com`}
                keywords="siri, devgandhari, jaitsri, bilaval, maru, sarang, majh, bihagara, todi, gond, tukhari, malar, gauri, vadahans, bairari, ramkali, kedara, kanara, asa, sorathi, tilang, nutnarain, bhairav, kalyan, gujri, dhanasri, suhi, maligaura, basant, prabhati, jaijaiwanti"
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
                                                    <div class="px-1 py-1 align-middle mt-0 dev-giri rag-common rewamp_wrap rewamp-head-centerss">
                                                        <h2>Gurbani Raag Mali Gaura</h2>
                                                        <div className='d-flex justify-content-center'>
                                                            <audio src={"https://backend.searchgurbani.com/" + audioList} className='text-center' autoplay controls ></audio>
                                                        </div>

                                                        <hr />
                                                        {datas ?
                                                            < div className='Gurmat_Sangeet'
                                                                dangerouslySetInnerHTML={{
                                                                    __html: datas.html
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

export default Mali