import { Component } from "react";

 export default class TodoApp extends Component{
     render(){
          return(
               <div className="TodoApp">
               <LoginComp/>
               </div>
          )
     }
}

class LoginComp extends Component{
     constructor(props){
          super(props)
          this.state = {
               username: "Subhav M",
               password: ""
          }

          this.handleChange = this.handleChange.bind(this);
     }

    
     handleChange(event){
          this.setState({
               [event.target.name]: event.target.value
          })
     }

   


     render() {
          return(
               <div className="Login">
               User Name: <input type={"text"} 
               name="username" value={this.state.username} onChange={this.handleChange}/>
               Password: <input type={"password"} name="password" value={this.state.password} onChange={this.handleChange}/>
               <button>Login</button>
               </div>
          )
     }
}