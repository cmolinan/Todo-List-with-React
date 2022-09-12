/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
// import React from 'react';

// function TodoItem(props) {
//   // eslint-disable-next-line react/destructuring-assignment, react/prop-types
//   return <li>{props.todo.title}</li>;
// }

// export default TodoItem;

import React from 'react';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <li>
        <input
          type="checkbox"
          checked={this.props.todo.completed}
          onChange={() => this.props.handleChangeProps(this.props.todo.id)}
        />
        {this.props.todo.title}
      </li>
    );
  }
}
export default TodoItem;
