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
import Helmet from 'react-helmet';
import HelmetWrapper from '../../../components/CommonHelmet';

function Golssary() {
    const [raag, setRaag] = useState([]);
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false);


    return (
        <div>
            <HelmetWrapper
                title={`Glossary of Indian Musical Terms -: searchgurbani.com`}
                description={`Glossary of Indian Musical Terms in Gurbani Raags- searchgurbani.com`}
                keywords="saaj, tabla, veena, surinda, rabab, sarangi, flute, harmonium"
                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                url={window.location.href}
            />

            {loader && <Spinner />}
            <section className='p-5' >
                <div className='container'>
                    <div className="second-container intro-bkg">
                        <div className="row ">
                            <div class="col-lg-12">
                                <div className='container align-items-center d-flex justify-content-center advance-search intro-border mt-5'>
                                    <div class="px-5 py-5 align-middle  bgv-intro">
                                        <div className='row'>
                                        <div class="px-1 py-1 align-middle mt-0 dev-giri rag-common rewamp_wrap rewamp-head-centerss">
                                                        
                                                        <h2>Glossary of Musical Terms</h2>
                                                        <hr></hr>
                                                        </div>
                                            <ul className='letters mt-2 '>
                                                <li><a href='#'> <b>A</b></a> </li>
                                                <li><a href='#'> <b>B</b></a> </li>
                                                <li><a href='#'> <b>C</b></a> </li>
                                                <li><a href='#'> <b>D</b></a> </li>
                                                <li><a href='#'> <b>F</b></a> </li>
                                                <li><a href='#'> <b>G</b></a> </li>
                                                <li><a href='#'> <b>K</b></a> </li>
                                                <li><a href='#'> <b>L</b></a> </li>
                                                <li><a href='#'> <b>M</b></a> </li>
                                                <li><a href='#'> <b>N</b></a> </li>
                                                <li><a href='#'> <b>P</b></a> </li>
                                                <li><a href='#'> <b>R</b></a> </li>
                                                <li><a href='#'> <b>S</b></a> </li>
                                                <li><a href='#'> <b>T</b></a> </li>
                                                <li><a href='#'> <b>U</b></a> </li>
                                                <li><a href='#'> <b>V</b></a> </li>
                                            </ul>
                                        </div>
                                        <div className='row'>
                                            <table className='table table-responsive mb-5 glossary' >
                                                <thead>
                                                    <tr>
                                                        <th>A</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Akar</td>
                                                        <td>The singing of melody using the vowel sound aa. It can be sung
                                                            with rhythm as improvisation or without rhythm in alap form.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Alankar</td>
                                                        <td>Exercises of specific note combinations which normally possess symmetrical ascent and descent.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Alap</td>
                                                        <td>	Introduction of the raga without rhythm. It is designed to set the mood of the raga using its common note phrases. Alap can be sung in many styles most notably in sargam and akar.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Antara</td>
                                                        <td>It is the second part of a composition or bandish normally consisting of notes in the tar saptak (high scale).</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Aroh</td>
                                                        <td>The ascent of notes in a raga.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Ati</td>
                                                        <td>Denotes an extreme. For example ati vilambit laya would be considered to be very slow tempo.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Avroh</td>
                                                        <td>The descent of notes in a raga.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Avartan</td>
                                                        <td>The completion of one cycle of a tal.</td>
                                                    </tr>

                                                </tbody>
                                            </table>

                                            <table className='table table-responsive mb-5 glossary' >
                                                <thead>
                                                    <tr>
                                                        <th>B</th>
                                                        <th><button className='tab-top' onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }}>Top <i class="bi bi-arrow-up"></i></button></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Bada Khayal</td>
                                                        <td>See khayal.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Baj</td>
                                                        <td>A style or school of playing generally referred to by gharana.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Bandish</td>
                                                        <td>A composition that consists of words. A bandish is more commonly referred to in classical music to refer to a well-known piece in a particular raga. They are taught in order to help the student to understand classical music since it is the bandish itself which characterises many of the elements of the raga.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Bayan</td>
                                                        <td>The left hand drum of a tabla set normally measuring 9-12 inches in diameter and made with metal alloy frame such as copper, brass or aluminium. When played it is considered to produce the bass sound of the tabla and is normally played with the left hand. Amongst others it produces the tabla bols or notes Ghi, Ghe, Ke, Ki Ka and Kat.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Bhajan</td>
                                                        <td>A devotional song sung in light classical style set normally to 6,7 or 8 beat cycles. The traditional bhajan has been popularised by many famous saints or gurus of the Eastern sub-continent such as Meera, Tulsidas, Surdas and Krishna. Many mystical bhajans describe the poet’s unconditional love for their guru to whom they owe their inner experiences. These bhajans are a speciality of the Gujarat region and are appropriately referred to as sant vani (words of the saint).</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Bol</td>
                                                        <td>	Words. In musical terms it refers to the words of a composition or tabla notes.</td>
                                                    </tr>

                                                </tbody>
                                            </table>

                                            <table className='table table-responsive mb-5 glossary' >
                                                <thead>
                                                    <tr>
                                                        <th>C</th>
                                                        <th><button className='tab-top' onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }}>Top <i class="bi bi-arrow-up"></i></button></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Chalan</td>
                                                        <td>Movement or flow. The character of a melodic pattern which represents the flow of the raga in question.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Chakradar</td>
                                                        <td>A pre-composed tabla composition which normally contains an in-built tihai but is played three times over and is mathematically calculated to end on the sum of the underlying time-cycle.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Chota Khayal</td>
                                                        <td>See khayal.</td>
                                                    </tr>

                                                </tbody>
                                            </table>

                                            <table className='table table-responsive mb-5 glossary' >
                                                <thead>
                                                    <tr>
                                                        <th>D</th>
                                                        <th><button className='tab-top' onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }}>Top <i class="bi bi-arrow-up"></i></button></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Dayan</td>
                                                        <td>Sometimes called dahina. The right hand drum of a tabla set usually measuring 4-6 inches in diameter and made of wooden frame. The treble sound of the tabla normally played with the right hand producing the tabla bols or notes<i> Na, Ta, Tin, Tee, Te, Tu, Tet, Tak, Trak, Din</i> and others.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Dhaivat</td>
                                                        <td>See saptak.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Dhrupad</td>
                                                        <td>Considered to be the oldest genre of singing it covers themes such as philosophy, devotion and celebration of the seasons. It descended from spiritual music called praband, a style which existed around the thirteenth century. Today’s style of dhrupad came about in the courts around the fifteenth century. There are now few specialist dhrupad singers for various reasons including lack of popularity. The piece begins with an extended alap section which gradually increases in speed and uses the bolsna, ne, ri,re, di,de. The composition (itself called dhrupad) follows and is normally played in chau tal, a cycle of 12 beats, by the pakhavaj player. The dhamar variation of dhrupad is played in 14 beats or dhamar tal. Most exponents can be linked in some way to the Dagar family and their disciples. Recordings of Zahiruddin and Wasifuddin Dagar are available as are those of the Gundecha Brothers.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Dhun</td>
                                                        <td>A light classical piece normally played in instrumental form based on a folk melody. They are most commonly played in 8 matra (beat) cycle or tal keherva.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Drut</td>
                                                        <td>See laya.</td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <table className='table table-responsive mb-5 glossary' >
                                                <thead>
                                                    <tr>
                                                        <th>F</th>
                                                        <th><button className='tab-top' onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }}>Top <i class="bi bi-arrow-up"></i></button></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Filmi Geet</td>
                                                        <td>Songs that are specifically used in movies. They refer to Bollywood or Hindi film song titles. Among the thousands of playback singers over the last sixty years none stand out more than Lata Mangeshkar and Mohammed Rafi.</td>
                                                    </tr>

                                                </tbody>
                                            </table>

                                            <table className='table table-responsive mb-5 glossary' >
                                                <thead>
                                                    <tr>
                                                        <th>G</th>
                                                        <th><button className='tab-top' onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }}>Top <i class="bi bi-arrow-up"></i></button></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Gandhar</td>
                                                        <td>See saptak.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Gat</td>
                                                        <td>An improvisational instrumental composition. Also a tabla composition made up of certain bols specific to the learning style that allows room for improvisation and normally follows a kaida in a tabla solo performance.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Gayaki</td>
                                                        <td>A style of singing.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Gharana</td>
                                                        <td>Household or Family. Used to refer to a particular style where the basis would have been the rigid guru-shishya parampara or teacher-disciple learning system. The academic Deshpande suggests that a school could only be called a gharana if it were in existence for at least three generations and had markedly different stylistic features from other schools.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Ghazal</td>
                                                        <td>From the Arabic literally meaning talking to women. It is said to have originated in tenth century Iran from the Persian qasida. The part of the qasida called tashbib got detached over years and formed the ghazal. The ghazal, written in Urdu, now rarely exceeds twelve couplets and always opens with a rhyme called matla. Each couplet is self-sufficient, detachable and quotable. The central concern of the ghazal is love but political, social and moral themes are also found. Arguably the most famous writer of ghazal was Ghalib (1797-1869). There are many renown musical exponents of today and yesteryear such as Talat Mahmood, Mehdi Hassan, Ghulam Ali, Hariharan and Jagjit Singh.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Guru-Shishya Parampara</td>
                                                        <td>The traditional teacher-disciple method of learning all forms of Indian classical music. The teacher would impart knowledge on the student that he had gained from his teacher thus maintaining a lineage of artists and protection of the musical material upon which the style was based. This method required of the student almost total dedication to the teacher's art and learning in this format would normally be in a particular style or gharana.</td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <table className='table table-responsive mb-5 glossary' >
                                                <thead>
                                                    <tr>
                                                        <th>K</th>
                                                        <th><button className='tab-top' onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }}>Top <i class="bi bi-arrow-up"></i></button></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Kaida</td>
                                                        <td>Rule or law. Integral to learning tabla a kaida is a theme or an idea which could use quite simple notes but which is then expanded using the specific techniques of the style of tabla being learnt. The expansions or variations of the kaida are referred to as paltas. It is an improvisational part of a tabla solo performance at an advanced level but can also be used as a tabla exercise at a simple one.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Kathak</td>
                                                        <td>A style of north Indian dancing which traditionally uses the pakhawaj for accompaniment.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Kawali</td>
                                                        <td>Sometimes written as 'qawwali'. Literally means utterance. It is sung in a variety of rhythms and in this style the lead vocalist will sing a line which is then repeated by several stage singers. The base rhythm is clapped throughout rendition. It's origins can be traced to the tenth century in Persia and kawali in its present form started at the end of the thirteenth century in the Indian sub-continent developed by Amir Khusro. It is considered the devotional music of the Sufis, a mystical sect of the Islamic faith with emphasis placed on inner experience and attaining enlightenment. The most famous kawali singer is of course the late Ustad Nusrat Fateh Ali Khan. Current exponents of this style are Begum Abida Parveen and Sabri Brothers.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Khali</td>
                                                        <td>Literally meaning empty it is a beat or matra played with a dampened or closed sound. The importance of the khali is to make the vocalist or instrumentalist aware of the imminent sum or to help to ascertain where he is in a long tal or beat cycle. It is denoted by a '0' clearly marked on top of the beat or matra. There can only ever be one khali in a given tal.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Khayal</td>
                                                        <td>Thought, idea, conception, imagination, lyric. Historically said to be a mixture of kawali and dhrupad styles. Compositions of khayal are now the most common form of presentation of classical Hindustani music covering aspects such as love, separation, the seasons and praise of various gods and goddesses. A performance normally consists of bada or main khayal sung in slow speed followed by chota or short khayal sung in faster tempo. Khayal has two sections called stai and antara and the presentation of these parts depends on the gharana or style of the artist.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Komal</td>
                                                        <td>A flat of an equivalent note or swar. In Indian classical music the notes Re, Ga, Dha and Ni possess flat notes in any given saptak or scale. Komal notes are denoted by a line under the note.</td>
                                                    </tr>

                                                </tbody>
                                            </table>

                                            <table className='table table-responsive mb-5 glossary' >
                                                <thead>
                                                    <tr>
                                                        <th>L</th>
                                                        <th><button className='tab-top' onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }}>Top <i class="bi bi-arrow-up"></i></button></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Laggi</td>
                                                        <td>A fast rendition of certain pre-composed note combinations on tabla in a particular tal to add dynamism and effect to accompaniment. Laggi is normally played towards the end of a thumri performance and rendered frequently in the accompaniment of ghazal.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Laya</td>
                                                        <td>Means the tempo or speed of the tal. Three well-known general speeds are referred to as vilambit or slow, madya or medium and drut or fast. The basic tempo is referred to as barabar or thah laya which normally means the original speed or one note per beat (one bol per matra). A doubling of barabar would be referred to as duggun. It is not in itself an exact timing but it would be mathematically a doubling of barabar speed. So if barabar was one note per beat then duggun would be two notes per beat. Laya can also sometimes refer to the emphasis placed on certain notes in any given time cycle.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Layakari</td>
                                                        <td>Improvisation of words in a khayal piece designed to show the thayari (literally readiness or virtuosity) of the performer.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Lehera</td>
                                                        <td>A simple melody set to a specific number of beats that repeats itself for the purpose of holding a rhythm for a tabla solo performance. It can be played on sarangi but normally on harmonium.</td>
                                                    </tr>

                                                </tbody>
                                            </table>

                                            <table className='table table-responsive mb-5 glossary' >
                                                <thead>
                                                    <tr>
                                                        <th>M</th>
                                                        <th><button className='tab-top' onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }}>Top <i class="bi bi-arrow-up"></i></button></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Madya</td>
                                                        <td>See laya or saptak.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Madyam</td>
                                                        <td>See saptak.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Mandra</td>
                                                        <td>See saptak.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Matra</td>
                                                        <td>A single beat in a time cycle.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Mohra</td>
                                                        <td>	The ending phrase of a piece of improvisation in a composition. It can also refer to a short tabla composition ending in a tihai played in some styles at the beginning of a tabla solo.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Murchana</td>
                                                        <td>The practice of changing the keynote of a raga whilst keeping the notes intact and thereby forming a new raga. It used to be rarely undertaken in performance. Can also be a method used to learn new scales in music.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Mukra</td>
                                                        <td>The opening of an instrumental or vocal composition. The part of the bandish that is played up until the first beat of the time cycle. Can also refer to a short tabla composition which is normally designed to emphasize the first beat of the time cycle or sum.</td>
                                                    </tr>

                                                </tbody>
                                            </table>

                                            <table className='table table-responsive mb-5 glossary' >
                                                <thead>
                                                    <tr>
                                                        <th>N</th>
                                                        <th><button className='tab-top' onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }}>Top <i class="bi bi-arrow-up"></i></button></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Nishaad</td>
                                                        <td>See saptak.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Nom-Tom</td>
                                                        <td>Use of the syllables na, ni, re, de, da et al to bring out the components of a raga. Normally, nom-tom is used in alap form in the dhrupad genre of singing.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Nyas</td>
                                                        <td>The ending note of a particular phrase of notes. The designated pause note of a particular raga.</td>
                                                    </tr>

                                                </tbody>
                                            </table>

                                            <table className='table table-responsive mb-5 glossary' >
                                                <thead>
                                                    <tr>
                                                        <th>P</th>
                                                        <th><button className='tab-top' onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }}>Top <i class="bi bi-arrow-up"></i></button></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Pakad</td>
                                                        <td>A phrase of note combinations usually no more than five notes in length that when played exemplifies the flow or character of the raga. It's purpose largely looses relevance to the advanced artist who will be well trained in understanding the main note combinations of the main ragas. It is however an important starting point for most musicians.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Pakhawaj</td>
                                                        <td>In the same mould as a tabla but is formed as a single drum and was used in accompaniment of north Indian or Hindustani classical music. Largely extinct on the concert stage now due to the demise in popularity of the dhrupad style of singing that the drum traditionally accompanied. It is responsible for the majority of tabla solo repertoire which exists today and is therefore of considerable historical significance.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Palta</td>
                                                        <td>Exercises designed to learn fingering, note and sound production of an instrument. Also refers to expansions or variations of a tabla theme called kaida. Each variation is different from its preceding palta.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Pancham</td>
                                                        <td>See saptak.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Paran</td>
                                                        <td>A composition traditionally formed from the pakhawaj playing style which was designed to describe an action. The pieces were changed into tabla format and used in the north Indian dance genre kathak and therefore require the player to produce heavy handed open sounds akin to styles like Benares.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Peshkar</td>
                                                        <td>To present. An opening composition of a tabla solo based on the set rhythm. It is normally played in slow tempo or vilambitlaya.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Purvang</td>
                                                        <td>The lower tetrachord of a saptak which consists of Sa, Re, Ga and Ma.</td>
                                                    </tr>


                                                </tbody>
                                            </table>

                                            <table className='table table-responsive mb-5 glossary' >
                                                <thead>
                                                    <tr>
                                                        <th>R</th>
                                                        <th><button className='tab-top' onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }}>Top <i class="bi bi-arrow-up"></i></button></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Raga</td>
                                                        <td>A melodic structure of fixed notes or swars but which has certain characteristics pertaining to rules governing their presentation. See the website question 'what is a raga?' for more in-depth detail about a raga's characteristics.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Rela</td>
                                                        <td>Rushing. A tabla piece which is composed specifically so that the notes that can be played in quick succession. A rela is normally played at the end of a solo tabla performance as a flourish.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Rishab</td>
                                                        <td>see saptak.</td>
                                                    </tr>

                                                </tbody>
                                            </table>

                                            <table className='table table-responsive mb-5 glossary' >
                                                <thead>
                                                    <tr>
                                                        <th>S</th>
                                                        <th><button className='tab-top' onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }}>Top <i class="bi bi-arrow-up"></i></button></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Sum</td>
                                                        <td>	The first beat of a time cycle or tal. The most emphasized beat represented by the symbol 'x' above the starting note. The essence of improvisational understanding in Indian classical music.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Samvadi</td>
                                                        <td>The secondary note of importance in a raga behind the vadi. The complimentary note of the vadi in a raga. Some artists demonstrate its importance by singing or playing their opening variations of an alap around the samvadi.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Saptak</td>
                                                        <td>Sapt literally means seven. It is quite simply the Indian classical music scale. It refers to the entire set of seven swars or notes of the Indian classical scale; shadaj (Sa), rishab (Re), gandhar (Ga), madyam (Ma), pancham (Pa), dhaivat (Dha), nishaad (Ni). There are mainly three such scales or saptak; mandra refers to the lower scale and notes are written with dots underneath them, madya to the middle scale and tar to the higher scale where notes are written with dots above them. It is similar to the Western octave although the eighth note is not counted since it is in the same pitch as the starting note. In actuality there are twelve notes in a given scale since Re, Ga, Dha, and Ni have equivalent flat or komal notes which are written with a line underneath them and Ma has an equivalent sharp or tivra which has a line above it, taking the total to twelve.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Shadaj</td>
                                                        <td>See saptak.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Shuddha</td>
                                                        <td>The pure or natural notes or swars of which there are seven in a given saptak.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Shruti</td>
                                                        <td>To hear. Sound intervals that the ear can reasonably discern which exist between recognised notes or swars.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Stai</td>
                                                        <td>Sometimes called asthai. It is the opening part of a composition or bandish rarely consisting of notes in the tarsaptak (high scale).</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Swar</td>
                                                        <td>Note or pitch.</td>
                                                    </tr>

                                                </tbody>
                                            </table>

                                            <table className='table table-responsive mb-5 glossary' >
                                                <thead>
                                                    <tr>
                                                        <th>T</th>
                                                        <th><button className='tab-top' onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }}>Top <i class="bi bi-arrow-up"></i></button></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Tabla</td>
                                                        <td>	From the Arabic 'tabl' meaning drum. The traditional percussion instrument of north India it is played on two separate drums referred to as bayan (left) or duggi, made of a metal alloy frame and dayan (right), made of a wooden frame. Both are covered by goatskin. It is said to be no more than 300 years old and takes most of it's repertoire from the older pakhawaj. The Delhi gharana (style) is considered to be the oldest tabla playing style. Tabla has embedded itself as the foremost Eastern percussion instrument abroad and has been popularised by famous exponents like Ustad Zakir Hussein, Pandit Anindo Chatterjee and more recently in the percussion fusion sounds of Trilok Gurtu.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Tal</td>
                                                        <td>A cycle of matras or beats used as a standard for accompaniment in Indian music.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Tali</td>
                                                        <td>Literally means a clap. The sum is the first tali and is marked with a 'x'. Written therefore by a number other than '1' it is normally played with emphasis and is denoted by its place in the order of talis in a particular tal or beat cycle after the sum. ie '2', '3' etc</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Tan</td>
                                                        <td>A common improvisational element of classical and light vocal and instrumental styles using sargam (the swars names like Sa and Ga etc), akar (aa sounding vowel syllable) and ekar, ookar etc. It is normally sung at double the speed of the composition.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Tar</td>
                                                        <td>See saptak.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Tarana</td>
                                                        <td>A composition using certain syllables which normally ends a presentation of a full raga performance and is sung in madya (medium) or drut (fast) laya (speed). Examples of such syllables may be taken from Indian drums like Ta, Di, Re, Na, Da, Ni, Dhim, Nom and Tom.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>That</td>
                                                        <td>A system created by Pandit Bhatkande in the 1920's in order to classify all ragas into one of ten parent scales. Although flawed in certain respects the system acts as a good starting point for learning ragas containing varying notes.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Theka</td>
                                                        <td>The particular bols or notes that make up a given tal or beat cycle. Certain thekas would be considered to be central to understanding a tal and could be classed as main thekas. Other thekas, whilst still maintaining the same tal, are learnt for the specific use of certain types of accompaniment in lighter genres of classical music such as ghazal, bhajan and filmi geet.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Thumri</td>
                                                        <td>A song normally sung in a language traditional to the Agra-Mathura region called Brij which can have several themes such as love or the stories of Krishna. Traditionally it was sung by females and used only certain ragas. After political change the traditional aristocratic styled bandish thumri which resembled the khayal genre of the Delhi and Avadh courts gradually became eclipsed by the bol banao thumri from Benares, a more serious slower style thumri. Bade Gulam Ali Khan was considered to be the greatest thumri singer of the recent generation. There are many modern exponents.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Tihai</td>
                                                        <td>A phrase of notes or bols with or without gaps repeated three times which normally ends on the sum or the first beat of a time cycle. The gaps must be of equal length in time.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Tivra</td>
                                                        <td>A sharp note. In Indian classical notation Ma is the only swar or note in a given saptak that contains an equivalent sharp form referred to as tivra Ma.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Tukra</td>
                                                        <td>A pre-composed set of bols or notes ending in a tihai on tabla designed to show the virtuosity of the tabla player and emphasize the sum of a rhythm cycle. It normally follows a kaida in a solo tabla rendition.</td>
                                                    </tr>

                                                </tbody>
                                            </table>

                                            <table className='table table-responsive mb-5 glossary' >
                                                <thead>
                                                    <tr>
                                                        <th>U</th>
                                                        <th><button className='tab-top' onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }}>Top <i class="bi bi-arrow-up"></i></button></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Uttarang</td>
                                                        <td>The higher tetrachord of a saptak consisting of the notes Pa, Dha, Ni and Sa.</td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                            <table className='table table-responsive mb-5 glossary' >
                                                <thead>
                                                    <tr>
                                                        <th>V</th>
                                                        <th><button className='tab-top' onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }}>Top <i class="bi bi-arrow-up"></i></button></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Vadi</td>
                                                        <td>The primary note of importance in a raga. The vadi is central to the performance piece with emphasis being placed upon it in the alap, bandish and improvisational components in the rendition of a raga.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Vibhag</td>
                                                        <td>A bar or a sub-division in a tal denoted by a straight line. A vibhag will invariably open with either a tali or a khali.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Vilambit</td>
                                                        <td>See laya.</td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div></div></div></div></div>
                </div>
            </section>

        </div>
    )
}

export default Golssary