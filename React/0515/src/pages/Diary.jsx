import React from 'react'
import { useParams } from 'react-router-dom'

export default function Diary() {
  const { id } = useParams(); // Path Variable
  console.log(id);

  return (
    <div>
      <h1>Diary</h1>
      <p>일기 상세 페이지</p>
    </div>
  )
}
