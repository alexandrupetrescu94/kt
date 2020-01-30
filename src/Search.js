import React from 'react';
import List from './List';

export class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredMovies: []
        }
    }
    
    doSearch(mesaj) {
        alert(`Asta este un ${mesaj}`)
    }

    doSearch2() {
        alert("Asta este un film")
    }

    onSearchChange = (event) => {
        console.log(event.target.value)
        console.log(this.props.movies)
        const filterMovies = this.props.movies.filter( (film) => {return film.title.toLowerCase().includes(event.target.value.toLowerCase())} )
        this.setState( {filteredMovies: filterMovies} )
    }

    render() {
        console.log(this);
        return (
            <div>
                <input type="text" name="listSearch" onChange={this.onSearchChange}/>
                <button onClick={
                    () => {
                        console.log(this);
                        this.doSearch('film')
                    }
                }>Search</button>
                {/* <button onClick={this.doSearch2}>Search2</button> */}

{/* Search3 nu merge din cauza ca this se va referi la function nu la this ul renderului */}
                {/* <button onClick={function() {this.doSearch("film")}}>Search3</button> */}
                <List movies={this.state.filteredMovies.length === 0 ? this.props.movies : this.state.filteredMovies} title="Listuta"/>
            </div>
        )
    }
}

