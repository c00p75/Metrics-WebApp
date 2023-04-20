import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { navigation } from '../../redux/countries/countrySlice';
import './countries.css';

const Countries = ({ data }) => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  setTimeout(() => {
    if (countries.search !== '') {
      Array.from(document.querySelectorAll('.App__country')).forEach((i) => {
        if (!i.querySelector('.fw-bold').innerHTML.toLocaleLowerCase().includes(countries.search.toLocaleLowerCase())) { i.classList.add('hide'); } else { i.classList.remove('hide'); }
      });
    }
    if (countries.search === '') {
      Array.from(document.querySelectorAll('.App__country')).forEach((i) => { i.classList.remove('hide'); });
    }
  }, 500);

  return (
    <ul className="App__grid-container App__country-list p-0">
      {data.map((country) => (
        <li key={uuidv4()} className="App__country">
          <NavLink to={`/${country.continents[0]}/${country.name.common}`} onClick={() => { dispatch(navigation(country.name.common)); }}>
            <div><img src={country.flags.png} alt="Flag" /></div>
            <div>
              <div className="App__Countries--details d-flex flex-column align-items-end p-1">
                <p className="fw-bold">{country.name.common}</p>
                <p style={{ fontSize: '0.9em' }}>
                  {`Population: ${country.population.toLocaleString('en-US')}`}
                </p>
              </div>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

Countries.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default Countries;
