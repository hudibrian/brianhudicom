---
title: "Let's Build It: Gatsby Powered Ecommerce Site, Part 1"
category: 'Tutorial'
date: '2018-11-21'
slug: 'gatsby-ecommerce-1'
author: 'hudi'
cover: '../images/blog/stairs.jpg'
tags:
  - javascript
  - gatsbyjs
  - react
  - tutorial
---

If this is your first time seeing this tutorial you might want to start with [Part 0](https://brianhudi.com/gatsby-ecommerce-0)

## Additional Setup

In this section we will go through the set up for a few additional items in the project.

First we will set up ESLint. This is a preference, and you don't need to add this if you don't want to, but I personally like having ESLint in my projects and running prettier on save.

1. Run the following command to install the airbnb eslint config and its dependencies: `npx install-peerdeps --dev eslint-config-airbnb`.
   - if you are using a version of node that doesn't support npx, refer to the setup steps on [this page](https://www.npmjs.com/package/eslint-config-airbnb).
2. Install the eslint prettier config: `npm i --save-dev eslint-config-prettier`.
3. Create a .eslintrc file in the root of your project. I use the following config, feel free to modify it as you wish:

```json
{
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "modules": true,
      "experimentalObjectRestSpread": true
    }
  },
  "extends": ["airbnb", "prettier"],
  "plugins": ["react", "jsx-a11y", "import"],
  "rules": {
    "react/prefer-stateless-function": "on",
    "react/prop-types": "off",
    "react/no-danger": "off"
  },
  "settings": {
    "import/core-modules": []
  },
  "env": {
    "browser": true
  }
}
```

---

Next we will install [emotion](https://emotion.sh/) as it is the CSS-in-JS library that we will be using in this project.

1. Run the following command to install emotion, and it's required plugins for gatsby: `npm install --save gatsby-plugin-emotion emotion emotion-server react-emotion`
2. Next install the babel plugin: `npm install --save-dev babel-plugin-emotion`
   - This will allows us to create source maps and minify our emotion css later.
3. Next we need to modify our `gatsby-config.js` so that it knows that we added the gatsby emotion plugin. When you open your gatsby config, it should look like this:

```js
module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png' // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
```

Now add the following plugin code at the end of the `plugins` array:

```js
{
  resolve: `gatsby-plugin-emotion`,
  options: {
    // Accepts all options defined by `babel-plugin-emotion` plugin.
  },
},
```

We will end up adding more plugins and packages in the future, but this is all we need for the time being.

# Creating new pages

We will start off this part of the series by jumping right in to the fold, and creating new pages and routes for the application.

---

If you have any questions, please reach out in the comments below, at any of my socials, or at my email address.

Cheers!
