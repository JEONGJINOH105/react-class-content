import React, { useState } from 'react'

// 내가 입력한 여러개의 검색어를 저장할 때 사용하는 방법

export default function SearchArray() {
// 입력창
  let [search, setSearch] = useState("");


// 검색 기록들을 저장하는 변수
  let [history, setHistory] = useState([]);

  return (
    <div>
      <h2>검색 기록 저장</h2>
      <p>검색 기록은 여러개 저장해야 하므로 배열 사용한다.</p>

      <input type="text" placeholder='검색어 입력'
             onChange={(e) => {
              setSearch(e.target.value);
             }}/>

      <button onClick={()=>{
        setHistory([...history, search]);
      }}>검색</button>

      <h3>검색기록 : {history.join(", ")}</h3>
    </div>
  )
}
