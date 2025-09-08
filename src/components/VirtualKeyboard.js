import React, { useState, useRef,useEffect } from 'react';
// import '../assets/css/keyboard.css'


const VirtualKeyboard = ({ addChar }) => {
  const [input, setInput] = useState('');
  const [capsLock, setCapsLock] = useState(false); 
  /* const addKey = (event) => {
    const keyElement = event.currentTarget;

    // Instead of getting data-value directly from keyElement, find the input element inside it
    const inputElement = keyElement.querySelector('input[type="hidden"]');
    if (!inputElement) {
      console.error('Input element not found inside key element');
      console.log('HTML of the key element:', keyElement.outerHTML);
      return;
    }
    const value = inputElement.value;
   
    console.log('Attribute value:', value);
  
    // Split value by '&nbsp;'
    const splitValues = value.split(String.fromCharCode(160)); // Use the non-breaking space character
  
    if (splitValues.length !== 2) {
      console.error('Unexpected format in value attribute:', value);
      return;
    }  
    const [primaryChar, secondaryChar] = splitValues;  
    console.log('Primary Char:', primaryChar);
    console.log('Secondary Char:', capsLock);  
    const charToAdd = capsLock ? primaryChar : secondaryChar;
    setInput((prevInput) => prevInput + charToAdd);
    addChar(charToAdd)
    console.log('Char:', charToAdd);
   
  }; */

  const addKey = (event) => {
    const keyElement = event.currentTarget;
  
    // Find the hidden input inside the key element
    const inputElement = keyElement.querySelector('input[type="hidden"]');
    if (!inputElement) {
      console.error('Input element not found inside key element');
      console.log('HTML of the key element:', keyElement.outerHTML);
      return;
    }
  
    // Get the value from the hidden input
    let value = inputElement.value;
  
    console.log('Attribute value:', value);
  
    // Handle the "Space" key separately
    if (value.includes('Space')) {
      // Directly insert a space character
      const spaceChar = ' ';
      setInput((prevInput) => prevInput + spaceChar);
      addChar(spaceChar);
      console.log('Char added:', spaceChar);
      return;
    }
  
    // Split the value by non-breaking space (if needed)
    const splitValues = value.split(String.fromCharCode(160)); // non-breaking space char
  
    if (splitValues.length !== 2) {
      console.error('Unexpected format in value attribute:', value);
      return;
    }
  
    const [primaryChar, secondaryChar] = splitValues;
  
    console.log('Primary Char:', primaryChar);
    console.log('Secondary Char:', secondaryChar);
  
    // Choose which character to add based on capsLock state
    const charToAdd = capsLock ? primaryChar : secondaryChar;
  
    // Update the input field with the selected character
    setInput((prevInput) => prevInput + charToAdd);
    addChar(charToAdd);
  
    console.log('Char added:', charToAdd);
  };
  
  const handleCapsLock = () => {
    setCapsLock(!capsLock);
  };  

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.getModifierState('CapsLock')) {
        setCapsLock(true);
      } else {
        setCapsLock(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className='table-responsive keyboard' >      
      <table cellSpacing="1" cellPadding="3" id="Table2">
        <tbody>
          <tr>
            <td id="key1" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey1text" value="~&nbsp;ੱ" />
              <span className="key_green" id="key1english">`</span>
              <span id="key1text">&nbsp;&nbsp;~<br />ੱ&nbsp;&nbsp;</span>
            </td>
            <td id="key2" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey2text" value="ਆ&nbsp;੧" />
              <span className="key_green" id="key2english">1</span>
              <span id="key2text">&nbsp;&nbsp;ਆ<br />੧&nbsp;&nbsp;</span>
            </td>
            <td id="key3" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey3text" value="ਇ&nbsp;੨" />
              <span className="key_green" id="key3english">2</span>
              <span id="key3text">&nbsp;&nbsp;ਇ<br />੨&nbsp;&nbsp;</span>
            </td>
            <td id="key4" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey4text" value="ਈ&nbsp;੩" />
              <span className="key_green" id="key4english">3</span>
              <span id="key4text">&nbsp;&nbsp;ਈ<br />੩&nbsp;&nbsp;</span>
            </td>
            <td id="key5" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey5text" value="ਉ&nbsp;੪" />
              <span className="key_green" id="key5english">4</span>
              <span id="key5text">&nbsp;&nbsp;ਉ<br />੪&nbsp;&nbsp;</span>
            </td>
            <td id="key6" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey6text" value="ਊ&nbsp;੫" />
              <span className="key_green" id="key6english">5</span>
              <span id="key6text">&nbsp;&nbsp;ਊ<br />੫&nbsp;&nbsp;</span>
            </td>
            <td id="key7" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey7text" value="ਏ&nbsp;੬" />
              <span className="key_green" id="key7english">6</span>
              <span id="key7text">&nbsp;&nbsp;ਏ<br />੬&nbsp;&nbsp;</span>
            </td>
            <td id="key8" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey8text" value="ਐ&nbsp;੭" />
              <span className="key_green" id="key8english">7</span>
              <span id="key8text">&nbsp;&nbsp;ਐ<br />੭&nbsp;&nbsp;</span>
            </td>
            <td id="key9" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey9text" value="ਔ&nbsp;੮" />
              <span className="key_green" id="key9english">8</span>
              <span id="key9text">&nbsp;&nbsp;ਔ<br />੮&nbsp;&nbsp;</span>
            </td>
            <td id="key10" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey10text" value="ਖ਼&nbsp;੯" />
              <span className="key_green" id="key10english">9</span>
              <span id="key10text">&nbsp;&nbsp;ਖ਼<br />੯&nbsp;&nbsp;</span>
            </td>
            <td id="key11" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey11text" value="ਫ਼&nbsp;੦" />
              <span className="key_green" id="key11english">0</span>
              <span id="key11text">&nbsp;&nbsp;ਫ਼<br />੦&nbsp;&nbsp;</span>
            </td>
            <td id="key12" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey12text" value="☬&nbsp;-" />
              <span className="key_green" id="key12english">-</span>
              <span id="key12text">&nbsp;&nbsp;☬<br />-&nbsp;&nbsp;</span>
            </td>
            <td id="key13" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey13text" value="+&nbsp;=" />
              <span className="key_green" id="key13english">=</span>
              <span id="key13text">&nbsp;&nbsp;+<br />=&nbsp;&nbsp;</span>
            </td>
            <td id="key14" className="act cursor" colSpan="2" onClick={addKey}>
              <input type="hidden" id="hKey14text" value="&nbsp;" />
              <span className="key_green" id="key14english"></span>
              <span id="key14text">&nbsp;&nbsp;&nbsp;<br />&nbsp;&nbsp;&nbsp;</span>
            </td>
            {/* Repeat the same structure for other <td> elements */}
          </tr>
          <tr>
            <td id="key15" className="act cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey15text" value="&nbsp;" />
              <span className="key_green" id="key15english"></span>
              <span id="key15text">&nbsp;&nbsp;<br />&nbsp;&nbsp;</span>
            </td>
            <td id="key16" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey16text" value="ਥ&nbsp;ਤ" />
              <span className="key_green" id="key16english">q</span>
              <span id="key16text">&nbsp;&nbsp;ਥ<br />ਤ&nbsp;&nbsp;</span>
            </td>
            <td id="key17" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey17text" value="ਾਂ&nbsp;ਾ" />
              <span className="key_green" id="key17english">w</span>
              <span id="key17text">&nbsp;&nbsp;ਾਂ<br />ਾ&nbsp;&nbsp;</span>
            </td>
            <td id="key18" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey18text" value="ਓ&nbsp;ੲ" />
              <span className="key_green" id="key18english">e</span>
              <span id="key18text">&nbsp;&nbsp;ਓ<br />ੲ&nbsp;&nbsp;</span>
            </td>
            <td id="key19" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey19text" value="੍ਰ&nbsp;ਰ" />
              <span className="key_green" id="key19english">r</span>
              <span id="key19text">&nbsp;&nbsp;੍ਰ<br />ਰ&nbsp;&nbsp;</span>
            </td>
            <td id="key20" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey20text" value="ਠ&nbsp;ਟ" />
              <span className="key_green" id="key20english">t</span>
              <span id="key20text">&nbsp;&nbsp;ਠ<br />ਟ&nbsp;&nbsp;</span>
            </td>
            <td id="key21" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey21text" value="ੈ&nbsp;ੇ" />
              <span className="key_green" id="key21english">y</span>
              <span id="key21text">&nbsp;&nbsp;ੈ<br />ੇ&nbsp;&nbsp;</span>
            </td>
            <td id="key22" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey22text" value="ੂ&nbsp;ੁ" />
              <span className="key_green" id="key22english">u</span>
              <span id="key22text">&nbsp;&nbsp;ੂ<br />ੁ&nbsp;&nbsp;</span>
            </td>
            <td id="key23" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey23text" value="ੀ&nbsp;ਿ" />
              <span className="key_green" id="key23english">i</span>
              <span id="key23text">&nbsp;&nbsp;ੀ<br />ਿ&nbsp;&nbsp;</span>
            </td>
            <td id="key24" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey24text" value="ੌ&nbsp;ੋ" />
              <span className="key_green" id="key24english">o</span>
              <span id="key24text">&nbsp;&nbsp;ੌ<br />ੋ&nbsp;&nbsp;</span>
            </td>
            <td id="key25" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey25text" value="ਫ&nbsp;ਪ" />
              <span className="key_green" id="key25english">p</span>
              <span id="key25text">&nbsp;&nbsp;ਫ<br />ਪ&nbsp;&nbsp;</span>
            </td>
            <td id="key26" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey26text" value="{&nbsp;[" />
              <span className="key_green" id="key26english">[</span>
              <span id="key26text">&nbsp;&nbsp;{'{'}<br />[&nbsp;&nbsp;</span>
            </td>
            <td id="key27" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey27text" value="}&nbsp;]" />
              <span className="key_green" id="key27english">]</span>
              <span id="key27text">&nbsp;&nbsp;{'}'}<br />]&nbsp;&nbsp;</span>
            </td>
            <td id="key41" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey41text" value="ਙ&nbsp;ਞ" />
              <span className="key_green" id="key41english">\</span>
              <span id="key41text">&nbsp;&nbsp;ਙ<br />ਞ&nbsp;&nbsp;</span>
            </td>
            <td id="key59" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey59text" value="&nbsp;" />
              <span className="key_green" id="key59english"></span>
              <span id="key59text">&nbsp;&nbsp;<br />&nbsp;&nbsp;</span>
            </td>

          </tr>
          <tr>
            <td id="key29" className="act cursor" colSpan="2" onClick={handleCapsLock} style={{ backgroundColor: capsLock ? 'rgb(255, 207, 158)' : '#CAB99D' }}>
              <input type="hidden" id="hKey29text" value="Caps Lock&nbsp;" />
              <span className="key_green" id="key29english"></span>
              <span id="key29text">CapsLock<br />&nbsp;&nbsp;&nbsp;</span>
            </td>
            <td id="key30" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey30text" value="ੳ&nbsp;ਅ" />
              <span className="key_green" id="key30english">a</span>
              <span id="key30text">&nbsp;&nbsp;ੳ<br />ਅ&nbsp;&nbsp;</span>
            </td>
            <td id="key31" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey31text" value="ਸ਼&nbsp;ਸ" />
              <span className="key_green" id="key31english">s</span>
              <span id="key31text">&nbsp;&nbsp;ਸ਼<br />ਸ&nbsp;&nbsp;</span>
            </td>
            <td id="key32" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey32text" value="ਧ&nbsp;ਦ" />
              <span className="key_green" id="key32english">d</span>
              <span id="key32text">&nbsp;&nbsp;ਧ<br />ਦ&nbsp;&nbsp;</span>
            </td>
            <td id="key33" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey33text" value="ਢ&nbsp;ਡ" />
              <span className="key_green" id="key33english">f</span>
              <span id="key33text">&nbsp;&nbsp;ਢ<br />ਡ&nbsp;&nbsp;</span>
            </td>
            <td id="key34" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey34text" value="ਘ&nbsp;ਗ" />
              <span className="key_green" id="key34english">g</span>
              <span id="key34text">&nbsp;&nbsp;ਘ<br />ਗ&nbsp;&nbsp;</span>
            </td>
            <td id="key35" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey35text" value="੍ਹ&nbsp;ਹ" />
              <span className="key_green" id="key35english">h</span>
              <span id="key35text">&nbsp;&nbsp;੍ਹ<br />ਹ&nbsp;&nbsp;</span>
            </td>
            <td id="key36" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey36text" value="ਝ&nbsp;ਜ" />
              <span className="key_green" id="key36english">j</span>
              <span id="key36text">&nbsp;&nbsp;ਝ<br />ਜ&nbsp;&nbsp;</span>
            </td>
            <td id="key37" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey37text" value="ਖ&nbsp;ਕ" />
              <span className="key_green" id="key37english">k</span>
              <span id="key37text">&nbsp;&nbsp;ਖ<br />ਕ&nbsp;&nbsp;</span>
            </td>
            <td id="key38" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey38text" value="ਲ਼&nbsp;ਲ" />
              <span className="key_green" id="key38english">l</span>
              <span id="key38text">&nbsp;&nbsp;ਲ਼<br />ਲ&nbsp;&nbsp;</span>
            </td>
            <td id="key39" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey39text" value=":&nbsp;ਃ" />
              <span className="key_green" id="key39english">;</span>
              <span id="key39text">&nbsp;&nbsp;:<br />ਃ&nbsp;&nbsp;</span>
            </td>
            <td id="key40" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey40text" value="&quot;&nbsp;nbsp" />
              <span className="key_green" id="key40english">'</span>
              <span id="key40text">&nbsp;&nbsp;"<br />'&nbsp;&nbsp;</span>
            </td>
            <td id="key28" className="act cursor" colSpan="2" onClick={addKey}>
              <input type="hidden" id="hKey28text" value="&nbsp;" />
              <span className="key_green" id="key28english"></span>
              <span id="key28text">&nbsp;&nbsp;<br />&nbsp;&nbsp;</span>
            </td>
          </tr>
          <tr>
            <td id="key42" className="act cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey42text" value="&nbsp;" />
              <span className="key_green" id="key42english"></span>
              <span id="key342text">&nbsp;&nbsp;&nbsp;<br />&nbsp;&nbsp;&nbsp;</span>
            </td>
            <td id="key43" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey43text" value="ਜ਼&nbsp;ਗ਼" />
              <span className="key_green" id="key43english">z</span>
              <span id="key43text">&nbsp;&nbsp;ਜ਼<br />ਗ਼&nbsp;&nbsp;</span>
            </td>
            <td id="key44" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey44text" value="ਯ&nbsp;ਣ" />
              <span className="key_green" id="key44english">x</span>
              <span id="key44text">&nbsp;&nbsp;ਯ<br />ਣ&nbsp;&nbsp;</span>
            </td>
            <td id="key45" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey45text" value="ਛ&nbsp;ਚ" />
              <span className="key_green" id="key45english">c</span>
              <span id="key45text">&nbsp;&nbsp;ਛ<br />ਚ&nbsp;&nbsp;</span>
            </td>
            <td id="key46" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey46text" value="ੜ&nbsp;ਵ" />
              <span className="key_green" id="key46english">v</span>
              <span id="key46text">&nbsp;&nbsp;ੜ<br />ਵ&nbsp;&nbsp;</span>
            </td>
            <td id="key47" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey47text" value="ਭ&nbsp;ਬ" />
              <span className="key_green" id="key47english">b</span>
              <span id="key47text">&nbsp;&nbsp;ਭ<br />ਬ&nbsp;&nbsp;</span>
            </td>
            <td id="key48" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey48text" value="ਂ&nbsp;ਨ" />
              <span className="key_green" id="key48english">n</span>
              <span id="key48text">&nbsp;&nbsp;ਂ<br />ਨ&nbsp;&nbsp;</span>
            </td>
            <td id="key49" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey49text" value="ੰ&nbsp;ਮ" />
              <span className="key_green" id="key49english">m</span>
              <span id="key49text">&nbsp;&nbsp;ੰ<br />ਮ&nbsp;&nbsp;</span>
            </td>
            <td id="key50" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey50text" value="ੴ&nbsp;," />
              <span className="key_green" id="key50english">,</span>
              <span id="key50text">&nbsp;&nbsp;ੴ<br />,&nbsp;&nbsp;</span>
            </td>
            <td id="key51" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey51text" value="।&nbsp;." />
              <span className="key_green" id="key51english">.</span>
              <span id="key51text">&nbsp;&nbsp;।<br />.&nbsp;&nbsp;</span>
            </td>
            <td id="key52" className="dbl cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey52text" value="?&nbsp;॥" />
              <span className="key_green" id="key52english">/</span>
              <span id="key52text">&nbsp;&nbsp;?<br />॥&nbsp;&nbsp;</span>
            </td>
            <td id="key53" className="act cursor" colSpan="4" onClick={addKey}>
              <input type="hidden" id="hKey53text" value="" />
              <span className="key_green" id="key53english"></span>
              <span id="key53text"></span>
            </td>
          </tr>
          <tr>
            <td id="key54" className="act cursor" colSpan="2" onClick={addKey}>
              <input type="hidden" id="hKey54text" value="Ctrl" />
              <span className="key_green" id="key54english"></span>
              <span id="key54text">Ctrl</span>
            </td>
            <td id="key55" className="act cursor" colSpan="2" onClick={addKey}>
              <input type="hidden" id="hKey55text" value="Alt" />
              <span className="key_green" id="key55english"></span>
              <span id="key55text">Alt</span>
            </td>
            <td id="key56" className="act cursor" colSpan="7" onClick={addKey}>
              <input type="hidden" id="hKey56text" value="Space<br>" />
              <span className="key_green" id="key56english"></span>
              <span id="key56text">Space</span>
            </td>
            <td id="key57" className="act cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey57text" value="Alt" />
              <span className="key_green" id="key57english"></span>
              <span id="key57text">Alt</span>
            </td>
            <td id="key58" className="act cursor" colSpan="1" onClick={addKey}>
              <input type="hidden" id="hKey58text" value="Ctrl" />
              <span className="key_green" id="key58english"></span>
              <span id="key58text">Ctrl</span>
            </td>
            <td id="key53" className="dbl cursor" colSpan="2" onClick={addKey}>
              <input type="hidden" id="hKey53text" value="" />
              <span className="key_green" id="key53english"></span>
              <span id="key53text"></span>
            </td>
          </tr>
          {/* Repeat rows and <td> elements for the entire keyboard */}
        </tbody>
      </table>
    </div>
  );
};

export default VirtualKeyboard;
