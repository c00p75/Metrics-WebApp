import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Navbar from '../components/Navbar/Navbar';

it('matches snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Navbar />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
