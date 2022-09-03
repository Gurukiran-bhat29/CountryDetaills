import './App.css';

function selectedCountry({ details, onClickBack }) {
  return (
    <div className="selectedCountry">
      <div className='flexOne'>
        <div className='selectedFlagContainer'>
          <img
            className='selectedFlag'
            src={details.flag}
            alt='SelectedCountry'
          />
        </div>
        <button
          className='back'
          onClick={() => onClickBack()}
        >
          Back
        </button>
      </div>
      <div className='flexOne'>
        <label className='selectedName'>{details.name}</label>
        <div className='displayFlex'>
          <div className='flexOne'>
            <label className='displayBlock'>
              <span className='fontBold'>Native Name:</span> {details.nativeName}
            </label>
            <label className='displayBlock'>
              <span className='fontBold'>Population:</span> {details.population}
            </label>
            <label className='displayBlock'>
              <span className='fontBold'>Region:</span> {details.region}
            </label>
            <label className='displayBlock'>
              <span className='fontBold'>Sub Region:</span> {details.subregion}
            </label>
          </div>
          <div className='flexOne'>
            <label className='displayBlock'>
              <span className='fontBold'>Capital:</span> {details.capital}
            </label>
            <label className='displayBlock'>
              <span className='fontBold'>Top Level Domain:</span> {details.tld}
            </label>
            <label className='displayBlock'>
              <span className='fontBold'>Currencies:</span>
              {details.currencies.map((currency) => ` ${currency}`)}
            </label>
            <label className='displayBlock'>
              <span className='fontBold'>Languages:</span>
              {details.languages.map((language) => ` ${language}`)}
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
export default selectedCountry;