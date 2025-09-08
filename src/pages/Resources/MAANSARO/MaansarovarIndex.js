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

function MaansarovarIndex() {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const { word } = useParams();
    const [indexArr, setIndexArr] = useState([]);
    useEffect(() => {
        getIndex();
    }, [])
    const getIndex = async () => {
        setLoader(true)
        await ApiHelper.get(API.getMaansarovarIndex + word)
            .then((resData) => {
                setLoader(false);
                console.log('Index', resData.data.quotations);
                setIndexArr(resData.data.quotations);
            })
            .catch((err) => {
                setLoader(false);
                console.log(err, 'err');
            });
    }
    return (
        <div>
            <HelmetWrapper
                title={`Maansarovar -: searchgurbani.com`}
                description={`A comprehensive web site on research and  exploration of Sri Guru Granth Sahib, Amrit Keertan Gutka, Bhai Gurdas Vaaran, Kabit Bhai Gurdaas ,Sri Dasam Granth Sahib, exegesis , Gurbani, Gurbanee vichaar`}
                keywords="Hukum, Hukumnama, Darbar sahib, Harmandir sahib, Amritsar"
                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                url={window.location.href}
            />
            <section className='inner-actions p-4' >
                <div className='container'>
                    <h3 className='text-dark mb-3 text-center' >Maansarovar - Quotations for {word}</h3>
                    <button className='ang-btn maan-search'  onClick={() => navigate('/maansarovar')}>Search Page</button>
                </div>
      
            </section>


            <section>
                <div className='container'>
                    <div className='d-flex flex-column'>
                        <div className='ang-display '>
                            <div className="section_title">
                                <span className="col_sl_no maan-no"> No</span>
                                <span className="col_sl_name maan-quo">Quotation</span>
                                <span className="col_section_no maan-ang">SGGS Ang</span>
                                <br className="clearer" />
                            </div>

                            <div className='ang-wrapper '>
                                {indexArr.map((item, index) => {
                                    return (
                                        <div className='ang-itm mt-2 padd-indexx rows-padd-issue' >
                                            <div className="section_line line row1">
                                                <span className="col_sl_no sec-no quot-no">{index + 1}</span>
                                                <Link to={`/guru-granth-sahib/ang/${item.pageno}`} className="col_sl_no sec-nos quot-page">
                                                    <span >{item.quotation}</span></Link>
                                                <Link to={`/guru-granth-sahib/ang/${item.pageno}`}><span className="col_section_no sec-no quot-page">{item.pageno}</span></Link>
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

export default MaansarovarIndex