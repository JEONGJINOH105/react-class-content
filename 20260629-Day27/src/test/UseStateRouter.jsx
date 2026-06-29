import React, { useState } from 'react'

export default function UseStateRouter() {

  // 현재 페이지 저장
  let [page, setPage] = useState("home");

  return (
    <div>

      <h2>하나의 페이지에서 여러 페이지를 볼 수 있다.</h2>
      <p>메뉴를 하나 만들어서 클릭을 하면 페이지 전환</p>

      <nav>
        <button onClick={()=>{
          setPage("home");
        }}>홈</button>
        <button onClick={()=>{
          setPage("notice");
        }}>공지사항</button>
        <button onClick={()=>{
          setPage("gallery");
        }}>갤러리</button>
        <button onClick={()=>{
          setPage("contact");
        }}>문의하기</button>
      </nav>

      <br />
      <hr />

      {page == "home" && <h3>🏠 홈 화면입니다.</h3>}
      {page == "notice" && <h3>📢 공지사항 화면입니다.</h3>}
      {page == "gallery" && <h3>🖼️ 갤러리 화면입니다.</h3>}
      {page == "contact" && <h3>📞 문의하기 화면입니다.</h3>}

      {/* page가 "home"이면 h3으로 홈 화면입니다. 보여준다. */}
    </div>
  )
}
