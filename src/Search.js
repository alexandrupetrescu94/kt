import React from 'react';


export class Search extends React.Component {
    
    doSearch(mesaj) {
        alert(`Asta este un ${mesaj}`)
    }

    doSearch2() {
        alert("Asta este un film")
    }

    render() {
        console.log(this);
        return (
            <div>
                <input type="text" name="listSearch"/>
                <button onClick={
                    () => {
                        console.log(this);
                        this.doSearch('film')
                    }
                }>Search</button>
                {/* <button onClick={this.doSearch2}>Search2</button> */}

{/* Search3 nu merge din cauza ca this se va referi la function nu la this ul renderului */}
                {/* <button onClick={function() {this.doSearch("film")}}>Search3</button> */}
                
            </div>
        )
    }
}

