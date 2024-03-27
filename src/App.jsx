import { Gallery } from './components/Gallery'
import { Hero } from './components/Hero'
import './App.css'

export const App = () => {
  
  return (
    <>
      <div className="app">
      <h1>TMDB Trailer App</h1>
        <Hero /> 
        <Gallery />
      </div>
    </>
  )
}

