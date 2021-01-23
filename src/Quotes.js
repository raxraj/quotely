import './Quotes.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

let Quotes = () => {

    let [quote, setQuote] = useState({})

    let loadQuote = () => {
        axios.get('https://api.quotable.io/random', {
            params: {
                maxLength: 150
            }
        })
            .then(response => {
                setQuote(response.data)
            })
    }
    useEffect(loadQuote, [])

    return (
        <div className="container">
            <div className="blockquote-wrapper">
                <div className="blockquote">
                    <h1>
                        {quote.content}
                    </h1>
                    <h4> - {quote.author} </h4>
                </div>
            </div>
        </div>
    )
}

export default Quotes;