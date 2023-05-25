import Card from "./components/Card"
import Contact from "./components/Contact"
import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"

import data from "./data"



const createCardArray = (data) => {
  const cards = data.map((item) => {
    return(
      <Card
        key = {item.id}
        {...item}
      Card/>
      )
  })
  return cards
}


function App() {
  const cards = createCardArray(data)

  return (
    <>
      <NavBar />
      <HeroSection />
      <div className="contact-container">
        {cards}
      </div>
    </>
  )
}

export default App
