import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from "react-router";
import { Link, useLocation } from "react-router-dom";
import '../assets/css/dashboard.css';
import '../assets/css/intro.css';
import '../assets/css/unicodefont.css';
import Axios from 'axios';
import { API } from "../config/api";
import { ApiHelper } from '../helpers/ApiHelper';
//import imgs from './assets/img/content/ggs_01.jpg'
import introbannar from '../assets/img/intro-bannar.webp';
import Spinner from '../components/Spinner';
import jathaImage from '../assets/img/content/jatha.jpg';
import tabalaImage from '../assets/img/content/tabla.jpg';
import raagiImage from '../assets/img/content/raagi.gif';
import { Helmet } from "react-helmet";
import HelmetWrapper from '../components/CommonHelmet';

function Unicode() {
    const [datas, setDatas] = useState([]);
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        getUnicode()
    }, [])
    const getUnicode = async () => {
        await Axios.get('https://backend.searchgurbani.com/api/meta?url=unicode')
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
                title={`Search Gurbani Unicode Fonts`}
                description="Learn about Unicode Fonts"
                keywords=""
                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                url={window.location.href}
            />
            <section className='section-1'>
                {/* <div className=" justify-content-md-center align-items-center">
                    <div className='banner-img'>
                        <img src={introbannar} className="img-fluid" alt="Responsive image" />
                    </div>
                </div> */}
                <div className='Gurbani-Raags p-4'>
                    <div className='container'>
                        <h1 className="inner-heading mb-4"></h1>
                        <div className="row ">
                            <div className="col-lg-12">
                                <div className="px-1 py-1 align-middle mt-0 akl-intro">
                                    {datas ?
                                        < div className='unicodes'
                                            dangerouslySetInnerHTML={{
                                                __html: datas.html
                                            }}
                                        /> : null}
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

export default Unicode