import { Component } from "react";

class Cell extends Component{
     constructor(props){
          super(props);
          this.state = {
               item : this.props.item
          }
     }

     handleChange(e){
          this.setState({
               item : e.target.value
          })
     }

     render(){
          return(
               <td onChange={this.handleChange.bind(this)}>
               {
                    this.props.editable === true? (
                    <input type= "text" value={this.state.item}/>
               ) : (
                    this.props.item
                    )} 
                    </td>
          )
     }
}

export default Cell