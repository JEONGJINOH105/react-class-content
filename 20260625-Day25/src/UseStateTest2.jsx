import React, { useState } from 'react'

export default function UseStateTest2() {
  // 1. 아이디랑 패스워드 저장하기 (입력)
  let [아이디, set아이디] = useState("");
  let [비밀번호, set비밀번호] = useState("");

  // 버튼 클릭시 값이 변경되는 것
  let [숫자, set숫자] = useState(0);
  
  let [이미지, set이미지] = useState(1);

  // 이미지배열
  let [이미지배열, set이미지배열] = useState([
    "project1.webp",
    "project2.webp",
    "project3.webp",
    "project4.webp"
  ]);
  // 현재 배열의 순서
  let [순서, set순서] = useState(0);

  return (
    <div>
      <h2>버튼을 클릭하면 이미지가 변경되게 실습</h2>
      <img 
          //  src={"/project" + 이미지 +".webp"} 
           src={이미지배열[순서]}
           alt="" 
           onClick={()=>{
            // set이미지(이미지 + 1);
            if (순서 == 3){
              순서 = 0;
            }
            set순서(순서 + 1);
           }}/>

      <br />
      <br />
      <br />
      <br />
      <hr />

      <h2>버튼 클릭시 1 씩 증가</h2>
      <button onClick={()=>{
        set숫자(숫자 = 숫자 + 1);
      }}>1씩 증가</button>

      <h3>변경된숫자: {숫자}</h3>

      <h2>아이디를 입력하세요</h2>
      <input type="text" onChange={(event)=>{
        set아이디(event.target.value);
      }}/>

      <h2>비밀번호를 입력하세요</h2>
      <input
        type="text"
        onChange={(이벤트) => {
          set비밀번호(이벤트.target.value);
        }}
      />

      <h3>입력한 값: {아이디}</h3>
      <h3>입력한 비밀번호: {비밀번호}</h3>
    </div>
  )
}
