import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import App from './App';
import TodoDetails from './TodoDetails';

export default class AppWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tasks: [] };

        this.addTask = this.addTask.bind(this);
        this.deleteTasks = this.deleteTasks.bind(this);
        this.doneTask = this.doneTask.bind(this);
        this.updateDetailText = this.updateDetailText.bind(this);
    }

    addTask(inputText) {
        if(inputText === '') {
            return;
        }

        let tasksList = this.state.tasks;
        let isCompleted = 'false';
        tasksList.push(
            {
                text: inputText,
                completed: isCompleted,
                details: ''
            }
        );

        this.setState(
            { tasks: tasksList }
        );
        console.log("You just added '" + inputText + "' to list");

        console.log(this.state.tasks);
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

    updateDetailText(itemIndex, detailText = '') {
       console.log('updateDetail function entered...', itemIndex, detailText);
        const newTasks = this.state.tasks.slice();

        if (newTasks[itemIndex]) {
            newTasks[itemIndex].details = detailText;
        }

        this.setState({ tasks: newTasks });
    }

    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" render={props => {
                        return (
                            <App {...props}
                                 tasks={this.state.tasks}
                                 addTask={this.addTask}
                                 deleteTask={this.deleteTasks}
                                 doneTask={this.doneTask}
                                 updateDetailText={this.updateDetailText} >
                            </App>
                        );
                    }} />
                    <Route path="/:text" render={props => { return <TodoDetails {...props} updateDetailText={this.updateDetailText} />}} />
                </div>
            </Router>
        );
    }
}