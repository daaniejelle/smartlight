class LabeledInput extends React.Component{
    onInputChange(event){
        let target = event.nativeEvent.target;
        this.setState({
            value : target.value
        });
    }

    render(){
        return (
            <tr>
                <td>{this.props.label}</td>
                <td><input id={this.props.id} value={this.props.value} onChange={(event) => this.onInputChange(event)}/></td>
            </tr>
        )
    }
}