// textFormatter.js

export const formatTextForCopy = (angData, isLareevar, isLareevarAssist, isPunctuation, isPunctuationAssist,
  isPhonetic, isGurumukhi, isHindi, isEnglish, isShahmukhi, isSantSinghTransln, isManmohanTransln, isPunjabiTransln, isGuruGranthTeeka, isFaridkotTeeka,
  isFaridkotaTeekaHindi, isSgpcTeeka, isAttrib) => {

  return angData.map((item) => {
    let textContent = '';
   // console.log('FDFBXFDF', scriptre)
    if (isLareevar && !isLareevarAssist) {
      textContent += item.punjabi.replace(/\s+/g, '');
    } else if (isLareevar && isLareevarAssist) {
      textContent += item.punjabi;
    } else if (isPunctuation && !isPunctuationAssist) {
      textContent += item.punctuation;
    } else if (isPunctuation && isPunctuationAssist) {
      textContent += item.punjabi;
    } else if (isGurumukhi) {
      textContent += item.punjabi;
    }

    if (isPhonetic) {
      textContent += `\n\n${item.translit}\n`;
    }
    if (isEnglish) {
      textContent += `\n${item.roman}\n`;
    }
    if (isHindi) {
      textContent += `\n${item.hindi}\n`;
    }
    if (isShahmukhi) {
      textContent += `\n${item.urdu}\n`;
    }
    if (isSantSinghTransln) {
      textContent += `\n${item.english}\n`;
    }
    if (isManmohanTransln) {
      textContent += `\n${item.eng_mms}\n`;
    }
    if (isPunjabiTransln) {
      textContent += `\n${item.punj_mms}\n`;
    }
    if (isGuruGranthTeeka) {
      textContent += `\n${item.ss_line}\n`;
    }
    if (isFaridkotTeeka) {
      textContent += `\n${item.fwt}`;
      textContent += `\n${item.fwt_2}`;
      textContent += `\n${item.fwt_3}\n`;
    }
    if (isFaridkotaTeekaHindi) {
      textContent += `\n${item.fwt_hindi}\n`;
    }
    if (isSgpcTeeka) {
      textContent += `\n${item.sgpc_1}`;
      textContent += `\n${item.sgpc_2}`;
      textContent += `\n${item.sgpc_3}\n`;
    }
    /* if (isTeekaTransln) {
      textContent += `\n${item.teeka}\n`;
    }
    if (isTeekaRomanTransln) {
      textContent += `\n${item.teeka_roman}\n`;
    }
    if (isTeekaHindiTransln) {
      textContent += `\n${item.teeka_hindi}\n`;
    } */
    if (isAttrib) {
     // textContent += `\n${item.lattrib}\nShabad: ${item.shabad_name}\n${item.raag} ${item.author}`;
     if (item.lattrib ) {
      if(item.shabad_name){
        textContent += `\n${item.lattrib}\nShabad: ${item.shabad_name}\n${item.raag} ${item.author}`;
      } else{
        textContent += `\n${item.lattrib}\n${item.raag} ${item.author}`;
      }
     }
      
      else 
      textContent += `\n${item.attributes}\n${item.raag} ${item.author}`;
    }

    // Add extra line breaks between each item
    return textContent;
  }).join('\n\n\n\n\n'); // Four line breaks after each item
};
