import React from 'react'

function Card(props) {
   const {countryDetail}=props
  return (
    <div class="card">
    <img src={countryDetail.flags.png} alt={countryDetail.name.common}/>
    <div class="card-content">
      <h2>{countryDetail.name.common}</h2>
      <p>This is a sample card created using HTML and CSS.</p>
    </div>
  </div>
  )
}

export default Card