import React from 'react';

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            count: 3  ,
            styles: {
                fontSize: 30,
                fontWeight: 'bold'
            }
        }
    }

    culoareClasa() {
        let culoare = "";
        culoare += this.state.count === 0 ? "warning" : "primary";
        return culoare
    }

    formatCount() {
        const { count } = this.state; // se ia din this.state, obiectul count, si se formeaza o constanta cu ac nume
        return count === 0 ? 'ZERO' : count;
    }

    render() {
        let classes = this.culoareClasa();

        return (
            <div>
                <span style={ this.state.styles } className={classes}>{this.formatCount()}</span>
                <button style={{ fontSize: 30 }}  className="butonas ">Increment</button>
            </div>
        )
    }
}

export default Counter;