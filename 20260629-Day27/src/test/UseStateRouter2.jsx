import React, { useState } from 'react'
import BestPage from './pages/BestPage';
import NewPage from './pages/NewPage';
import SalePage from './pages/SalePage';
import CartPage from './pages/CartPage';

export default function UseStateRouter2() {

  let [menu, setMenu] = useState("best");

  return (
    <div>
      <h2>쇼핑몰 메뉴</h2>
      <p>메뉴를 클릭하면 화면이 변경됩니다.</p>

      <button onClick={()=>{
        setMenu("signup");
      }}>회원가입</button>

      <button onClick={()=>{
        setMenu("best");
      }}>best</button>

      <button onClick={()=>{
        setMenu("new");
      }}>신상품</button>

      <button onClick={()=>{
        setMenu("sale");
      }}>할인상품</button>

      <button onClick={()=>{
        setMenu("cart");
      }}>장바구니</button>

      <br />
      <br />
      <hr />

      {menu == "sighup" && <signup />}
      {menu == "best" && <BestPage />}
      {menu == "new" && <NewPage />}
      {menu == "sale" && <SalePage />}
      {menu == "cart" && <CartPage />}
    </div>
  )
}
