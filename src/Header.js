import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<header className="col-sm-6 col-sm-offset-3 text-center header">
            	<h1>React ToDo list</h1>
            	<h3>Add tasks You need to do!</h3>
          </header>
		);
	}
}

export default Header;