import React from 'react';

class InputForm extends React.Component {
	render() {
		let addTask = this.props.addTask;
		let ref = this.props.reference;

		return (
			<div className="col-sm-6 col-sm-offset-3">
	            <form className="col-sm-12 col-xs-12">
	            	<input
	              		className="col-sm-8 col-xs-8"
	              		ref={ref}
	              		placeholder=" Enter task."
	              		type="text" 
	            	/>
	            	<button className="col-sm-4 col-xs-4" onClick={addTask}>+</button>
	          	</form>
	        </div>
		);
	}
}

export default InputForm;