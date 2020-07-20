'use strict';
const { Component } = React;
const { render } = ReactDOM;

class Slider extends React.Component {
    constructor(props){
        super(props);
    }

render() {
    return (

<Slider{
  defaultValue={80}
  getAriaValueText={valuetext}
  aria-labelledby="discrete-slider-always"
  step={10}
  marks={marks}
  valueLabelDisplay="on"}
/>

ReactDOM.render(<Slider first="Hello" second="World!" />, document.getElementById('discrete-slider-always'));