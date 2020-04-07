import React from 'react';
import classes from './Conditions.module.css'

const conditions = ({ error, loading, responseObj }) => {
  return (
    <div className={classes.Wrapper}>
      {error && <small className={classes.Small}>Please enter a valid city.</small>}
      {loading && <div className={classes.Loader}>Loading...</div>}
      {responseObj.cod === 200 ?
        <div>
          <p><strong>{responseObj.name}</strong></p>
          <p>It is currently &nbsp;
             {Math.round(responseObj.main.temp)} degrees out with &nbsp;
            {responseObj.weather[0].description}  and wind speed is about {responseObj.wind.speed} m/s.
          </p>
        </div>
        : null
      }
    </div>
  )
}
export default conditions;