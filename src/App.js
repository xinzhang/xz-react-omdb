import React from 'react';
import './App.css';

const { REACT_APP_PRODUCT_NAME } = process.env;

function App() {
  return (
    <div>
      <header className="header">
        <div className="app-title">{REACT_APP_PRODUCT_NAME}</div>
      </header>
    </div>
  );
}

export default App;
