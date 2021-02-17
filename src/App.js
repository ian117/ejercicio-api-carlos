import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Quote from './components/Quote'
import CreateQuote from './components/CreateQuote'
import './App.css';

function App() {
  //Constantes & Lets
  const [ quotes, setQuotes] = useState([])

// Api api/quotes/options
const ValidValues = async() => {
  try {
    const callApi = axios.get('https://prof-quotes.herokuapp.com/api/quotes/options',);
    return callApi;
  } catch (er) {
    console.error(er)
  }
}
// Api api/quotes
const CallQuotesCount = async () => {
  try {
    const callApi = axios.get('https://prof-quotes.herokuapp.com/api/quotes',);
    return callApi;
  } catch (er) {
    console.error(er)
  }
}

useEffect(() => {
  ValidValues()
  .then((results) => console.log(results.data))
}, [])


const doQuotesArr = (obj) => {
  const NewArray = [];
  for (let i = 0; i < obj.quotes.length; i++){
    NewArray.push(obj.quotes[i])
  }
  setQuotes(NewArray)
}

useEffect(() => {
  CallQuotesCount()
  .then((results) => {console.log(results.data)
                      doQuotesArr(results.data)}) //Nos haga un array de las quotes
}, [])


  return (
    <div className="App">
      <Quote quotes={quotes}/>
      <CreateQuote/>
    </div>
  );
}

export default App;
