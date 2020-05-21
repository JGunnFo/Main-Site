import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppTop from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";
import produce from "immer";
import {initialStateReducer} from './baselineState';




export const reducer = produce((draft=initialStateReducer, action) => {
  switch (action.type) {
    case "CONSTNAME":
      draft.count+=1;
      return draft;
    case "DELIVERER":
      draft.count=action.payload;
      return draft;
      default:
          return draft;
  }
})


export const store=createStore(reducer);

export const App = () => (
  <Provider store={store}>
    <AppTop />
  </Provider>
);

