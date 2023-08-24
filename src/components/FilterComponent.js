import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';


const FilterComponent = () => {

const [countryList,setCountryList]=useState([])
const regionList = ["Africa","Americas","Oceania","Asia","Europe"]
const countryNames = countryList.map(obj => obj);
const [searchQuery, setSearchQuery] = useState('');
const [searchResults, setSearchResults] = useState([]);
const finalResult =(!searchResults?countryList:searchResults)
  console.log(finalResult)
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
    .then((response)=>{
      setCountryList(response.data)
      
    })
  }, [])

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);

    const filteredElements = countryNames.filter((countryList) =>{
               const countryName = countryList.name.common.toLowerCase();
               const searchValue = value.toLowerCase();
     return countryName.startsWith(searchValue);
      });

    setSearchResults(filteredElements);
  };
  const selectChange =(e)=>{
  const {value} = e.target

   setSearchQuery(value);

   const filteredElements = countryNames.filter((countryList) =>{
              const countryName = countryList.region.toLowerCase();
              const searchValue = value.toLowerCase();
    return countryName.startsWith(searchValue);
     });

   setSearchResults(filteredElements);
  }

  return (
    <div>
      <div className='inputElements'>
        <input
        id="oneCountry"
          onChange={handleChange}
          name="search"
          placeholder="Search"
          value={searchQuery}
        />
    
        <select  id="regiounCountry" placeholder="Search in regions" onChange={selectChange}>
        {regionList.map((region,index) =>{
          return <option key={index} value={region}>{region}</option>
        })}
       </select>
      </div>

      <div className="card-container">
      
        {finalResult?.map((result, index) => (
          <Card key={index} countryDetail={result} />
        ))}
 </div>
  
    </div>
  );
};

export default FilterComponent;