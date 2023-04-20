import React from 'react';
import renderer from 'react-test-renderer';
import CountryDetails from '../components/Country Details/CountryDetails';

it('matches snapshot', () => {
  const tree = renderer.create(<CountryDetails />).toJSON();
  expect(tree).toMatchSnapshot();
});
