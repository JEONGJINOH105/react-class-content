import React from 'react'

export default function Second({setJoin}) {
  return (
      <div className='first-box'>
        <h2>회원가입</h2>
        <hr />
        <br />
        <h3>2단계. 정보 입력</h3>

        <input type="text" placeholder='이름'/>
        <br />
        <input type="text" placeholder='아이디'/>
        <br />
        <input type="password" placeholder='비밀번호'/>
        <br />

        <button onClick={()=>{
          setJoin("third");
        }}>가입하기</button>
      </div>
  )
}
