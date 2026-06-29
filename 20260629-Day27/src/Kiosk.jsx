import React, { useState } from 'react'
import First from './pages/First';
import Second from './pages/Second';
import Third from './pages/Third';
// import FirstPage from './pages/FirstPage';
// import SecondPage from './pages/SecondPage';
// import ThirdPage from './pages/ThirdPage';

export default function Kiosk() {

  let [join, setJoin] = useState("first");

  return (
    <div className='wrap'>
      
      {join == "first" && <First setJoin={setJoin}/>}

      {join == "second" && <Second setJoin={setJoin}/>}

      {join == "third" && <Third />}

    </div>
  )
}


/*
      let [page, setPage] = useState("first");

      <h2>간단 키오스크</h2>
      <h3>현재 페이지 : {page}</h3>

      {page == "first" && <FirstPage 변수공유={setPage}/>}

      {page == "second" && <SecondPage 변수공유={setPage}/>}

      {page == "third" && <ThirdPage />}
*/