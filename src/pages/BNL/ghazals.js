import React, { useEffect }  from 'react';
import 'react-h5-audio-player/lib/styles.css';
import BnlPages from '../../components/BnlPages';
import {useLocalStorage} from '../../hooks/useLocalStorage';


function Ghazalas() {
  const [, setBnlType] = useLocalStorage("BnlType", "ghazal");

  return (
    <div>
      <BnlPages title="Bhai Nand Lal - Divan-e-Goya: Ghazals" apiName="ghazal" tlPage="63" /> 
    </div>
  );
}


export default Ghazalas