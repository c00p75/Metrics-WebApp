import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Continents from '../components/Continents/Continents';

it('matches snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Continents />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
