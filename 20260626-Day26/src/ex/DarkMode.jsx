import React, { useState } from 'react'

export default function DarkMode() {
  
  let [dark, setDark] = useState(false); // 다크모드 true 기본적으로 라이트모드 flase
  console.log("현재 값: ", dark);

  return (
    <div className={dark ? "dark" : "light"}>
      <h2>웹페이지</h2>
      <p>다크 모드 또는 라이트모드 전환 예제</p>

      <p>한번 누르면 라이트모드 한번 더 누르면 다크모드</p>
      <p>! : ~가 아니다 / !true - flase</p>
      <button onClick={()=>{
        setDark(!dark);
      }}>🌙</button>

      <h3>{dark ? "🌙 다크모드" : "🌞 라이트모드"}</h3>

    </div>
  )
}
