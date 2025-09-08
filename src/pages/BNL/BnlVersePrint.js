//Gurbani search//
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useOutletContext } from "react-router";
import { Link, useLocation, useParams} from "react-router-dom";
//import imgs from './assets/img/content/ggs_01.jpg'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import PagePrintView from '../../components/pagePrint';
import { API } from '../../config/api';
import { ApiHelper } from '../../helpers/ApiHelper';
import VersePrintView from '../../components/VersePrint';
import Spinner from '../../components/Spinner';

function BnlVersePrint() {
    const { type, page_no} = useParams();
    const [headingData, setHeadindData] = useState([]);
    const [angData, setAngData] = useState([]);
    const [loader, setLoader] = useState(false);
    const [lineNo, setLineNo] = useState("");
    useEffect(() => {
        getVerse(page_no)
}, [])
const getVerse = async (pageNo) => {
    setLoader(true)
    console.log('Ang No', pageNo);
    await ApiHelper.get(API.getBnlVerse + "?page_no=" + pageNo + "&scripture=bnl&type=" + type + "&base_url=bhai-nand-lal")
        .then((resData) => {
            setLoader(false);
            console.log('Ang', resData.data);
            setAngData(resData.data.lines);
            setHeadindData(resData.data)
        })
        .catch((err) => {
            setLoader(false);
            /* setMessage("Error !!! Please try again"); */
            console.log(err, 'err');
        });
}
    return (
        <div>
             {loader && <Spinner />}
            {type === 'ghazal' ?
                 <VersePrintView  pageNo={page_no} title='Bhai Nand Lal -Divan-e-Goya: Ghazals Verse' angData={angData} headingData={headingData} poet='bnl'/> :
                type === 'quatrains' ?
                <VersePrintView  pageNo={page_no} title='Bhai Nand Lal - Rubaayee Verse'  angData={angData} headingData={headingData} poet='bnl' /> : 
                type === 'zindginama' ?
                <VersePrintView  pageNo={page_no} title='Bhai Nand Lal - Zindginama Verse'  angData={angData} headingData={headingData} poet='bnl'/> :
                type === 'ganjnama' ?
                <VersePrintView  pageNo={page_no} title='Bhai Nand Lal - Ganjnama Verse' angData={angData} headingData={headingData} poet='bnl'/> :   
                type === 'jot-bikas' ?
                <VersePrintView  pageNo={page_no} title='Bhai Nand Lal - Jot Bikas Verse' angData={angData} headingData={headingData} poet='bnl'/> :
                type === 'jot-bikas-persian' ?
                <VersePrintView  pageNo={page_no} title='Bhai Nand Lal - Jot Bikas Verse' angData={angData} headingData={headingData} poet='bnl'/> :
                type === 'rahitnama' ?
                <VersePrintView  pageNo={page_no} title='Bhai Nand Lal - Rahitnama Verse' angData={angData} headingData={headingData} poet='bnl'/> :
                type === 'tankahnama' ?
                <VersePrintView  pageNo={page_no} title='Bhai Nand Lal - Tankahnama Verse'  angData={angData} headingData={headingData} poet='bnl'/> :null}
        </div>
    )
}

export default BnlVersePrint