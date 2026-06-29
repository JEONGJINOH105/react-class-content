import React from "react";

export default function First({setJoin}) {
  return (
    <div className="first-box">
      <h2>회원가입</h2>
      <hr />
      <br />
      <h3>1단계. 약관 동의</h3>
      <p>회원가입을 위해 약관에 동의해주세요.</p>

      <button
        onClick={() => {
          setJoin("second");
        }}
      >
        동의하고 다음
      </button>
    </div>
  );
}
