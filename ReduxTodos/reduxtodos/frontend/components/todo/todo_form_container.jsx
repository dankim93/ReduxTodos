import { connect } from 'react-redux';
import TodoForm from './todo_form';

import { receiveTodo } from '../../actions/todo_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
