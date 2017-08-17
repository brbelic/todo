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
    this.doneTask = this.doneTask.bind(this);
  }

  addTask(event) {
/*if( !this.inputText.value ) {
  return;
}*/

    let tasksList = this.state.tasks;
    let isCompleted = 'false';
    tasksList.push(
      {
        text: this.inputText.value,
        completed: isCompleted
      }
    );

    this.setState(
      { tasks: tasksList }
    );
    console.log("You just added '" + this.inputText.value + "' to list");
    this.inputText.value = '';

    console.log(this.state.tasks);

    event.preventDefault(); 
  }

  deleteTasks(event) {
    let tasksList = this.state.tasks;
    let eventId = Number(event.target.id);
    let newList = tasksList.filter(function(e, i) { 
      return eventId !== i;
    });
    this.setState({ tasks: newList});
  }

  doneTask(event) {
    let tasksList = this.state.tasks;
    let eventId = Number(event.target.id);
    let newList = tasksList.filter(function(e, i) {   
        if( eventId === i ) {
         e.completed = e.completed === 'true' ? 'false' : 'true';
        }
        return true;
    });
    this.setState({tasks: newList});
    event.preventDefault();
    console.log(this.state.tasks);
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
          <TodoItems tasks={this.state.tasks} delete={this.deleteTasks} done={this.doneTask} />
      </div>
    );
  }
}

export default App;
