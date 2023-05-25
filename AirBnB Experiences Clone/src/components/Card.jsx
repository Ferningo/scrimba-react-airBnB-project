
import star from '../assets/star.png'

export default function Card(props){
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return(
        <div className="card-container">
            { badgeText === "SOLD OUT" && <div className='badge'>{badgeText}</div>}
            { badgeText === "ONLINE" && <div className='badge'>{badgeText}</div>}
            <img src={props.img} alt="" className='card-image' />
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