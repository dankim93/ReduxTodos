import React from 'react';
import TodoListItem from './todo_list_item';
import TodoFormContainer from './todo_form_container';

class TodoList extends React.Component {
  render () {
    // console.log(this.props);
    return(
      <div>

        <ul>
          {this.props.todos.map(todo =>(
            // <li key={todo.id}>{todo.title}</li>
            <TodoListItem todo={todo} receiveTodo={this.props.receiveTodo} removeTodo={this.props.removeTodo} key={todo.id}/>
          ))}
        </ul>

        <TodoFormContainer />
      </div>
    );

  }
}

export default TodoList;
