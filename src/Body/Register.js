import { Component } from "react";
import axios from 'axios';

class Register extends Component{
    state ={
        fname:"",
        lname:"",
        email:"",
        password:""
       
        /*
         firstname:firstname,
            middlename:middlename,
            lastname:lastname,
            email:email,
            password:hash,
            dob:dob,
            phone:phone,
            address:address,
            user_type:user_type
        */

    }
    sendUserInfo = ()=>{
        const data = {   
            "fname": this.state.firstname, //uta backend lko user register sanga match bhayo bhane sajilo
            "lname": this.state.middlename,
            "email": this.state.lastname,
             "password":this.state.password,
    }
    axios.post("http://localhost:3000/register", data).then(response=>{ // backend ma use bhako link
        console.log(response);
    })
}
    render(){
        return(
         < div> 
         <h2>Register</h2>
             <form>
          <p>First name<input type ="text" value= {this.state.fname} onChange ={(event)=>this.setState({fname: event.target.value})}/> </p>
          <p>Last name<input type ="text"value= {this.state.lname}onChange ={(event)=>this.setState({lname: event.target.value})}/> </p>
          <p>Email<input type ="text"value= {this.state.email}onChange ={(event)=>this.setState({email: event.target.value})}/> </p>
          <p>Password<input type ="text"value= {this.state.password}onChange ={(event)=>this.setState({password: event.target.value})}/> </p>
          <button onClick ={this.sendUserInfo}>Register</button>
          </form>
          </ div>
        )
     
    }
}
export default Register;