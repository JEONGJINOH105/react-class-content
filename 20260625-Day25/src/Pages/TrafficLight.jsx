// TrafficLight.jsx
import { useState } from "react";
import ChangeButton from "./ChangeButton";

function TrafficLight() {
  let [color, setColor] = useState("green");

  return (
    <div>
      <p>현재 신호: {color}</p>
      {/* 💡 [정답 ①] 자식 태그에게 setColor 스위치를 배달 보냅니다! */}
      <ChangeButton onRed={() => setColor("red")} />
    </div>
  );
}