// textFormatter.js

export const formatTextForCopyBvgAndKs = (angData, isLareevar,isLareevarAssist,isPunctuation,isPunctuationAssist,
    isPhonetic,isGurumukhi,isHindi,isEnglish,isShahmukhi,isSantSinghTransln,isTeekaTransln,isTeekaRomanTransln,isTeekaHindiTransln,isAttrib) => {
  
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
      if (isTeekaTransln) {
        if(item.teeka){
            textContent += `\n${item.teeka}\n`;
        } else {
            textContent += `\n${item.teeka_punjabi}\n`;
        }        
      }
      if (isTeekaRomanTransln) {
        textContent += `\n${item.teeka_roman}\n`;
      }
      if (isTeekaHindiTransln) {
        textContent += `\n${item.teeka_hindi}\n`;
      }
      if (isAttrib) {
       // textContent += `\n${item.lattrib}\nShabad: ${item.shabad_name}\n${item.raag} ${item.author}`;
       if (item.lattrib ) {        
          textContent += `\n${item.lattrib}\n`;
       }        
        else 
        textContent += `\n${item.attributes}\n`;
      }
  
      // Add extra line breaks between each item
      return textContent;
    }).join('\n\n\n\n\n'); // Four line breaks after each item
  };
  