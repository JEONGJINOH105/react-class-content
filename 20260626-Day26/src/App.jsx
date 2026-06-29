import React from 'react'

export default function App() {
  return (
    <div>
      <h2>React는 화면을 담당하는 언어다.</h2>
      <p>화면을 쉽고 빠르게 관리하기 위해서 (vite)</p>
      <p>데이터만 바꾸면 화면이 알아서 바뀐다.</p>
      <p>필요한 부분만 업데이트해서 빠르게 화면을 보여준다.</p>

      <h2>차이점</h2>
      <h3>자바스크립트 일때 HTML 태그의 내용을 바꾸려면</h3>
      <p>document.getElementById("아이디").innerText += 값</p>

      <h3>리액트</h3>
      <p>useState(값) / 값이 언제 바뀌나?  setXXX()</p>
    </div>
  )
}
