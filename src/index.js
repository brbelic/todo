import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import App from './App';
import TodoDetails from './TodoDetails';

ReactDOM.render(
	<Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/:text" component={TodoDetails} />
        </div>
    </Router>, 
	document.getElementById('root')
);
