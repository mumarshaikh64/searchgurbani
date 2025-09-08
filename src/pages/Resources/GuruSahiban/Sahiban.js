import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from "react-router";
import { Link, useLocation } from "react-router-dom";
import '../../../assets/css/dashboard.css';
import '../../../assets/css/intro.css';
import '../../../assets/css/sahiban.css';
import Axios from 'axios';
import { API } from "../../../config/api";
import { ApiHelper } from '../../../helpers/ApiHelper';
//import imgs from './assets/img/content/ggs_01.jpg'
import introbannar from '../../../assets/img/intro-bannar.webp';
import Spinner from '../../../components/Spinner';
import { Helmet } from 'react-helmet';
import HelmetWrapper from '../../../components/CommonHelmet';

function Sahiban() {
    const [datas, setDatas] = useState([]);
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        await Axios.get('https://backend.searchgurbani.com/api/meta?url=gurus')
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
                title={`The Sikh Gurus -: searchgurbani.com`}
                description={`The soul of Guru Nanak passed on to nine successors, who elaborated on the first Guru's teachings to give form to this new religion. The final form was given by the tenth and last Guru, Gobind Singh,`}
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
                <div className='Gurbani-Raags '>
                    <div className='container'>
                        <h1 class="inner-heading mb-4"></h1> 
                       
                <div className="second-container intro-bkg">
                    <div className="row ">
                        <div class="col-lg-12">
                        <div className='container align-items-center d-flex justify-content-center advance-search intro-border mt-5'>
                            <div class=" align-middle mt-5 bgv-intro">
                            <div class="col-lg-12">
                                <div class="px-2 py-2 align-middle mt-0 akl-intro rewamp_wrap">                                 
                                    {datas ?
                                        < div className='dates'
                                        dangerouslySetInnerHTML={{
                                            __html: datas.html}} 
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

export default Sahiban