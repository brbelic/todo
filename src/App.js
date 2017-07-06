import React from 'react';
import TodoItems from './TodoItems';

window.taskID = 0;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };

    this.deleteTasks = this.deleteTasks.bind(this);
  }

  addTask(event) {
    let tasksList = this.state.tasks;
    tasksList.push(
      {
        text: this.inputText.value,
        id: Date.now()
      }
    );

    this.setState(
      { tasks: tasksList }
    );

    this.inputText.value = '';

    event.preventDefault();
  }

  deleteTasks(event) {
    let tasksList = this.state.tasks;
    let newList = tasksList.filter(function(e) {
      let eventID = Number(event.target.id);
      return e.id !== eventID;
    });
    this.setState({ tasks: newList});
  }

  render() {
    return (
      <div>
        <h1>React ToDo list</h1>
        <form>
          <input
            ref={(a) => this.inputText = a}
            placeholder=" Enter task."
            type="text" 
          />
          <button onClick={this.addTask.bind(this)}>Add</button>
        </form>
        <ul>
          <TodoItems tasks={this.state.tasks} delete={this.deleteTasks} />
        </ul>
      </div>
    );
  }
}

export default App;
