import React, { useState } from 'react';
import './App.css';
import Search from 'components/Search';
import MovieDetail from 'components/MovieDetail';

const { REACT_APP_PRODUCT_NAME } = process.env;

function App() {
  const [imdbID, setImdbID] = useState('');

  const onClick = (m) => {
    setImdbID(m.imdbID);
  };

  return (
    <div>
      <header className="header">
        <div className="app-title">{REACT_APP_PRODUCT_NAME}</div>
      </header>
      <section className="content">
        <Search onClick={onClick} imdbID={imdbID} />
        <MovieDetail imdbID={imdbID} />
      </section>
    </div>
  );
}

export default App;
