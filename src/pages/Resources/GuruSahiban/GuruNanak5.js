import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from "react-router";
import { Link, useLocation } from "react-router-dom";
import '../../../assets/css/dashboard.css';
import '../../../assets/css/intro.css';
import '../../../assets/css/nanak.css';
import Axios from 'axios';
import { API } from "../../../config/api";
import { ApiHelper } from '../../../helpers/ApiHelper';
//import imgs from './assets/img/content/ggs_01.jpg'
import introbannar from '../../../assets/img/intro-bannar.webp';
import Spinner from '../../../components/Spinner';
import { Helmet } from 'react-helmet';
import HelmetWrapper from '../../../components/CommonHelmet';

function GuruNanak5() {
    const [datas, setDatas] = useState([]);
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        await Axios.get('https://backend.searchgurbani.com/api/meta?url=gurus/gurunanak5')
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
                title={`Guru Nanak Dev Ji -5-: searchgurbani.com`}
                description={`Learn about life story of Guru Nanak Dev ji -5- searchgurbani.com`}
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
                        <h1 class="inner-heading "></h1> 
                        <div className="second-container intro-bkg">
                    <div className="row ">
                        <div class="col-lg-12">
                        <div className='container align-items-center d-flex justify-content-center advance-search intro-border mt-5'>
                            <div class="px-1 py-1 align-middle  bgv-intro">
                                <div class="px-1 py-1 align-middle mt-0 akl-intro">                                 
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
                        <hr></hr>
                        <div className='row'>
                        <div className='col-lg-4 page-content left-algn-next'><Link to='/gurus'>Index</Link></div>
                        <div className='col-lg-4 page-content center-algn-next'><Link to='/gurus/gurunanak4'>Back</Link></div>
                        <div className='col-lg-4  page-content right-algn-next'><Link to='/gurus/gurunanak6'>Next</Link></div>
                        </div>
                    </div>
                </div>

                {loader && <Spinner />}
            </section>
            
        </div>
    )
}

export default GuruNanak5