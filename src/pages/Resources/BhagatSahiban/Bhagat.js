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
import gamar3 from '../../../assets/img/content/gamar3.jpg';
import gamar4 from '../../../assets/img/content/gamar4.jpg';
import { Helmet } from 'react-helmet';
import HelmetWrapper from '../../../components/CommonHelmet';

function BhagatSahiban() {
    const [datas, setDatas] = useState([]);
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        await Axios.get('https://backend.searchgurbani.com/api/meta?url=bhagats')
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
                title={`The Sikh Bhagats -: searchgurbani.com`}
                description={`The 15 Bhagats whose Bani has been included in Guru Granth Sahib belong to the period stretching from twelfth century CE to the seventeenth century.`}
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
                <div className='Gurbani-Raags p-5'>
                    <div className='container'>
                        <div className="second-container intro-bkg">
                            <div className="row ">
                                <div class="col-lg-12">
                                    <div className='container align-items-center d-flex justify-content-center advance-search intro-border mt-5'>
                                        <div class="px-1 py-1 align-middle  bgv-intro">
                                            <h1 class="inner-heading mb-4"></h1> 
                                            <h3 class="inner-heading mb-5 inner-coomon-heading mt-3">Bhagat Sahiban (Punjabi: ਭਗਤ from Sanskrit भक्त)</h3>
                                            <hr></hr>
                                            <p className='black mb-4'>
                                                The Bhagats whose Bani has been included in Guru Granth Sahib belong to the period
                                                stretching from twelfth century CE to the seventeenth century. After reading and analysing
                                                the Bani of these Bhagats as recorded in Guru Granth Sahib, it becomes amply clear that
                                                all of them were the worshippers and votaries of One God. They preached the Oneness of
                                                God and exhorted the people to worship Him alone. Initially some Bhagats believed in
                                                idol worship and multiple gods but by the time they orated the bani that is incorporated
                                                in Guru Granth Sahib, they had realized the oneness of God. Very little is known
                                                about the lives of some of these Bhagats. Sikh Bhagats were holy men of various various
                                                sects whose teachings are included in the Sikh holy book the Sri Guru Granth Sahib.
                                                The word "bhagat" means devotee, and comes from the Sanskrit word Bhakti,
                                                which means devotion and love. There are 15 Bhagats who are given respect
                                                in the Guru Granth Sahib as the Bani of the Ten Sikh Gurus. They evolved a belief in one
                                                God that preceded Guru Nanak. Guru Arjan Dev selected the writings of The Great Hindu Bhaktis and Sufi saints.
                                            </p>
                                            <ul className='raagas' >
                                                <li><Link to='/bhagats/baba-farid'>Baba Sheikh Farid Ji</Link> </li>
                                                <li><Link to='/bhagats/bhagat-namdev'> Bhagat Namdev ji</Link> </li>
                                                <li><Link to='/bhagats/bhagat-sain'>Bhagat Sain ji </Link> </li>
                                                <li><Link to='/bhagats/bhagat-jaidev'>Bhagat Jaidev Ji </Link></li>
                                                <li><Link to='/bhagats/bhagat-kabir'>Bhagat Kabir Ji </Link></li>
                                                <li><Link to='/bhagats/bhagat-sadhna'>Bhagat Sadhana ji </Link></li>
                                                <li><Link to='/bhagats/bhagat-dhanna'>Bhagat Dhanna Ji </Link></li>
                                                <li><Link to='/bhagats/bhagat-ramanand'>Bhagat Ramanand Ji </Link></li>
                                                <li><Link to='/bhagats/bhagat-ravidas'>Bhagat Ravidas Ji </Link></li>
                                                <li><Link to='/bhagats/bhagat-bhikan'>Bhagat Bhikhan Ji </Link></li>
                                                <li><Link to='/bhagats/bhagat-pipa'>Bhagat Pipa ji </Link></li>
                                                <li><Link to='/bhagats/bhagat-trilochan'>Bhagat Trilochan ji </Link></li>
                                                <li><Link to='/bhagats/bhagat-beni'>Bhagat Beni Ji </Link></li>
                                                <li><Link to='/bhagats/bhagat-parmanand'>Bhagat Parmanand ji </Link></li>
                                                <li><Link to='/bhagats/bhagat-surdas'>Bhagat Surdas ji </Link></li>
                                            </ul>
                                            <p className='mt-4' style={{ color: "#017385" }}><b>Guru Arjan Dev ji, the 5th Guru of the Sikhs, included in Siri Guru Granth Sahib ji,
                                                the hymns of the Gurus, but also these select few holy men, whose utterances improved
                                                the spirito-religious, social & ethical life of the masses. If he included the hymns of
                                                Bhagat Pipa, a King, he also included the hymns of Bhagat Namdev, a Calico printer,
                                                and Bhagat Ravidas, a Cobbler, in the same way, irrespective of social divides such as caste.
                                                This unique approach had never previously been seen, and mankind is indebted to him for this.</b></p>
                                        </div></div></div></div></div>
                    </div>
                </div>

                {loader && <Spinner />}
            </section>

        </div>
    )
}

export default BhagatSahiban