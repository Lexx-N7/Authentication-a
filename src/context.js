import React, { Component } from "react";
// import uuid from 'uuid'

let MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    todos: [],
    loading: false
  };

  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(data => {
        let todos = data.filter(item => item.id < 4);
        this.setState({
          todos
        });
      });
  };



  addTodo = title => {
    this.setState({loading: true})
    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain,*/*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        completed: false
        // id: uuid()
      })
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          todos: [...this.state.todos, data],
          loading: false
        });
      });
  };

  deleteTodo = id => {
      this.setState({loading: true})
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => res.json())
      .then(data => {
        let todos = this.state.todos.filter(todo => todo.id !== data.id);
        this.setState({
          todos,
          loading: false
        });
      });
      //  let todos = []
      //  this.state.todos.forEach(todo=>{
      //      todos = [...todos,{...todo}]
      //  })
      //  todos = todos.filter(todo=>todo.id !== id)
      //  this.setState({
      //      todos,
      //      loading: false
      //  })
  };

  markTodo = id => {
    let todos = this.state.todos.map(todo => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    });
    this.setState({
      todos
    });
  };
  getTodo = id => {
    return this.state.todos.find(todo => todo.id === id);
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          ...this.state,
          addTodo: this.addTodo,
          deleteTodo: this.deleteTodo,
          markTodo: this.markTodo
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

let MyConsumer = MyContext.Consumer;

export { MyProvider, MyConsumer, MyContext };
