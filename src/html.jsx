/* eslint import/no-unresolved:"off" */
/* eslint import/extensions:"off" */
/* eslint global-require:"off" */
import React from 'react';
import favicon from './favicon.png';

require('prismjs/themes/prism-dark.css');
require('prismjs/plugins/line-numbers/prism-line-numbers.css');

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
          <meta
            property="og:image"
            content="https://res.cloudinary.com/bshrp/image/upload/c_scale,e_art:refresh,h_200,r_0,w_300/a_0/v1542240782/method-draw-image_22.png"
          />
          <meta property="og:type" content="blog" />

          {/* Styles'n'Scripts */}
          <link
            rel="stylesheet"
            type="text/css"
            href="//fonts.googleapis.com/css?family=Merriweather:300,700,700italic,300italic|Open+Sans:700,400"
          />

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
