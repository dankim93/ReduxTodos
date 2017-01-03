import uniqueId from '../../util/unique_id';
import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state, { id: uniqueId() });
    this.props.receiveTodo(todo);
    this.setState({
      title: "",
      body: ""
    });
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }



  render () {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <label>Title:
          <input
            className="input"
            ref="title"
            value={this.state.title}
            onChange={this.update('title')}
            />
        </label>

        <label>Body:
          <input
            className="input"
            ref="body"
            value={this.state.body}
            onChange={this.update('body')}
          />
        </label>
        <button className="create-button">Create Magic!</button>
      </form>
    );
  }
}

export default TodoForm;
