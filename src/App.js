import React, { Component } from 'react';
import { Title } from './components/Title';
import { SearchForm } from './components/SearchForm';

import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {
  state = {results: [] }
  render() {
    return (
      <div className="App">
          <Title>Search Movies</Title>
        <div className='SearchForm-wrapper'>
          <SearchForm />
        </div>
        {this.state.results.length === 0
        ? <p>Sin resultados</p>
        : <p>Sin resultados</p>}
      </div>
    );
  }
}

export default App;
