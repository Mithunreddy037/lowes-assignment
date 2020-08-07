import React,{ Component} from 'react';
import {Container,Row,Col} from 'reactstrap';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import Email from './Email';
import Demo from './Input';
import './Style.css';

class Home extends Component {
  render () {
    return (
      <div>
        <h3 style={{ marginTop: 100, textAlign: 'center', color: 'green' }}>Welcome to India's number one State Transportation</h3>
        <Container>
          <Row>
            <Col className='wrapper form-wrapper'>
              <img src={image1} alt="NEKRTC" />
            </Col>
            <Col className='wrapper form-wrapper'>
              <img src={image2} alt="NEKRTC" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Email />
            </Col>
            <Col>
              <Demo />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

  

export default Home;