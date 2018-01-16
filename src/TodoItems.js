import React from 'react';
import { Link } from 'react-router-dom';

class TodoItems extends React.Component {

  render() {
	let todoTasks = this.props.tasks;
	let DeleteTask = this.props.delete;
	let DoneTask = this.props.done;

	function createTasks(item, i) {
		return (
			<li key={i} className="col-sm-12 col-xs-12">
				<Link to={`/${item.text}`} className={"col-sm-8 col-xs-8 " + (item.completed === 'true' && "done")}>
					{ item.text }
				</Link>
				<button className="col-sm-2 col-xs-2 doneButton" id={i} onClick={DoneTask}>Done</button>
				<button className="col-sm-2 col-xs-2 deleteButton" id={i} onClick={DeleteTask}>Delete</button>
			</li>
		)
	}

	let listItems = todoTasks.map(createTasks);

	return (
		<div className="row">
			<div className="col-sm-6 col-sm-offset-3 todoItems">
				<ul className="col-sm-12">
					{ listItems }
				</ul>
			</div>
		</div>
	);
	}
}

export default TodoItems;
