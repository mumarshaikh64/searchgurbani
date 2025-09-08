import React, { useEffect, useState } from 'react';
// import { useNavigate, useOutletContext } from "react-router";
// import { Link, useLocation } from "react-router-dom";
// import '../../assets/css/dashboard.css';
// import '../../assets/css/advan-search.css';
import AdvancedSearch from '../../components/AdvanceSearch';

function KsAdvancedSearch() {
    // const navigate = useNavigate();
    
    return (
        <div>
            <AdvancedSearch 
            title ="Kabit Savaiye Advanced Search"
            pageFrom = "1"
            pageTo = "675"
            scripture = "ks"/>
        </div>
    )
}

export default KsAdvancedSearch