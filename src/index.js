import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            score: 0
        };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState({
            score: this.state.score + 1
        });
    }

    decrement() {
        if (this.state.score > 0)
        this.setState({
            score: this.state.score - 1
        });
    }

    render() {
        return (
            <div>
                <Counter score={this.state.score} />
                <Actors inc={this.increment} dec={this.decrement} />
            </div>
        )
    }
}

class Counter extends React.Component {
    render() {
        return (
            <h1>Score: {this.props.score}</h1>
        )
    }
}

class Actors extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.inc}>+</button>
                <button onClick={this.props.dec}>-</button>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
