import Card from "./components/Card"
import Contact from "./components/Contact"
import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"

import mrWhiskeronImg from './assets/cats/mr-whiskerson.png'
import fluffykins from './assets/cats/fluffykins.png'
import felix from './assets/cats/felix.png'
import pumpkin from './assets/cats/pumpkin.png'





function App() {
  return (
    <>
      <NavBar />
      <div className="contact-container">
        <Contact 
        img={mrWhiskeronImg} 
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
        />
        <Contact 
        img={fluffykins}
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
        />
        <Contact 
        img={felix} 
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
        />
        <Contact 
        img={pumpkin}
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
        />
      </div>
    </>
  )
}

export default App
