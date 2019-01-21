/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';
import config from '../../../data/SiteConfig';

import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <section className="post-content">
          <h2>Contact</h2>
          Contact me at <a href="mailto:bshudi@gmail.com">
            bshudi@gmail.com
          </a>{' '}
          or any of my social media outlets.
          <SocialMediaIcons urls={config.siteSocialUrls} color="currentColor" />
        </section>
      </div>
    );
  }
}

export default Contact;
