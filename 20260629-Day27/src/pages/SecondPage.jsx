import React from 'react'

export default function SecondPage({변수공유}) {
  return (
      <div className='first-box'>
        <h2>2단계</h2>
        <p>콜라 고르기</p>
        <button onClick={()=>{
          변수공유("third");
        }}>다음</button>
      </div>
  )
}
