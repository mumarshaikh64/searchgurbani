import React from 'react';
import 'react-h5-audio-player/lib/styles.css';
import BnlPages from '../../components/BnlPages';


function Rahitnama() {
    localStorage.setItem('BnlType', JSON.stringify('rahitnama'));
    return (
        <div>
            <BnlPages title="Bhai Nand Lal - Rahitnama" apiName="rahitnama" tlPage="4" /> 
        </div>
    )
}

export default Rahitnama