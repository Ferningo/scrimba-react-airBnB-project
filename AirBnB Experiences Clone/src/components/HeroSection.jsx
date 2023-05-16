import photoGrid from '../assets/photo-grid.png'

function HeroSection(){
    return(
        <div className='hero-section-container'>
            <img className='photo-grid' src={photoGrid} alt="" />
            <h1 className='hero-header'>Online Experiences</h1>
            <p className='hero-description'>Join unique interactive activities led by 
                one-of-a-kind hosts-all without leaving home.</p>
        </div>
    )
}

export default HeroSection