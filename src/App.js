import React from 'react'
import './styles/styles.scss'
import Navbar from './components/Navbar'
import About from './components/About'
import Sidebar from './components/Sidebar'

function App() {
  const aboutLinks = [
    {
      time: '',
      location: '',
      description: ""
    },
    {
      time: '',
      location: '',
      description: ""
    }
  ]
  return <div className="App">
    <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <div id="page-wrap">

      <div
        style={{ width: '100%' }}
      >
        <Navbar />
       <About aboutLinks={aboutLinks}></About>

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
