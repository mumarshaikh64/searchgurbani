import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from "react-router";
import { Link, useLocation } from "react-router-dom";
import '../../assets/css/dashboard.css';
import '../../assets/css/advan-search.css';
import AdvancedSearch from '../../components/AdvanceSearch';

function BnlAdvancedSearch() {
    const navigate = useNavigate();
    
    return (
        <div>
            <AdvancedSearch 
            title ="Bhai Nand Lal Baani Advanced Search"
            pageFrom = "1"
            pageTo = "1430"
            scripture = "bnl"/>
        </div>
    )
}

export default BnlAdvancedSearch