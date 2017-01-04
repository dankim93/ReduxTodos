import React from 'react';
import TodoListContainer from './todo_list_container';
import merge from 'lodash/merge';

const TodoListItem = ({todo, updateTodo, receiveTodo, removeTodo}) => {
  const { title, done } = todo;
  return (
    <li>
      {todo.title}
      <button
        onClick={ () => removeTodo(todo) }
        className='delete-button'
        >Delete Magic :( </button>

      <button
        className={ done ? "Done" : "Undone"}
        onClick={ () => toggleTodo(todo, done, receiveTodo) }>
        { done ? "Undo" : "Done" }
      </button>
    </li>
  );
};



  const toggleTodo = (todo, done, receiveTodo) => {
    const toggledTodo = merge(
      {},
      todo,
      { done: !done }
    );

     receiveTodo(toggledTodo);
  };


export default TodoListItem;
