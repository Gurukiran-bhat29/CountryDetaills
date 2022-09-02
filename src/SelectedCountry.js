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
        <label>
          <span className='fontBold'>Native Name:</span> {details.nativeName}
        </label>
        <label>
          <span className='fontBold'>Population:</span> {details.population}
        </label>
        <label>
          <span className='fontBold'>Region:</span> {details.region}
        </label>
        <label>
          <span className='fontBold'>Sub Region:</span> {details.subregion}
        </label>
        <label>
          <span className='fontBold'>Capital:</span> {details.capital}
        </label>
        <label>
          <span className='fontBold'>Top Level Domain:</span> {details.tld}
        </label>
        <label>
          <span className='fontBold'>Currencies:</span>
          {details.currencies.map((currency) => currency)}
        </label>
        <label>
          <span className='fontBold'>Languages:</span>
          {details.languages.map((language) => language)}
        </label>
      </div>
    </div>
  )
}
export default selectedCountry;