//Gurbani search//
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useOutletContext } from "react-router";
import { Link, useLocation, useParams } from "react-router-dom";
//import imgs from './assets/img/content/ggs_01.jpg'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { API } from "../../../config/api";
import { ApiHelper } from '../../../helpers/ApiHelper';
import Spinner from '../../../components/Spinner';
import Form from 'react-bootstrap/Form';
import '../../../assets/css/resource.css';
import ResourcePage from '../../../components/ResourcePage';

const SGPSGView = (props) => {
    const location = useLocation();
    const { pageno, volumeno } = useParams();
    console.log('Page', pageno);
    console.log('vol', volumeno);
    const navigate = useNavigate();
    const shareUrl = 'http://localhost:3000';
    const title = 'Search Gurbani : Gurbani Website';
    const [loader, setLoader] = useState(false);
    const [pageNo, setPageNo] = useState('');
    const [volNo, setVolNo] = useState('');
    const [isNos, setIsNos] = useState(false);
    
    const [gurmukhiSize, setGurmukhiSize] = useState('22');

    useEffect(() => {
        setIsNos(true)
        setPageNo(pageno);
        setVolNo(volumeno);
    }, [pageno, volumeno])

    if (!isNos) {
        return null; // or return a spinner or loader component
    }
    return (
        <div>
            <ResourcePage 
                title='Sri Gur Pratap Suraj Granth' 
                pageno={pageno || '1'} 
                volumeNo={volumeno || '1'} 
                apiName='sri-gur-pratap-suraj-granth' 
                nameApi="sri-gur-pratap-suraj-granth/page" 
            />
        </div>
    )
}

export default SGPSGView