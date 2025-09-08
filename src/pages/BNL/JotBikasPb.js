import React from 'react';
import 'react-h5-audio-player/lib/styles.css';
import BnlPages from '../../components/BnlPages';


function JotBikasPb() {
    localStorage.setItem('BnlType', JSON.stringify('jot-bikas'));
    return (
        <div>
            <BnlPages title="Bhai Nand Lal - Jot Bikas" apiName="jot-bikas" tlPage="4" /> 
        </div>
    )
}

export default JotBikasPb