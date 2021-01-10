import React from 'react'
import './styles/styles.scss'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Sidebar from './components/Sidebar'
import Netherlands from './images/Netherlands.png';
import London from './images/London.png';
import India from './images/India.png';
import Picture from './images/profile_photo.png';
function App() {
  const aboutLinks = [
    {
      time: 'Feb 2019 - Present',
      location: 'KPMG, Netherlands',
      position:"Software Engineer",
      description: "",
      image: Netherlands
    },
    {
      time: 'Nov 2018 - Jan 2019',
      location: 'Hoxton Analytics, United Kingdom',
      position: "Data Analyst",
      description: "",
      image: London
    },
    {
      time: 'Sept 2017 - Sept 2018',
      location: 'King\'s College London, United Kingdom',
      position: "Master of Science in Advanced Computing at Department of Informatics",
      description: "Thesis: Object Tracking in Videos",
      image: London
    },
    {
      time: 'Jun 2013 - Apr 2017',
      location: 'Gandhi Institute of Technology and Management, India',
      position: 'Bachelor of Technology in Computer Science and Engineering',
      description: " Thesis: Association Rule Mining using Genetic Algorithms",
      image: India
    }
  ]
  return <div className="App">
    <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <div id="page-wrap">
       
      <div
        style={{ width: '100%' }}
      >
        
        <Navbar />

        <img className= "Picture" src={Picture}/>
        Write here
        <a href="#about">Learn More</a>
       <About aboutLinks={aboutLinks}></About>
        <Contact/>
        </div>

    <div
      style={
        {
          
          width: '100vw'
        }
      }
    >
    </div>

    

    </div>

  </div >
}

export default App;