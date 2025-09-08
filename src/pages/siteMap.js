import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from "react-router";
// import { Link, useLocation } from "react-router-dom";
// import '../assets/css/dashboard.css';
import Axios from 'axios';
import {Helmet} from "react-helmet";
import HelmetWrapper from '../components/CommonHelmet';
import Link from 'next/link';

function SiteMap() {
   
    return (
        <section className='p-4' >
            {/* <HelmetWrapper
                title={`Search Gurbani Sitemap`}
                description="Search Gurbani Sitemap"
                keywords=""
                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                url={window.location.href}
            /> */}
            <div className='container'>
                <div className='row'>
                    <h1 className='inner-heading mb-4' >Search Gurbani Sitemap</h1>
                    <div className='col-lg-4'>
                        <div className='site-itm'>
                            <h3>Sri Guru Granth Sahib</h3>
                            <ul>
                                <li><Link href='/guru-granth-sahib/introduction'>Introduction</Link></li>
                                <li><Link href='/guru-granth-sahib/ang-by-ang'>Ang by Ang</Link></li>
                                <li><Link href='/guru-granth-sahib/index/chapter'>Chapter Index</Link></li>
                                <li><Link href='/guru-granth-sahib/index/author'>Author Index</Link></li>
                                <li><Link href='/guru-granth-sahib/search'>Search Sri Guru Granth Sahib ji</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='site-itm'>
                            <h3>Amrit Keertan Gutka</h3>
                            <ul>
                                <li><Link href='/amrit-keertan/introduction'>Introduction</Link></li>
                                <li><Link href='/amrit-keertan/page-by-page'>Browse Page by Page</Link></li>
                                <li><Link href='/amrit-keertan/index/chapter'>Chapter Index</Link></li>
                                <li><Link href='/amrit-keertan/index/english'>English Index</Link></li>
                                <li><Link href='/amrit-keertan/index/punjabi'>Punjabi Index</Link></li>
                                <li><Link href='/amrit-keertan/index/hindi'>Hindi Index</Link></li>
                                <li><Link href='/amrit-keertan/search'>Search Amrit Keertan Gutka</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='site-itm'>
                            <h3>Bhai Gurdas Vaaran</h3>
                            <ul>
                                <li><Link href='/bhai-gurdas-vaaran/introduction'>Introduction</Link></li>
                                <li><Link href='/bhai-gurdas-vaaran/pauri-by-pauri'>Browse Pauri by Pauri</Link></li>
                                <li><Link href='/bhai-gurdas-vaaran/index/vaar'>Vaar Index</Link></li>
                                <li><Link href='/bhai-gurdas-vaaran/search'>Search Bhai Gurdas Vaaran</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='site-itm'>
                            <h3>Dasam Granth Sahib</h3>
                            <ul>
                                <li><Link href='/dasam-granth/introduction'>Introduction</Link></li>
                                <li><Link href='/dasam-granth/index/chapter/en'>Chapter Index</Link></li>
                                <li><Link href='/dasam-granth/page-by-page'>Browse Page by Page</Link></li>
                                <li><Link href='/dasam-granth/search'>Search Dasam Granth Sahib</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='site-itm'>
                            <h3>Kabit Bhai Gurdas</h3>
                            <ul>
                                <li><Link href='/kabit-savaiye/kabit-by-kabit'>Browse Kabit by Kabit</Link></li>
                                <li><Link href='/kabit-savaiye/search'>Search Kabit Bhai Gurdas</Link></li>
                            </ul>
                        </div>
                    </div>
                   
                    
                    <div className='col-lg-4'>
                        <div className='site-itm'>
                            <h3>Bhai Nand Lal Baani</h3>
                            <ul>
                                <li><Link href='/bhai-nand-lal/ghazal'>Divan-e-Goya : Ghazals </Link></li>
                                <li><Link href='/bhai-nand-lal/quatrains'>Rubaayee</Link></li>
                                <li><Link href='/bhai-nand-lal/zindginama'>Zindginama</Link></li>
                                <li><Link href='/bhai-nand-lal/ganjnama'>Ganjnama</Link></li>
                                <li><Link href='/bhai-nand-lal/jot-bikas'>Jot Bikas (Punjabi)</Link></li>
                                <li><Link href='/bhai-nand-lal/jot-bikas-persian'>Jot Bikas (Persian)</Link></li>
                                <li><Link href='/bhai-nand-lal/rahitnama'>Rahit Nama</Link></li>
                                <li><Link href='/bhai-nand-lal/tankahnama'>Tankah Nama</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='site-itm'>
                            <h3>Baani's</h3>
                            <ul>
                                <li><Link href='/'>Nitnem</Link>
                                <ul className='sub-sitemap' >
                                    <li><Link href='/baanis/japji-sahib'>Japji Sahib</Link></li>
                                    <li><Link href='/baanis/jaap-sahib'>Jaap Sahib</Link></li>
                                    <li><Link href='/baanis/tvai-prasadh-savaiye'>Tvai Prasadh Savaiye</Link></li>
                                    <li><Link href='/baanis/chaupai-sahib'>Chaupai Sahib</Link></li>
                                    <li><Link href='/baanis/anand-sahib'>Anand Sahib</Link></li>
                                    <li><Link href='/baanis/rehraas-sahib'>Rehraas Sahib</Link></li>
                                    <li><Link href='/baanis/kirtan-sohila'>Kirtan Sohila</Link></li>
                                </ul>
                                </li>
                                <li><Link href='/'>Guru Granth Sahib</Link>
                                <ul className='sub-sitemap' >
                                    <li><Link href='/baanis/anand-sahib-bhog'>Anand Sahib(Bhog) </Link></li>
                                    <li><Link href='/baanis/laavan-anand-karaj'>Laavan(Anand Karaj) </Link></li>
                                    <li><Link href='/baanis/asa-ki-vaar'>Asa Ki Vaar</Link></li>
                                    <li><Link href='/baanis/sukhmani-sahib'>Sukhmani Sahib</Link></li>
                                    <li><Link href='/baanis/sidh-gosht'>Sidh Gosht</Link></li>
                                    <li><Link href='/baanis/ramkali-sadh'>Ramkali Sadh</Link></li>
                                    <li><Link href='/baanis/dhakanee-oankaar'>Dhakanee Oankaar</Link></li>
                                    <li><Link href='/baanis/baavan-akhree'>Baavan Akhree</Link></li>
                                    <li><Link href='/baanis/shabad-hazare'>Shabad Hazare</Link></li>
                                    <li><Link href='/baanis/baarah-maaha'>Baarah Maaha</Link></li>
                                    <li><Link href='/baanis/sukhmana-sahib'>Sukhmana sahib</Link></li>
                                    <li><Link href='/baanis/dukh-bhanjani-sahib'>Dukh Bhanjani Sahib</Link></li>
                                    <li><Link href='/baanis/salok-sehskritee'>Salok Sehskritee</Link></li>
                                    <li><Link href='/baanis/gathaa'>Gathaa</Link></li>
                                    <li><Link href='/baanis/phunhay-m5'>Phunhay M: 5</Link></li>
                                    <li><Link href='/baanis/chaubolay-m5'>Chaubolay M:5</Link></li>
                                    <li><Link href='/baanis/salok-kabeer-ji'>Salok Kabeer ji</Link></li>
                                    <li><Link href='/baanis/salok-farid-ji'>Salok Farid ji</Link></li>
                                    <li><Link href='/baanis/savaiye-m1'>Savaiye M: 1</Link></li>
                                    <li><Link href='/baanis/savaiye-m2'>Savaiye M: 2</Link></li>
                                    <li><Link href='/baanis/savaiye-m3'>Savaiye M: 3</Link></li>
                                    <li><Link href='/baanis/savaiye-m4'>Savaiye M: 4</Link></li>
                                    <li><Link href='/baanis/savaiye-m5'>Savaiye M: 5</Link></li>
                                    <li><Link href='/baanis/salok-m9'>Salok M: 9</Link></li>
                                </ul>
                                </li>
                                <li><Link href='/'>Dasam Granth</Link>
                                <ul className='sub-sitemap' >
                                    <li><Link href='/baanis/akal-ustati'>Akal Ustati</Link></li>
                                    <li><Link href='/baanis/bachitar-natak'>Bachitar Natak</Link></li>
                                </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='site-itm'>
                            <h3>Resources</h3>
                            <ul>
                                <li><Link href='/mahan-kosh'>GurShabad Ratanakar Mahankosh </Link></li>
                                <li><Link href='/guru-granth-kosh'>Sri Guru Granth Kosh</Link></li>
                                <li><Link href='/sri-nanak-prakash'>Sri Nanak Prakash</Link></li>
                                <li><Link href='/sri-gur-pratap-suraj-granth'>Sri Gur Pratap Suraj Granth</Link></li>
                                <li><Link href='/faridkot-wala-teeka'>Faridkot Wala Teeka</Link></li>
                                <li><Link href='/sri-guru-granth-darpan'>Sri Guru Granth Darpan</Link></li>
                                <li><Link href='/maansarovar'>Maansarovar</Link></li>
                                <li><Link href='/compilation/page/1'>Compilation of Sri Guru Granth Sahib</Link></li>
                                <li><Link href='/music/page/1'>Indian Classical Music and Sikh Kirtan </Link></li>
                                <li><Link href='/gurus'>Guru Sahiban</Link></li>
                                <li><Link href='/bhagats'>Bhagat Sahiban</Link></li>
                                <li><Link href='/bhatts'>Bhatt Sahiban</Link></li>
                                <li><Link href='/raags'>Gurbani Raags</Link></li>
                                <li><Link href='/sgdv'>Search Gurbani Desktop Version</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='site-itm'>
                            <h3>Hukumnama</h3>
                            <ul>
                                <li><Link href='/hukumnama'>Hukumnama Index</Link></li>
                                <li><Link href='/hukum'>Sri Darbar Sahib</Link></li>
                                <li><Link href='/hukumnama/cyber'>Cyber Hukumnama</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SiteMap