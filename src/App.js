import React from 'react';
import TodoItems from './TodoItems';
import Header from './Header';
import InputForm from './InputForm';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };

    this.addTask = this.addTask.bind(this);
    this.deleteTasks = this.deleteTasks.bind(this);
  }

  addTask(event) {
/*if( !this.inputText.value ) {
  return;
}*/

    let tasksList = this.state.tasks;
    tasksList.push(
      {
        text: this.inputText.value
      }
    );

    this.setState(
      { tasks: tasksList }
    );
    console.log(this.inputText.value);
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
          <Header />
        </div>
        <div className="row">
          <InputForm reference={(a) => this.inputText = a} addTask={this.addTask} />
        </div>
          <TodoItems tasks={this.state.tasks} delete={this.deleteTasks} />
      </div>
    );
  }
}

export default App;
