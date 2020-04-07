import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions'

const Forecast = () => {
  let [responseObj, setResponseObj] = useState({})
  function getForecast() {
    fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Vantaa", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "07dd3857e5mshd43a0a36eb0da8ep1a0701jsne39657607a6d"
      }
    })
      .then(response => response.json())
      .then(response => {
        setResponseObj(response)
        console.log(response)
      })
      .catch(err => {
        console.log(err);
      });
  }
  return (
    <div>
      <div>
        <h2>Find Current Weather Conditions</h2>
        <button onClick={getForecast}>Get Forecast</button>
        <Conditions
          responseObj={responseObj}
        />
      </div>
    </div>
  )
}
export default Forecast;