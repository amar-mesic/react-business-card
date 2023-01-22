import '../styles/main.css'

export default function Main(props) {
    return(
        <section className={`main ${props.darkMode ? "dark" : 'light'}`}>
            <h1>Fun Facts About React</h1>
            <ul className='blue-bullets'>
                <li>First released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Meta</li>
            </ul>
        </section>
    )
}


