---
title: 'JavaScript Snack #01: Arrow Functions'
category: 'JavaScript Snacks'
date: '2018-11-12'
slug: 'js-snack-01'
author: 'hudi'
cover: ''
tags:
  - javascript
  - snack
---

# Intro

This is the first installment of what is going to be an ongoing series. We will cover small, digestible JavaScript problems or concepts that take just a few minutes to go through.

# Arrow Functions

If you are new to JavaScript you may or may not have heard of arrow functions, but chances are if you have used any recent libraries or frameworks you have seen something like this:

`gist:hudibrian/e5a5f9d337ecbe1cb74a94441ab689e6`

What you see in the three examples above are called arrow functions, and they are a feature that was added in ES6.

## Differences between Arrow functions and standard functions

Arrow functions can be very useful because of their concise syntax and implicit returns, but you should also know that they are slightly different than a normal function declaration:

1. They do not have their own `this`. Instead when using the `this` keyword inside of an arrow function, it will use the standard variable lookup rules. Which means it will go find context for `this` in its enclosing scope.
2. They do not bind arguments. This means you do not have access to an arguments array. So if you are going to create an arrow function that takes in a dynamic set of parameters you will have to use rest parameters.
3. Arrow functions cannot be used as constructors.

## Why use Arrow Functions?

At first arrow functions seemed weird. The syntax didn't seem straightforward, and they were different from what I was used to in other languages. After using them for a couple days, and seeing them all over modern JavaScript, I found that they offer you the opportunity to shorten your code in creative but logical ways:

1.  Implicit returns allow you to bypass the creation of a function block for a single return line, and just place your return logic directly after your arrow. This allows you to take functions that would normally take up ~3 lines of code for 1 line of logic in a return statement, and reduce them down to one line of code:

`gist:hudibrian/4ef0c507acc514cbb03255ce5c5cf990`

2.  Anonymous and inline functions become more concise, and in my opinion, easier to quickly glance at and digest:

`gist:hudibrian/4e14fdb5cffdd893e53a565e658d41da`

Overall, I think that arrow functions are a great way to make your code more concise and easier to digest.

Support for arrow functions is pretty solid unless you are IE11 (https://caniuse.com/#feat=arrow-functions), in which case you can use babel to transpile your code.

Happy coding!
