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
      <span className="fontBold country">{data.name}</span>
      <span className="countryDetail">
        <span className="fontBold">Population</span>: {data.population}
      </span>
      <span className="countryDetail">
        <span className="fontBold">Region</span>: {data.region}
      </span>
      <span className="countryDetail">
        <span className="fontBold">Capital</span>: {data.capital}
      </span>
    </div>
  )
}

export default Counries;