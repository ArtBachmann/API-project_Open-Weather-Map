import React from 'react';
const conditions = ({ responseObj }) => {
  return (
    <div>
      {responseObj.cod === 200 ?
        <div>
          <p><strong>{responseObj.name}</strong></p>
          <p>It is currently
            {Math.round(responseObj.main.temp)} degrees out with
            {responseObj.weather[0].description}  and wind speed is  {responseObj.wind.speed} m/s.
            in the country {responseObj.sys.country}
            and other data: <br />
            {responseObj.main.humidity} <br />
            {responseObj.main.pressure} <br />
            {responseObj.main.feels_like} <br />
            {responseObj.main.temp} <br />

          </p>
        </div>
        : null
      }
    </div>
  )
}
export default conditions;