import React from 'react'
import '../styles/button.scss';
function Button({text}) {
  return (
    <div className="button-container">
      <a href="#">{text}</a>
    </div>
  )
}

export default Button
