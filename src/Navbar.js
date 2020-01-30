import React from 'react';

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
 
    alerta = () => {
        return alert('Its just a page :(');
    }

    norocul = () => { 
        let random = Math.floor(Math.random() * 2);   
        return alert(`O sa te uiti la filmul ${this.props.movies[random].title}`);
    }

    render() {
        return (
            <div className="navbar">
                <button className="navitems" onClick={this.alerta}>
                    Home
                </button>
                <button className="navitems" onClick={this.norocul}>Feeling Lucky</button>
                <button className="navitems">About</button>
                <button className="navitems">Imdb</button>
            </div>
        )
    }
}

export default Navbar;

