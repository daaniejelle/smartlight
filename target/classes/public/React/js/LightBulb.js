class LightBulb extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            LightBulbs: null,
            currentId: 1
        }

        this.fields = {};
    }

    componentDidMount() {
        this.fetchData();
    }

    addReference(element){
        console.log(element);
        if (element != null){
            this.fields[element.props.id] = element;
        }
    }

    fetchData() {
        let url= "/LightBulbs";

        fetch(url)
            .then(response => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    LightBulbs: data
                });
               },
               (error) => { });
    }

    saveLightBulb() {
        let url = new URL("/updateLightBulb", document.baseURI);
        url.searchParams.append("id", this.state.currentId);

        Object.values(this.field).forEach(field =>  {
            url.searchParams.append(field.props.id, field.state.value);
        });

        fetch(url)
            .then(response => {
                return response.json();
            })
            .then((data) => {
                let LightBulbs = this.state.LightBulbs;
                LightBulbs[date.id] = data;

                this.setState({
                    LightBulbs: LightBulbs
                });
               },
               (error) => { });
    }

    onSelectionChanged(event){
        let target = event.nativeEvent.target;
        this.setState({
            currentId: target.value
        });
    }

    onSelectionClicked(event){
        let target = event.nativeEvent.target;
        this.setState({
            currentId: target.id
        });
    }

    render(){
        // LightBulbs is not filled initially
        if (this.state.LightBulbs === null){
            return (<div>Fetching Data</div>);
        }

        let LightBulb = this.state.LightBulbs[this.state.currentId];
        return (
            <div>
                <Dropdown LightBulbs={this.state.LightBulbs} currentId={this.state.currentId} onChange={(event) => this.onSelectionChanged(event)}/>
                <table id="LightBulbTable">
                    <tbody>
                        <LabeledLabel label="Id:" value={LightBulb.id} />
                        <LabeledInput id="location" label="Location:" value={LightBulb.location} ref={(element) => this.addReference(element)}/>
                        <LabeledInput id="color" label="Color:" value={LightBulb.prefix} ref={(element) => this.addReference(element)}/>
                        <LabeledInput id="wattage" label="Wattage:" value={LightBulb.lastName} ref={(element) => this.addReference(element)} />
                        <LabeledLabel label="Status:" value={Ligh.isBulbState} />
                    </tbody>
                </table>
                <br />
                {
                    this.state.LightBulbs.map(LightBulb => {
                        return <SelectButton
                            key={LightBulb.id}
                            lightbulb={LightBulb}
                            isSelected={LightBulb.id == this.state.currentId}
                            onClick={(event) => this.onSelectionClicked(event)}
                        />
                    })
                }
            </div>
        )
    }
}

ReactDOM.render(<LightBulb />, document.getElementById("LightBulb1"));
<br />
ReactDOM.render(<LightBulb />, document.getElementById("LightBulb2"));
<br />
ReactDOM.render(<LightBulb />, document.getElementById("LightBulb3"));