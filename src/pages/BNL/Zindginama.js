import React from 'react';
import 'react-h5-audio-player/lib/styles.css';
import BnlPages from '../../components/BnlPages';


function Zindginama() {
    localStorage.setItem('BnlType', JSON.stringify("zindginama"));
    return (
        <div>
            <BnlPages title="Bhai Nand Lal - Zindginama" apiName="zindginama" tlPage="42"/> 
        </div>
    )
}

export default Zindginama