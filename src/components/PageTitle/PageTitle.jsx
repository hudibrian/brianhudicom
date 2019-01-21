import React from 'react';
import './PageTitle.css';

class PageTitle extends React.Component {
  render() {
    const { text, color } = this.props;
    if (text) {
      return (
        <h1 style={{ color }} className="page-title">
          {text}
        </h1>
      );
    }
    return null;
  }
}

export default PageTitle;
