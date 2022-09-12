import React, { Component } from 'react';
import FirstComp from './components/ex/FirstComp';
import Counter from './components/counter/Counter';
import DynamicTable from './components/dynamicTable/DynamicTable';
import logo from './logo.svg';
import './App.css';


 
class App extends Component {
  render(){
    return (
      <div className='App'>
      <DynamicTable/>
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
