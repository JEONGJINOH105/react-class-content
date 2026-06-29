import React from 'react'

export default function Topic({image, content}) {
  return (
      <div className='topic'>
            <img src={image} alt="" />

            <div className='time-labs'>
              <p>{content}</p>
            </div>
          </div>
  )
}
