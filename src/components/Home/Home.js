import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries, navigation } from '../../redux/countries/countrySlice';
import Countries from '../Countries/Countries';

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.countries);
  const { countries } = data;
  useEffect(() => { dispatch(fetchCountries()); dispatch(navigation('home')); }, [dispatch]);
  let totalPopulation = 0;
  const continents = [];
  // Use data retrieve stats
  if (countries.length) {
    continents.push({ continent: countries[0].continents[0], population: 0 });
    countries.forEach((country) => {
      totalPopulation += country.population;
      if (!continents.some((i) => i.continent === country.continents[0])) {
        continents.push({ continent: country.continents[0], population: 0 });
      }
      if (continents.some((i) => i.continent === country.continents[0])) {
        continents.forEach((i) => {
          if (i.continent === country.continents[0]) {
            continents[continents.indexOf(i)].population += country.population;
          }
        });
      }
    });
  }
  return (
    <>
      <div className="App__home">
        {countries.length !== 0 && (
        <>
          <div className="App__home--heading overlay">
            <h1 className="text">World Population</h1>
            {' '}
            <span className="text" style={{ fontSize: '1em' }}>{totalPopulation.toLocaleString('en-US')}</span>
          </div>
          <ul className={!data.search ? 'App__grid-container p-0' : 'd-none'}>
            {continents.map((continent) => (
              <NavLink key={continent.continent} to={`/${continent.continent}`}>
                <li className="App__home-region d-flex flex-column justify-content-center align-items-center overlay">
                  <h2>{continent.continent}</h2>
                  <span>{continent.population.toLocaleString('en-US')}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                  </svg>
                </li>
              </NavLink>
            ))}
          </ul>
          {data.search && <Countries data={countries} />}
        </>
        )}
      </div>

    </>
  );
};

export default Home;
