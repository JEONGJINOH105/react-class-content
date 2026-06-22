import React from 'react'
import "./App.css";
import NavBar from './component/NavBar';

export default function FoodPage() {
  return (
    <>
    <NavBar />

    <div className='food-menus'>

      <div className='food-menu'>

        <img src="https://www.ediya.com/files/menu/IMG_1781506976892.png" alt="" />
        <p>바스크치즈케이크</p>

     </div>

      <div className='food-menu'>

        <img src="https://www.ediya.com/files/menu/IMG_1774920189102.png" alt="" />
        <p>현미 소불고기볶음밥</p>

      </div>

      <div className='food-menu'>

        <img src="https://www.ediya.com/files/menu/IMG_1774920059295.png" alt="" />
       <p>크림 퐁듀 김치 볶음밥</p>

      </div>
    </div>
    </>

  )
}
