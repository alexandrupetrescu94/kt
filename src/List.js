import React from 'react';
import ListItem from './ListItem';


class List extends React.Component {
  

  render() {
    return (
      <div className="flex-container">
        <div>{this.props.title}</div>
        {
          this.props.movies.map(movie => <ListItem key={movie.id} movie={movie}/>)
        }
      </div>

    )
  }
}

export default List;