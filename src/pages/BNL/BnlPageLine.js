import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useOutletContext } from "react-router";
import { Link, useLocation, useParams} from "react-router-dom";
import BnlPages from '../../components/BnlPages';

function BnlPageLine() {
    const { type ,page_no, lineno } = useParams();
    const [isNos, setIsNos] = useState(false);
    useEffect(()=>{
        console.log('NO', page_no);
        localStorage.setItem('BnlType', JSON.stringify(type));
        if(page_no !== '')
            {
                setIsNos(true)
            }
        
        },[page_no,lineno,type])
    return (
        <div>
            {isNos && type === 'ghazal' ?
            <BnlPages title="Bhai Nand Lal -Divan-e-Goya: Ghazals" apiName="ghazal" pageNo={page_no} lineNo={lineno} tlPage="63"/> :
            type === 'quatrains' ?
            <BnlPages title="Bhai Nand Lal - Rubaayee" apiName="quatrains" pageNo={page_no} lineNo={lineno} tlPage="19"/> :
            type === 'zindginama' ?
            <BnlPages title="Bhai Nand Lal - Zindginama" apiName="zindginama" pageNo={page_no} lineNo={lineno} tlPage="42"/> :
             type === 'ganjnama' ?
            <BnlPages title="Bhai Nand Lal - Ganjnama" apiName="ganjnama" pageNo={page_no} lineNo={lineno} tlPage="19"/> :
            type === 'jot-bikas' ?
            <BnlPages title="Bhai Nand Lal - Jot Bikas" apiName="jot-bikas" pageNo={page_no} lineNo={lineno} tlPage="4"/> :
            type === 'jot-bikas-persian' ?
            <BnlPages title="Bhai Nand Lal - Jot Bikas" apiName="jot-bikas-persian" pageNo={page_no} lineNo={lineno} tlPage="15"/> :
            type === 'rahitnama' ?
            <BnlPages title="Bhai Nand Lal - Rahitnama" apiName="rahitnama" pageNo={page_no} lineNo={lineno} tlPage="4"/> :
            type === 'tankahnama' ?
            <BnlPages title="Bhai Nand Lal - Tankahnama"  apiName="tankahnama" pageNo={page_no} lineNo={lineno} tlPage="6"/> : null }
        </div>
    )
}

export default BnlPageLine