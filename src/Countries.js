import './App.css';
function Counries({ data, callBack }) {
  return (
    <div
      className='innerContainer'
      onClick={() => callBack(data)}
    >
      <img
        className="image"
        src={data.flag}
        alt="CountryImage"
      />
      <label className="fontBold country">{data.name}</label>
      <label className="countryDetail">
        <span className="fontBold">Population</span>: {data.population}
      </label>
      <label className="countryDetail">
        <span className="fontBold">Region</span>: {data.region}
      </label>
      <label className="countryDetail">
        <span className="fontBold">Capital</span>: {data.capital}
      </label>
    </div>
  )
}

export default Counries;