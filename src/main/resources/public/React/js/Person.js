class Person extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            persons: null,
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
        let url= "/persons";

        fetch(url)
            .then(response => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    persons: data
                });
               },
               (error) => { });
    }

    savePerson() {
        let url = new URL("/updatePerson", document.baseURI);
        url.searchParams.append("id", this.state.currentId);

        Object.values(this.field).forEach(field =>  {
            url.searchParams.append(fields.props.id, field.state.value);
        });

        fetch(url)
            .then(response => {
                return response.json();
            })
            .then((data) => {
                let persons = this.state.persons;
                persons[date.id] = data;

                this.setState({
                    persons: persons
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
        // persons is not filled initially
        if (this.state.persons === null){
            return (<div>Fetching Data</div>);
        }

        let person = this.state.persons[this.state.currentId];
        return (
            <div>
                <Dropdown persons={this.state.persons} currentId={this.state.currentId} onChange={(event) => this.onSelectionChanged(event)}/>
                <table id="personTable">
                    <tbody>
                        <LabeledInput id="firstName" label="First name:" value={person.firstName} ref={(element) => this.addReference(element)}/>
                        <LabeledInput id="prefix" label="Prefix:" value={person.prefix} ref={(element) => this.addReference(element)}/>
                        <LabeledInput id="lastName" label="Last name:" value={person.lastName} ref={(element) => this.addReference(element)} />
                        <LabeledLabel label="Id:" value={person.id} />
                        <LabeledLabel label="Full name:" value={person.fullName} />
                        <LabeledLabel label="Date of birth:" value={person.birthDate} />
                        <LabeledLabel label="Street and number:" value={person.address.streetname + " " + person.address.number} />
                        <LabeledLabel label="City and zipcode:" value={person.address.city + " " + person.address.zipCode} />
                        <LabeledButton value="Submit" onClick={(event) => this.savePerson(event)} />
                    </tbody>
                </table>
                <br />
                {
                    this.state.persons.map(person => {
                        return <SelectButton
                            key={person.id}
                            person={person}
                            isSelected={person.id == this.state.currentId}
                            onClick={(event) => this.onSelectionClicked(event)}
                        />
                    })
                }
            </div>
        )
    }
}

ReactDOM.render(<Person />, document.getElementById("person1"));
<br />
ReactDOM.render(<Person />, document.getElementById("person2"));
<br />
ReactDOM.render(<Person />, document.getElementById("person3"));