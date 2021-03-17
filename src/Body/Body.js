import { Col, Container, Form, ModalBody, Row } from 'react-bootstrap';
import Register from './Register'
import Login from './Login'
import {Route, Switch} from 'react-router-dom' 
const{Component} = require('react');
class Body extends Component{
    render(){
        return(
            <Container>
                <Switch>
                {/* <Row>
        <Col> */}
                <Route path ='/register' component={Register}/>
                <Route path ='/login' component={Login}/>
                </Switch>
                {/* </Col>
            </Row> */}
            </Container>
              
        )
    }
}
export default Body;
