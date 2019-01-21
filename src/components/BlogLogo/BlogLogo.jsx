import React, { Component } from 'react';
import { Link } from 'gatsby';
import './BlogLogo.css';

class BlogLogo extends Component {
  render() {
    const { url, title } = this.props;
    return (
      <Link className="blog-logo" to={url || '/'}>
        <h2 className="blog-logo-text">{title}</h2>
      </Link>
    );
  }
}

export default BlogLogo;
