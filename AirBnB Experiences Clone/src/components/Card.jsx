import katieImgae from '../assets/katie-zaferes.png'
import star from '../assets/star.png'

export default function Card(){
    return(
        <div className="card-container">
            <img src={katieImgae} alt="" className='card-image' />
            <div className='stats-container'>
                <img src={star} className='star-logo'/>
                <p className='card-stats'> <span className='rating'>5.0</span> (6)• USA</p>
            </div>
            <p className='card-title'>Life lessons with Katie Zaferes</p>
            <p className='card-price'><span className='price'>From $136</span> / person</p>
        </div>
    )
}