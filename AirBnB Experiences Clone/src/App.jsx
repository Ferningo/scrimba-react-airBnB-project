import Card from "./components/Card"
import Contact from "./components/Contact"
import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"

import katieImg from "./assets/katie-zaferes.png" 


// - reviewCount (6)
// - country (Whatever you want)
// - title ("Life Lessons with Katie Zaferes")
// - price (136)



function App() {
  return (
    <>
      <NavBar />
      <div className="contact-container">
        <Card
          imagePath={katieImg}
          rating="5.0"
          reviewCount={6}
          country='USA'
          title='Life Lessons with Katie Zaferes'
          price={136}
        />
      </div>
    </>
  )
}

export default App
