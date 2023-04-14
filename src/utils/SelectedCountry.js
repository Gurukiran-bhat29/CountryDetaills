import '../index.css';

function selectedCountry({ details, onClickBack }) {
  const currencyLength = details.currencies.length - 1;
  const languageLength = details.languages.length - 1;
  return (
    <div className="selectedCountry">
      <div className='selectedInnerContainer'>
        <img
          className='flexOne selectedFlag'
          src={details.flag}
          alt='SelectedCountry'
        />
        <div className='flexOne detailsContainer'>
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
                {details.currencies && details.currencies.map((currency, index) =>
                  currencyLength !== index
                    ? ` ${currency},`
                    : ` ${currency}`
                )}
              </label>
              <label className='displayBlock'>
                <span className='fontBold'>Languages:</span>
                {details.currencies && details.languages.map((language, index) =>
                  languageLength !== index
                    ? ` ${language},`
                    : ` ${language}`
                )}
              </label>
            </div>
          </div>
        </div>
      </div>
      <button
        className='back'
        onClick={() => onClickBack()}
      >
        Back
      </button>
    </div>
  )
}
export default selectedCountry;