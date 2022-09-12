import { Component, useEffect } from "react";
import TableData from "./TableData";


export default class DynamicTable extends Component{
     constructor(props){
          super(props);
          this.getHeader = this.getHeader.bind(this);
          this.getRowsData = this.getRowsData.bind(this);
          this.getKeys = this.getKeys.bind(this);
          
     }
 column = Object.keys(TableData[0]);   


 getKeys = function(){
     return Object.keys(TableData[0]);
     }

     getHeader = function(){
          var keys = this.getKeys();
          return keys.map((key, index)=>{
          return <th key={key}>{key.toUpperCase()}</th>
          })
          }

          
          getRowsData = function(){
               var items = TableData;
               var keys = this.getKeys();
               return items.map((row, index)=>{
               return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
               })
               }




               render() {
                    return (
                    <div>
                    <table>
                    <thead>
                    <tr>{this.getHeader()}</tr>
                    </thead>
                    <tbody>
                    {this.getRowsData()}
                    </tbody>
                    </table>
                    </div>
                    
                    );
                    }
}


const RenderRow = (props) =>{
     return props.keys.map((key, index)=>{
     return <td key={props.data[key]}>{props.data[key]}</td>
     })
    }