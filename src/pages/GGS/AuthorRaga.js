import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from "react-router";
import { Link, useLocation, useParams} from "react-router-dom";
import '../../assets/css/dashboard.css';
import '../../assets/css/author.css';
import Axios from 'axios';
import { API } from "../../config/api";
import { ApiHelper } from '../../helpers/ApiHelper';
import Spinner from '../../components/Spinner';
import {Helmet} from "react-helmet";
import HelmetWrapper from '../../components/CommonHelmet';
//import imgs from './assets/img/content/ggs_01.jpg'

function AuthorRaga() {
    const { slug } = useParams();
    const [loader, setLoader] = useState(false);
    const [authorName, setAuthorName] = useState([]);
    const [authorArr, setAuthorArr] = useState([]);

    useEffect(() => {
        getAuthorRaga();
        setAuthorName(formatAuthorName(slug));

    }, [slug])
    const getAuthorRaga = async () => {
        setLoader(true)
        await ApiHelper.get(API.getAuthorRaga + "?author_name=" + slug )
            .then((resData) => {
                setLoader(false);
                console.log('Raga', resData);
                setAuthorArr(resData.data.raags);
            })
            .catch((err) => {
                setLoader(false);
                console.log(err, 'err');
            });
    }
    const formatAuthorName = (slugName) => {
        return slugName
        .split('-') // Split the slug into an array of words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
        .join(' '); // Join the words back together with spaces
    };
    return (
        <div>
            <HelmetWrapper
                title={`Sri Guru Granth Sahib Ji Raags Index - Author: ${formatAuthorName(slug)}`}
                description={`Sri Guru Granth Sahib Raags Index - Author: ${formatAuthorName(slug)} - searchgurbani.com`}
                keywords="guru granth sahib, granth, shabad, kirtan, sikh scripture, sikhism , raags, asa, suhi, gauri, ramkali, nanak, arjan, amar das, angad, ram das"
                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                url={window.location.href}
            />
            {loader && <Spinner />}
            <section className='inner-actions p-4' >
                <div className='container'>
                    <div className='row w-100'>
                        <div className='col-lg-12 p-0'>
                            <div className='in-act-wrapper'>
                                <h1 className='inner-heading-athur' >Guru Granth Sahib - Raags Index</h1>
                                
                            </div>
                        </div>
                    </div>
                    <div className='row w-100'>
                        <div className='col-lg-12 p-0'>
                            <div className='in-act-wrapper'>
                            <h1 className='inner-heading-athur' >{authorName}</h1>
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
                                <span className="col_section_name">Raga</span>
                                <span className="col_section_no">Page No.</span>
                                <br className="clearer" />
                            </div>

                            <div className='ang-wrapper '>
                                {authorArr.map((item, index) => (
                                    <div className='ang-itm' /* style={{ backgroundColor: index % 2 === 0 ? '#fff2ed' : 'white' }} */>
                                        {/* <div className="section_line line row1">
                                            <span className="col_sl_no sec-no">{item.author}</span>
                                        </div> */}
                                        <div className='in-act-wrapper mt-2 '>
                                            <Link to={`/guru-granth-sahib/ang/${item.pageno}`} className='author-para'><span>{item.raag}</span></Link>
                                            <div className='actions-mains'>
                                                <Link to={`/guru-granth-sahib/ang/${item.pageno}`} className='col_section_no sec-no page-no author-no'><span >{item.pageno}</span></Link>
                                            </div>
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

export default AuthorRaga