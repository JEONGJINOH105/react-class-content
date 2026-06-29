import React from "react";
import Topic from "../component/Topic";

export default function HotTopic() {
  // div -> section 태그 사용
  // let은 변경되는 값들을 저장한다.
  let 현재페이지번호 = 1;

  // const -> 한번 저장한 값은 변경 불가능
  const 기준고정된값 = 60;
  console.log("현재번호: ", 현재페이지번호);
  console.log("기준고정된값: ", 기준고정된값);
  // 리액트를 쓰는 두번째 이유
  // 한번 웹 페이지가 열리면 내가 수정한 곳만
  // 추가한 곳만 새로고침없이 추가된다.

  return (
    <div className="wrap">
      <div className="hot-topics">
        <div className="title-topics">
          <p>
            <span>핫토픽</span> &gt; 타임랩스
          </p>

          <ul>
            <li className="click-active">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>

        <div className="content-topics">
          <Topic image="/image1.jpg" content="식집사의 선인장키우기 타임랩스" />

          <Topic image="/image2.jpg" content="식집사의 휴식 타임랩스" />

          <Topic image="/image3.jpg" content="식집사의 수련키우기 타임랩스" />
        </div>
      </div>
    </div>
  );
}
