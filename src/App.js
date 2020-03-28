import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router,Route } from 'react-router-dom';

import Navbars from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Landing from './components/home/Landing';

import './App.css';

import store from './store';


function App() {

  return (

    <Provider store={store}>
    <Router >
  <Navbars></Navbars>
  <Route exact path="/" component={Landing} ></Route>
  </Router>
  </Provider>
  );
}

export default App;
