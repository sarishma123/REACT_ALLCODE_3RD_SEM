import { useState } from "react";

let QuoteGenerator=() => {
  let quotes = [
    "The best way to get started is to quit talking and begin doing.",
    "Life is what happens when you're busy making other plans.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Believe you can and you're halfway there.",
    "Dream big and dare to fail."
  ];

  const [quote, setQuote] = useState(quotes[0]);

  const getNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div>
      <h2>Random Quote</h2>
      <p>"{quote}"</p>
      <button onClick={getNewQuote}>New Quote</button>
    </div>
  );
}

export default QuoteGenerator;
