import './App.css'

function App() {

  let number = 20;
  console.log("개발자확인");

  let counter = 0;

  let search = "";

  // 리액트는 DOM구조 원본(딱 한번만 실행)과 DOM구조사본을 가지고 있다.
  // 일반 변수들 let,const 화면이 처음 한 번 실행할 때 값을 보여주는데
  // 문제가 이벤트(클릭,입력)를 했을때 이벤트 감지를 못한다.
  // 변경된 내용을 원본에 실시간으로 저장해서 덮어쓰기해서 화면에 보여야된다.
  // 그래서 리액트가 변수들을 관리 할 수 있도록 만들어줘야한다.
  // 자바스크립트의 일반 변수들은 리액트가 감지를 못한다.
  // useState() : 리액트한테 값이 변경됬으니까 화면에 다시 보여주라한다.

  return (
    <>
      <h1>useState란?</h1>
      <p>현재 변수 number : {number}</p>
      
      <br />

      <h2>입력값 받기</h2>
      <input type="text" onChange={(event)=>{
        console.log(event.target);
        console.log(event.target.value)
        search = event.target.value;
      }}/>

      <br />
      <hr />

      <h2>버튼을 클릭하면 화면에 증가하기</h2>
      <h3>{counter}</h3>
      <button onClick={()=>{
        counter = counter + 1;
        console.log("증가함 : ", counter);
      }}>눌러</button>
    </>
  )
}

export default App


// 데이터 바인딩 - {변수명}을 이용해서 HTML 태그에 값을 넣어주는 형태

// () => {} : 화살표 함수
// 버튼을 실행했을때 한 번 즉시 실행하기 때문에
// 굳이 길게 function 이름(){}은 불편하다는거다
// ()=>{} 키워드하고 함수명 없애라
// 그리고 최대한 간단하게 실행하는 내용만
// {}중괄호 안에 넣어라

// onChange={(event)}
// event는 리액트에서 어떤 이벤트가 발생했는지
// 저장하고 있는 변수다. event,e (실무함)