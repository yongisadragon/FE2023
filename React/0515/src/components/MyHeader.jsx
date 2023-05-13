import React from 'react'

export default function MyHeader({headText, leftChild, rightChild}) {
  return (
    <header>
      <div className='head_btn_left'>
        {leftChild}
      </div>
      <div className='head_text'>
        {headText}
      </div>
      <div className='head_btn_right'>
        {rightChild}
      </div>
    </header>
  )
}
