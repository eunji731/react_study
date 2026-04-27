import { useState, useEffect } from 'react'
import './App.css'
import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import bongsdata from './data';
import { Routes, Route, Link, useNavigate, Outlet, useParams } from "react-router-dom"
import styled from 'styled-components'

let YellowBtn = styled.button` 
  background-color : ${props => props.bg}; 
  color : ${props => props.bg == 'blue' ? 'white' : 'black'};
  padding : 10px;
`
let Box = styled.div`
  padding : 20px;
  color : grey
`;


function App() {
  let [bongs] = useState(bongsdata);

  function BongCard(props) {
    const navigate = useNavigate();
    return (
      <>
        <Col sm={4} key={props.bongs.id} className='text-center' onClick={() => { navigate('/detail/' + props.bongs.id, { state: props.bongs }) }}>
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

    useEffect(() => {
      console.log('안녕')
      let a = setTimeout(() => {
        setAlert(false);
      }, 2000);

      return () => {
        console.log('useEffect 실행전에 실행되는 코드 -> clean up 함수(mount시 실행안되고 unmount시 실행됨) -> 1. 이탈할 때 기존 타이머는 제거해주세요')
        clearTimeout(a);
      }
    }, []);

    let [inputVal, setInputVal] = useState('');
    let [inputDiv, setInputDiv] = useState(false);
    useEffect(() => {
      if (!isNaN(Number(inputVal))) {
        setInputDiv(false);
      } else {
        setInputDiv(true);
      }
    }, [inputVal])

    const [alert, setAlert] = useState(true);

    // useEffect(()=>{ 실행할코드 }) : 1. 이러면 재렌더링마다 코드를 실행가능합니다.
    // useEffect(()=>{ 실행할코드 }, []) : 2. 이러면 컴포넌트 mount시 (로드시) 1회만 실행가능합니다.
    // useEffect(()=>{ 
    //   실행할코드
    //   return ()=>{
    //     실행할코드
    //   }
    // }) : 3. 이러면 useEffect 안의 코드 실행 전에 항상 실행됩니다. clean up function
    // useEffect(()=>{ 
    //   return ()=>{
    //     실행할코드
    //   }
    // }, []) : 4. 이러면 컴포넌트 unmount시 1회 실행됩니다. 
    // useEffect(()=>{ 실행할코드 }, [state1]) : 5. 이러면 state1이 변경될 때만 실행됩니다. 

    let [count, setCount] = useState(0);

    let { id } = useParams();
    let bongs = props.bongs[parseInt(id)];
    return (
      <div className="container">
        {alert == true ? <div className='alert alert-warning'>2초 이내 구매시 할인</div> : null}
        {/* <YellowBtn bg="blue" color="white">버튼</YellowBtn>
        <Button onClick={() => { setCount(count + 1) }}>버튼</Button> */}
        {count}
        <div className="row">
          <div className="col-md-6">
            <img src={bongs.img} width="100%" />
          </div>
          <div className="col-md-6">
            {inputDiv == true ? <div className='text-danger'>숫자만 입력하세요</div> : null}
            <input placeholder='할인쿠폰번호 입력' onChange={(e) => {
              if (isNaN(Number(e.target.value))) {
                setInputDiv(true);
              } else {
                setInputDiv(false);
              }
            }} />
            <h4 className="pt-5">{bongs.title}</h4>
            <p>{bongs.content}</p>
            <p>{bongs.price}원</p>
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
        <Route path="/detail/:id" element={<Detail bongs={bongs} />} />
        <Route path="*" element={<div>없는페이지입니다</div>} />
        <Route path="/about" element={<About />} />
      </Routes>

    </div>
  )
}

export default App
