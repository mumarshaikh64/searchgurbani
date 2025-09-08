import React, { useEffect, useState } from 'react';
// import { useNavigate, useOutletContext } from "react-router";
// import { Link, useLocation } from "react-router-dom";
// import '../../assets/css/dashboard.css';
// import '../../assets/css/advan-search.css';
import AdvancedSearch from '../../components/AdvanceSearch';

function AkAdvancedSearch() {
    // const navigate = useNavigate();
    
    return (
        <div>
            <AdvancedSearch 
            title ="Amrit Keertan Advanced Search"
            pageFrom = "1"
            pageTo = "1040"
            scripture = "ak"/>
        </div>
    )
}

export default AkAdvancedSearch