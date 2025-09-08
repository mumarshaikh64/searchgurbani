import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from "react-router";
import { Link, useLocation, useParams } from "react-router-dom";
import '../../../assets/css/dashboard.css';
import '../../../assets/css/author.css';
import Axios from 'axios';
import { API } from "../../../config/api";
import { ApiHelper } from '../../../helpers/ApiHelper';
import Spinner from '../../../components/Spinner';
import { Helmet } from 'react-helmet';
import HelmetWrapper from '../../../components/CommonHelmet';

function FWTIndex() {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const { volume_id } = useParams();
    const [indexArr, setIndexArr] = useState([]);
    useEffect(() => {
        getIndex();
    }, [])
    const getIndex = async () => {
        setLoader(true)
        await ApiHelper.get(API.getFWTIndex + '?volume_id=0' )
            .then((resData) => {
                setLoader(false);
                console.log('Index', resData.data);
                setIndexArr(resData.data.chapters);
            })
            .catch((err) => {
                setLoader(false);
                console.log(err, 'err');
            });
    }
    return (
        <div>
            <HelmetWrapper
                title={`Faridkot Wala Teeka Chapter Index -: ਫਰੀਦਕੋਟ ਵਾਲਾ ਟੀਕਾ -: searchgurbani.com `}
                description={`Faridkot Wala Teeka is classical exegesis of Sri Guru Granth Sahib in Braj Bhasha by a team of scholars of Nirmala Sect.`}
                keywords="Faridkot Wala, Teeka , Granth, Sahib, Nirmala, Guru Granth, Sikh, Gurbani"
                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                url={window.location.href}
            />
            {loader && <Spinner />}
            <section className='inner-actions p-4' >
                <div className='container'>
                    <h3 className='text-dark mb-3 text-center' >Faridkot Wala Teeka - Chapter Index</h3>

                </div>
               </section>


            <section>
                <div className='container'>
                    <div className='d-flex flex-column'>
                        <div className='ang-display '>
                            <div className="section_title">
                                <span className="col_sl_no"> No.</span>
                                <span className="col_sl_name">Chapter Name</span>
                                <span className="col_section_no">Page No.</span>
                                <br className="clearer" />
                            </div>

                            <div className='ang-wrapper '>
                                {indexArr.map((item, index) => {
                                    return (
                                        <div className='ang-itm padd-indexx' >
                                            <div className="section_line line row1">
                                                <span className="col_sl_no sec-no">{index + 1}</span>
                                                <Link to={`/faridkot-wala-teeka/page/${item.page_id}/volume/${item.volume_id}`} className="col_sl_no sec-nos">
                                                    <span >{item.chapter_name}</span></Link>
                                                <Link to={`/faridkot-wala-teeka/page//${item.page_id}/volume/${item.volume_id}`} className="col_section_no sec-no page-no"><span >{item.page_id}</span></Link>
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

export default FWTIndex