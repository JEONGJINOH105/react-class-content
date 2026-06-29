import React, { useState } from 'react'

export default function FriendList() {

  let [person, setPerson] = useState([]);

  return (
    <div>
      <h2>친구 추가하기</h2>
      <p>버튼을 클릭하면 각각 영희, 철수, 지민, 영수, 민수</p>

      <button onClick={()=>{
        setPerson([...person, "영희"])
      }}>영희</button>
      <button onClick={()=>{
        setPerson([...person, "철수"])
      }}>철수</button>
      <button onClick={()=>{
        setPerson([...person, "지민"])
      }}>지민</button>
      <button onClick={()=>{
        setPerson([...person, "영수"])
      }}>영수</button>
      <button onClick={()=>{
        setPerson([...person, "민수"])
      }}>민수</button>

      <h3>친구목록 : {person}</h3>
    </div>
  )
}
