import Card from "./components/Card"
import Contact from "./components/Contact"
import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"

import data from "./data"



const createCardArray = (data) => {
  const cards = data.map((cardInfo) => {
    return(
      <Card
        key = {cardInfo.id}
        img= {cardInfo.coverImg}
        rating = {cardInfo.stats.rating}
        reviewCount = {cardInfo.stats.reviewCount}
        location = {cardInfo.location}
        title = {cardInfo.title}
        price = {cardInfo.price}
        openSpots = {cardInfo.openSpots}
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
      <div className="contact-container">
        {cards}
      </div>
    </>
  )
}

export default App
