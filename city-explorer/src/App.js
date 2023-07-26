import React from 'react';
import CitySearch from './components/CitySearch';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>City Weather Search</h1>
        </header>
        <CitySearch />
      </div>
    );
  }
}

export default App;
