import React, { useEffect, useState } from 'react'
import axios from 'axios';
import _ from 'lodash';
import FilterComponent from './FilterComponent';


const SearchComponent=()=> {
    const [countrylist,setCountryList]=useState([])
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResult, setSearchResult] = useState(null);


useEffect(() => {
  axios.get("https://restcountries.com/v3.1/all")
  .then((response)=>{
    setCountryList(response.data)
    
  })
}, [])

const handleChange=(e)=>{

const {value} = e.target;
setSearchQuery(value);

  const foundElement = countrylist.find((element) =>{
    let apiElement =_.lowerCase(element.name.common)
  let searchElement = _.lowerCase(value)
      if( apiElement=== searchElement ){
        return element
      }
    });

  setSearchResult(foundElement);
}

  return (
    <div>
    <FilterComponent countryList={countrylist}/>


    {/* <div>
        <input onChange={handleChange} name="search" placeholder="Search" value={searchQuery}></input>
    </div>  */}
    

{/* code for finding an country and it will show the country name */}
     {/* <h1> {searchResult?(
      <p>Found: {searchResult.name.common}</p>
    ):null}</h1> */}
     
    {/* {countrylist.map((country)=>{
        return <card key={country.cca3}>
        <img src={country.flags.png} alt={country.name.commom}/>
        <h5>{country.name.common}</h5> 
        </card>
    })} */}
    </div>
  )
}

export default SearchComponent