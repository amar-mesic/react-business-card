import logo from "../res/logo.svg"
import '../styles/nav.css'

export default function NavBar(props) {
    return(
        <nav className={`nav-bar ${props.darkMode ? "dark" : ''}`}>
            <img src={logo} className='logo' alt="logo" />
            <h1>ReactFacts</h1>
            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
            {/* <h3>React Course - Part 1</h3> */}
        </nav>
    )
}