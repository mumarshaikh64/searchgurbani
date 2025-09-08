//Gurbani search//
import React, { useEffect, useState, useRef } from 'react';
// import { useNavigate, useOutletContext } from "react-router";
// import { Link, useLocation, useParams} from "react-router-dom";
//import imgs from './assets/img/content/ggs_01.jpg'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import DGPageByPage from './dGPageByPage';
import DGPageByPage from '../dgPageByPage';
import { useParams } from 'next/navigation';


function PageLine() {
    // const { page_no, line_no } = useParams();
    const params = useParams();
    const page_no = params?.page_no;
    const line_no = params?.line_no;
    const [isNos, setIsNos] = useState(false);
    useEffect(()=>{
        console.log('NO', page_no);
        if(page_no !== '')
            {
                setIsNos(true)
            }
        
        },[page_no,line_no])
    return (
        <div>
            {isNos ?
            <DGPageByPage  pageNo={page_no} lineNo={line_no} /> : null}
        </div>
    )
}

export default PageLine