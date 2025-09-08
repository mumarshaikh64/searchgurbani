//Gurbani search//
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useOutletContext } from "react-router";
import { Link, useLocation, useParams} from "react-router-dom";
//import imgs from './assets/img/content/ggs_01.jpg'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import SharePage from '../../components/CommonSharePage';


function AkShabadSharePage() {
    const { shabad_id, line_no } = useParams();
    const [isNos, setIsNos] = useState(false);
    useEffect(()=>{
        console.log('NO', shabad_id);
    console.log('LineNO', line_no)
    if(shabad_id !== '')
        {
            setIsNos(true)
        }
    
    },[shabad_id,line_no])
    return (
        <div>
            {isNos ?
            <SharePage  pageNo={shabad_id} lineNo={line_no} poet='ak' page='shabad' title='Amrit Keertan' /> : null}
        </div>
    )
}

export default AkShabadSharePage
