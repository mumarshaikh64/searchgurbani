// textFormatter.js

export const formatTextForCopyBnl = (angData, isLareevar,isLareevarAssist,isPunctuation,isPunctuationAssist,
    isPhonetic,isGurumukhi,isHindi,isEnglish,isShahmukhi,isSantSinghTransln,isTeekaTransln,isTeekaHindiTransln,isAttrib) => {
  
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
            textContent += `\n${item.teeka}\n`;      
      }
      if (isTeekaHindiTransln) {
        textContent += `\n${item.teekahindi}\n`;
      }
      if (isAttrib) { 
        textContent += `\n${item.attributes}\n`;
      }
  
      // Add extra line breaks between each item
      return textContent;
    }).join('\n\n\n\n\n'); // Four line breaks after each item
  };
  