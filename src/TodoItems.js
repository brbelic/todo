import React from 'react';
import { Link } from 'react-router-dom';

class TodoItems extends React.Component {

	createTasks = (item, i) => {
        let DeleteTask = this.props.delete;
        let DoneTask = this.props.done;
		const updateDetailText = this.props.updateDetailText;

        return (
			<li key={i} className="todo-item col-sm-12 col-xs-12">
				<Link to={{pathname: `/${item.text}`, state: { item: item, index: i } }}
					  className={"todo-link col-sm-6 col-xs-6 " + (item.completed === 'true' && "done")}>
                    {item.text}
				</Link>
				<button className="col-sm-3 col-xs-3 doneButton btn-success" id={i} onClick={DoneTask}>Done</button>
				<button className="col-sm-3 col-xs-3 deleteButton btn-danger" id={i} onClick={DeleteTask}>Delete</button>
			</li>
        )
    }

  render() {
	let todoTasks = this.props.tasks;
	let listItems = todoTasks.map(this.createTasks);

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
