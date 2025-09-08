//Gurbani search//
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useOutletContext } from "react-router";
import { Link, useLocation, useParams} from "react-router-dom";
//import imgs from './assets/img/content/ggs_01.jpg'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import SharePage from '../../components/CommonSharePage';


function BnlShabadSharePage() {
    const {type, shabad_id, line_no } = useParams();
    const [isNos, setIsNos] = useState(false);
    useEffect(()=>{
        console.log('NO', shabad_id);
    console.log('LineNO', line_no)
    if(shabad_id !== '')
        {
            setIsNos(true)
        }
    
    },[type,shabad_id,line_no])
    return (
        <div>
             {isNos && type === 'ghazal' ?
            <SharePage title="Bhai Nand Lal -Divan-e-Goya: Ghazals" pageNo={shabad_id} lineNo={line_no} poet='bnl' page='shabad' type={type}/> :
            type === 'quatrains' ?
            <SharePage title="Bhai Nand Lal - Rubaayee" pageNo={shabad_id} lineNo={line_no} poet='bnl' page='shabad'  type={type}/> :
            type === 'zindginama' ?
            <SharePage title="Bhai Nand Lal - Zindginama" pageNo={shabad_id} lineNo={line_no} poet='bnl' page='shabad'  type={type}/> :
             type === 'ganjnama' ?
            <SharePage title="Bhai Nand Lal - Ganjnama" pageNo={shabad_id} lineNo={line_no} poet='bnl' page='shabad'  type={type}/> :
            type === 'jot-bikas' ?
            <SharePage title="Bhai Nand Lal - Jot Bikas" pageNo={shabad_id} lineNo={line_no} poet='bnl' page='shabad'  type={type}/> :
            type === 'jot-bikas-persian' ?
            <SharePage title="Bhai Nand Lal - Jot Bikas" pageNo={shabad_id} lineNo={line_no} poet='bnl' page='shabad'  type={type}/> :
            type === 'rahitnama' ?
            <SharePage title="Bhai Nand Lal - Rahitnama" pageNo={shabad_id} lineNo={line_no} poet='bnl' page='shabad'  type={type}/> :
            type === 'tankahnama' ?
            <SharePage title="Bhai Nand Lal - Tankahnama"  pageNo={shabad_id} lineNo={line_no} poet='bnl' page='shabad'  type={type}/> : null }
        </div>
    )
}

export default BnlShabadSharePage