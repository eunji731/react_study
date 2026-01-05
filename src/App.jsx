import React from 'react';

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {

let post = '강남 우동 맛집';
let [글제목1, b1] = useState('남자 코트 추천');
let [글제목2, b2] = useState('여자 코트 추천');
let [글제목3, b3] = useState('강아지 코트 추천');

let [글제목, b] = useState(['남자 코트 추천', '여자 코트 추천', '강아지 코트 추천'])

let [따봉, 따봉변경] = useState(new Array(글제목.length).fill(0));
let [작성일, 작성일변경] = useState(new Array(글제목.length).fill(new Date().toLocaleString()));

let [modal, setModal] = useState(false);

let [title, setTitle] = useState(0);

let [입력값, set입력값] = useState('');
let 삭제값;

// [1, 2, 3].map(function(a){
//   console.log(a);
// })


function 함수() {

}


  return (
    <div className="App">
      {/* 상단메뉴 */}
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <span onClick={()=> {b1('여자코트변경')}}> 🎀 </span>
      <span onClick={()=> {b(['가지가지코트추천', '여자 코트 추천', '강아지 코트 추천'])}}> 🍆 </span>
      <span onClick={()=> {b([글제목[2], 글제목[1], 글제목[0]])}}> 👏 </span>
      <span onClick={()=> {b(['토토토토추천'])}}> 🤢 </span>
      <span onClick={()=> {
        let copy = [...글제목];
        copy[0] = '당근 코트 추천';
        b(copy);
      }}> 🥕 
      </span>
      <span onClick={()=> {
        let copy = [...글제목];
        console.log("정렬값 확인 : " + copy.sort());
        copy.sort();
        b(copy);
      }}> ✏️정렬✏️ </span>

      {/* <div className = "list">
        <h4>{ 글제목[0] }<span onClick={() => { 따봉변경( 따봉 +1 ) }}>🫰</span> { 따봉 } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className = "list">
        <h4>{ 글제목 }<span onClick={() => { 따봉변경( 따봉 +1 ) }}>🫰</span> { 따봉 } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className = "list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className = "list">
        <h4 onClick={() => {
          modal == true ? setModal(false) : setModal(true);
        }}>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div> */}


      {
        글제목.map(function(a, i){
          return (
            <div className = "list">
              <h4 onClick={()=>{
                modal == true ? setModal(false) : setModal(true); 
                setTitle(i);
              }}>{ a }
              <span onClick={(e) => {
                // 버블링 막기
                e.stopPropagation();

                // 해당 항목의 따봉 수 +1
                let copy = [...따봉]
                copy[i] = copy[i] + 1
                따봉변경( copy ) 
                

              }}>
                  🫰  { 따봉[i] } 
              </span>
              
              <span onClick={(e) => {
                // 버블링 막기
                e.stopPropagation();

                // 해당 인덱스에 맞는 항목을 글제목 항목을 글제목 배열에서 제거하기
                let copy = [...글제목]
                copy = copy.filter((el) => el !== a);
                console.log("확인 : " + copy);
                b(copy);

                // 해당 인덱스에 맞는 항목의 따봉의 항목을 따봉 배열에서 제거하기
                let 따봉copy = [...따봉];
                따봉copy = 따봉copy.filter((el, idx) => idx !== i);
                따봉변경(따봉copy);
                
                // 해당 인덱스에 맞는 항목의 작성일의 항목을 작성일 배열에서 제거하기
                let 작성일copy = [...작성일];
                작성일copy = 작성일copy.filter((el, idx) => idx !== i );
                작성일변경(작성일copy);

                }}>  🗑️  </span> 
              </h4>
              <p>{ 작성일[i] }</p>
            </div>
          )
        })
      }  

      <input onChange={(e)=>{ 
        set입력값(e.target.value); 
        console.log(입력값);
        }}>
      </input>
      <button onClick={()=>{
        
        // 입력값이 빈 값이거나 널일 경우 구분 위함
        let chk = (입력값 == '' || 입력값 == null) ? false : true;
        
        if(chk){
          
          // 새로 입력한 값을 글제목 배열에 추가하기
          let copy = [...글제목];
          copy.push(입력값);
          b(copy);
          
          // 새로 입력한 값에 대응하는 따봉 항목 늘리기
          let 따봉copy = [...따봉];
          따봉copy.push(0);
          따봉변경(따봉copy);
          
          // 새로 입력한 값에 대응하는 작성일 추가하기
          let 작성일copy = [...작성일];
          작성일copy.push(new Date().toLocaleString());
          console.log(작성일copy);
          작성일변경(작성일copy);

        } else {
          alert("값을 제대로 입력해주세요");
        }
      }}>
        글작성
      </button>
      {
        // 조건식 ? 참일 때 : 거짓일 때
        modal == true ? <Modal color={'yellow'} 글제목 = {글제목} title = { title }></Modal>  : null
      }
      <Modal2></Modal2>
    </div>
  )
}


function Modal(props){
  return(
      <div className = "modal" style={{background : props.color}}>
        <h4>{ props.글제목[props.title] }</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

class Modal2 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name : 'kim',
      age : 20
    }
  }
  render(){
    return(
      <div>안녕 { this.state.age } 
        <button onClick={()=>
          this.setState({ age:21 })
        }>버튼</button>      
      
      </div>
    )

  }
}

export default App
