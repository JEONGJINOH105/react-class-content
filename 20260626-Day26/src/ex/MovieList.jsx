import React, { useState } from 'react'

export default function MovieList() {

  let [movie, setMovie] = useState([]); 

  return (
    <div>
      <h2>좋아하는 영화 담기</h2>

      <button onClick={()=>{
        setMovie([...movie, "❤️어벤져스"])
      }}>❤️어벤져스</button>
      <br />
      <button onClick={()=>{
        setMovie([...movie, "❤️범죄도시"])
      }}>❤️범죄도시</button>
      <br />
      <button onClick={()=>{
        setMovie([...movie, "❤️검사외전"])
      }}>❤️검사외전</button>
      <br />
      <button onClick={()=>{
        setMovie([...movie, "❤️인터스텔라"])
      }}>❤️인터스텔라</button>
      <br />
      <button onClick={()=>{
        setMovie([...movie, "❤️겨울왕국"])
      }}>❤️겨울왕국</button>
      <br />
      <h3>{movie}</h3>
    </div>
  )
}
