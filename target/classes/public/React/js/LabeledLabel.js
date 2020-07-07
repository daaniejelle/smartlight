class LabeledLabel extends React.Component{
    render(){
        return (
            <tr>
                <td>{this.props.label}</td>
                <td>{this.props.value}</td>
            </tr>
        )
    }
}
