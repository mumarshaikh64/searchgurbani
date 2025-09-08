//Gurbani search//
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useOutletContext } from "react-router";
import { Link, useLocation, useParams} from "react-router-dom";
//import imgs from './assets/img/content/ggs_01.jpg'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import SharePage from '../../components/CommonSharePage';


function BnlSharePage() {
    const {type, page_no, line_no } = useParams();
    const [isNos, setIsNos] = useState(false);
    useEffect(()=>{
        console.log('NO', page_no);
    console.log('LineNO', line_no)
    if(page_no !== '')
        {
            setIsNos(true)
        }
    
    },[type,page_no,line_no])
    return (
        <div>
             {isNos && type === 'ghazal' ?
            <SharePage title="Bhai Nand Lal -Divan-e-Goya: Ghazals" pageNo={page_no} lineNo={line_no} poet='bnl' page='page' type={type}/> :
            type === 'quatrains' ?
            <SharePage title="Bhai Nand Lal - Rubaayee" pageNo={page_no} lineNo={line_no} poet='bnl' page='page'  type={type}/> :
            type === 'zindginama' ?
            <SharePage title="Bhai Nand Lal - Zindginama" pageNo={page_no} lineNo={line_no} poet='bnl' page='page'  type={type}/> :
             type === 'ganjnama' ?
            <SharePage title="Bhai Nand Lal - Ganjnama" pageNo={page_no} lineNo={line_no} poet='bnl' page='page'  type={type}/> :
            type === 'jot-bikas' ?
            <SharePage title="Bhai Nand Lal - Jot Bikas" pageNo={page_no} lineNo={line_no} poet='bnl' page='page'  type={type}/> :
            type === 'jot-bikas-persian' ?
            <SharePage title="Bhai Nand Lal - Jot Bikas" pageNo={page_no} lineNo={line_no} poet='bnl' page='page'  type={type}/> :
            type === 'rahitnama' ?
            <SharePage title="Bhai Nand Lal - Rahitnama" pageNo={page_no} lineNo={line_no} poet='bnl' page='page'  type={type}/> :
            type === 'tankahnama' ?
            <SharePage title="Bhai Nand Lal - Tankahnama"  pageNo={page_no} lineNo={line_no} poet='bnl' page='page'  type={type}/> : null }
        </div>
    )
}

export default BnlSharePage