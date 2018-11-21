import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="about-post">
        <section className="post-content">
          <h2>About</h2>
          My name is Brian Hudi, and I am a software developer for Rightpoint. I
          also do freelance web development on projects that I find interesting
          or challenging.
          <br />
          Please 
          {' '}
          <a href="/contact">contact me</a>
          {' '}
if you are interested in
          working on a project together, or if you have any questions
        </section>
      </div>
    );
  }
}

export default About;
