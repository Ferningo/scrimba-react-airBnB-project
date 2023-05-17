import catImage from '../assets/cats/mr-whiskerson.png'
import phoneIcon from '../assets/cats/phone-icon.png'
import mailIcon from '../assets/cats/mail-icon.png'

export default function Contact(){
    return(
        <div className='contacts'>
            <div className="contact-card">
            <img src={catImage}/>
            <h3>Mr. Whiskerson</h3>
            <div className="info-group">
                <img src={phoneIcon}/>
                <p>(212) 555-1234</p>
            </div>
            <div className="info-group">
                <img src={mailIcon} />
                <p>mr.whiskaz@catnap.meow</p>
            </div>
        </div>
    </div>
    )
}

