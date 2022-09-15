import { Component } from "react";
import Cell from "./Cell";

class Row extends Component{
     constructor(props){
          super(props);
          this.state = {
               editable: false
          };
     }

     isEditable(){
          this.setState({
               editable: true
          })
     }

     handleChange(e){
          console.log(e.currentTarget);
     }

     render(){
          return(
               <tr onClick={this.editable.bind(this)} onKeyUp={this.handleChange.bind(this)}>
               {
                    this.props.items.map((e)=>{
                         return <Cell item = {e} editable = {this.state.editable}></Cell>
                    })
               }
               </tr>
          )
     }
}

export default Row