/* eslint-disable react/prop-types */

import React from 'react';
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }

  componentWillUnmount() {
    console.log('Cleaning up...');
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  }

  handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      this.setState({ editing: false });
    }
  }

  render() {
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };
    const { todo, handleChangeProps, deleteTodoProps } = this.props;

    const viewMode = {};
    const editMode = {};

    const { editing } = this.state;

    if (editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }
    const { setUpdate } = this.props;

    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={todo.completed}
            onChange={() => handleChangeProps(todo.id)}
          />
          <button type="button" onClick={() => deleteTodoProps(todo.id)}>
            Delete
          </button>
          <span style={todo.completed ? completedStyle : null}>
            {todo.title}
          </span>
        </div>
        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          value={todo.title}
          onChange={(e) => {
            setUpdate(e.target.value, todo.id);
          }}
          onKeyDown={this.handleUpdatedDone}
        />
      </li>
    );
  }
}
export default TodoItem;
