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
import Spinner from '../../components/Spinner';

function PrintPauri() {
    const { vaar_no, pauri_no} = useParams();
    const [headingData, setHeadindData] = useState([]);
    const [angData, setAngData] = useState([]);
    const [loader, setLoader] = useState(false);
    const [lineNo, setLineNo] = useState("");
    const [lastNo, setLastNo] = useState("");
    useEffect(() => {
        getPauruByPauriIndex(pauri_no)
}, [])
const getPauruByPauriIndex = async (pauriNo) => {
    setLoader(true)
    await ApiHelper.get(API.getVaarPauri + vaar_no + "/pauri/" + pauriNo + "/line/" + "1")
        .then((resData) => {
            setLoader(false);
            console.log('Ang', resData.data);
            setAngData(resData.data.lines);
            setHeadindData(resData.data)
            setLastNo(resData.data.pauri_count)
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
            <PagePrintView  pageNo={pauri_no} title='Bhai Gurdas Vaaran' pageto='1040' angData={angData} headingData={headingData} poet='bgv'/> 
        </div>
    )
}

export default PrintPauri