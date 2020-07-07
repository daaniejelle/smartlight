class LabeledButton extends React.Component{
    render(){
        return(
            <tr>
                <td></td>
                <td><input type="button" value={this.props.value} onClick={() => this.props.onClick}/></td>
            </tr>
        )
    }
}