import React, { useState } from 'react'

export default function TextCount() {

  let [text, setText] = useState("");

  return (
    <div>
      <h2>글자수 세기</h2>
      <input type="text" 
             onChange={(e)=>{
              setText(e.target.value);
              console.log("이벤트발생");
             }}/>

      <h3>글자수 : {text.length}</h3>
      <p>글자수가 4자 미만이면 "4자 이상 입력하세요"</p>
      <p>글자수가 4자 이상이면 "정상"</p>
      
      <p>비교 연산자 - 비교해서 결과를 맞다 true, 틀리다 false</p>
      <h3>{text.length >= 4 ? "정상" : "4자 이상 입력하세요"}</h3>

    </div>
  )
}
