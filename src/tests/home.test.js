import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Home from '../components/Home/Home';

it('matches snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Home />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
