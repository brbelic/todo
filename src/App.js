import React from 'react';
class TodoItems extends React.Component{
  render() {
    var todoEntries = this.props.entries;

    function createTasks(item) {
      return <li key={item.key}>{item.text}</li>
    }

    var listItems = todoEntries.map(createTasks);

    return (
      <ul className="theList">
        {listItems}
      </ul>
    );
  }
}

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
        text: this._inputElement.value,
        key: Date.now()
      }
    );

    this.setState({
      tasks: tasksArray
    });

    this._inputElement.value = "";

    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>React ToDo list</h1>
        <form onSubmit={this.addItem.bind(this)}>
          <input 
            ref={(a) => this._inputElement = a}
            placeholder="Enter task."
            type="text" 
          />
          <button type="submit">Add</button>
        </form>
        <TodoItems entries={this.state.tasks} />
      </div>
    )
  }
}

export default App