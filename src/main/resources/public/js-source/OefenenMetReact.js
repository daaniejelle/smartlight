'use strict';
const { Component } = React;
const { render } = ReactDOM;

class OefenenMetReact extends React.Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
        <form>
            <h1>Hello</h1>
            <p>Enter your name:</p>
            <input
                    type="text"
            />
        </form>
        );
    }
}

ReactDOM.render(<OefenenMetReact first="Hello" second="World!" />, document.getElementById('target1'));

