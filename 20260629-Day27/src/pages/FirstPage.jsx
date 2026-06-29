import React from 'react'

export default function FirstPage({변수공유}) {
  return (
      <div className='first-box'>
        <h2>1단계</h2>
        <p>햄버거 고르기</p>
        <button onClick={()=>{
          변수공유("second");
        }}>다음</button>
      </div>
  )
}
