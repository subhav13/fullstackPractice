import React, { Component } from 'react';
import FirstComp from './components/ex/FirstComp';
import Counter from './components/counter/Counter';
import DynamicTable from './components/dynamicTable/DynamicTable';
import logo from './logo.svg';
import './App.css';
import TodoApp from './components/todo/TodoApp'
import data from './components/dynamicTable/TableData';


 
class App extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className='App'>
      <DynamicTable
      thead = {data.thead}
      tbody = {data.tbody}/>
      </div>
    )
  }
 
}


// class LearningComp extends Component {
//   render() {
//     return (
//       <div className="LearningComp">
//        My Hello World 1
//        <FirstComp/>
//       </div>
//     );
//   }
// }


export default App;
