import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from "react-router";
import '../assets/css/dashboard.css';
import '../assets/css/style.css';
import bannar from '../assets/img/HomeWallPaper.svg';
import 'animate.css';
import {Helmet} from "react-helmet";
import HelmetWrapper from '../components/CommonHelmet';
function DiscoverMore() {
    return (
        <div>
            <HelmetWrapper
                title={`Search Gurbani : Gurbani Research website`}
                description={`A comprehensive web site on research and  exploration of Sri Guru Granth Sahib, Amrit Keertan Gutka, Bhai Gurdas Vaaran, Kabit Bhai Gurdaas ,Sri Dasam Granth Sahib, exegesis , Gurbani, Gurbanee vichaar`}
                keywords=""
                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                url={window.location.href}
            />
            <section className='section-1'>
                <div className=" justify-content-md-center align-items-center">
                    <div className='banner-img'>
                        <img src={bannar} className="img-fluid" alt="Responsive image" />
                    </div>
                </div>

                <div className="second-container  wow fadeInUp animated  " >
                    <div className="container-fluid ">
                        <div className="row ">
                            <div className="px-5 py-5 mt-5">
                                <div className="px-2 py-2 align-middle">
                                    <h4 className='second-heading'>Pathway to God:  Sri Guru Granth Sahib Ji</h4>
                                    <p className='second-para'> Sri Guru Granth Sahib is indeed unique in its thought,
                                        literary expression and the message it continues to communicate centuries after it was written.
                                        Exalted thought needs to be transported on the vehicle of language to reach the masses.
                                        Poetic expression lifts prose to a higher plane. When verse and music meld,
                                        their beauty and sweetness makes mind transcend the humdrum of rational existence.</p>
                                    <p className='second-para'>The sacred verses of Sri Guru Granth Sahib are called Gurbani,
                                        which means the Guru's word or the song messages enshrined in Sri Guru Granth Sahib.
                                        In Sikhism, the Guru is the "Wisdom of the Word" and not a human or a book.
                                        God revealed the Word through the holy men and women from time to time,
                                        and the most recent revelations were entered in the text of Sri Guru Granth Sahib.</p>
                                    <p className='second-para'>SearchGurbani.com brings to you a unique and comprehensive approach to explore and
                                        experience the word of God. We have the Sri Guru Granth Sahib Ji , Amrit Keertan Gutka , Bhai Gurdaas Vaaran ,
                                        Kabit Bhai Gurdaas , Bhai Nand Lal Baani and Sri Dasam Granth Sahib. You can explore these scriptures page
                                        by page or search for a keyword in either one or all of the scriptures.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>






        </div>
    )
}

export default DiscoverMore