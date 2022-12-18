import React, { useState } from 'react';
import quotes from "../quotes.json"
import colors from "../colors.json"

const QuoteBox = () => {

    const randomColor = Math.floor(Math.random() * colors.length)

    const randomQuote = Math.floor(Math.random() * quotes.length)

    const [changeColor, setChangeColor] = useState (randomColor)

    const [changeQuote, setChangeQuote] = useState (randomQuote)

    const randomRoulette = () => {

        setChangeColor(Math.floor(Math.random()* colors.length))

        setChangeQuote(Math.floor(Math.random() * quotes.length))

    }

    document.body.style = `background: ${colors[changeColor].hex}` 

    return (
        <div>
            <div className='box-container'>
                <div className='quote-box'>
                    <div className='box-header'>
                    <i className="fa-solid fa-quote-left" style={{color: `${colors[changeColor].hex}`}}></i>
                    <p style={{color: `${colors[changeColor].hex}`}}>{quotes[changeQuote].quote}</p>
                    </div>
                    <div className='box-footer'>
                    <p style={{color: `${colors[changeColor].hex}`}}>{quotes[changeQuote].author}</p>
                    </div>
                    <button className='quoute-btn' onClick={randomRoulette} style={{background: `${colors[changeColor].hex}`}}><i className="fa-solid fa-angles-right" style={{color: "white"}}></i></button>
                </div>
            </div>
        </div>
    );
};

export default QuoteBox;