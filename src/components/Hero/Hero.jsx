import './Hero.css'
import backdrop from "../../assets/backdrop.jpeg"
import { Backdrop } from './Backdrop.jsx'
import { GradientLeft } from './GradientLeft'
import { InfoCard } from './InfoCard'


export const Hero = () => {
  return (
    <div className="hero">
      <Backdrop backdrop={backdrop} />
      <GradientLeft />
      <InfoCard />
    </div>
  )
}
