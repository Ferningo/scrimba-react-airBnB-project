import catImage from '../assets/cats/mr-whiskerson.png'
import phoneIcon from '../assets/cats/phone-icon.png'
import mailIcon from '../assets/cats/mail-icon.png'

export default function Contact(props){
    return(
        <div className='contacts'>
            <div className="contact-card">
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={phoneIcon}/>
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={mailIcon} />
                <p>{props.email}</p>
            </div>
        </div>
    </div>
    )
}

