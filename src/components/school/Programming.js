import React from 'react';
import SideNavPage from './schcomp/SideNavPage'
import { Container,Row,Col } from 'react-bootstrap'
class Programming extends React.Component{
    render(){
        return(
            <div className="main-p">
            <Container fluid className='zerop'>
  <Row>
    <Col sm={2}><SideNavPage /></Col>
    <Col sm={7}>
    <div className='side-content'>
     <h1 className="programming-title">what is Programming</h1>
     <p className="pro-def">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The process of developing and implementing various sets of instructions to enable a computer to do a certain task.
      These instructions are considered computer programs and help the computer to operate smoothly. The language used to
       program computers is not understood by an untrained eye or users thats why you are here.</p>
     </div>
     </Col>
    <Col sm={3}><h1 className='jumbotron j1'>hints</h1></Col>
  </Row>
  </Container>
            </div>
        )
    } 
}

export default Programming;