import React from 'react'
import './styles/styles.scss'
import Navbar from './components/Navbar'
import About from './components/About'
import Banner from './components/Banner'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Sidebar from './components/Sidebar'
import Netherlands from './images/Netherlands.png';
import London from './images/London.png';
import India from './images/India.png';

function App() {
  const aboutLinks = [
    {
      time: 'June 2021 - Present',
      location: 'Microsoft, Netherlands',
      position:"Cloud Solution Architect",
      description: "",
      image: Netherlands
    },
    {
      time: 'Feb 2019 - May 2021',
      location: 'KPMG, Netherlands',
      position:"Software Engineer, Technology Consultant",
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
  const projectLinks = [
    {
      title: 'World Development Indicators - Exploratory Data Analyis',
      status:":WIP",
      description: "",
      link: "https://github.com/tbhamidipati/EDA-World-Development-Indicators/blob/main/eda-carbon-emissions-gdp-forest-area.ipynb"
    },
    {
      title: 'Classification of Monkey Species',
      status:"",
      description: "",
      link: "https://github.com/tbhamidipati/Classification-Monkey-Species/blob/main/which-monkey-species-do-i-belong-to-93.ipynb"
    },
    {
      title: 'Housing Trend in London - Exploratory Data Analyis',
      status:"",
      description: "",
      link: "https://github.com/tbhamidipati/EDA-London-Housing-Trend/blob/main/diving-into-the-london-housing-trend.ipynb"
    },
  ]

  return <div className="App">
    <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <div id="page-wrap">
       
      <div
        style={{ width: '100%' }}
      >
       
        <Navbar />
        <Banner/>
        
       <About aboutLinks={aboutLinks}></About>
       <Projects projectLinks={projectLinks}></Projects>
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
