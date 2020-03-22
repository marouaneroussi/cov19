import React from 'react';

import './App.css';


import {Provider} from 'react-redux';
import {BrowserRouter as Router,Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Landing from './components/home/Landing';
import Movie from './components/home/Movie';
import store from './store'
function App() {
  return (

    <Provider store={store}>
    <Router>
  <Navbar></Navbar>
  <Route exact path="/" component={Landing}></Route>
  <Route exact path="/movie/:id" component={Movie}></Route>

  <Footer></Footer>
  </Router>
  </Provider>
  );
}

export default App;
