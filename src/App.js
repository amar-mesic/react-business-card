
import './App.css';
import 'normalize.css'
import Main from './components/Main';
import NavBar from './components/NavBar';
import BusinessCard from './components/BusinessCard';
import React from 'react';

export default function App() {


  const [darkMode, setDarkMode] = React.useState(true)

  const toggleMode = () => setDarkMode(prev => !prev)


  return(
    <div className='App'>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleMode}/>
      <Main darkMode={darkMode}/>
      <BusinessCard />
    </div>
  )
  
}
