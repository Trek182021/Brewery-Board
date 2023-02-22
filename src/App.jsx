import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import BREWERY_DATA from './breweries'
import Card from './components/Card'


const BREWERY_JSON = JSON.parse(BREWERY_DATA);

function App() {
  console.log(BREWERY_JSON);
  return (
    <div className="App">
      <div className="header">
        <h1>Best Breweries in Los Angeles</h1>
      </div>

      <div className="card-container">
        {BREWERY_JSON.map( (brewery,index) => <Card info={brewery} key={index}/>)}
      </div>
    </div>
  )
}

export default App
