// import '../../assets/css/dashboard.css';
// import '../../assets/css/advan-search.css';
import React, { useEffect, useState } from 'react';
// import { useNavigate, useOutletContext } from "react-router";
// import { Link, useLocation } from "react-router-dom";
import AdvancedSearch from '../../components/AdvanceSearch';

function BgvAdvancedSearch() {
    // const navigate = useNavigate();
    
    return (
        <div>
            <AdvancedSearch 
            title ="Bhai Gurdas Vaaran Advanced Search"
            pageFrom = "1"
            pageTo = "40"
            scripture = "bgv"/>
        </div>
    )
}

export default BgvAdvancedSearch