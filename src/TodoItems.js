import React from 'react';

class TodoItems extends React.Component {

	render() {
		let todoTasks = this.props.tasks;
		let DeleteTask = this.props.delete;

		function createTasks(item, i) {
			return (
				<div className="col-sm-4 col-sm-offset-4">
					<li key={i}>
						{ item.text }
						<button id={i} onClick={DeleteTask}>Delete</button>
					</li>
				</div>
			)
		}

		let listItems = todoTasks.map(createTasks);

		return (
			<ul>
				{ listItems }
			</ul>
		);
	}
}

export default TodoItems;
