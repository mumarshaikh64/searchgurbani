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
import dhanna from '../../../assets/img/content/dhanna.jpg';
import dhanna1 from '../../../assets/img/content/dhanna1.jpg';
import { Helmet } from 'react-helmet';
import HelmetWrapper from '../../../components/CommonHelmet';

function Dhanna() {
    const [datas, setDatas] = useState([]);
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        await Axios.get('https://backend.searchgurbani.com/api/meta?url=bhagats/bhagat-dhanna')
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
                title={`Bhagat Dhanna Ji -: searchgurbani.com`}
                description={`Life Story of Bhagat Dhanna Ji  at  searchgurbani.com`}
                keywords="sheikh farid , kabir , ravidas , beni , namdev , sadhana , bhikhan , parmanand , sain , dhanna , pipa , surdas , jaidev , ramanand , trilochan"
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
                                                    <div class="px-1 py-1 align-middle mt-0 akl-intro rewamp_wrap">
                                                        {datas ?
                                                            < div className='static-page'
                                                                dangerouslySetInnerHTML={{
                                                                    __html: datas.html
                                                                        ?.replace('src=\"assets\/img\/res\/dhanna.jpg\"', `src="${dhanna}"`)
                                                                        .replace('src=\"assets\/img\/res\/dhanna1.jpg\"', `src="${dhanna1}"`)
                                                                }}
                                                            /> : null}
                                                        <div className='d-flex justify-content-start index-wrapper'><Link to='/bhagats' className='static-index'>Bhagats Index
                                                        </Link></div>
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

export default Dhanna