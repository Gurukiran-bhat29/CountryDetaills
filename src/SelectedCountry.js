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
        <label><span className='fontBold'>Native Name:</span> {details.nativeName}</label>
      </div>
    </div>
  )
}
export default selectedCountry;