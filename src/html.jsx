/* eslint import/no-unresolved:"off" */
/* eslint import/extensions:"off" */
/* eslint global-require:"off" */
import React from 'react';
import favicon from './favicon.png';

export default class HTML extends React.Component {
  render() {
    const { headComponents, body, postBodyComponents } = this.props;

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          {/* Mobile Meta */}
          <meta name="HandheldFriendly" content="True" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta property="og:site_name" content="BH Blog" />
          <meta property="og:title" content="Brian Hudi's Blog" />
          <meta property="og:image" content="../logos/bhog.png" />
          <meta property="og:type" content="blog" />

          {headComponents}
          <link rel="shortcut icon" href={favicon} />
        </head>
        <body>
          <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
          {postBodyComponents}
        </body>
      </html>
    );
  }
}
