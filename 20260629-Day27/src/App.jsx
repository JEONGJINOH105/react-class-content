import { useState } from 'react'
import './App.css'

function App() {

  // checked는 변수 값을 사용할때
  // setChecked는 값을 바꾸고 화면도 다시 적용한다. (리렌더링)
  let [checked, setChecked] = useState(false);

  // checked - 실제 체크 박스들은 태그 안에 설정으로 체크가 되었는지 안 되었는지 저장하는 설정값.

  return (
    <>
      <h2>체크박스를 클릭할때마다 값을 저장</h2>
      
      <label>
      <input type="checkbox" onChange={(e)=>{
        setChecked(e.target.checked);
      }}/>약관에 동의합니다.
      </label>

      <h3>체크한 값 확인 : {checked + ""}</h3>
    </>
  )
}

// HTML도 REACT도 똑같다
// 태그 내용은(content)부분 true,false,null
// 화면에 안 보인다. 문자만
// true -> 1
// false -> 0 변환
// 컴퓨터는 숫자만 알고있다. 거짓은 무조건 0

export default App
