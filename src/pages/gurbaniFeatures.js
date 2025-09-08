import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from "react-router";
import '../assets/css/dashboard.css';
import '../assets/css/style.css';
import bannar from '../assets/img/HomeWallPaper.svg';
import 'animate.css';
import {Helmet} from "react-helmet";
function GurbaniFeatures() {
    return (
        <div>
            <Helmet>
                <title>Search Gurbani : Gurbani Research website</title>
            </Helmet>
            <section className='section-1'>                

                <div className="second-container  wow fadeInUp animated  " >
                    <div className="container">
                        <div className="row ">
                            <div className="mt-5">
                            <h4 className='second-heading mb-4'>iSearchGurbani Features:</h4>
                                        <div className='features-g'>
                                            <ul>
                                                <li className='mb-2'>-SGGS Ang by Ang . SGGS Chapter Index</li>
                                                <li className='mb-2'>-SGGS Shabad Index</li>
                                                <li className='mb-2'>-Bhai Gurdas Vaaran Index</li>
                                                <li className='mb-2'>-Kabit by Kabit</li>
                                                <li className='mb-2'>-Sri Dasam Granth Chapter Index</li>
                                                <li className='mb-2'>-Sri Dasam Granth Page by Page</li>
                                                <li className='mb-2'>-Bhai Nand Lal Baani Index </li>
                                                <li className='mb-2'>- Daily Nitnem baanis and other Baanis like Sukhmani sahib, Asa di vaar with easy navigation and pagination.</li>
                                                <li className='mb-2'>- Advanced search of Shabads from Sri Guru Granth Sahib , Bhai Gurdas Vaaran , Kabit Bhai Gurdas, Bhai Nand Lal Baani and Sri Dasam Granth Sahib with First Letter Beginning and Anywhere in Romanisation and Gurmukhi</li>
                                                <li className='mb-2'>- Advanced search with filter of Scripture, raag and Author</li>
                                                <li className='mb-2'>- Teekas and Vishraam ( Punctuation), Lareevar also available along with Gurmukhi, Hindi transliteration, Romanisation, English transliteration and Translations.</li>
                                                <li className='mb-2'>- Customised User preferences for Languages displayed, Gurmukhi font selection, Font Sizes and Background Themes. Custom Backgrounds and Customised font colors.</li>
                                                <li className='mb-2'>- Save SGGS Ang/Baani/Searched Shabad</li>
                                                <li className='mb-2'>- Share your favorite verse in email / Text message/ Facebook or Twitter.</li>
                                            </ul>
                                        </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>






        </div>
    )
}

export default GurbaniFeatures