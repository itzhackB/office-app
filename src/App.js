import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

import { useContext } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AppRouter from './components/AppRouter/AppRouter';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import MoviesCards from './components/moviesCards/MoviesCards'


function App() {

  return (
    <Router>
      <Header background={"red"} color={"white"} isDark={false} />
      <Header background={"red"} color={"white"} isDark={true} />
      <AppRouter />
    <MoviesCards/>
      <Footer />
    </Router>

  );
}

export default App;
