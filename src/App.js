import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';
import Profile from './Components/Profile';
import Course from './Pages/Course';

function App() {
  return (
    <div className="MainApp">
      <Container className='p-0 back' fluid={true}>
        <Row>
          <Col xs={2}></Col>
          <Col xs={8} className="p-0">
            <Router>
              <Header/>
              <Row className="mt-4">
                <Col lg={3} xs={12}>
                  <Profile/>
                </Col>
                <Col lg={9} xs={12}>
                  <Course/>
                </Col>
              </Row>
              <Row className="mt-4">
                <Footer/>
              </Row>
            </Router>
          </Col>
          <col xs={2}></col>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
