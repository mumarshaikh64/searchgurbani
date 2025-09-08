import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from "react-router";
import { Link, useLocation } from "react-router-dom";
import '../../../assets/css/dashboard.css';
import '../../../assets/css/sgg-index.css';
import '../../../assets/css/style.css';
import Axios from 'axios';
import { API } from "../../../config/api";
import { ApiHelper } from '../../../helpers/ApiHelper';
import Spinner from '../../../components/Spinner';
import Switch from 'react-switch';
import '../../../assets/css/hukumindex.css';
import {Helmet} from "react-helmet";
import HelmetWrapper from '../../../components/CommonHelmet';

function HukumIndex() {
    const [loader, setLoader] = useState(false);
    const [parent, setParent] = useState([]);
    const [child, setChild] = useState([]);
    const [languageCheck, setLanguageCheck] = useState(false);
    const [chapters, setChapters] = useState([]);
  const [parentChapters, setParentChapters] = useState([]);
    
    useEffect(() => {
        getChapter();
    }, [])
    const getChapter = async () => {
        setLoader(true)
        await ApiHelper.get(API.getHukumIndex)
            .then((resData) => {
                setLoader(false);
                console.log('chapter', resData.data);
                setChapters(resData.data.hukumnama_titles);                      
                
            })
            .catch((err) => {
                setLoader(false);
                /* setMessage("Error !!! Please try again"); */
                console.log(err, 'err');
            });
    }
    useEffect(() => {
        if (chapters.length > 0) {
          const parents = makeParents(chapters);
          const parentWithSubChapters = makeSubChapters(parents, chapters);
          setParentChapters(parentWithSubChapters);
        }
      }, [chapters]);
    
      const makeParents = (chapters) => {
        let parents = [];
        chapters.forEach(c => {
          let sub = parents.filter(p => p.raag === c.raag);
          if (sub.length === 0) {
            parents.push(c);
          }
        });
        return parents;
      };
    
      const makeSubChapters = (parents, chapters) => {
        let updatedParents = [];
        parents.forEach(p => {
          let childs = chapters.filter(c => c.raag === p.raag);
          updatedParents.push({ ...p, childs: childs });
        });
        return updatedParents;
      };
      


    return (
        <div>
            <HelmetWrapper
                title={`Hukumnama-: searchgurbani.com`}
                description={`A comprehensive web site on research and  exploration of Sri Guru Granth Sahib, Amrit Keertan Gutka, Bhai Gurdas Vaaran, Kabit Bhai Gurdaas ,Sri Dasam Granth Sahib, exegesis , Gurbani, Gurbanee vichaar`}
                keywords="Hukum, Hukumnama, Darbar sahib, Harmandir sahib, Amritsar"
                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                url={window.location.href}
            />
            <section className='inner-actions p-4' >
                <div className='container'>
                    <div className='row w-100'>
                        <div className='col-lg-12 p-0'>
                            <div className='in-act-wrapper'>
                                <h1 className='inner-heading-athur' >Hukumnama - Raag Index</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className='d-flex flex-column'>
                        <div className='ang-display mt-5'>
                        <div className="section_title">
                                <span className="col_section_name hukum-name">Raag/Hukumnama Title</span>
                                <span className="col_section_no hukum-indexs">Page No.</span>
                                <br className="clearer" />
                            </div>
                            <div className='ang-wrapper '>
                                {parentChapters.map((item, index) => (
                                    <div className='ang-itm '>
                                        <h2 className='lang-1' >
                                            <details>
                                                <summary>{item.raag}</summary>
                                                <div className='hukum-scrolls'>
                                                {item.childs?.map((c, cIndex) => (
                                                    
                                                    <div className='in-act-wrapper mt-2'>
                                                        <Link  to={`/hukumnama/ang/${c.pageno}`} className='det-para-huku'><span>{c.title}</span></Link>
                                                        <div className='actions-mains'>
                                                            <Link to={`/hukumnama/ang/${c.pageno}`} className='det-no hukum-indx-no resps-humku'><span >{parseInt(c.pageno)}</span></Link>
                                                        </div>
                                                    </div>
                                               
                                                ))}
                                                     </div>
                                            </details>
                                        </h2>
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

export default HukumIndex