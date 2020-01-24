import React from 'react';
import './App.css';
import List from './List';
import {Search} from './Search';
import PhotoList from './PhotoList';

function App() {
  return (
    <div className="App">
      <PhotoList />
      <Search />
      <List title="New Movies"/>
    </div>
  );
}

export default App;

