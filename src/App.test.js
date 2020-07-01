import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider } from "react-redux";
import { render } from '@testing-library/react';
import TopComponent from './App';
import {initialStateTest} from './baselineState';
import ReactTestUtils from 'react-dom/test-utils'; // ES6


describe('<App />', () => {

  let App
  let mockStore
  let theStore

  beforeAll(() => {
    
  mockStore = configureMockStore()
  theStore=mockStore(initialStateTest)

  App = () => (
    <Provider store={theStore}>
        <TopComponent />
    </Provider>
)
  });
  

  it('has 1 child', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(2);
  });

  /*
  the way children counting works is: you have your topmost render. 
  each <div> that has a subcompnoent called will be another child
  but also, if the topmost div *has its own content*, like a little text, it'll count
  so two subcomponent calls and hte text "this is the topmost div" = 3 children
  if you dont have any text in the top div, then it wont be a child, just teh two subcomponents

  thus, 2
  may haev to revise later if i put some things in the top component for some reason
  */
  
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
it('renders correctly according to snapshot', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

});