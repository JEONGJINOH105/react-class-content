import React from 'react'

export default function Post({title, content, image}) {
  return (
      <div className="box">
        <h3>{title}</h3>
        <img src={image} alt="" />
        <p>{content}</p>
      </div>
  )
}
