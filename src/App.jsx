import './App.css'
import { Hero } from './components/Hero/Hero'
import { Gallery } from './components/Gallery/Gallery'


export const App = () => { 
  return (
    <div className="app">
      <Hero />
      <Gallery />
    </div>
  )
}