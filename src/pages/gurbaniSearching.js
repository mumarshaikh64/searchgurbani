//Gurbani search//
import React, { useEffect, useState,useRef } from 'react';
// import { useNavigate, useOutletContext } from "react-router";
// import { Link, useLocation } from "react-router-dom";
import '../assets/css/dashboard.css';
import Axios from 'axios';
import { API } from "../config/api";
import { ApiHelper } from '../helpers/ApiHelper';
import charMap from '../components/GurumukhiAscii';
import VirtualKeyboard from '../components/VirtualKeyboard';
import styled from 'styled-components';
import ShareButtons from '../components/ShareComponent';
import { useRouter } from 'next/navigation';

function GurbaniSearching() {
  // const navigate = useNavigate();
  const router = useRouter();
 
    // useEffect(() => {
    //     navigate('/gurbani-search')
    // }, [])
    useEffect(() => {
    router.push('/gurbani-search');
  }, []);

    return (
      <>
      </>
    )
}

export default GurbaniSearching