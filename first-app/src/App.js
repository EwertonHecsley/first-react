import React from 'react';
import './App.css';
import Cards from './Cards';
import HelloWorld from './HelloWorld';

class App extends React.Component {
  render() {

    return (
      <>
        <HelloWorld />
        <Cards />
      </>
    );
  }
}

export default App;
