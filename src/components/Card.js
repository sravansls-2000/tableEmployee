import React from 'react'

function Card(props) {
   const {countryDetail}=props
  return (
    <div class="card">
    <img src={countryDetail.flags.png} alt={countryDetail.name.common}/>
     
      <h2>{countryDetail.name.common}</h2>
      <p>{countryDetail.region}</p>
    <img className="court" src={countryDetail.coatOfArms.png} alt={countryDetail.name.common}/>
      <div>
        <a href={countryDetail.maps.googleMaps}>Maps</a>
      </div>
    
  </div>
  )
}

export default Card