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
import guru4 from '../../../assets/img/content/guru4.jpg';
import gram1 from '../../../assets/img/content/gram1.jpg';
import gram2 from '../../../assets/img/content/gram2.jpg';
import { Helmet } from 'react-helmet';
import HelmetWrapper from '../../../components/CommonHelmet';

function GuruRamDas() {
    const [datas, setDatas] = useState([]);
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        await Axios.get('https://backend.searchgurbani.com/api/meta?url=gurus/gururamdas')
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
                title={`Guru Ram Das Ji -: searchgurbani.com`}
                description={`Learn about life story of Guru Ram Das ji - searchgurbani.com`}
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
               
                    <div className="second-container intro-bkg">
                    <div className="row ">
                        <div class="col-lg-12">
                            
                        <div className='container align-items-center d-flex justify-content-center advance-search intro-border mt-5'>
                        <h3 class="mb-4 raags-heading">Sri Guru Ram Das Sahib Ji</h3> 
                        <div class="px-1 py-1 align-middle  bgv-intro">
                                <div class="px-1 py-1 align-middle mt-0 akl-intro guru-ramdas rewamp_wrap guru-rewamp">                               
                                {datas ?
                                        < div className='Amar_Das_Ji ramdas dates-ram'
                                        dangerouslySetInnerHTML={{
                                            __html: datas.html
                                            ?.replace('src=\"assets\/img\/res\/guru4.jpg\"', `src="${guru4}"`)
                                            .replace('src=\"assets\/img\/res\/gram1.jpg\"', `src="${gram1}"`)
                                            .replace('src=\"assets\/img\/res\/gram2.jpg\"', `src="${gram2}"`)}} 
                                        /> : null}
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

export default GuruRamDas