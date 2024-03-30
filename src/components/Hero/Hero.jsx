import './Hero.css'
import poster from "../../assets/poster.jpg"
import backdrop from "../../assets/backdrop.jpeg"
import { GradientLeft } from './GradientLeft'
import { InfoCard } from './InfoCard'
import { Backdrop } from './Backdrop.jsx'


import React from 'react'
import { Info } from '@mui/icons-material'


export const Hero = () => {
  return (
    <div className="hero">
      <Backdrop backdrop={backdrop} />
      <GradientLeft />
      <InfoCard />
    </div>
  )
}
