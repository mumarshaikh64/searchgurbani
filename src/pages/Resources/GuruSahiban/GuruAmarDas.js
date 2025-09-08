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
import guru3 from '../../../assets/img/content/guru3.jpg';
import gamar2 from '../../../assets/img/content/gamar2.jpg';
import baoli from '../../../assets/img/content/baoli.jpg';
import gamar1 from '../../../assets/img/content/gamar1.jpg';
import akbar from '../../../assets/img/content/akbar.jpg';
import { Helmet } from 'react-helmet';
import HelmetWrapper from '../../../components/CommonHelmet';

function GuruAmarDas() {
    const [datas, setDatas] = useState([]);
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        await Axios.get('https://backend.searchgurbani.com/api/meta?url=gurus/guruamar')
            .then((resData) => {
                console.log('INTRO', resData.data.data);
                setDatas(resData.data.data)

            })
            .catch((err) => {
                console.log(err);
            })
    }
    
    return (
        <div>
            <HelmetWrapper
                title={`Guru  Amar Das Ji -: searchgurbani.com`}
                description={`Learn about life story of Guru Amar Das ji - searchgurbani.com`}
                keywords="Sikh, sikhism, guru, gobind singh,nanak, har gobind, tegh bahadur, arjan, angad, ramdas,ram das, har krishan,amar das"
                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                url={window.location.href}
            />
            <section className='section-1'>
                <div className=" justify-content-md-center align-items-center">
                    <div className='banner-img'>
                        <img src={introbannar} class="img-fluid" alt="Responsive image" />
                    </div>
                </div>
                <div className='Gurbani-Raags p-4'>
                    <div className='container'>
                        <h3 class="mb-4 raags-heading">Sri Guru Amar Das Ji</h3> 
                        <div className="container">
                <div className="second-container intro-bkg">
                    <div className="row ">
                        <div class="col-lg-12">
                        <div className='container align-items-center d-flex justify-content-center advance-search intro-border mt-5'>
                            <div class="px-1 py-1 align-middle mt-5 bgv-intro">
                                <div class="px-1 py-1 align-middle mt-0 akl-intro rewamp_wrap guru-ramdas Amar_Das_Ji">                               
                                {datas ?
                                        < div className='dates dates-rams list-divs Amar_Das_Ji'
                                        dangerouslySetInnerHTML={{
                                            __html: datas.html
                                            ?.replace('src=\"assets\/img\/res\/guru3.jpg\"', `src="${guru3}"`)
                                            .replace('src=\"assets\/img\/res\/gamar2.jpg\"', `src="${gamar2}"`)
                                            .replace('src=\"assets\/img\/res\/baoli.jpg\"', `src="${baoli}"`)
                                            .replace('src=\"assets\/img\/res\/gamar1.jpg\"', `src="${gamar1}"`)
                                            .replace('src=\"assets\/img\/res\/akbar.jpg\"', `src="${akbar}"`)}} 
                                        /> : null}
                                </div>
                            </div>
                        </div>                 

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

export default GuruAmarDas