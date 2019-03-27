import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div id="App">

        <Navigation />

        <Header />

        <Main />

        <Footer />

      </div>
    );
  }
}

export default App;

{/* 
  ToDo:
    Contact us page with a form
    Info page for pecans
    Ignore styles, work on the frame
*/}