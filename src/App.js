import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/header.js';
import About from './components/about.js';
import Projects from './components/projects.js';
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

  constructor(props){
    super(props);
  }

  componentDidMount(){

    console.log("componentDidMount");
    this.fetchData();

  }

  fetchData(){

    fetch('https://api.github.com/users/hkmr/repos')
    .then(response => response.json())
    .then(parsedJSON => console.log(parsedJSON.results))
    .catch(error => console.log('Parsed Error', error))

  }


  render() {
    return (
      <div class="container-fluid">
        
        <Header/>
        <About name="Harsh Kumar" desc="EAT . CODE . SLEEP . REPEAT"/>
        <hr/>
        <Projects/>
        <hr/>
        <Contact/>
        <hr/>
        <Footer/>
      </div>
    );
  }
}

export default App;
