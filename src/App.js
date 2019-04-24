import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <List />
  );
}
const taskList = [{id:1, content:'eat all the food!!!!', done:false},
{id:2, content:'cardio', done:false},
{id:3, content:'die at like 2', done:true},
{id:4, content:'wake up', done:false}]

class List extends Component {
  
  state = {
    listOfTasks: taskList
  }

  render() {
    return <ul>{this.state.listOfTasks.map(task => < Task id={task.id} content={task.content} isDone={task.done} toCheck={this.toCheck}/>)}</ul>
  }
  toCheck = (id) => {
    console.log(id)
    this.setState({
      listOfTasks: this.state.listOfTasks.map(task => {
        if(task.id == id){
          return {
            ...task, done: !task.done
          }
        } else {
          return task
        }
      })
    })
  }

}

class Task extends Component {

  render() {
    return <li><input type= 'checkbox' checked = {this.props.isDone} onChange = {() => this.props.toCheck(this.props.id)}></input>  {this.props.content}</li>
  }

}

export default App;
