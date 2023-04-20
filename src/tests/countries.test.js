import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import CountryDetails from '../components/Country Details/CountryDetails';

it('matches snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <CountryDetails />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
