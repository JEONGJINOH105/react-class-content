import React, { useState } from 'react'

// 글자 색상 변경
// 글자 색상을 웹화면이 기억해야한다.
// 다크모드나 라이트모드일때 글자 색상이나 배경색을 기억해야한다.
// 기억하는 변수를 만들어서 화면에 적용해야한다.

export default function ClassNameTest() {

  let [red, setred] = useState(false);

  return (
    <div>
      <h2>useState이용한 css 디자인 설정하기</h2>

      <h3 className={red ? "red" : "title"}>안녕하세요 이거 변경할 것</h3>
      <button onClick={()=>{
        setred(!red);

      }}>색 변경</button>

    </div>
  )
}
