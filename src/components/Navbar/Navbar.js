import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiMenu } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import './navbar.css';
import { searchFocus } from '../../redux/countries/countrySlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const navigate = useNavigate();
  const { currentPage } = countries;
  const [inputFocus, setInputFocus] = useState(false);
  const [, setInput] = useState('');
  const handleInput = (e) => {
    setInput(e.target.value);
    dispatch(searchFocus(e.target.value));
  };

  const clearSearch = () => {
    setInput('');
    dispatch(searchFocus(''));
    if (document.querySelector('input')) document.querySelector('input').value = '';
  };

  const location = window.location.pathname;
  let path = location;
  if (path.includes('%20')) path = path.replace(/%20/g, ' ');

  return (
    <nav className="d-flex justify-content-between align-items-center p-2">
      {(path === '/' && !inputFocus) && (
        <>
          <BiMenu style={{ fontSize: '2em' }} />
          <span className="activeRoute mx-3">World Population</span>
        </>
      )}

      {(path !== '/' && !inputFocus) && (
        <>
          <button type="button" style={{ background: 'none', border: 'none' }} onClick={() => { clearSearch(); navigate(-1); }}>❮</button>
          <span className="activeRoute px-4">
            {(currentPage !== 'home' && currentPage !== 'continents') ? `${path.split('/')[1]}/${currentPage}` : path.slice(1, path.length)}
          </span>

        </>
      )}

      <div className={(currentPage !== 'home' && currentPage !== 'continents') ? 'd-none' : 'App__navbar-searchContainer'} style={{ width: inputFocus ? '100%' : '' }}>
        <input onFocus={() => setInputFocus(true)} onBlur={() => { setInputFocus(false); clearSearch(); }} onChange={(e) => handleInput(e)} placeholder={path === '/' ? 'Search all...' : `Search ${path.slice(1, path.length)}...`} required="" className="input" name="text" type="text" />
        <div className="icon">
          <svg viewBox="0 0 512 512" className="ionicon" xmlns="http://www.w3.org/2000/svg">
            <title>Search</title>
            <path strokeWidth="32" strokeMiterlimit="10" stroke="currentColor" fill="none" d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" />
            <path d="M338.29 338.29L448 448" strokeWidth="32" strokeMiterlimit="10" strokeLinecap="round" stroke="currentColor" fill="none" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
