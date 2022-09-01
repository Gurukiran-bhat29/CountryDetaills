import './App.css';
import { useState, useEffect } from 'react';
import Counries from './Countries';
import SelectedCountry from './SelectedCountry';

function App() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countryDetails, setCountryDetails] = useState([]);
  const [searchCountry, setSearchCountry] = useState('');

  const getSelectedCountry = (details) => {
    setSelectedCountry(details)
  }

  const storeCountryDetails = (data) => {
    let storeDetails = [];
    storeDetails = data.map((countryDetails) => {
      // const nativeName = countryDetails ? Object.keys(countryDetails.name.nativeName)[0] : '';
      // console.log('daaaa', nativeName);
      return {
        name: countryDetails.name.common,
        capital: countryDetails.capital,
        flag: countryDetails.flags.png,
        population: countryDetails.population,
        region: countryDetails.region,
        // nativeName: countryDetails.name.nativeName[nativeName],
        subregion: countryDetails.subregion,
        tld: countryDetails.tld,
      }
    })
    setCountryDetails(storeDetails);
  }

  const getCountryOnSearch = (event) => {
    console.log('abc', event.target.value);
    setSearchCountry(event.target.value);
    makeApiCall(`https://restcountries.com/v3.1/name/${event.target.value}`);
  }

  const makeApiCall = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => storeCountryDetails(data));
  }

  useEffect(() => {
    makeApiCall('https://restcountries.com/v3.1/all');
  }, []);

  const onSelectRegionList = (region) => {
    makeApiCall(`https://restcountries.com/v3.1/region/${region}`);
  }

  return (
    <div className="App">
      <div className='Header'>
        <label style={{ fontWeight: 'bold' }}>Where in the world?</label>
      </div>
      {!selectedCountry ? (
        <div>
          <div className='inputFieldContainer'>
            <input
              className='inputField'
              type='text'
              placeholder='Search for a country...'
              onChange={(event) => getCountryOnSearch(event)}
              value={searchCountry}
            />
            <div className='regionContainer'>
              <button className='button'>
                Filter by Region
              </button>
              <div className='regionsList'>
                <label
                  id='africa'
                  className='region'
                  onClick={(e) => onSelectRegionList(e.target.id)}
                >
                  Africa
                </label>
                <label
                  id='america'
                  className='region'
                  onClick={(e) => onSelectRegionList(e.target.id)}
                >
                  America
                </label>
                <label
                  id='asia'
                  className='region'
                  onClick={(e) => onSelectRegionList(e.target.id)}
                >
                  Asia
                </label>
                <label
                  id='europe'
                  className='region'
                  onClick={(e) => onSelectRegionList(e.target.id)}
                >
                  Europe
                </label>
                <label
                  id='oceania'
                  className='region'
                  onClick={(e) => onSelectRegionList(e.target.id)}
                >
                  Oceania
                </label>
              </div>
            </div>
          </div>
          <div className='countryListContainer'>
            {countryDetails && countryDetails.map((data) => {
              return (
                <Counries
                  data={data}
                  callBack={(details) => getSelectedCountry(details)}
                />
              )
            })}
          </div>
        </div>
      ) : (
        <SelectedCountry
          details={selectedCountry}
          onClickBack={() => setSelectedCountry('')}
        />
      )}
    </div>
  );
}

export default App;
