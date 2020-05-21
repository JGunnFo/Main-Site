import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider } from "react-redux";
import { render } from '@testing-library/react';
import AppTop from './App';
import {initialStateTest} from './baselineState';



describe('<App />', () => {

  let App
  let mockStore
  let theStore

  beforeAll(() => {
    
  mockStore = configureMockStore()
  theStore=mockStore(initialStateTest)

  App = () => (
    <Provider store={theStore}>
        <AppTop />
    </Provider>
)
  });
  

  it('has 1 child', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(1);
  });
  
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
it('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
});