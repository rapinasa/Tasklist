import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

addTask(){
  console.log('addTask', this.taskInput.value);
  this.props.onAddTask(this.taskInput.value);
  this.taskInput.value = '';
}
findTask(){
  console.log('findTask', this.searchInput.value);
    this.props.onFindTask(this.searchInput.value);
}

  render() {
    console.log(this.props.tasks);
    return (
      <div>
             <div>
            <input type="text" ref={(input) => {this.taskInput = input}}/>
            <button onClick={this.addTask.bind(this)}> Add Task </button>
            </div>
            <div>
            <input type="text" ref={(input) => {this.searchInput = input}}/>
            <button onClick={this.findTask.bind(this)}> Find Task </button>
            </div>
            <ul>
            {this.props.tasks.map((task, id) =>
              <li key={id}>{task.name}</li>
              )}
            </ul>
    
      </div>
    );
  }
}
export default connect(
state => ({
  tasks: state.tasks.filter(task => task.name.includes(state.filterTasks))
}),
dispatch => ({
  onAddTask: (name) =>{
    const payload = {
      id: Date.now().toString(),
      name
    };
    dispatch({type: 'ADD_TASK', payload });
  },
  onFindTask: (name) => {
    console.log('name', name);
    dispatch({ type: 'FIND_TASK', payload: name});
  }
})
)(App);
