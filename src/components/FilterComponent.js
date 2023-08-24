import React, { useState } from 'react';
import Card from './Card';

const FilterComponent = (props) => {
const {countryList} =props;
const regionList = ["Africa","Americas","Oceania","Asia","Europe"]
const countryNames = countryList.map(obj => obj);

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

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
      <div className='input elements'>
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

      
        {searchResults.map((result, index) => (
          <Card key={index} countryDetail={result} />
        ))}
  
    </div>
  );
};

export default FilterComponent;