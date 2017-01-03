import React from 'react';
import TodoListContainer from './todo_list_container';
import merge from 'lodash/merge';
class TodoListItem extends React.Component {

  toggleTodo(e) {
    e.preventDefault();
    const toggledTodo = merge({}, this.props.todo,
    { done: !this.props.todo.done }
  );
   this.props.receiveTodo(toggledTodo);
}

  render () {
    // debugger;
    const { todo , updateTodo } = this.props;
    const { title, done } = todo;
    return (
      <li>
        {this.props.todo.title}
        <button
          onClick={ () => this.props.removeTodo(this.props.todo) }
          className='delete-button'
          >Delete Magic :( </button>

        <button
          className={ done ? "Done" : "Undone"}
          onClick={ this.toggleTodo }>
          { done ? "Undo" : "Done" }
        </button>

      </li>
    );
  }
}

export default TodoListItem;
