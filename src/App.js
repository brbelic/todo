import React from 'react';
import TodoItems from './TodoItems';


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
        text: this.inputText.value
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
    let newList = tasksList.filter(function(e, i) {
      let eventId = Number(event.target.id);
      return eventId !== i;
    });
    this.setState({ tasks: newList});
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <header className="col-sm-6 col-sm-offset-3 text-center header">
            <h1>React ToDo list</h1>
            <h3>Add items You need to do!</h3>
          </header>
        </div>
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form>
              <input
                className="col-sm-8"
                ref={(a) => this.inputText = a}
                placeholder=" Enter task."
                type="text" 
              />
              <button className="col-sm-4" onClick={this.addTask.bind(this)}>+</button>
            </form>
          </div>
        </div>
          <TodoItems tasks={this.state.tasks} delete={this.deleteTasks} />
      </div>
    );
  }
}

export default App;
