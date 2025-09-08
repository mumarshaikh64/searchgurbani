// import '../../assets/css/dashboard.css';
// import '../../assets/css/advan-search.css';
import React, { useEffect, useState } from 'react';
// import { useNavigate, useOutletContext } from "react-router";
// import { Link, useLocation } from "react-router-dom";
import Axios from 'axios';
import { API } from "../../config/api";
import { ApiHelper } from '../../helpers/ApiHelper';
import Form from 'react-bootstrap/Form';
import searchbannar from '../../assets/img/search-bannar.webp';
import Table from 'react-bootstrap/Table';
import charMap from '../../components/GurumukhiAscii';
import VirtualKeyboard from '../../components/VirtualKeyboard';
import Switch from 'react-switch';
import DataTable from 'react-data-table-component';
import AdvancedSearch from '../../components/AdvanceSearch';

function GgsAdvancedSearch() {
    // const navigate = useNavigate();
    
    return (
        <div>
            <AdvancedSearch 
            title ="Sri Guru Granth Sahib Advanced Search"
            pageFrom = "1"
            pageTo = "1430"
            scripture = "ggs"/>
        </div>
    )
}

export default GgsAdvancedSearch