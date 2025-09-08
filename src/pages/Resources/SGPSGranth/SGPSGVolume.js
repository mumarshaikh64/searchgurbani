import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from "react-router";
import { Link, useLocation, useParams } from "react-router-dom";
import '../../../assets/css/dashboard.css';
import '../../../assets/css/author.css';
import Axios from 'axios';
import { API } from "../../../config/api";
import { ApiHelper } from '../../../helpers/ApiHelper';
import { Helmet } from 'react-helmet';
import HelmetWrapper from '../../../components/CommonHelmet';

function SGPSGVolume() {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const [indexArr, setIndexArr] = useState([]);
    useEffect(() => {
        getIndex();
    }, [])
    const getIndex = async () => {
        setLoader(true)
        await ApiHelper.get(API.getSGPSGSearch  )
            .then((resData) => {
                setLoader(false);
                console.log('Index', resData.data);
                setIndexArr(resData.data.volumes);
            })
            .catch((err) => {
                setLoader(false);
                console.log(err, 'err');
            });
    }
    return (
        <div>
            <HelmetWrapper
                title={`Sri Gur Pratap Suraj Granth Volume Index-: ਸ੍ਰੀ ਗੁਰ ਪ੍ਰਤਾਪ ਸੂਰਜ ਗਰੰਥ -: searchgurbani.com `}
                description={`Sri Gur Pratap Suraj Granth Volume Index`}
                keywords="Sri ,Nanak ,Prakash. Granth, Gur, Pratap , Suraj, Santokh, "
                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                url={window.location.href}
            />
            <section className='inner-actions p-4' >
                <div className='container'>
                    <h3 className='text-dark mb-3 text-center' >Sri Gur Pratap Suraj Granth - Volume Index</h3>

                </div>
               </section>


            <section>
                <div className='container'>
                    <div className='d-flex flex-column'>
                        <div className='ang-display '>
                            <div className="section_title">
                                <span className="col_sl_no"> No.</span>
                                <span className="col_sl_name">Volume Name</span>
                                <span className="col_section_no vol-eng-head">Volume Name (English)</span>
                                <br className="clearer" />
                            </div>

                            <div className='ang-wrapper '>
                                {indexArr.map((item, index) => {
                                    const shabadNameWithDashes = item.volume_ename.replace(/ /g, '-');
                                    return (
                                        <div className='ang-itm padd-indexx ' >
                                            <div className="section_line line row1">
                                                <span className="col_sl_no volume sec-no sgpsg-vol">{index + 1}</span>
                                                <Link to={`/sri-gur-pratap-suraj-granth/chapters/${item.volume_id}/${shabadNameWithDashes}`} className="col_sl_no sec-nos volume-index sgpsg-vol">
                                                    <span >{item.volume_name} </span></Link>
                                                <Link to={`/sri-gur-pratap-suraj-granth/chapters/${item.volume_id}/${shabadNameWithDashes}`} className="col_section_no sec-no page-no volume-right-side sgpsg-vol"><span>{item.volume_ename}</span></Link>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SGPSGVolume