import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./Login.js";
import Home from "./index_pract";

import { BrowserRouter as Router, Route ,Link} from 'react-router-dom';



class App extends Component{
  constructor(props){
    super(props);
    this.state={
      firstName:"",
      lastName:"",
      email:"",
      Registration_number:"",
      password:"",
    }
   
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.handleChange2=this.handleChange2.bind(this);
    this.handleChange3=this.handleChange3.bind(this);
    this.handleChange4=this.handleChange4.bind(this);
    this.handleChange5=this.handleChange5.bind(this);
  }
  handleChange(evt){
    this.setState({firstName:`${evt.target.value}`});
    
  }
  handleChange2(evt){
    this.setState({lastName:`${evt.target.value}`});
    
  }
  handleChange3(evt){
    this.setState({email:`${evt.target.value}`});
    
  }
  handleChange4(evt){
    this.setState({password:`${evt.target.value}`});
    
  }
  handleChange5(evt){
    this.setState({Registration_number:`${evt.target.value}`});
    
  }
  handleSubmit(evt){
    evt.preventDefault();
    this.setState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        Registration_number:""
    })
  }
  
  render(){
    return(
      <Router>
      <div class="wrapper">
        <div className="form-wrapper">
        
              <h1>Create Account</h1>
              <form onSubmit={this.handleSubmit}>
                  <div className="firstName">
                    <label htmlFor="firstName">First Name </label>
                    <input type="text"
                     className="" 
                    placeholder="First Name"
                    name="firstName" 
                    value={this.state.firstName}
                    onChange={this.handleChange }
                    />
                  </div>

                  <div className="lastName">
                    <label htmlFor="lastName">Last Name </label>
                    <input type="text"
                     className="" 
                    placeholder="Last Name"
                    name="lastName"
                    value={this.state.lastName} 
                    onChange={this.handleChange2 }
                    />
                  </div>
                 
                  <div className="Registration_number">
                    <label htmlFor="Registration_number">Registration_No</label>
                    <input type="text"
                     className="" 
                    placeholder="Registration_number"
                    name="Registration_number" 
                    value={this.state.Registration_number}
                    onChange={this.handleChange5 }
                    />
                  </div>


                  <div className="email">
                    <label htmlFor="email">Email</label>
                    <input type="email"
                     className="" 
                    placeholder="email"
                    name="email" 
                    value={this.state.email}
                    onChange={this.handleChange3 }
                    />
                  </div>
                  
                  <div className="password">
                    <label htmlFor="password">password</label>
                    <input type="password"
                     className="" 
                    placeholder="password"
                    name="password" 
                    value={this.state.password}
                    onChange={this.handleChange4 }
                    />
                  </div> 
                  <div className="createAccount">
                    <button type="submit">Create Account</button>
                               
                                 
                                       
                                       <Route  path='/Login' exact strict component={Login} 
                                       
                                       />
                                         <ul>
                                            <li>

                                                <Link to="/Login" exact strict >Already Have an Account ?</Link>
                                            </li>
                                          </ul>

                                       
                                  

                  </div>
              </form>
              
        </div>   
        
      </div>
      </Router>
    );
  }
}

export default App;
