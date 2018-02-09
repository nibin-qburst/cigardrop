import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
                username:'',
                password:'',
                message:''
               }
   }
    render(){
        return(
            <div className="card col-lg-4 mx-auto">
                  <div className="card-body px-5 py-5">
                    <h3 className="card-title text-left mb-3">Login</h3>
                    {this.state.message.length > 0 ? (
                      <div className="alert alert-danger">
                        <p className="mb-0">{this.state.message}</p>
                      </div>
                    ) : (
                      <div></div>
                    )}
                    <form>
                      <div className="form-group">
                        <input type="text" className="form-control p_input" placeholder="Username" onChange = {(event,newValue) => this.setState({username:event.target.value})}/>
                      </div>
                      <div className="form-group">
                        <input type="password" className="form-control p_input" placeholder="Password" onChange = {(event) => this.setState({password:event.target.value})}/>
                      </div>
                      <div className="form-group d-flex align-items-center justify-content-between">
                        <div className="form-check"><label><input type="checkbox" className="form-check-input"/>Remember me<i className="input-helper"></i></label></div>
                        <button  className="forgot-pass">Forgot password</button>
                      </div>
                      <div className="text-center">
                      <button disabled={!this.validateForm()} className="btn btn-primary btn-block enter-btn" onClick={(event) => this.handleClick(event)}>LOG IN</button>
                      </div>
                    </form>
                  </div>
                </div>
        )
    }

    handleClick(event){
      this.setState({message:''});
      const url = `http://localhost:4000/users`;
      axios.get(url, {
                      params: {
                        username: this.state.username,
                        password: this.state.password
                      }
      }).then(response => {
        if(response.data.length == 1){
          this.props.history.push('/dashboard')
        }else{
          this.setState({message:'Incorrect username or password'});
        }
      });
      event.preventDefault();
    }

    validateForm() {
      return this.state.username.length > 0 && this.state.password.length > 0;
    }
}

export default Login; 