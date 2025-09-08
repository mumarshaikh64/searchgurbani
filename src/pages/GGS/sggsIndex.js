// import '../../assets/css/dashboard.css';
// import '../../assets/css/sgg-index.css';
// import '../../assets/css/style.css';
import React, { useEffect, useState } from 'react';
// import { Link } from "react-router-dom";
import { API } from "../../config/api";
import { ApiHelper } from '../../helpers/ApiHelper';
import Spinner from '../../components/Spinner';
import Switch from 'react-switch';
import Accordion from 'react-bootstrap/Accordion';
import {Helmet} from "react-helmet";
import HelmetWrapper from '../../components/CommonHelmet';
import Link from 'next/link';

function SggsShabadIndex() {
    const [loader, setLoader] = useState(false);
    const [parent, setParent] = useState([]);
    const [child, setChild] = useState([]);
    const [languageCheck, setLanguageCheck] = useState(false);
    const [subItems, setSubItems] = useState({});

    useEffect(() => {
        getChapter();
    }, []);

    const getChapter = async () => {
        setLoader(true);
        try {
            const resData = await ApiHelper.get(API.getGgsChapter);
            setLoader(false);
            const childWithoutParent = resData.data.filter(row => row.parentID === 1);
            setChild(childWithoutParent);

            const newParent = resData.data.filter(row => row.pageID === 0 && row.chapterID !== 6);
            const updatedParent = newParent.map(p => ({
                ...p,
                newChilds: resData.data.filter(c => c.parentID === p.chapter_id && c.page_id !== 0)
            }));

            setParent(updatedParent);
        } catch (error) {
            setLoader(false);
            console.error('Error fetching chapters:', error);
        }
    };

    const handleChange = (nextChecked) => {
        setLanguageCheck(nextChecked);
    };

    const handleToggle = async (item) => {
        console.log('TESTTTTT')
        if (subItems[item.chapterID]) return; // Prevent duplicate API calls

        setLoader(true);
        try {
            const resData = await ApiHelper.get(API.getggsSubChapter + item.chapterID);
            setLoader(false);
            setSubItems(prevItems => ({
                ...prevItems,
                [item.chapterID]: resData.data
            }));
        } catch (error) {
            setLoader(false);
            console.error('Error fetching sub items:', error);
        }
    };

    return (
        <div>
            {/* <HelmetWrapper
                title={`Sri Guru Granth Sahib Ji -: Gurbani Index-: searchgurbani.com`}
                description={`Sri Guru Granth Sahib Shabad Index :searchgurbani.com`}
                keywords="Gurmat Sangeet, Gurubani ,Kirtan,Amrit,Gurbani, Shabad, Keertan, English ,translation ,Phonetic, Transliteration, Hindi ,Sikh scriptures,sikhism, sikh, mahan kosh,hukamnama, dasam granth,granth,gurdas,guru,raag, vaaran,varan,kabit,nand lal,ang,gurdwara,hukumnama,bhagats;"
                image="https://www.searchgurbani.com/assets/img/sg-ggs1.png"
                url={window.location.href}
            /> */}
            {loader && <Spinner />}
            <section className='inner-actions p-4'>
                <div className='container'>
                    <div className='row w-100'>
                        <div className='col-lg-12 p-0'>
                            <div className='in-act-wrapper'>
                                <h1 className='inner-heading'>Sri Guru Granth Sahib Shabad Index</h1>
                                <div className='actions-mains'>
                                    <div className="d-flex form-check form-switch">
                                        <label className="form-check-label left-para">Gurmukhi</label>
                                        <label className='switch-sgg'>
                                            <Switch
                                                onChange={handleChange}
                                                checked={languageCheck}
                                                uncheckedIcon={false}
                                                checkedIcon={false}
                                            />
                                        </label>
                                        <label className="form-check-label right-para">English</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className='d-flex flex-column'>
                        <div className='ang-display mt-5'>
                            <h1>Sri Guru Granth Sahib</h1>
                            <div className='ang-wrapper'>
                                <div className='ang-itm '>
                                    <h2 className='lang-1'>




                                        <details>
                                            <summary>{languageCheck ? "ਪੂਰਵ ਰਾਗ ਭਾਗ" : "Pre Raag Section"}</summary>
                                            {child.map((item, index) => (
                                                <div key={index} className='in-act-wrapper mt-2'>
                                                    <details onClick={() => handleToggle(item)}>
                                                        <summary >
                                                            <Link
                                                                href={`/guru-granth-sahib/ang/${item.pageID}/line/${item.lineID}`}
                                                                className='det-paras'
                                                            >
                                                                <div className=' align-div'>
                                                                    <div>{languageCheck ? item.chapterP : item.chapterE}</div>

                                                                    <div className='actions-mains new-accod'>

                                                                        <span>{item.pageID}</span>

                                                                    </div>
                                                                </div>
                                                            </Link>

                                                        </summary>
                                                        <div className='nested-list'>
                                                            {subItems[item.chapterID]?.map((subItem, subIndex) => {
                                                                const shabadNameWithDashes = subItem.shabadE.replace(/ /g, '-');
                                                                return(
                                                                    <ul key={subIndex}>
                                                                    <li>
                                                                        <Link
                                                                            href={`/guru-granth-sahib/shabad/${subItem.shabadID}/${shabadNameWithDashes}`}
                                                                            className='sub-det-para'
                                                                        >
                                                                            {languageCheck ? subItem.shabadP : subItem.shabadE}

                                                                            <div className=' align-div-nesteds'>
                                                                                <div className='actions-mains new-accod'>
                                                                                    <span>{subItem.pageID}</span>
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                                );
                                                            })}
                                                        </div>
                                                    </details>
                                                </div>
                                            ))}
                                        </details>
                                    </h2>
                                </div>

                                <div className='ang-itm'>
                                    <h2 className='lang-1'>
                                        <details>
                                            <summary>{languageCheck ? "ਰਾਗੁ" : "Raga Section"}</summary>
                                        </details>
                                    </h2>
                                </div>

                                {parent.map((item, index) => (
                                    <div key={index} className='ang-itm'>
                                        <h2 className='lang-1'>
                                            <details>
                                                <summary>{languageCheck ? item.chapterP : item.chapterE}</summary>
                                                {item.newChilds?.map((c, cIndex) => (
                                                    <div key={cIndex} className='in-act-wrapper mt-2'>
                                                        <details onClick={() => handleToggle(c)}>
                                                            <summary>

                                                                {/* <Link href={`/guru-granth-sahib/ang/${c.pageID}/line/${c.lineID}`} className='det-para'>
                                                                    <span>{languageCheck ? c.chapterP : c.chapterE}</span>
                                                                </Link>
                                                                <div className='actions-mains new-accod'>
                                                                    <Link href={`/guru-granth-sahib/ang/${c.pageID}/line/${c.lineID}`} className='det-no'>
                                                                        <span>{c.pageID}</span>
                                                                    </Link>
                                                                </div> */}
                                                                <Link
                                                                    href={`/guru-granth-sahib/ang/${c.pageID}/line/${c.lineID}`}
                                                                    className='det-paras'
                                                                >
                                                                    <div className=' align-div'>
                                                                        <div>{languageCheck ? c.chapterP : c.chapterE}</div>

                                                                        <div className='actions-mains new-accod'>

                                                                            <span>{c.pageID}</span>

                                                                        </div>
                                                                    </div>
                                                                </Link>

                                                            </summary>
                                                            <div className='nested-list'>
                                                                {subItems[c.chapterID]?.map((subItem, subIndex) => {
                                                                    const shabadNameWithDashes = subItem.shabadE.replace(/ /g, '-');
                                                                    return(
                                                                        <ul key={subIndex}>
                                                                        <li>
                                                                            {/* <Link
                                                                                href={`/guru-granth-sahib/ang/${subItem.pageID}/line/${subItem.lineID}`}
                                                                                className='sub-det-para'
                                                                            >{languageCheck ? subItem.shabadP : subItem.shabadE}

                                                                            </Link>
                                                                            <div className='actions-mains new-accod'>
                                                                                <Link
                                                                                    href={`/guru-granth-sahib/ang/${subItem.pageID}/line/${subItem.lineID}`}
                                                                                    className='sub-det-para'
                                                                                >
                                                                                    <span>{subItem.pageID}</span>
                                                                                </Link>
                                                                            </div> */}
                                                                            <Link
                                                                                href={`/guru-granth-sahib/shabad/${subItem.shabadID}/${shabadNameWithDashes}`}
                                                                                className='sub-det-para'
                                                                            >
                                                                                {languageCheck ? subItem.shabadP : subItem.shabadE}

                                                                                <div className=' align-div-nesteds'>
                                                                                    <div className='actions-mains new-accod'>
                                                                                        <span>{subItem.pageID}</span>
                                                                                    </div>
                                                                                </div>
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                    );
                                                                })}
                                                            </div>
                                                        </details>
                                                        {/* <Link href={`/guru-granth-sahib/ang/${c.pageID}/line/${c.lineID}`} className='det-para'>
                                                            <span>{languageCheck ? c.chapterP : c.chapterE}</span>
                                                        </Link>
                                                        <div className='actions-mains'>
                                                            <Link href={`/guru-granth-sahib/ang/${c.pageID}/line/${c.lineID}`} className='det-no'>
                                                                <span>{c.pageID}</span>
                                                            </Link>
                                                        </div> */}
                                                    </div>
                                                ))}
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
    );
}

export default SggsShabadIndex;
