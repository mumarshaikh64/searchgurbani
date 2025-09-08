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

function AngPrint() {
    const { page_no} = useParams();
    const [headingData, setHeadindData] = useState([]);
    const [angData, setAngData] = useState([]);
    const [loader, setLoader] = useState(false);
    const [lineNo, setLineNo] = useState("");
    useEffect(() => {
        getAngByAng(page_no)
}, [])
const getAngByAng = async (pageNo) => {
    setLoader(true)
    console.log('AngNo',pageNo);
    await ApiHelper.get(API.getAngByAng + "?line_no=" + lineNo + "&page=" + pageNo)
        .then((resData) => {
            setLoader(false);
            console.log('Ang', resData.data.lines);
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
            <PagePrintView  pageNo={page_no} title='Sri Guru Granth Sahib' pageto='1430' angData={angData} headingData={headingData} poet='ggs'/> 
        </div>
    )
}

export default AngPrint