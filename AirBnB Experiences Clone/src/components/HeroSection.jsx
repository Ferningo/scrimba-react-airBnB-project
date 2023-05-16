import photoGrid from '../assets/photo-grid.png'

function HeroSection(){
    return(
        <div className='hero-section-container'>
            <img className='photo-grid' src={photoGrid} alt="" />
            <h1 className='hero-header'>Online Experiences</h1>
            <h3 className='hero-description'>Join unique interactive activities led by 
                one-of-a-king hosts-all without leaving home.</h3>
        </div>
    )
}

export default HeroSection