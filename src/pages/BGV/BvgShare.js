//Gurbani search//
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useOutletContext } from "react-router";
import { Link, useLocation, useParams} from "react-router-dom";
//import imgs from './assets/img/content/ggs_01.jpg'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import SharePage from '../../components/CommonSharePage';


function BvgSharePage() {
    const { vaar_no, pauri_no, line_no } = useParams();
    const [isNos, setIsNos] = useState(false);
    useEffect(()=>{
        console.log('NO', vaar_no);
    console.log('LineNO', line_no)
    if(pauri_no !== '')
        {
            setIsNos(true)
        }
    
    },[vaar_no,pauri_no,line_no])
    return (
        <div>
            {isNos ?
            <SharePage vaarNo={vaar_no} pageNo={pauri_no} lineNo={line_no} poet='bgv' page='page' title='Bhai Gurdas Vaaran' /> : null}
        </div>
    )
}

export default BvgSharePage