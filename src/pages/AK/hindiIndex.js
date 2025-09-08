import React, { useEffect, useState } from 'react';
// import { useNavigate, useOutletContext } from "react-router";
// import { Link, useLocation, useParams } from "react-router-dom";
// import '../../assets/css/dashboard.css';
// import '../../assets/css/author.css';
import Axios from 'axios';
import { API } from "../../config/api";
import { ApiHelper } from '../../helpers/ApiHelper';
import AkIndex from '../../components/AkIndex';
//import imgs from './assets/img/content/ggs_01.jpg'

function HindiIndex() {
   
    return (
        <div>
            <AkIndex language= "क"/>
        </div>
    )
}

export default HindiIndex