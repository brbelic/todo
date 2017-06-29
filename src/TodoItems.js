import React from 'react';

class TodoItems extends React.Component{
  render() {
    var todoEntries = this.props.entries;

    var createTasks = (item, index) => {
      return <li key={index}>
        <span>{item.text}</span> 
        <button id={index} onClick={this.props.deleteItem}>Delete</button>
       </li> 
    }

    var listItems = todoEntries.map(createTasks);

    return (
      <ul className="theList">
        {listItems}
      </ul>
    );
  }
}

export default TodoItems;