import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router";
import '../../../assets/css/dashboard.css';
import '../../../assets/css/intro.css';
import Axios from 'axios';
import '../../../assets/css/bhatts.css';
import { Link, useLocation } from "react-router-dom";
//import imgs from './assets/img/content/ggs_01.jpg'
import introbannar from '../../../assets/img/intro-bannar.webp';
import Spinner from '../../../components/Spinner';
import { Helmet } from 'react-helmet';
import HelmetWrapper from '../../../components/CommonHelmet';

function BhattSahiban() {
    const navigate = useNavigate();
    const [introData, setIntroData] = useState([]);
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        getIntro()
    }, [])
    const getIntro = async () => {
        await Axios.get('https://backend.searchgurbani.com/api/meta?url=bhatts')
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
            <HelmetWrapper
                title={`The Bhatt & Bards -: searchgurbani.com`}
                description={`Bhatts & Bards in Sri Guru Granth Sahib ji`}
                keywords="kalshar, salh, mathura, satta and balwand, jalap, bhalh, bal, bhai mardana ji, kirat, nal, harbans, bhika, gyand, baba sunder ji"
                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                url={window.location.href}
            />
            <section className='section-1  back-color'>
                {/* <div className=" justify-content-md-center align-items-center">
                    <div className='banner-img'>
                        <img src={introbannar} class="img-fluid" alt="Responsive image" />
                    </div>
                </div> */}
                <div className="container ">
                    <div className="second-container intro-bkg">
                        <div className="row ">
                            <div class="col-lg-12">
                                <div className='container align-items-center d-flex justify-content-center advance-search intro-border mt-5'>
                                    <div class="px-1 py-1 align-middle  bgv-intro">
                                        <div className="second-container intro-bkg">
                                            <div className="row ">
                                                <div class="col-lg-12">
                                                    <div class="px-1 py-1 align-middle mt-3  akl-intro-kalshar rewamp_wrap rewamp-head-centerss">
                                                        <h2>Bhatt & Bards</h2>
                                                        <hr></hr>
                                                        <p>Bhatts & Bards in Sri Guru Granth Sahib ji</p>

                                                        <ul className='raagas' >
                                                            <li><Link to='/bhatts/bhatt-kalshar'>Kalshar</Link> </li>
                                                            <li><Link to='/bhatts/bhatt-jalap'> Jalap</Link> </li>
                                                            <li><Link to='/bhatts/bhatt-kirat'>Kirat </Link> </li>
                                                            <li><Link to='/bhatts/bhatt-bhika'>Bhika </Link></li>
                                                            <li><Link to='/bhatts/bhatt-salh'>Salh </Link></li>
                                                            <li><Link to='/bhatts/bhatt-bhalh'>Bhalh </Link></li>
                                                            <li><Link to='/bhatts/bhatt-nalh'>Nal</Link></li>
                                                            <li><Link to='/bhatts/bhatt-gyand'>Gyand </Link></li>
                                                            <li><Link to='/bhatts/bhatt-mathura'>Mathura</Link></li>
                                                            <li><Link to='/bhatts/bhatt-balh'>Bal </Link></li>
                                                            <li><Link to='/bhatts/bhatt-haribans'>Harbans </Link></li>
                                                            <li><Link to='/bhatts/sunderbaba'>Baba Sunder ji </Link></li>
                                                            <li><Link to='/bhatts/satta'>Satta and Balwand </Link></li>
                                                            <li><Link to='/bhatts/mardana'>Bhai Mardana Ji </Link></li>

                                                        </ul>



                                                        {/* <h4 className='intro-heading  mt-5'>Boundless scripture of guru granth sahib</h4> */}
                                                        {introData ?
                                                            < div className=' mt-4'
                                                                dangerouslySetInnerHTML={{
                                                                    __html: introData.html
                                                                }}
                                                            /> : null}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div></div></div></div></div>
                </div>
                {loader && <Spinner />}
            </section>

        </div>
    )
}

export default BhattSahiban