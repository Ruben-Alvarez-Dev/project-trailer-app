import './Backdrop.css'
import React from 'react'

export const Backdrop = ({backdrop}) => {
  return (
    
    <div className="backdrop-image">
      <img src={backdrop} />
    </div>
  )
}
