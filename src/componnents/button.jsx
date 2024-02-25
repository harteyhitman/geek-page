import React from 'react'


const Button = ({className, label, onClick}) => {
  return (
    <div>
        <button className={className} onClick={onClick}>{label}</button>
    </div>
  )
}

export default Button