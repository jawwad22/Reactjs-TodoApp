import React, { Component } from 'react';
import Todos from './Todos'

class App extends Component {
  state={
    todos:[
      {id:1,content:'buy some milk'},
      {id:2,content:'play game'},
      
    ]
  }
  deletTodo=(id)=>{
    const todos=this.state.todos.filter(todo=>{
      return todo.id!==id
    });
    this.setState({
      todos:todos
    })
  }
  render() {
    return (
      <div className="todo-app container">
       <h1 className="center blue-text">Todos's</h1>
<Todos deleteTodo={this.deletTodo} todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
