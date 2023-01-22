import '../styles/card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import Anchor from './Anchor'

export default function BusinessCard() {
    return(
        <div className='business-card'>
            <img src='https://avatars.githubusercontent.com/u/59733729?v=4' alt='me'/>
            <div className='align-mid'>
                <h1>Amar Mešić</h1>
                <p><span style={{color: '#F3BF99'}}>Frontend Developer</span></p>
                <br></br>
                <a href='https://amar.me' target='_blank' rel="noreferrer">amar.me</a>
                <div className='contact-info'>
                    <button role="button" id='email-button'>
                        <div>
                            <FontAwesomeIcon className='button-icon' icon={icon({ name:'envelope', style:'solid'})} />
                            <span>Email</span>
                        </div>
                    </button>
                    <a role="button" id='linkedin-button' href='https://www.linkedin.com/in/amar-mesic/' target='_blank' rel="noreferrer">
                        <div>
                            <FontAwesomeIcon className='button-icon' icon={brands('linkedin')} />
                            <span>LinkedIn</span>
                        </div>
                    </a>
                </div>
            </div>

            

            <section className='about'>
                <h2>About Me</h2>
                <p>A motivated, young Computer Science & Engineering student at TU Delft. 
                    I am a big fan of mathematics, learning new algorithms, and efficiency.
                    My knowledge and love for world cultures is extensive, having lived in three different countries, and having at least basic knowledge of seven different (non-programming) languages.</p>
            </section>

            <section className='interests'>
                <h2>Interests</h2>
                <p>I have a passion for front-end web development and visualizing data. 
                    Not related to Computer Science, I love studying languages and their origins.</p>
            </section>

            <footer>
                <ul id='social-info' style={{'list-style': 'none'}}>
                    <li><Anchor href='https://www.facebook.com/amar.mesic.100'><FontAwesomeIcon icon={brands('facebook')} /></Anchor></li>
                    <li><Anchor href='#'><FontAwesomeIcon icon={brands('instagram')} /></Anchor></li>
                    <li><Anchor href='https://github.com/amar-mesic'><FontAwesomeIcon icon={brands('github')} /></Anchor></li>
                    <li><Anchor href='https://stackoverflow.com/users/14022782/amar-mesic'><FontAwesomeIcon icon={brands('stack-overflow')} /></Anchor></li>
                </ul>
            </footer>

        </div>
    )
}