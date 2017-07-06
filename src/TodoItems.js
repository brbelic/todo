import React from 'react';

class TodoItems extends React.Component {

	render() {
		let todoTasks = this.props.tasks;
		let DeleteTask = this.props.delete;

		function createTasks(item) {
			return (
				<li key={item.id}>
					{ item.text }
					<button id={item.id} onClick={DeleteTask}>Delete</button>
				</li>
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
