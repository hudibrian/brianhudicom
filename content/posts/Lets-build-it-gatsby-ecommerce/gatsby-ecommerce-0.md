---
title: "Let's Build It: Gatsby Powered Ecommerce Site, Part 0"
category: 'Tutorial'
date: '2018-11-21'
slug: 'gatsby-ecommerce-0'
author: 'hudi'
cover: '../images/blog/stairs.jpg'
tags:
  - javascript
  - gatsbyjs
  - react
  - tutorial
---

_[Gatsby](https://www.gatsbyjs.org) is a static site generator that is powered by react, and graphql. It allows you to build incredibly fast website, and comes optimized for mobile devices and slow internet connections out of the box. The website you are reading this on is built with gatsby._

In this series we will be building an e-commerce site powered by gatsby. Out of the box our gatsby site will be a progressive web app, with very good SEO, that is very fast.

Let's get started with the gatsby setup and installation. I will assume that you have node installed and have a basic understanding of npm and javascript in this series.

### Set up your environment

First we must install Gatsby's command line tool, so we will run the following command:

`npm i --global gatsby-cli`

Next, we will use that cli tool to create our website. Navigate to the directory where you would like your project to live, and run the following command:

`gatsby new gatsby-ecommerce`

This command will also run a yarn/npm install in the project so that all of the node modules are already installed. You can run the project by navigating in to the project in your terminal, and running:

`npm start` or `yarn start` if you are using yarn.

Once the project is done starting up, you should see something like this in your terminal:

![a screnshot of a terminal window with a url to localhost:8000](../images/gatsby-ecommerce/gatsby-ecommerce-0-0.png)

Navigate to the first URL to view the website, and the second URL if you want to test out graphQL. I will discuss graphQL in a later post.

Once you have navigated to the URL in your browser you should see the gatsby default webpage. In November of 2018, it has an astronaut floating and holding a food platter with the gatsby logo on it.

Congrats! You are running your first gatsby site! I highly recommend going in and playing around with some of the components and config items, maybe create a new page and see how gatsby handles it. It comes out of the box with hot module reloading, so you should be able to make some changes and view them in your browser almost instantly.

Next time: Creating New Pages and a Navigation Component!

---

If you have any questions, please reach out in the comments below, at any of my socials, or at my email address.

Cheers!
