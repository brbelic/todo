import React from 'react';
import TodoItems from './TodoItems';
import Header from './Header';
import InputForm from './InputForm';
import TaskCounter from './TaskCounter';


class App extends React.Component {
    render() {
        return (
        <div className="container">
            <div className="row">
              <Header />
            </div>
            <div className="row">
              <InputForm addTask={this.props.addTask} />
            </div>

            <TaskCounter count={this.props.tasks.length} />
            <TodoItems tasks={this.props.tasks} delete={this.props.deleteTask} done={this.props.doneTask} updateDetailText={this.props.updateDetailText} />
        </div>
        );
    }
}

export default App;
