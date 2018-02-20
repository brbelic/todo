import React from 'react';
import Header from './Header';

class TodoDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = { detailText: props.location.state.item.details };

		this.goToHomepage = this.goToHomepage.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.saveDetailChanges = this.saveDetailChanges.bind(this);
	}

	goToHomepage(event) {
		this.props.history.push('/');
		event.preventDefault(); 
	}

	handleChange(evt) {
		const value = evt.target.value;

		this.setState({ detailText: value });
	}

	saveDetailChanges(evt) {
		evt.preventDefault();
		const updateDetailText = this.props.updateDetailText;
		const taskIndex = this.props.location.state.index;

		console.log('save changes clicked...', this.props);

		if (updateDetailText) {
			updateDetailText(taskIndex, this.state.detailText);
		}

	}

	render() {
		console.log('kaj dobijem u routeru?!?::', this.props);

		const { state } = this.props.location;

		return (
			<div className="container">
				<div className="row">
					<Header />
				</div>
				<div className="row">
					<div className="todoText col-sm-6 col-xs-6 col-sm-offset-3  col-xs-offset-3">
						{<h3>{state.item.text}</h3>}
					</div>
                </div>
                <div className="row">
                    <div className="todo-description col-sm-6 col-sm-offset-3 col-xs-6-col-xs-offset-3">
    					<textarea className="col-sm-8 col-xs-6" value={this.state.detailText} onChange={evt => this.handleChange(evt)} placeholder=" Enter task description.">
    					</textarea>
    					<button className="saveButton col-sm-2 col-xs-3 btn-success" onClick={evt => this.saveDetailChanges(evt)}>Save details</button>
    					<button className="backButton col-sm-2 col-xs-3 btn-primary" onClick={this.goToHomepage}>Back!</button>
                    </div>
                </div>
			</div>
		);
	}
}

export default TodoDetails;