import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function Edit() {
  const navigate = useNavigate();  // useNavigate
  const [searchParams, setSearchParams] = useSearchParams();  // Query String

  const id = searchParams.get('id');
  console.log("id:", id);

  const mode = searchParams.get('mode');
  console.log("mode:", mode);

  return (
    <div>
      <h1>Edit</h1>
      <p>일기 수정 페이지</p>
      <button onClick={() => setSearchParams({who: 'winter'})}>QS 바꾸기</button>
      <button onClick={() => {
        navigate('/home');
      }}>Home</button>
      <button onClick={() => {
        navigate(-1);
      }}>뒤로가기</button>
    </div>
  )
}
