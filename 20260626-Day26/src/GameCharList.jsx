import React, { useState } from 'react'

export default function GameCharList() {
  
  let [char, setChar] = useState([]);
  let [price, setPrice] = useState(0);

  return (
    <div>
      <h2>귀여운 캐릭터 선택하기</h2>

      <div className='cards'>
        <div className='card'>
          <img onClick={()=>{
            setChar([...char, "토끼 - 1000원"])
            setPrice(price + 1000);
               }}
               src="/mu.webp" 
               alt="토끼" />
          <h3>토끼</h3>
          <p>1000원</p>
        </div>

        <div className='card'>
          <img onClick={()=>{
            setChar([...char, "고양이 - 2000원"])
            setPrice(price + 2000);
               }}
               src="/ap.webp" 
               alt="고양이" />
          <h3>고양이</h3>
          <p>2000원</p>
        </div>

        <div className='card'>
          <img onClick={()=>{
            setChar([...char, "곰 - 3000원"])
            setPrice(price + 3000);
               }}
               src="/ryan.png" 
               alt="곰" />
          <h3>곰</h3>
          <p>3000원</p>
        </div>
      </div>
      
      <br />
      <hr />
      <br />
    
      <div className='price'>
        <h2>선택한 캐릭터</h2>
        
          <ul>
            <li>{char}</li>
          </ul>

      </div>

      <hr />
      <hr />
      <hr />

      <p>총 구매액 : {price}원</p>
    </div>
  )
}
