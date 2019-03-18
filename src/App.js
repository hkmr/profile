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
import firebase from './firebase.js';

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
    
    this.state = {
      achievements : [],
      projects : [],
      skills : [],
      links : [],
      author : null,
      quote : null
    }

  }

  componentDidMount() {

    this.getAchievementsData();
    this.getSocialLinks();
    this.getProjectsData();
    this.getSkillsData();
    this.getAboutData();

  }

  getAchievementsData(){

    const achievementRef = firebase.database().ref('achievements');
    achievementRef.on('value', (snapshot) => {
      let achievements = snapshot.val();
      let newState = [];

      for(let achieve in achievements){
        newState.push({
          id : achieve,
          title : achievements[achieve].title,
          shortDesc : achievements[achieve].shortDesc,
          description : achievements[achieve].description,
          link : achievements[achieve].link,
          image : achievements[achieve].image
        });
      }

      this.setState({
        achievements : newState
      })
    });

  }

  getSocialLinks(){

    const socialLinkRef = firebase.database().ref('links');
    socialLinkRef.on('value', (snapshot) => {
      let link = snapshot.val();
      let newState = [];
      newState.push({
        id : link,
        facebook : link.facebook,
        twitter : link.twitter,
        instagram : link.instagram,
        github : link.github,
        hackerrank : link.hackerrank,
        hackerearth : link.hackerearth,
        codechef : link.codechef,
        leetcode : link.leetcode,
        medium : link.medium,
        linkedin : link.linkedin
      });

      this.setState({
        links : link
      })

    });

  }

  getProjectsData(){

    const projectRef = firebase.database().ref('projects');
    projectRef.on('value', snapshot => {

      let projects = snapshot.val();
      let newState = [];

      for(let p in projects){
        newState.push({
          id : p,
          name : projects[p].name,
          link : projects[p].link,
          description : projects[p].description,
          shortDesc : projects[p].shortDesc,
          image : projects[p].image,
          owner : {
            name : projects[p].owner.name,
            link : projects[p].owner.link
          }
        });
      }

      this.setState({
        projects : newState
      });

    });

  }

  getSkillsData(){

    const skillsRef = firebase.database().ref('skills');
    skillsRef.on('value', snapshot => {
      let skills = snapshot.val();
      let newState = [];

      for(let s in skills){
        newState.push({
          id : s,
          name : skills[s].name,
          level : skills[s].level
        });
      }
      
      this.setState({
        skills : newState
      });

    });
  }

  getAboutData(){

    const quoteRef = firebase.database().ref('quote');
    quoteRef.on('value',snapshot => {
      let quote = snapshot.val();
      this.setState({
        quote : quote
      });
    });

    const authorRef = firebase.database().ref('author');
    authorRef.on('value',snapshot => {
      let author = snapshot.val();
      this.setState({
        author : author
      });
    });

  }

  render() {
    return (
      <>
        
        <Header/>
        <About name={this.state.author} quote={this.state.quote} />
        <hr/>
        <Achievement list={this.state.achievements} id="achievement"/>
        <hr/>
        <Projects list={this.state.projects} id="projects" />
        <hr/>
        <Skills list={this.state.skills} id="skills" />
        <hr/>
        <Contact links={this.state.links} id="contact" />
        <hr/>
        <Footer/>

      </>
    );
  }
}

export default App;
