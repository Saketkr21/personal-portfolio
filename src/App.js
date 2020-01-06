import React, { Component } from 'react';
import Terminal from './terminal/Terminal';
import TileList from './tileList/TileList';
import Navbar from './navbar/Navbar';
import Contact from './contact/Contact';

import AboutData from './about.json';
import ProjectsData from './projects.json';
import ContactData from './contact.json';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      commands : AboutData,
      projects: ProjectsData,
      contact: ContactData
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="header">
          <div className="navbar">
          </div>
          <div className="header__intro">
            <p>
              Hey, I'm <span className="header__name">Ivan Seed</span>. I work as a Consultant at Infinity Works where I help clients solve complex problems.
            </p>
          </div>
          <Terminal commands={this.state.commands} />
          <h2 id="Projects" className="section-header">Projects<span>.</span></h2>
          <TileList tiles={this.state.projects} />
          <h2 id="Contact" className="section-header">Contact<span>.</span></h2>
          <Contact contact={this.state.contact} />
        </div>
      </div>
    );
  }
}

export default App;
