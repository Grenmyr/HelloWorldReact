import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
    render() {
            return (<h1>Hello World in ES2015 and Testing a prop my name is { this.props.name}</h1>);
        }
}

ReactDOM.render(<Main name="David Grenmyr"/>, document.getElementById("example"));