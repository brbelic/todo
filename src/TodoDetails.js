import React from 'react';
import Header from './Header';

class TodoDetails extends React.Component {
	constructor(props) {
        super(props);
        this.goToHomepage = this.goToHomepage.bind(this);
}


	goToHomepage(event) {
        this.props.history.push('/');
        event.preventDefault(); 
	}

	render() {
		console.log(this.props.match);
		console.log(this.props.history);

		return (
			<div className="container">
				<div className="row">
					<Header />
				</div>
				<div className="row">
					<div className="todoText col-sm-10 col-xs-10 ">
						<h3>{this.props.match.params.text}</h3>
					</div>
					<div className="backButton col-sm-2 col-xs-2 ">
						<button onClick={this.goToHomepage}>Back!</button>
					</div>
				</div>
			</div>
		);
	}
}

export default TodoDetails;