import React, { useState } from 'react'

export default function Habbies() {

  // 1.각각 저장하기
  let [soccer, setSoccer] = useState(false);
  let [baseball, setBaseball] = useState(false);
  let [basketball, setBasketball] = useState(false);
  let [jokgu, setJokgu] = useState(false);

  let [hobbies, setHobbies] = useState([]);

  return (
    <div>
      <h2>취미 선택</h2>
      
      <label>
        <input
          type="checkbox"
          onChange={(이벤트정보) => {
            setSoccer(이벤트정보.target.checked);
          }}
        />
        축구
      </label>

      <label>
        <input
          type="checkbox"
          onChange={(이벤트정보) => {
            setBaseball(이벤트정보.target.checked);
          }}
        />
        야구
      </label>

      <label>
        <input
          type="checkbox"
          onChange={(이벤트정보) => {
            setJokgu(이벤트정보.target.checked);
          }}
        />
        족구
      </label>
      <label>
        <input
          type="checkbox"
          onChange={(이벤트정보) => {
            setBasketball(이벤트정보.target.checked);
          }}
        />
        농구
      </label>

      <h3>선택한 취미</h3>
      <p>true이면 태그를 보여주는 기호</p>
      {soccer && <p>축구</p>}
      {baseball && <p>야구</p>}
      {basketball && <p>농구</p>}
      {jokgu && <p>족구</p>}

    </div>
  )
}


      // <p>축구 : {String(soccer)}</p>
      // <p>야구 : {String(baseball)}</p>
      // <p>농구 : {String(basketball)}</p>
      // <p>게임 : {String(jokgu)}</p>
      
      // 버튼을 눌렀을때 결과가 true, false가 나오지 않는다.
      // 그래서 위락 다크모드! false 우리가 결과를 직접 뒤집어서 false->true ! not 기호

      // checkbox 눌렀을때 겨로가가 true, false가 자동으로 나온다.

      // checkbox는 여러개의 값을 체크할 수 있다.

      // 참이면 태그가 보이고 거짓이면 무시한다.
      //true && 태그 == if(true) {}

      // 조건 ? true 이면 실행 : false 이면 실행
      // if(true){} else{}