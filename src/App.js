import Navbar from './Components/Navbar/Navbar'
import Intro from './Components/Intro/Intro'
import Service from './Components/Services/Services'
import Experience from './Components/Experience/Experience'
import Works from './Components/Works/Works'
import Portfolio from './Components/Portfolio/Portfolio'
import Testimonial from './Components/Testimonial/Testimonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import './App.css'
import {themeContext} from './Context'
import {useContext} from 'react'


function App() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
 
  return (
    <div className="App"
    style={{background: darkMode ? '#3b4252' : '', color: darkMode ? '#d8dee9' : ''}}
    >
      <Navbar />
      <Intro />
      <Service />
      <Experience/>
      <Works/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
