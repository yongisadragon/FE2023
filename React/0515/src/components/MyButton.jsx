import React from 'react'

MyButton.defaultProps = {
  type: "default",

};

export default function MyButton({text, type, onClick}) {
  const btnType = ['positive', 'negative'].includes(type) ? type : 'default';

  return (
    <button className={['MyButton', `MyButton_${btnType}`].join(" ")} onClick={onClick}>
      {text}
    </button>
  )
}