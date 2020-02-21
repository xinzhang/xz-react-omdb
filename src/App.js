import React from 'react';
import './App.css';
import MovieCard from 'components/MovieCard';
import Search from 'components/Search';

const { REACT_APP_PRODUCT_NAME } = process.env;

function App() {
  return (
    <div>
      <header className="header">
        <div className="app-title">{REACT_APP_PRODUCT_NAME}</div>
      </header>
      <section>
        <Search />
        <MovieCard movie={{ imdbID: 'test' }} />
      </section>
    </div>
  );
}

export default App;
