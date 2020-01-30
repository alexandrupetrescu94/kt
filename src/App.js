import React from 'react';
import './App.css';
import List from './List';
import {Search} from './Search';
// import PhotoList from './PhotoList';
import Navbar from './Navbar';
import Counter from './Counter';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [
        {
          "id": 1,
          "title": "Joker",
          "imageSource": "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
          "isFavorite": true
        },
        {
          "id": 2,
          "title": "The Witcher",
          "imageSource": "https://m.media-amazon.com/images/M/MV5BOGE4MmVjMDgtMzIzYy00NjEwLWJlODMtMDI1MGY2ZDlhMzE2XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
          "isFavorite": true
        },
        {
          "id": 3,
          "title": "1917",
          "imageSource": "https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_SY1000_CR0,0,631,1000_AL_.jpg",
          "isFavorite": true
        }
      ]
    }
  }

  render() {
   return (
    <div className="App">
      <Navbar movies={this.state.movies}/>
      {/* <PhotoList /> */}
      <Search movies={this.state.movies}/> 
      
      <Counter />
    </div>
    );
  }
}

export default App;

