import React, { useEffect, useState } from 'react';
// import { useNavigate, useOutletContext } from "react-router";
// import { Link, useLocation } from "react-router-dom";
// import '../../assets/css/dashboard.css';
// import '../../assets/css/advan-search.css';
import AdvancedSearch from '../../components/AdvanceSearch';

function DgsAdvancedSearch() {
    // const navigate = useNavigate();
    
    return (
        <div>
            <AdvancedSearch 
            title ="Dasam Granth Advanced Search"
            pageFrom = "1"
            pageTo = "2080"
            scripture = "dg"/>
        </div>
    )
}

export default DgsAdvancedSearch