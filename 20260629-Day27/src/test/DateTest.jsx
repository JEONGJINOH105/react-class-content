import React, { useState } from 'react'

export default function DateTest() {
  let [selectedDate, setSelectedDate] = useState('')

  return (
    <div>
      <h2>DateTest</h2>

      <input
        type="date"
        onChange={(e) => {
          setSelectedDate(e.target.value)
        }}
      />

      <h3>선택한 날짜: {selectedDate}</h3>
    </div>
  )
}
