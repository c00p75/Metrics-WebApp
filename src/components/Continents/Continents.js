import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigation } from '../../redux/countries/countrySlice';
import Countries from '../Countries/Countries';
import './continents.css';
import '../Home/home.css';

const Continents = () => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(navigation('continents')); window.scrollTo(0, 0); }, [dispatch]);

  const location = window.location.pathname;
  let continent = location.slice(1, location.length);
  if (continent.includes('%20')) { continent = continent.replace(/%20/g, ' '); }
  const { countries } = useSelector((state) => state.countries);

  let region;
  if (countries.length) {
    region = countries.filter((i) => i.continents[0] === continent);
  }

  return (
    <>
      {countries && (
      <>
        <div className="App__home-region overlay d-flex flex-column justify-content-center align-items-center overlay"><h2>{continent}</h2></div>
        {region && (<Countries data={region} />)}
      </>
      )}
    </>
  );
};

export default Continents;
