import React from 'react';
import 'react-h5-audio-player/lib/styles.css';
import BnlPages from '../../components/BnlPages';


function Tankahnama() {
    localStorage.setItem('BnlType', JSON.stringify("tankahnama"));
    return (
        <div>
            <BnlPages title="Bhai Nand Lal - Tankahnama"  apiName="tankahnama" tlPage="6" /> 
        </div>
    )
}

export default Tankahnama