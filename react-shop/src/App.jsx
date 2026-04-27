import { useState } from 'react'
import './App.css'
import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import bongsdata from './data';
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom"

function App() {
  let [bongs] = useState(bongsdata);

  function BongCard(props) {
    const navigate = useNavigate();
    return (
      <>
        <Col sm={4} key={props.bongs.id} className='text-center' onClick={() => { navigate('/detail') }}>
          <img
            src={props.bongs.img}
            style={{ width: '100%', maxWidth: '250px' }}
          />
          <h4>{props.bongs.title}</h4>
          <p>{props.bongs.content}</p>
          <p>{props.bongs.price}원💓</p>
        </Col>
      </>
    )
  }

  function Home() {
    return (
      <>
        <div className="main-bg"> </div>
        <div className="container">
          <Row>
            {bongs.map(function (a, i) {
              return <BongCard bongs={bongs[i]} i={i}></BongCard>
            }
            )}
          </Row>
        </div>
      </>
    )
  }
  function Detail(props) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={props.bongs.img} width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{props.bongs.title}</h4>
            <p>{props.bongs.content}</p>
            <p>{props.bongs.price}원</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    )
  }
  function About() {
    return (
      <div>
        <h4>about페이지임</h4>
        <Outlet></Outlet>
      </div>
    )
  }
  return (
    <div className="App">

      {/* 네비게이션 바 */}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link to="/">home</Link>
      <Link to="/detail">상세페이지</Link>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<div>없는페이지입니다</div>} />
        <Route path="/about" element={<About />} />
      </Routes>

    </div>
  )
}

export default App
