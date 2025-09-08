//Gurbani search//
import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation, useParams} from "react-router-dom";
import { API } from '../../../config/api';
import { ApiHelper } from '../../../helpers/ApiHelper';
import Spinner from '../../../components/Spinner';
import ResourcePrintView from '../../../components/ResourcePrint';

function FWTPrint() {
    const { page_no, vol_no, lang} = useParams();
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
    await ApiHelper.get(API.getResPage  +  "fwt_page?volume_id=" + vol_no + "&page_no=" + page_no)
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
            <ResourcePrintView  pageNo={page_no} title='Faridkot Wala Teeka'  angData={angData} headingData={headingData} poet='fwt' lang={lang}/>  
        </div>
    )
}

export default FWTPrint