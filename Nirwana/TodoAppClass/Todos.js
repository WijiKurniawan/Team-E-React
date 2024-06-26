import React from 'react';
import TodoItem from './TodoItem';

class Todos extends React.Component {
  render() {
    const { todos, toggleCompleted, deleteTodo, updateTodo } = this.props;
    return (
      <div style={listStyle.container}>
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleCompleted={toggleCompleted}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
            />
          );
        })}
      </div>
    );
  }
}

const listStyle = {
  container: {
    width: '40%',
    margin: '0 auto'
  }
}

export default Todos;
