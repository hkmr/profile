import React, { Component } from 'react';

// pulgin import
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// components import
import Header from './components/navbar.js';
import About from './components/about.js';
import Achievement from './components/achievement.js';
import Projects from './components/projects.js';
import Skills from './components/skills.js';
import Contact from './components/contact.js';
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
      isLoading: true,
      achievements : [],
      projects : [],
      skills : [],
      socialLinks : [],
      author : null,
      quote : null,
    }

  }


  componentWillMount() {

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
      let count =1;

      for(let achieve in achievements){
        if(count == 4)
          break;
        else
          count++;
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
        achievements : newState,
        isLoading : false,
      })
    });

  }

  getSocialLinks(){

    const socialLinkRef = firebase.database().ref('socialLinks');
    socialLinkRef.on('value', (snapshot) => {
      let socialLinks = snapshot.val();
      let newState = [];
      
      for(let s in socialLinks){
        newState.push({
          id : s,
          platform : socialLinks[s].platform,
          icon : socialLinks[s].icon,
          link : socialLinks[s].link
        });
      }

      this.setState({
        socialLinks : newState
      });

    });

  }

  getProjectsData(){

    const projectRef = firebase.database().ref('projects');
    projectRef.on('value', snapshot => {

      let projects = snapshot.val();
      let newState = [];
      let count=1;

      for(let p in projects){
        if(count == 4)
          break;
        else 
          count++;
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
          level : skills[s].level,
          icon : skills[s].icon
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


showLoading(){

  return(
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );

}

  getHomeScreen(){

    return(
      <>
        
        <Header/>
        <About name={this.state.author} quote={this.state.quote} />
        <Achievement list={this.state.achievements} id="achievement"/>
        <Projects list={this.state.projects} id="projects" />
        <Skills list={this.state.skills} id="skills" />
        <Contact socialLinks={this.state.socialLinks} id="contact" />
        
      </>
    );
  }

  render() {
    return (
      this.state.isLoading ? this.showLoading() : this.getHomeScreen()
    );
  }
}

export default App;