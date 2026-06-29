import React, { useState } from 'react'
import SettingItem from '../component/SettingItem';

export default function Lab1() {

  let [Dark, setDark] = useState(false);

  let [Inform, setInform] = useState(true);

  let [Wifi, setWifi] = useState(true);


  return (
  <div className={Dark ? "page darkPage" : "page"}>
    <div className={Dark ? "phone darkPhone" : "phone"}>
      
      <h2>📱 설정</h2>
      <p>오늘 배운 useState 복습</p>

        <SettingItem
          icon="🌙"
          title="다크모드"
          value={Dark}
          setValue={setDark}
        />

        <SettingItem 
          icon="🔔" 
          title="알림" 
          value={Inform} 
          setValue={setInform} />

        <SettingItem
          icon="📶"
          title="와이파이"
          value={Wifi}
          setValue={setWifi}
        />

      <div className={Dark ? "result darkPhone-resul" : "result"}>
        <h3>현재 상태</h3>
        <p>다크모드 : {Dark ? "켜짐" : "꺼짐"}</p>
        <p>알림 : {Inform ? "켜짐" : "꺼짐"}</p>
        <p>와이파이 : {Wifi ? "켜짐" : "꺼짐"}</p>
      </div>

    </div>
  </div> 
  );
}