import React, { Component } from 'react';
import FirstComp from './components/ex/FirstComp';
import Counter from './components/counter/Counter';
import DynamicTable from './components/dynamicTable/DynamicTable';
import logo from './logo.svg';
import './App.css';
import TodoApp from './components/todo/TodoApp'


 
class App extends Component {
  render(){
    return (
      <div className='App'>
      <TodoApp/>
      </div>
    )
  }
 
}


class LearningComp extends Component {
  render() {
    return (
      <div className="LearningComp">
       My Hello World 1
       <FirstComp/>
      </div>
    );
  }
}


export default App;
