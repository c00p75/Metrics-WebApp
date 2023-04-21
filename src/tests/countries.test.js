import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Countries from '../components/Countries/Countries';

it('matches snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Countries />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
