/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="about-post">
        <section className="post-content">
          <h2>About</h2>
          My name is Brian Hudi, and I am a cloud developer for Amazon Web
          Services. I also work on web development projects that I find
          interesting or challenging.
          <br />
          Please <a href="/contact">contact me</a> if you are interested in
          working on a project together, or if you have any questions
        </section>
      </div>
    );
  }
}

export default About;
