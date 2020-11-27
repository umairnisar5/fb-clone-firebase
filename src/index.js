import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from "./StateProvider";
import reducer, {  initialState } from "./reducer";

ReactDOM.render(
  <React.StrictMode initialState={initialState} reducer={reducer}>
   <StateProvider>
     <App />
   </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);