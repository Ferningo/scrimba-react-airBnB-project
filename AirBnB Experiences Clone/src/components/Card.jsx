import katieImgae from '../assets/katie-zaferes.png'
import star from '../assets/star.png'

export default function Card(props){
    return(
        <div className="card-container">
            <img src={props.imagePath} alt="" className='card-image' />
            <div className='stats-container'>
                <img src={star} className='star-logo'/>
                <p className='card-stats'> <span className='rating'>{props.rating}</span>
                 ({props.reviewCount})• {props.location}</p>
            </div>
            <p className='card-title'>{props.title}</p>
            <p className='card-price'><span className='price'>From ${props.price}</span> / person</p>
        </div>
    )
}