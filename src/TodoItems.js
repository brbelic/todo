import React from 'react';

class TodoItems extends React.Component {

	render() {
		let todoTasks = this.props.tasks;
		let DeleteTask = this.props.delete;

		function createTasks(item, i) {
			return (
				<li key={i} className="col-sm-12 col-xs-12">
					<p className="col-sm-9 col-xs-9">{ item.text }</p>
					<button className="col-sm-3 col-xs-3 deleteButton" id={i} onClick={DeleteTask}>Delete</button>
				</li>
			)
		}

		let listItems = todoTasks.map(createTasks);

		return (
			<div className="col-sm-6 col-sm-offset-3 todoItems">
				<ul className="col-sm-12">
					{ listItems }
				</ul>
			</div>
		);
	}
}

export default TodoItems;
