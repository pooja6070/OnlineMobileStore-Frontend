import {Component} from 'react';
import{Link} from 'react-router-dom';


class Header extends Component{
    render(){
        return(
           <div>
               <Link to ='/'>Home </Link>
               <Link to ='/register'>Register </Link>
               <Link to ='/login'>Login </Link>
              
        </div>
               
        )
    }
}
export default Header;