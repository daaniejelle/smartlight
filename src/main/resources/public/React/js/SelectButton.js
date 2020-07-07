class SelectButton extends React.Component{
    render(){
        let className = this.props.isSelected ? "selected" : "";
        return(
            <button
                type="button"
                className={className}
                id={this.props.LightBulb.id}
                onClick={this.props.onClick}
            >
                    {this.props.LightBulb.location}
            </button>
        )
    }
}