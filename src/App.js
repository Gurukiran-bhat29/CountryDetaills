import './App.css';
import { useState, useEffect } from 'react';
import Counries from './Countries';
import SelectedCountry from './SelectedCountry';

function App() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countryDetails, setCountryDetails] = useState([]);

  const getSelectedCountry = (details) => {
    setSelectedCountry(details)
  }

  const storeCountryDetails = (data) => {
    let storeDetails = data.map((countryDetails) => {
      const nativeName =
        countryDetails.name.nativeName
          ? Object.keys(countryDetails.name.nativeName)[0]
          : '';
      const currencies =
        countryDetails.currencies
          ? Object.keys(countryDetails.currencies)
          : '';
      let currencyList = currencies && currencies.map((currency) => {
        return [
          countryDetails.currencies[currency].name
        ]
      })
      const languages =
        countryDetails.currencies
          ? Object.keys(countryDetails.languages)
          : '';
      let languageList = languages && languages.map((currency) => {
        return [
          countryDetails.languages[currency]
        ]
      })
      return {
        name: countryDetails.name.common,
        capital:
          countryDetails.capital
            ? countryDetails.capital[0]
            : '',
        flag: countryDetails.flags.png,
        population: countryDetails.population,
        region: countryDetails.region,
        nativeName:
          nativeName
            ? countryDetails.name.nativeName[nativeName].common
            : '',
        subregion: countryDetails.subregion,
        tld: countryDetails.tld,
        currencies: currencyList,
        languages: languageList
      }
    })
    setCountryDetails(storeDetails);
  }

  const debounce = (callBack, delay) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        timer = null;
        callBack.apply(context, args);
      }, delay);
    };
  }

  const getCountryOnSearch = (value) => {
    makeApiCall(`https://restcountries.com/v3.1/name/${value}`);
  }

  const optimizedFun = debounce(getCountryOnSearch, 500);

  const makeApiCall = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => storeCountryDetails(data));
  }

  useEffect(() => {
    makeApiCall('https://restcountries.com/v3.1/all');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

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
              onChange={(e) => optimizedFun(e.target.value)}
            />
            <div className='regionContainer'>
              <button className='button'>
                Filter by Region
              </button>
              <div className='regionsList'>
                <span
                  id='africa'
                  className='region'
                  onClick={(e) => onSelectRegionList(e.target.id)}
                >
                  Africa
                </span>
                <span
                  id='america'
                  className='region'
                  onClick={(e) => onSelectRegionList(e.target.id)}
                >
                  America
                </span>
                <span
                  id='asia'
                  className='region'
                  onClick={(e) => onSelectRegionList(e.target.id)}
                >
                  Asia
                </span>
                <span
                  id='europe'
                  className='region'
                  onClick={(e) => onSelectRegionList(e.target.id)}
                >
                  Europe
                </span>
                <span
                  id='oceania'
                  className='region'
                  onClick={(e) => onSelectRegionList(e.target.id)}
                >
                  Oceania
                </span>
              </div>
            </div>
          </div>
          <div className='countryListContainer'>
            {countryDetails && countryDetails.map((data, index) => {
              return (
                <Counries
                  key={index}
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
