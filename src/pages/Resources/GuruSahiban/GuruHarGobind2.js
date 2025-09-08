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
import gharg2 from '../../../assets/img/content/gharg2.jpg'
import gharg3 from '../../../assets/img/content/gharg3.jpg';
import gharg6 from '../../../assets/img/content/gharg6.jpg';
import HelmetWrapper from '../../../components/CommonHelmet';

function GuruHarGubind2() {
    const [datas, setDatas] = useState([]);
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        await Axios.get('https://backend.searchgurbani.com/api/meta?url=gurus/guruhargobindi2')
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
                title={`Guru Har Gobind Ji -2-: searchgurbani.com  `}
                description={`Learn about life story of Guru Har Gobind ji -2- searchgurbani.com`}
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
                                            __html: datas.html
                                                ?.replace('src=\"assets\/img\/res\/gharg2.jpg\"', `src="${gharg2}"`)
                                                .replace('src=\"assets\/img\/res\/gharg3.jpg\"', `src="${gharg3}"`)
                                                .replace('src=\"assets\/img\/res\/gharg6.jpg\"', `src="${gharg6}"`)
                                        }}
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
                        <div className='col-lg-4 page-content center-algn-next'><Link to='/gurus/guruhargobindi'>Back</Link></div>
                        <div className='col-lg-4  page-content right-algn-next'><Link to='/gurus/guruhargobindi3'>Next</Link></div>
                        </div>
                </div>
        </div>

                

    { loader && <Spinner /> }
            </section >

        </div >
    )
}

export default GuruHarGubind2