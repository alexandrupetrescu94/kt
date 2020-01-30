import React from 'react';
import './ListItem.css';

//poti sa scrii stiluri ca in html cu css normal, doar ca in react sunt obiecte si nu mai ai px (pixeli) ci valori intregi - vezi exemplul de mai jos
// const movieImageStyle= {
//   'width': 300,
//   'height': 400, 
// }


class ListItem extends React.Component {
  //Daca nu ai nimic de adaugat in state aici atunci poti sa stergi constructorul cu totul, se face automat tot ce e scris intre linia 5 si 8
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    //ca sa nu mai scriu this.props.movie.title sau alte lucruri o sa fac destructuring de obiect si o sa apelez cu movie.title direct
    //https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/
    let { movie } = this.props;
    return (
      <div>
        <div className={` ${movie.isFavorite ? 'favorite': ''} `}>
          {movie.title}
        </div>

        <img className="flex-item" 
          // style={movieImageStyle}
          src={movie.imageSource} 
          alt={movie.title}
          />

        {
          /* Comentariu: 
          * clasele in react se adauga cu className in loc de class cum e in html si css-ul normal
          * className accepta un string ca valoare si poate avea mai multe clase una dupa alta gen:
          * <div className={`clasa1 clasa2 clasa3`}> </div>
          * `` este un string care permite sa adaugam si variabile 
          * 
          * de exemplu:
          * var sample = test
          * var result = `this is just a ${sample}`;
          * va afisa in result: this is just a test   
          * 
          * se mai poate scrie:  var result = 'this is just a' + sample
          * 
          * revenind la className:
          * poti sa adaugi clase conditional, de exemplu aici daca avem un film favorit atunci adauga o clasa noua si ne ajutam de `` si de ternary if (vezi mai jos)
          * folosesc ternary if: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
          * 
          * <div className={`clasa1 clasa2 clasa3 ${ variabila==true ? adaugaSiClasa4: altfelAdaugaClasa5 }`}></div>
          * Sau poti sa nu adaugi nimic daca conditia nu este indeplinita gen variabila aia nu e adevarata cu '':
          * <div className={`clasa1 clasa2 clasa3 ${ variabila==true ? adaugaSiClasa4: '' }`}></div>
          * 
          * Clasele alea sunt in css definite: sa te uiti in ListItem.css
          * 
          * Joker are favorite pentru ca am pus in List.js ca isFavorite = true - modifica si tu si altele si mai joaca-te cu treburile astea
          */
        }
        
      </div>
    )
  }
}

export default ListItem;
