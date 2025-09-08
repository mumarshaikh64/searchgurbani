import React from 'react';
import 'react-h5-audio-player/lib/styles.css';
import BnlPages from '../../components/BnlPages';


function Ganjnama() {
    localStorage.setItem('BnlType', JSON.stringify('ganjnama'));
    return (
        <div>
            <BnlPages title="Bhai Nand Lal - Ganjnama" apiName="ganjnama" tlPage="19" /> 
        </div>
    )
}

export default Ganjnama