import React from 'react';
import TodoItems from './TodoItems'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    };
  }

  addItem(e) {
    var tasksArray = this.state.tasks;
    tasksArray.push(
      {
        text: this._inputElement.value
      }
    );

    this.setState({
      tasks: tasksArray
    });

    this._inputElement.value = "";

    e.preventDefault();
  }

  deleteItem(event) {
    var new_tasks = this.state.tasks.filter((item, index) => {
        return Number(event.target.id) !== index;
    });
    this.setState({tasks: new_tasks});
  }

  render() {
    return (
      <div>
        <h1>React ToDo list</h1>
        <form onSubmit={this.addItem.bind(this)}>
          <input 
            ref={input => this._inputElement = input}
            placeholder=" Enter task."
            type="text" 
          />
          <button type="submit">Add</button>
        </form>
        <TodoItems deleteItem={this.deleteItem.bind(this)} entries={this.state.tasks} />
      </div>
    )
  }
}

export default App