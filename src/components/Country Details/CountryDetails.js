import { useSelector } from 'react-redux';
import './countryDetails.css';

const CountryDetails = () => {
  const { countries, currentPage } = useSelector((state) => state.countries);
  let country;
  if (countries.length) {
    country = countries.filter((i) => i.name.common === currentPage);
  }

  return (
    <>
      {countries.length && (
      <>
        <div>
          <img src={country[0].flags.png} alt="National flag" style={{ width: '100%' }} />
        </div>
        <ul className="p-0 details-list">
          <li>
            <span>Country</span>
            <span>{currentPage}</span>
          </li>
          <li>
            <span>Current population</span>
            <span>{country[0].population.toLocaleString('en-US')}</span>
          </li>
          <li>
            <span>Capital</span>
            <span>{country[0].capital}</span>
          </li>
          <li>
            <span>Continent</span>
            <span>{`${country[0].continents[0]}`}</span>
          </li>
          <li>
            <span>Timezone</span>
            <span>{country[0].timezones[0]}</span>
          </li>
          <li>
            <span>Sub-Region</span>
            <span>{country[0].subregion}</span>
          </li>
        </ul>
      </>
      )}

    </>
  );
};

export default CountryDetails;
