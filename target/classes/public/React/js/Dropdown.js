class Dropdown extends React.Component {
    render(){
        return (
            <select onChange={this.props.onChange} value={this.props.currentId}>
                {
                    this.props.LightBulbs.map(LightBulb => {
                        return <option key={LightBulb.id}  value={LightBulb.id}>{LightBulb.location}</option>
                    })
                }
            </select>
        );
    }
}