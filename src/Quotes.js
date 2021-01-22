import './Quotes.css'
import {useState, useEffect} from 'react';
import axios from 'axios';

let Quotes = () => {

    let [quote, setQuote] = useState({})

    let loadQuote = () => {
        axios.get('https://api.quotable.io/random',{
            params: {
                maxLength: 150
            }
        })
        .then(response=>{
            setQuote(response.data)
        })
    }
    useEffect(loadQuote,[])

    return (
        <div className="container">
            <div className="quoteBox">
                <div className="quote">
                    <span className="inverted">
                        "
                    </span>
                    {quote.content}
                    <span className="inverted">
                        "
                    </span>
                </div>
                <div className="author">
                    - {quote.author}
                </div>
            </div>
            <button class="bttn-fill bttn-lg bttn-primary"
                onClick = {loadQuote}
            >Next Quote</button>
        </div>
    )
}

export default Quotes;