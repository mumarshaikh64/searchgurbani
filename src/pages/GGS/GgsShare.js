//Gurbani search//
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useOutletContext } from "react-router";
import { Link, useLocation, useParams} from "react-router-dom";
//import imgs from './assets/img/content/ggs_01.jpg'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import AngByAng from './AngByAng';


function GgsShare() {
    const { page_no, line_no } = useParams();
    const [isNos, setIsNos] = useState(false);
    useEffect(()=>{
        console.log('NO', page_no);
    console.log('LineNO', line_no)
    if(page_no !== '')
        {
            setIsNos(true)
        }
    
    },[page_no,line_no])
    return (
        <div>
            {isNos ?
            <AngByAng  pageNo={page_no} lineNo={line_no}/> : null}
        </div>
    )
}

export default GgsShare