import React, { useState } from 'react'

export default function LikeMode() {
  
  // 유튜브나 SNS나 숏츠, 인스타그램 좋아요
  // 뉴스 등등 내가 다음에 웹에 들어가서 봤을때도
  // 좋아요 유지

  // 버튼 -> 좋아요 상태 변경 -> 화면 변경 -> 내가 본다

  let [like, setLike] = useState(false);
  
  return (
    <div>

      <h2>좋아요 예제</h2>
      <p>?는 if문을 짧게 쓰기위한 도구다</p>
      <p>결과 ? true면 실행 : false면 실행</p>
      <h3>{like ? "❤️" : "🤍"}</h3>

      <button onClick={()=>{
        setLike(!like)
      }}>좋아요</button>
    </div>
  )
}
