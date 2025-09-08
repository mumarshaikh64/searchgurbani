import React from 'react';
import 'react-h5-audio-player/lib/styles.css';
import BnlPages from '../../components/BnlPages';


function JotBikasPersian() {
    localStorage.setItem('BnlType', JSON.stringify('jot-bikas-persian'));
    return (
        <div>
            <BnlPages title="Bhai Nand Lal - Jot Bikas" apiName="jot-bikas-persian" tlPage="15" /> 
        </div>
    )
}

export default JotBikasPersian