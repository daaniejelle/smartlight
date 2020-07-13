'use strict';
const { Component } = React;
const { render } = ReactDOM;

class Lights extends React.Component {
    constructor(props){
        super(props);
    }

    source = [ "Albania", "Andorra", "Armenia", "Austria", "Azerbaijan" ];
    state = { events: [] };

    render() {


    onOpen = () => { this.log('open'); }
    onClose = () => { this.log('close'); }
    onFocus = () => { this.log('focus'); }
    onBlur = () => { this.log('blur'); }
    onChange = (event) => { this.log('change', event.target.value); }
    onFilterChange = (event) => { this.log('filterChange', event.filter.value); }

    render() {
        return (
            <div>
                <DropDownList
                    data={this.source}
                    onOpen={this.onOpen}
                    onClose={this.onClose}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onChange={this.onChange}
                    onFilterChange={this.onFilterChange}
                    filterable={true}
                />
                <br />
                <br />
                <EventsLogger events={this.state.events} />
            </div>
        );
    }

    log(event, arg) {
        const events = this.state.events;
        events.unshift(`${event} ${arg || ""}`);

        this.setState({
            events: events
        });
    }
}

class EventsLogger extends React.Component {
    render() {
        return (
            <div className="example-config">
                <h5>Event log</h5>
                <ul className="event-log" style={{ textAlign: 'right' }}>
                    {this.props.events.map(function(event, index) {
                        return (<li key={index}>{event}</li>);
                    })}
                </ul>
            </div>
        );
    }
}

ReactDOM.render(
    <AppComponent />,
    document.querySelector('lightbulb')
);
