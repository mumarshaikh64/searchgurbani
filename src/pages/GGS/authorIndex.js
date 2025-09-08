// import '../../assets/css/dashboard.css';
// import '../../assets/css/author.css';
import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from "react-router";
// import { Link, useLocation ,useParams} from "react-router-dom";
import Axios from 'axios';
import { API } from "../../config/api";
import { ApiHelper } from '../../helpers/ApiHelper';
import Spinner from '../../components/Spinner';
import {Helmet} from "react-helmet";
import HelmetWrapper from '../../components/CommonHelmet';
import Link from 'next/link';
//import imgs from './assets/img/content/ggs_01.jpg'

function AuthorIndex() {
    const [loader, setLoader] = useState(false);
    const [authorArr, setAuthorArr] = useState([]);
    useEffect(() => {
        getAuthors();
    }, [])
    const getAuthors = async () => {
        setLoader(true)
        await ApiHelper.get(API.getAuthor)
            .then((resData) => {
                setLoader(false);
                console.log('Index', resData);
                setAuthorArr(resData.data);
            })
            .catch((err) => {
                setLoader(false);
                console.log(err, 'err');
            });
    }
    return (
        <div> 
            {/* <HelmetWrapper
                title={`Sri Guru Granth Sahib Ji Author Index-: searchgurbani.com`}
                description="Sri Guru Granth Sahib Author Index :searchgurbani.com"
                keywords="Gurmat Sangeet, Gurubani ,Kirtan,Amrit,Gurbani, Shabad, Keertan, English ,translation ,Phonetic, Transliteration, Hindi ,Sikh scriptures,sikhism, sikh, mahan kosh,hukamnama, dasam granth,granth,gurdas,guru,raag, vaaran,varan,kabit,nand lal,ang,gurdwara,hukumnama,bhagats;"
                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                url={window.location.href}
            /> */}
            {loader && <Spinner />}
            <section className='inner-actions p-4' >
                <div className='container'>
                    <div className='row w-100'>
                        <div className='col-lg-12 p-0'>
                            <div className='in-act-wrapper'>
                                <h1 className='inner-heading-athur' >Sri Guru Granth Sahib Author Index</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className='container'>
                    <div className='d-flex flex-column'>
                        <div className='ang-display '>
                            <div className="section_title">
                                <span className="col_sl_no">Sl. No.</span>
                                <span className="col_sl_name">Author</span>
                                <br className="clearer" />
                            </div>

                            <div className='ang-wrapper '>
                                {authorArr.map((item, index) => (
                                    <div className='ang-itm padd-indexx' >
                                        <div className="section_line line row1">
                                            <span className="col_sl_no sec-no">{index+1}</span>
                                            <Link href={`/guru-granth-sahib/index/author/${item.slug}`}  className="col_sl_no sec-nos"><span >{item.author}</span></Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AuthorIndex