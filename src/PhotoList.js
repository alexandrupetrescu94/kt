import React from "react";

class PhotoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    getPhotos = () => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(photos => this.setState({photos:photos}))
    }

    getAlbums = async() => {
        let response = await fetch('https://jsonplaceholder.typicode.com/albums');
        let albums = await response.json()
        this.setState({albums})
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <button onClick={this.getPhotos}>
                    GETPhotos
                </button>   
                <button onClick={this.getAlbums}>
                    GETAlbums
                </button>    
                {/* {this.state.photos != null ? <img src={this.state.photos[0].thumbnailUrl}></img> : ""}        */}
                {
                    this.state.photos != null ? this.state.photos.map(photo => <img key={photo.id} src={photo.thumbnailUrl}></img>) : ""
                }
            </div>
        )
    }

}

export default PhotoList;