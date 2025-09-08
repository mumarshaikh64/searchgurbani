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
import ShabadPrint from '../../components/ShabadPrint';
import Spinner from '../../components/Spinner';

function AkShabadPrint() {
    const { shabad_id, lineno } = useParams();
    const [headingData, setHeadindData] = useState([]);
    const [angData, setAngData] = useState([]);
    const [loader, setLoader] = useState(false);
    const [lineNo, setLineNo] = useState("");
    const [pageNO, setPageNo] = useState('');
    useEffect(() => {
        getShabadLines(shabad_id);
        setPageNo(shabad_id)
}, [])
const getShabadLines = async (id) => {
    setLoader(true)
    await ApiHelper.get(API.getAkShabadLine + id + "/line/" + lineno)
        .then((resData) => {
            setLoader(false);
            console.log('Ang', resData.data.youtubeID);
            setAngData(resData.data.lines)
            setHeadindData(resData.data)
        })
        .catch((err) => {
            setLoader(false);
            console.log(err, 'err');
        });
        
}
    return (
        <div>
            {loader && <Spinner />}
            <ShabadPrint   angData={angData} headingData={headingData} poet='ak'/> 
        </div>
    )
}

export default AkShabadPrint