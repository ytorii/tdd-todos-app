import React, { Component } from 'react'
import { connect }          from 'react-redux'
import * as actions         from '../../actions/todos'
import TodoList from '../../components/TodoList'
/*
      <TodoList todos={this.props.todos} />
      */
class App extends Component {
  render() {
    return(
      <TodoList {...this.props} />
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    todos: state.todos
  }
}

export default connect(mapStateToProps, actions)(App)
