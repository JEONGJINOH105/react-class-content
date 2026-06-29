import React, { useState } from 'react'

export default function SelectBoxTest() {

  let [과일, set과일] = useState("");
  let [food, setFood] = useState("");
  let [paymentMethod, setPaymentMethod] = useState("");

  return (
    <div>
      <h2>드롭다운 메뉴 selectBox</h2>

      <h3>음식 선택</h3>

      <select onChange={(e)=>{
        setFood(e.target.value);
      }}>
        <option value="">선택하세요</option>
        <option value="햄버거">햄버거</option>
        <option value="피자">피자</option>
      </select>

      <h3>선택한 음식 : {food}</h3>

      <br />
      <br />
      <hr />

      <h3>과일 선택</h3>
      <select onChange={(e)=>{
        set과일(e.target.value);
      }}>
        <option value="">선택하세요</option>
        <option value="사과">🍎</option>
        <option value="포도">🍇</option>
      </select>    

      <h3>내가 선택한 과일 : {과일}</h3>

      <br />
      <br />
      <hr />

      <h3>결제 방법 선택</h3>
      <select onChange={(e)=>{
        setPaymentMethod(e.target.value);
      }} value={paymentMethod}>
        <option value="">선택하세요</option>
        <option value="카드결제">카드결제</option>
        <option value="계좌이체">계좌이체</option>
        <option value="카카오페이">카카오페이</option>
        <option value="네이버페이">네이버페이</option>
      </select>

      <h3>선택한 결제 방법 : {paymentMethod}</h3>
    </div>
  )
}
