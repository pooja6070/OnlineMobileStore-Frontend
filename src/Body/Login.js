import { Component,state, changeHandler, submitLogin } from "react";
import axios from 'axios';
class Login extends Component{
    state = {
        username : "",
        password : ""
    }
    changeHandler =(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        }
           
        )
    }
    submitLogin = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:90/account/login", this.state)
        .then((response)=>{
            console.log(response);
        })        
        .catch((err)=>{
            console.log(err.response)
        })
    }
    render(){
        return(
            <div>
                <form>
                    <p>Username<input type="text" name="username" value={this.state.username} onChange={this.changeHandler}/></p>
                    <p>Password<input type="text" name="password" value={this.state.password} onChange={this.changeHandler} /></p>
                    <p><input type="submit" onClick={this.submitLogin} /></p>
                </form>
            </div>
        )
    }
}
export default Login;