import React from 'react'

function 숫자출력(숫자){
  return <h3>{숫자}</h3>
}

function 이름출력(이름){
  return <h3>{이름}</h3>
}

export default function App5() {

  let numbers = [1,2,3,4,5,6];

  // 문자로 배열
  let names = ["에리나","알렉스","덱스","밥","그레이스"];

  return (
    <div>
      <h2>map()</h2>
      <p>배열에서만 사용가능하다.</p>
      <p>배열을 반복하면서 HTML태그를 만드는 기능</p>
      <p>return () 안쪽에는 HTML태그들만 들어갈수있다.</p>
      <br />
      {
        // 배열을 반복하면서 태그를 만들기
        // 리액트에서 태그를 만드는건 함수가 한다.
        names.map(이름출력)
      }
      <br />
      <hr />
      {
        // 자바스크립트를 사용하고싶으면 { } 안에 작성해야한다.
        // 세미콜론을 붙이지 않는다.
        numbers.map(숫자출력)
      }

      <h3>숫자 배열 이용해서 HTML태그에 넣기</h3>
    </div>
  )
}
