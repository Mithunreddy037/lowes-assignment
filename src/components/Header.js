import React, { Component } from 'react';
import logo from '../assets/Logo.jpg';
import { Row, Col, Button} from 'reactstrap';
import './Style.css';
import { withRouter } from 'react-router-dom';



class Header extends Component {

  render() {
    return (
      <div class="headFix">
      <Row>
        <Col md="3">
          <center>
            <img src={logo} alt="NEKRTC" width="70" height="70" />
          </center>
        </Col>
        <Col md="6">
          <center style={{ fontSize: 40 }}>
            <b>  NEKRTC </b>
            <h5>
              Division Kalaburagi
            </h5>
          </center>
        </Col>
          <Col md="3"><Button  style={{backgroundColor:'#4f81bd', marginTop:'35px'}}>Logout</Button>
        </Col>
        <hr style={{ marginTop : -10}} />
        </Row>
      </div>
    );
  }
}

export default withRouter(Header);

