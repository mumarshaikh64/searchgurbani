import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from "react-router";
import { Link, useLocation } from "react-router-dom";
import '../../../assets/css/dashboard.css';
import '../../../assets/css/intro.css';
import Axios from 'axios';
import { API } from "../../../config/api";
import { ApiHelper } from '../../../helpers/ApiHelper';
//import imgs from './assets/img/content/ggs_01.jpg'
import introbannar from '../../../assets/img/intro-bannar.webp';
import Spinner from '../../../components/Spinner';
import jathaImage from '../../../assets/img/content/jatha.jpg';
import tabalaImage from '../../../assets/img/content/tabla.jpg';
import raagiImage from '../../../assets/img/content/raagi.gif';
import { Helmet } from 'react-helmet';
import HelmetWrapper from '../../../components/CommonHelmet';

function GurbaniRaags() {
    const [raag, setRaag] = useState([]);
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        getRaags()
    }, [])
    const getRaags = async () => {
        await Axios.get('https://backend.searchgurbani.com/api/meta?url=raags')
            .then((resData) => {
                console.log('INTRO', resData.data.data);
                setRaag(resData.data.data)

            })
            .catch((err) => {
                console.log(err);
            })
    }
    
    return (
        <div>
            <HelmetWrapper
                title={`Gurbani Raags -: searchgurbani.com`}
                description={`Learn about Gurbani Raags- searchgurbani.com`}
                keywords="siri, devgandhari, jaitsri, bilaval, maru, sarang, majh, bihagara, todi, gond, tukhari, malar, gauri, vadahans, bairari, ramkali, kedara, kanara, asa, sorathi, tilang, nutnarain, bhairav, kalyan, gujri, dhanasri, suhi, maligaura, basant, prabhati, jaijaiwanti"
                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                url={window.location.href}
            />
            <section className='section-1'>
            <div className="container">
                <div className="second-container intro-bkg">
                    <div className="row ">
                        <div class="col-lg-12">
                        <div className='container align-items-center d-flex justify-content-center advance-search intro-border mt-5'>
                            <div class="px-1 py-1 align-middle bgv-intro">
                <div className='Gurbani-Raags p-4'>
                    <div className='container'>
                        <h2 class="inner-heading mb-4 raags-heading">Gurbani Raags</h2>
                        <ul className='raagas' >
                           <li><Link to='/raags/raag-siri'>Sri</Link> </li>
                           <li><Link to='/raags/raag-devgandhari'> Devghandhari</Link> </li>
                           <li><Link to='/raags/raag-jaitsri'>Jaitsiri </Link> </li>
                           <li><Link to='/raags/raag-bilaval'>Bilawal </Link></li>
                           <li><Link to='/raags/raag-maru'>Maru </Link></li>
                           <li><Link to='/raags/raag-sarang'>Sarang </Link></li>
                           <li><Link to='/raags/raag-majh'>Maj </Link></li>
                           <li><Link to='/raags/raag-bihagara'>Bihagra </Link></li>
                           <li><Link to='/raags/raag-todi'>Todi </Link></li>
                           <li><Link to='/raags/raag-gond'>Gaund </Link></li>
                           <li><Link to='/raags/raag-tukhari'>Tukhari </Link></li>
                           <li><Link to='/raags/raag-malar'>Malhar </Link></li>
                           <li><Link to='/raags/raag-gauri'>Gauri </Link></li>
                           <li><Link to='/raags/raag-vadahans'>Wadhans </Link></li>
                           <li><Link to='/raags/raag-bairari'>Berari </Link></li>
                           <li><Link to='/raags/raag-ramkali'>Ramkali </Link></li>
                           <li><Link to='/raags/raag-kedara'>Kedara </Link></li>
                           <li><Link to='/raags/raag-kanara'>Kanara </Link></li>
                           <li><Link to='/raags/raag-asa'>Asa </Link></li>
                           <li><Link to='/raags/raag-sorathi'>Sorath </Link></li>
                           <li><Link to='/raags/raag-tilang'>Tilang </Link></li>
                           <li><Link to='/raags/raag-nutnarain'>Nutnarain  </Link></li>
                           <li><Link to='/raags/raag-bhairav'>Bhairav </Link></li>
                           <li><Link to='/raags/raag-kalyan'>Kalyan </Link></li>
                           <li><Link to='/raags/raag-gujri'>Gujri </Link></li>
                           <li><Link to='/raags/raag-dhanasri'>Dhanasri </Link></li>
                           <li><Link to='/raags/raag-suhi'>Suhi </Link></li>
                           <li><Link to='/raags/raag-maligaura'>Mali Gaura </Link></li>
                           {/* <li><Link to='/'>Gaura </Link></li> */}
                           <li><Link to='/raags/raag-basant'>Basant </Link></li>
                           <li><Link to='/raags/raag-prabhati'>Parbhati </Link></li>
                           <li><Link to='/raags/raag-jaijaiwanti'>Jaijaiwanti  </Link></li>
                        </ul>

                    </div>
                </div>

                <div className="container">
                    <div className="second-container intro-bkg">
                        <div className="row ">
                            <div class="col-lg-12">
                                <div class="px-1 py-1 align-middle mt-0 akl-intro rag-common rewamp_wrap raag-rew">
                                    {/* <h4 className='intro-heading  mt-5'>Boundless scripture of guru granth sahib</h4> */}                                    
                                    {raag ?
                                        < div
                                        dangerouslySetInnerHTML={{
                                            __html: raag.html}} 
                                        /> : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Gurbani-Raags p-4'>
                    <div className='container'>
                        <ul className='raagas' >
                           <li><Link to='/raags/raag-siri'>Sri</Link> </li>
                           <li><Link to='/raags/raag-devgandhari'> Devghandhari</Link> </li>
                           <li><Link to='/raags/raag-jaitsri'>Jaitsiri </Link> </li>
                           <li><Link to='/raags/raag-bilaval'>Bilawal </Link></li>
                           <li><Link to='/raags/raag-maru'>Maru </Link></li>
                           <li><Link to='/raags/raag-sarang'>Sarang </Link></li>
                           <li><Link to='/raags/raag-majh'>Maj </Link></li>
                           <li><Link to='/raags/raag-bihagara'>Bihagra </Link></li>
                           <li><Link to='/raags/raag-todi'>Todi </Link></li>
                           <li><Link to='/raags/raag-gond'>Gaund </Link></li>
                           <li><Link to='/raags/raag-tukhari'>Tukhari </Link></li>
                           <li><Link to='/raags/raag-malar'>Malhar </Link></li>
                           <li><Link to='/raags/raag-gauri'>Gauri </Link></li>
                           <li><Link to='/raags/raag-vadahans'>Wadhans </Link></li>
                           <li><Link to='/raags/raag-bairari'>Berari </Link></li>
                           <li><Link to='/raags/raag-ramkali'>Ramkali </Link></li>
                           <li><Link to='/raags/raag-kedara'>Kedara </Link></li>
                           <li><Link to='/raags/raag-kanara'>Kanara </Link></li>
                           <li><Link to='/raags/raag-asa'>Asa </Link></li>
                           <li><Link to='/raags/raag-sorathi'>Sorath </Link></li>
                           <li><Link to='/raags/raag-tilang'>Tilang </Link></li>
                           <li><Link to='/raags/raag-nutnarain'>Nutnarain  </Link></li>
                           <li><Link to='/raags/raag-bhairav'>Bhairav </Link></li>
                           <li><Link to='/raags/raag-kalyan'>Kalyan </Link></li>
                           <li><Link to='/raags/raag-gujri'>Gujri </Link></li>
                           <li><Link to='/raags/raag-dhanasri'>Dhanasri </Link></li>
                           <li><Link to='/raags/raag-suhi'>Suhi </Link></li>
                           <li><Link to='/raags/raag-maligaura'>Mali Gaura </Link></li>
                           {/* <li><Link to='/'>Gaura </Link></li> */}
                           <li><Link to='/raags/raag-basant'>Basant </Link></li>
                           <li><Link to='/raags/raag-prabhati'>Parbhati </Link></li>
                           <li><Link to='/raags/raag-jaijaiwanti'>Jaijaiwanti  </Link></li>
                        </ul>

                    </div>
                </div>
                <div className='Gurbani-Raags p-4'>
                    <div className='container'>
                       <div className='raga-listWrapper'>
                            <h6 class="text-dark sub_heading-p mt-2">Other six raga names mentioned/used in Guru Granth Sahib are:</h6>
                            <ul >
                                <li>Asawari*</li>
                                <li>Lalit*</li>
                                <li>Hindol*</li>
                                <li>Vibas</li>
                                <li>Kafi</li>
                                <li>Bhopali</li>
                            </ul>
                            <p>The ragas marked with asterix (*) sign mentioned above are listed in Guru Granth Sahib's ragamala, 
                                which has a mention of a total of 64 raga names, including 6 major ragas, 30 raginis and 48 sons of ragas. 
                                Thus out of a total of 64 ragas mentioned in the ragamala, the Sikh Gurus have used only 20 (17 major names,
                                 and 3 other raga names) ragas and have used 17 (14 major names and 3 other names) other ragas which are 
                                 not mentioned in the Guru Granth Sahib's ragamala.</p>
                       </div>

                       <div className='raga-listWrapper'>
                            <h6 class="text-dark sub_heading-p mt-5">Specialist Terminology to understand musical terms used in the following pages.</h6>
                            <h6 className='text-dark' ><b>1. Thaat- </b>The tune of seven ascending and descending notes is called 'Thath oio' ,</h6>
                            <ul >
                                <li>A Thaat must have seven notes out of the twelve notes [Seven Shuddha, Four komal (Re, Ga, Dha , Ni), one teevra (Ma) ], placed in an ascending order. Both the forms of the notes can be used.</li>
                                <li>Thaat has only an Aaroha.</li>
                                <li>Thaats are not sung but the raags produced from the Thaats are sung.</li>
                                <li>Thaats are named after the popular raag of that Thaat. For example Bhairavi is a popular raag and the thaat of the raag Bhairavi is named after the raag.</li>
                            </ul>
                            <p>The ragas marked with asterix (*) sign mentioned above are listed in Guru Granth Sahib's ragamala, 
                                which has a mention of a total of 64 raga names, including 6 major ragas, 30 raginis and 48 sons of ragas. 
                                Thus out of a total of 64 ragas mentioned in the ragamala, the Sikh Gurus have used only 20 (17 major names,
                                 and 3 other raga names) ragas and have used 17 (14 major names and 3 other names) other ragas which are 
                                 not mentioned in the Guru Granth Sahib's ragamala.</p>
                       </div>

                       <div className='raga-listWrapper'>
                            <h6 class="text-dark sub_heading-p mt-5">The music books record ten basic thaats:</h6>
                            <ul >
                                <li><Link to='/'>Kalyan </Link></li>
                                <li><Link to='/'>Bilaval </Link></li>
                                <li><Link to='/'>Khamaj </Link></li>
                                <li><Link to='/'>Bhairav </Link></li>
                                <li><Link to='/'>Bhairvi </Link></li>
                                <li><Link to='/'>Asawari </Link></li>
                                <li><Link to='/'>Todi </Link></li>
                                <li><Link to='/'>Poorvi </Link></li>
                                <li><Link to='/'>Marwa </Link></li>
                                <li><Link to='/'>Kafi </Link></li>
                            </ul>
                            <div class="sub_heading-p mt-3 thays"><b>2. Arohi</b> - The ascending scale (sa re ga ma pa dha ni sa) .This is the pattern of notes in which a Raag ascends the scale.</div>
                            <div class="sub_heading-p mt-2 thays"><b>3. Avrohi</b> - The descending scale (sa ni dha pa ma ga re sa) This is the pattern of notes in which a Raag decends the scale.</div>
                            <div class="sub_heading-p mt-2 thays"><b>4. Vadi</b>- The most popular note ,This is a note which is strongly emphasised within a particular Raag. </div>
                            <div class="sub_heading-p mt-2 thays"><b>5. Samvadi</b>- The second most popular note,This is a note which is emphasised within a particular Raag, but not as much as the Vadi. </div>
                            <div class="sub_heading-p mt-2 thays"><b>6. Aurav</b>- A raga of five notes </div>
                            <div class="sub_heading-p mt-2 thays"><b>7. Khaurav</b>- A raga of six notes </div>
                            <div class="sub_heading-p mt-2 thays"><b>8. Sampooran</b>- A raga of seven notes </div>
                            <div class="sub_heading-p mt-2 thays"><b>9. Aurav-Khaurav</b>- Where arohi has five notes, but avrohi has six notes. </div>
                            <div class="sub_heading-p mt-2 thays"><b>10. Khaurav-Aurav</b>- Where arohi has six notes, but avrohi has five notes. </div>
                            <div class="sub_heading-p mt-2 thays"><b>11. Aurav-Sampooran</b>- Where arohi has five notes, but avrohi has seven notes </div>
                            <div class="sub_heading-p mt-2 thays"><b>12. Khaurav-Sampooran</b>- Where arohi has six notes, but avrohi has seven notes. </div>
                            <div class="sub_heading-p mt-2 thays"><b>13. Sampooran-Aurav</b>- Where arohi has seven notes, but avrohi has five notes. </div>
                            <div class="sub_heading-p mt-2 thays"><b>14. Sampooran-Khaurav</b>- Where arohi has seven notes, but avrohi has six notes. </div>
                            <div class="sub_heading-p mt-2 thays mb-4"><b>15. Saptaks </b>- This refers to three divisions of a harmonium </div>
                            <ul >
                                <li>Mandar - first (top) part of seven notes</li>
                                <li>Middle - central part of seven notes</li>
                                <li>Tar - last part of seven notes.</li>
                            </ul>
                            <div class="text-dark sub_heading-p mt-2"> . 16. The notes can be soft (komal) or sharp (teever)</div>
                       </div>
                       <div className='raga-listWrapper'>
                         <h6 class="text-dark sub_heading-p mt-5">Musical terms regarding a presentation of a raag in vocal style</h6>
                         <div class="text-dark sub_heading-p mt-2"><b>1.Sthayee</b> : The first part of the composition. Mainly develops in the the lower and the middle octave.</div>
                         <div class="text-dark sub_heading-p mt-2"><b>2.Antaraa</b> : Second part of the composition. Develops in the middle or higher note. </div>
                         <div class="text-dark sub_heading-p mt-2"><b>3.Mukhadaa</b> : The first line of the composition. </div>
                       </div>  
                       <div className='raga-listWrappe blue'>
                         <h6 class="text-dark sub_heading-p mt-5">Common Themes of Shabads placed under Raags of Guru Granth Sahib</h6>
                         <ol>
                            <li>Soohi - Being away from home. The soul being away from the House of Lord and the joy of meeting the true husband.</li>
                            <li>Bilaaval - beautification of soul, happiness.</li>
                            <li>Gaund - Separation, union, surprise.</li>
                            <li>Sri - Maya and detachment</li>
                            <li>Maajh - yearning to merge with Lord, giving up of negative values.</li>
                            <li>Gauri - Principles, serious, thoughtfulness, composed</li>
                            <li>Aasa - Hope</li>
                            <li>Gujri - Prayer (Pooja)</li>
                            <li>Devgandhari - Merging with spouse, self - realization</li>
                            <li>Bihaagra - Yearning due to separation of soul and happiness due to meeting the Lord.</li>
                            <li>Sorath - Merits of God</li>
                            <li>Dhanasari - Mixed theme</li>
                            <li>Jaitsree - Stability</li>
                            <li>Todi - Maya, separation</li>
                            <li>Bairagi - motivation to sing praises of Lord</li>
                            <li>Tilang - many words from the vocabulary of Islamic origins are used, sadness, beautification.</li>
                            <li>Raamkali - to give up the life of a wandering Jogi.</li>
                            <li>Nat Narayan - Joy of meeting the Lord</li>
                            <li>Maali Gaura - Happiness </li>
                            <li>Maaru - Bravery </li>
                            <li>Tukhari - Separation and union with Lord </li>
                            <li>Kedara - Love </li>
                            <li>Bhairav - Man's state of hell </li>
                            <li>Basant - Happiness </li>
                            <li>Sarang - Thirst to meet God </li>
                            <li>Malaar - State of separated and united soul </li>
                            <li>Jaijawanti - Vairaag (Detachment) </li>
                            <li>Kalyaan - Bhakti (Prayer) Ras </li>
                            <li>Vadhans - Vairaag (Detachment) </li>
                            <li>Parbhati - Bhakti (Prayer) </li>
                            <li>Kaanra - Bhakti (Prayer) </li>
                         </ol>
                       </div>  

                        <div className='raga-listWrappe green'>
                            <h6 class="text-dark sub_heading-p mt-5">Feelings communicated by the music of Raags</h6>
                            <ol>
                                <li> Soohi - joy and separation</li>
                                <li> Bilaaval - happiness</li>
                                <li> Gaund - strangeness, surprise, beauty</li>
                                <li> Sri - satisfaction and balance</li>
                                <li> Maajh - loss, beautification</li>
                                <li> Gauri - seriousness</li>
                                <li>  Aasa - making effort</li>
                                <li> Gujri - satisfaction, softness of heart, sadness</li>
                                <li> Devgandhari - no specific feeling but the Raag has a softness</li>
                                <li> Bihaagra - beautification</li>
                                <li>  Sorath - motivation</li>
                                <li>  Dhanasari - inspiration, motivation</li>
                                <li>  Jaitsree - softness, satisfaction, sadness</li>
                                <li>  Todi - this being a flexible Raag it is apt for communicating many feelings</li>
                                <li> Bhairaagi - sadness, (Gurus have, however, used it for the message of Bhakti)</li>
                                <li>  Tilang - this is a favourite Raag of Muslims. It denotes feeling of beautification and yearning.</li>
                                <li>  Raamkali - calmness</li>
                                <li>  Nat Narayan - happiness</li>
                                <li>  Maali Gaura - happiness</li>
                                <li>   Maaru - giving up of cowardice</li>
                                <li>   Tukhari - beautification</li>
                                <li>   Kedara - love and beautification</li>
                                <li>   Bhairav - seriousness, brings stability of mind</li>
                                <li>  Basant - happiness</li>
                                <li>   Sarang - sadness</li>
                                <li>   Malaar - separation</li>
                                <li>   Jaijawanti - viraag</li>
                                <li>   Kalyaan - Bhakti Ras</li>
                                <li>   Vadhans - vairaag, loss (that is why Alahniya is sung in this Raag when someone passes away)</li>
                                <li>   Parbhati - Bhakti and seriousness</li>
                                <li>  Kaanra - Bhakti and seriousness</li>
                            </ol>
                       </div> 

                        <div className='raga-listWrappe blue'>
                        <div class="text-dark sub_heading-p mt-2 thays">Excerpts taken from:</div>
                        <div class="text-dark sub_heading-p mt-2 thays">Guru Granth Sahib: An Advance Study</div>
                        <div class="text-dark sub_heading-p mt-2 thays">Dr Sukhbir Singh Kapoor</div>
                        <div class="text-dark sub_heading-p mt-2 thays">and other sources</div>
                           
                       </div>         

                    </div>
                </div>
                <div className='Gurbani-Raags p-4'>
                    <div className='container'>
                        <ul className='raagas' >
                           <li><Link to='/raags/raag-siri'>Sri</Link> </li>
                           <li><Link to='/raags/raag-devgandhari'> Devghandhari</Link> </li>
                           <li><Link to='/raags/raag-jaitsri'>Jaitsiri </Link> </li>
                           <li><Link to='/raags/raag-bilaval'>Bilawal </Link></li>
                           <li><Link to='/raags/raag-maru'>Maru </Link></li>
                           <li><Link to='/raags/raag-sarang'>Sarang </Link></li>
                           <li><Link to='/raags/raag-majh'>Maj </Link></li>
                           <li><Link to='/raags/raag-bihagara'>Bihagra </Link></li>
                           <li><Link to='/raags/raag-todi'>Todi </Link></li>
                           <li><Link to='/raags/raag-gond'>Gaund </Link></li>
                           <li><Link to='/raags/raag-tukhari'>Tukhari </Link></li>
                           <li><Link to='/raags/raag-malar'>Malhar </Link></li>
                           <li><Link to='/raags/raag-gauri'>Gauri </Link></li>
                           <li><Link to='/raags/raag-vadahans'>Wadhans </Link></li>
                           <li><Link to='/raags/raag-bairari'>Berari </Link></li>
                           <li><Link to='/raags/raag-ramkali'>Ramkali </Link></li>
                           <li><Link to='/raags/raag-kedara'>Kedara </Link></li>
                           <li><Link to='/raags/raag-kanara'>Kanara </Link></li>
                           <li><Link to='/raags/raag-asa'>Asa </Link></li>
                           <li><Link to='/raags/raag-sorathi'>Sorath </Link></li>
                           <li><Link to='/raags/raag-tilang'>Tilang </Link></li>
                           <li><Link to='/raags/raag-nutnarain'>Nutnarain  </Link></li>
                           <li><Link to='/raags/raag-bhairav'>Bhairav </Link></li>
                           <li><Link to='/raags/raag-kalyan'>Kalyan </Link></li>
                           <li><Link to='/raags/raag-gujri'>Gujri </Link></li>
                           <li><Link to='/raags/raag-dhanasri'>Dhanasri </Link></li>
                           <li><Link to='/raags/raag-suhi'>Suhi </Link></li>
                           <li><Link to='/raags/raag-maligaura'>Mali Gaura </Link></li>
                           {/* <li><Link to='/'>Gaura </Link></li> */}
                           <li><Link to='/raags/raag-basant'>Basant </Link></li>
                           <li><Link to='/raags/raag-prabhati'>Parbhati </Link></li>
                           <li><Link to='/raags/raag-jaijaiwanti'>Jaijaiwanti  </Link></li>
                        </ul>

                    </div>
                </div>
                <div className='container mb-5'>
                <div className='raga-links'>
                    <Link to='/raags/raags_time'>Timing of Gurbani Raags</Link>
                    <Link to='/taal'>Taals in Gurbani Sangeet</Link>
                    <Link to='/raags/glossary'>Glossary of Indian Musical Terms</Link>
                    <Link to='/saaj'>Musical Instruments</Link>
                </div>
                </div>
                </div></div></div></div></div></div>

                {loader && <Spinner />}
            </section>
            
        </div>
    )
}

export default GurbaniRaags