"use client";

// import '../assets/css/ang-by-ang.css'
import React, { useEffect, useState, useRef } from 'react';
// import { useNavigate, useOutletContext } from "react-router";
import { useRouter } from 'next/navigation';
// import { Link, useLocation } from "react-router-dom";
import Link from 'next/link';
import facebook from '../assets/img/facebook.svg';
import twitter from '../assets/img/twitter.svg';
import youtube from '../assets/img/youtube.svg';
import telegram from '../assets/img/telegram.svg';
import whatsapp from '../assets/img/whatsapp.svg';
import mail from '../assets/img/mail.svg';
import Image from 'next/image';

const ShareLink = (props) => {
    // const location = useLocation();
    // const data = location.state;
    // const navigate = useNavigate();
    const router = useRouter();
    const handleShareModal = (platform, page, line, punjabi, translit) => {
        const shareUrl = 'https://searchgurbani.com';
        // const locationPathname = location.pathname;
        const locationPathname = router.asPath;
        const title = props.data.punjabi || "Default Title";

        let shareLink = '';

        switch (platform) {
            case 'facebook':
                shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl + `/shared/guru-granth-sahib/ang/${page}/line/${line}`)}&t=${encodeURIComponent(`${punjabi} ${translit}`)}`;
                break;
            case 'twitter':
                shareLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl + `/shared/guru-granth-sahib/ang/${page}/line/${line}`)}&text=${encodeURIComponent(`${punjabi} ${translit}`)}`;
                break;
            case 'youtube':
                shareLink = `https://www.youtube.com`;
                break;
            case 'telegram':
                shareLink = `https://telegram.me/share/url?url=${encodeURIComponent(shareUrl + `/shared/guru-granth-sahib/ang/${page}/line/${line}`)}&text=${encodeURIComponent(`${punjabi} ${translit}`)}`;
                break;
            case 'whatsapp':
                shareLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${punjabi} ${translit}` + " " + shareUrl + `/shared/guru-granth-sahib/ang/${page}/line/${line}`)}`;
                break;
            case 'mail':
                shareLink = `mailto:?subject=${encodeURIComponent(`${punjabi} ${translit}`)}&body=${encodeURIComponent(shareUrl + `/shared/guru-granth-sahib/ang/${page}/line/${line}`)}`;
                break;
            default:
                break;
        }

        window.open(shareLink, '_blank');
    };
    return (
        <div className='socia-share' style={{ marginLeft: '600px' }}>
            <ul>
                <>
                    {/* --old----  */}
                    {/* <li><button className='ang-btn' onClick={(e) => { e.preventDefault(); navigate('/guru-granth-sahib/shabad/' + `${props.data.shabad_id}` + '/line/' + `${props.data.shabdlineID}`) }}>Shabad View</button></li>
                    <li><button className='ang-btn' onClick={(e) => { e.preventDefault(); navigate('/guru-granth-sahib/verse/' + `${props.data.verseID}`, { state: { line: props.data.pagelineID } }) }}>Verse View</button></li> */}
                    {/* --new----  */}
                    <li>
                        <button
                            className='ang-btn'
                            onClick={(e) => {
                                e.preventDefault();
                                router.push('/GGS/shabad/' + props.data.shabad_id + '/line/' + props.data.shabdlineID);
                            }}
                        >
                            Shabad View
                        </button>
                    </li>
                    <li>
                        <button
                            className='ang-btn'
                            onClick={(e) => {
                                e.preventDefault();
                                // Next.js router.push doesn't support passing state like React Router
                                // You can pass query params instead or use client storage to share state
                                router.push({
                                    pathname: '/GGS/verse/' + props.data.verseID,
                                    query: { line: props.data.pagelineID }
                                });
                            }}
                        >
                            Verse View
                        </button>
                    </li>
                </>
            </ul>
            {/* ------ old ---------  */}
            {/* <ul>
                <li>
                    <Link className='soc-icon' onClick={() => handleShareModal('facebook', props.data.pageno, props.data.lineno, props.data.punjabi, props.data.translit)} >
                        <Image src={facebook} className="img-fluid donate" alt="Responsive image" />
                    </Link>
                </li>
                <li>
                    <Link className='soc-icon' onClick={() => handleShareModal('twitter', props.data.pageno, props.data.lineno, props.data.punjabi, props.data.translit)} >
                        <Image src={twitter} className="img-fluid donate" alt="Responsive image" />
                    </Link>
                </li>
                <li>
                    <Link className='soc-icon' onClick={() => handleShareModal('telegram', props.data.pageno, props.data.lineno, props.data.punjabi, props.data.translit)} >
                        <Image src={telegram} className="img-fluid donate" alt="Responsive image" />
                    </Link>
                </li>
                <li>
                    <Link className='soc-icon' onClick={() => handleShareModal('whatsapp', props.data.pageno, props.data.lineno, props.data.punjabi, props.data.translit)} >
                        <Image src={whatsapp} className="img-fluid donate" alt="Responsive image" />
                    </Link>
                </li>
                <li>
                    <Link className='soc-icon' onClick={() => handleShareModal('mail', props.data.pageno, props.data.lineno, props.data.punjabi, props.data.translit)} >
                        <Image src={mail} className="img-fluid donate" alt="Responsive image" />
                    </Link>
                </li>
            </ul> */}
            {/* ----- new -------  */}
            <ul>
                <li>
                    <a
                        href="#"
                        className="soc-icon"
                        onClick={(e) => {
                            e.preventDefault();
                            handleShareModal('facebook', props.data.pageno, props.data.lineno, props.data.punjabi, props.data.translit);
                        }}
                    >
                        <Image src={facebook} className="img-fluid donate" alt="Responsive image" />
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="soc-icon"
                        onClick={(e) => {
                            e.preventDefault();
                            handleShareModal('twitter', props.data.pageno, props.data.lineno, props.data.punjabi, props.data.translit);
                        }}
                    >
                        <Image src={twitter} className="img-fluid donate" alt="Responsive image" />
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="soc-icon"
                        onClick={(e) => {
                            e.preventDefault();
                            handleShareModal('telegram', props.data.pageno, props.data.lineno, props.data.punjabi, props.data.translit);
                        }}
                    >
                        <Image src={telegram} className="img-fluid donate" alt="Responsive image" />
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="soc-icon"
                        onClick={(e) => {
                            e.preventDefault();
                            handleShareModal('whatsapp', props.data.pageno, props.data.lineno, props.data.punjabi, props.data.translit);
                        }}
                    >
                        <Image src={whatsapp} className="img-fluid donate" alt="Responsive image" />
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="soc-icon"
                        onClick={(e) => {
                            e.preventDefault();
                            handleShareModal('mail', props.data.pageno, props.data.lineno, props.data.punjabi, props.data.translit);
                        }}
                    >
                        <Image src={mail} className="img-fluid donate" alt="Responsive image" />
                    </a>
                </li>
            </ul>

        </div>
    );
}

export default ShareLink;
