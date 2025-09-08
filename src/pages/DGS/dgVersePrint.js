//Gurbani search//
import React, { useEffect, useState, useRef } from 'react';
// import { useNavigate, useOutletContext } from "react-router";
// import { Link, useLocation, useParams} from "react-router-dom";
//import imgs from './assets/img/content/ggs_01.jpg'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import PagePrintView from '../../components/pagePrint';
// import { API } from '../../config/api';
import { API } from '../../config/api';
import { ApiHelper } from '../../helpers/ApiHelper';
import VersePrintView from '../../components/VersePrint';
import Spinner from '../../components/Spinner';
import { useParams } from 'next/navigation';

function DgVersePrint() {
    // const { page_no} = useParams();
    const params = useParams();
    const page_no = params?.page_no;
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
        await ApiHelper.get(API.getDgVerse + "?page_no=" + pageNo + "&scripture=dg&base_url=dasam-granth")
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
            <VersePrintView pageNo={page_no} title='Sri Dasam Granth Sahib Verse' angData={angData} headingData={headingData} poet='dg' />
        </div>
    )
}

export default DgVersePrint