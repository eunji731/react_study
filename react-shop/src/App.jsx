import { useState } from 'react'
import './App.css'
import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import bongsdata from './data';

function App() {
  let [bongs] = useState(bongsdata);
  return (
    <div className="App">
      {/* 네비게이션 바 */}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"> </div>
      <Container>
        <Row>
          <Col sm>
            <div className='img1' />
            <h4>{bongs[0].title}</h4>
            <p>{bongs[0].content}</p>
            <p>{bongs[0].price}원</p>
          </Col>
          <Col sm>
            <div className='img2' />
            <h4>{bongs[1].title}</h4>
            <p>{bongs[1].content}</p>
            <p>{bongs[1].price}원</p>
          </Col>
          <Col sm>
            <div className='img3' />
            <h4>{bongs[2].title}</h4>
            <p>{bongs[2].content}</p>
            <p>{bongs[2].price}원</p>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default App
