import React , { useEffect, useState }from 'react'
import quotes from '../QuotesDatabase.js'
import './Generator.css'

const Generator = () => {

    const [currentQuote, setCurrentQuote] = useState(getRandomQuote())
    const [colors, setColors] = useState(getRandomColor())

    function getRandomQuote () {
        const randomIndex = Math.floor(Math.random() * quotes.length)
        return quotes[randomIndex]
    }

    function getRandomColor () {
        const randomColor = () => Math.floor(Math.random() * 256)
        return `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`
    }

    function generateNewQuote () {
        let newQuote = getRandomQuote()
        while (newQuote === currentQuote) {
            newQuote = getRandomQuote
        }
        setCurrentQuote(newQuote)
        setColors(getRandomColor())
    }

    return (
        <div className="quote-container" style={{ background: colors }}>
            <div className="quote-box">
                <h1 className="quote-header" style={{ color: colors }}>
                {currentQuote.quote}
                </h1>
                <p className="quote-author" style={{ color: colors }}>- {currentQuote.author} -</p>
                <button
                className="quote-button"
                style={{ backgroundColor: colors, color: 'white' }}
                onClick={generateNewQuote}
                >
                New Quote
                </button>
            </div>
     
        </div>
      );
}

export default Generator