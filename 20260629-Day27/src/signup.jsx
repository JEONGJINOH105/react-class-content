import React from "react";
import "./signup.css";

export default function signup() {
  return (
    <div className="join-membership">

      <div className="membership-bar">
        <h2>회원가입</h2>
        <p>x</p>
      </div>

      <hr />

      <div className="membership-name">
        <p>이름</p>
        <input type="text" placeholder="홍길동" />
      </div>

      <div>
        <p>이메일</p>
        <input type="text" placeholder="example@email.com" />
      </div>

      <div>
        <p>생년월일</p>
        <input type="date" />
      </div>

      <div>
        <p>가입 경로</p>
        <select>
          <option value="">선택해주세요</option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </div>

      <div>
        <p>성별</p>
        <input type="radio" name="gender" />
        남성
        <input type="radio" name="gender" />
        여성
        <input type="radio" name="gender" />
        선택안함
      </div>

      <div>
        <p>관심 분야 (중복 선택 가능)</p>
        <input type="checkbox" />
        개발 / IT
        <input type="checkbox" />
        디자인
        <input type="checkbox" />
        마케팅
        <input type="checkbox" />
        비즈니스 / 기획
      </div>

      <br />
      <hr />
      <input type="checkbox" />
      [필수] 개인정보 수집 및 이용약관에 동의합니다.
      <br />
      <br />
      <hr />

      <div>
        <button>취소</button>
        <button>가입 완료</button>
      </div>

    </div>
  );
}
