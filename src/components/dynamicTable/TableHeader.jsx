import { Component } from "react"

class TableHeader extends Component{
     constructor(props){
          super(props);
          this.state = {
               item: null
          }
     }

     static getDerivedStateFromProps(props, state){
          return {
               item: props.item
          }
     }

     render(){
          return(
               <td title={this.state.item}> {this.state.item}</td>
          )
     }

}

export default TableHeader