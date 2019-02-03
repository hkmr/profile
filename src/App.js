import React, { Component } from 'react';
// pulgin import
import 'bootstrap/dist/css/bootstrap.css';

// components import
import Header from './components/header.js';
import About from './components/about.js';
import Achievement from './components/achievement.js';
import Projects from './components/projects.js';
import Skills from './components/skills.js';
import Contact from './components/contact.js';
import Footer from './components/footer.js';
/*
  Navigation
  About
  Projects
  Contact
  Footer
*/

class App extends Component {

  render() {
    return (
      <>
        
        <Header/>
        <About name="Harsh Kumar" desc="EAT . CODE . SLEEP . REPEAT"/>
        <hr/>
        <Achievement id="achievement"/>
        <hr/>
        <Projects id="projects" />
        <hr/>
        <Skills id="skills" />
        <hr/>
        <Contact id="contact" />
        <hr/>
        <Footer/>

      </>
    );
  }
}

export default App;
