import React from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'; 
import { useLocation } from 'react-router-dom';

const MouseOverDic = ({ content, keyWord, mouse, punctation, lareevar,gurmukhiFont,gurmukhiColor,gurmukhiSize }) => {
    const location = useLocation();
    const createWordArray = (content) => {
        let words = content.split(' ');
        let wordArray = [];

        words.forEach(word => {
            let cleanWord = word.replace(/[.,;:!?]/g, ''); 
            if (!punctation && !lareevar && keyWord[cleanWord] && mouse) {
                wordArray.push({
                    word: cleanWord,
                    tooltip: keyWord[cleanWord]
                });
            } else {
                wordArray.push({ word: cleanWord });
            }
        });

        return wordArray;
    };

    const wordArray = createWordArray(content);

    return (
        <div key={location.pathname}>
            {wordArray.map((item, index) => (
                <span
                    key={index}
                    style={{ cursor: item.tooltip ? 'pointer' : 'default' , color:item.tooltip ? '#7c1012' : 'black',
                        fontFamily: gurmukhiFont, fontSize: `${gurmukhiSize}px`, 
                     }}
                    data-tooltip-id={item.tooltip ? 'tooltip' : undefined}
                    data-tooltip-content={item.tooltip ? item.tooltip : undefined}
                >
                    <Link to={`/sggs-kosh/view`} state={{ Word: item.word }}style={{ cursor: item.tooltip ? 'pointer' : 'default' , color:item.tooltip ? '#7c1012' : 'black',
                        fontFamily: gurmukhiFont, fontSize: `${gurmukhiSize}px`, 
                     }}>{item.word}</Link>{' '}
                </span>
            ))}
            <Tooltip id="tooltip" place="top" effect="solid" />
        </div>
    );
};

export default MouseOverDic;
