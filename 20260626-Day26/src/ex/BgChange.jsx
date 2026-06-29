import React, { useState } from 'react'

export default function BgChange() {

  let [bgColor, setBgColor] = useState(false);

  return (
    <div className={bgColor ? "my-bg" : "box"}>

      <button onClick={()=>{
        setBgColor(!bgColor);
      }}>배경색 변경</button>

    </div>
  )
}
