import React, { useState } from 'react'

export default function RadioButtonText() {
  // 체크박스는 true, false를 준다.
  // 라디오버튼은 true, false 안주고, 값을 준다.

  let [gender, setGender] = useState("");
  let [pay, setPay] = useState("");
  let [] = useState("");

  return (
    <div>
      <h2>라디오버튼</h2>
      <h3>여러개 중에 하나만 선택가능하다</h3>
      <p>성별 선택</p>
      {/* name속성은 같은 그룹으롬 ㅜㄲ어서 여러개 중에 하나만 선택 */}

      <input type="radio" name='gender' onChange={(e)=>{
        setGender("남성");
      }}/>남성
      <input type="radio" name='gender' onChange={(e)=>{
        setGender("여성");
      }}/>여성
      <br />
      <br />
      <hr />

      <p>결제 방법</p>

      <input
        type="radio"
        name="pay"
        onChange={(이벤트정보) => {
          setPay("카카오페이");
        }}
      />
      카카오페이
      <input
        type="radio"
        name="pay"
        onChange={(이벤트정보) => {
          setPay("카드");
        }}
      />
      카드
      <input
        type="radio"
        name="pay"
        onChange={(이벤트정보) => {
          setPay("계좌이체");
        }}
      />
      계좌이체
      <br />
      <br />
      <hr />

      <p>배송 방법</p>

      <input type="radio" name='delivery'/>일반배송
      <input type="radio" name='delivery'/>새벽배송
      <input type="radio" name='delivery'/>방문수령

      <p>설문 조사</p>

      <h3>위에서 선택한 값들을 보이기</h3>
      <p>성별 : {gender}</p>
      <br />
      <p>결제방법 : {pay}</p>

    </div>
  )
}
