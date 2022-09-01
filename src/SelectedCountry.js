import './App.css';

function selectedCountry({ details, onClickBack }) {
  return (
    <div className="selectedCountry">
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
  )
}
export default selectedCountry;