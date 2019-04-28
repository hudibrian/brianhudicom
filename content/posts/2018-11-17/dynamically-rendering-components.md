---
title: "Dynamically Rendering React Components with Array.Map"
category: "React"
date: "2018-11-17"
slug: "dynamically-rendering-components-with-react"
author: "hudi"
cover: "../images/blog/dynamic-components.jpg"
tags:
  - javascript
  - react
  - array
---

If you have run in to a situation where you need to dynamically render a component for each item in a list of items, you have no idea where to start, and don't know what `Array.map()` does, keep reading.

If you understand `Array.map()` skip to the [Applying this concept to react section](#Applying-this-concept-to-react)

### What is array.map, and how do I use it?

Array.map calls the provided function, on every element in the array, and creates a new array of the subsequent results of each call.

For example:

```javascript
const nums = [1, 2, 3, 4, 5];
const newNums = nums.map(num => num + 1);
console.log(newNums); // [2,3,4,5,6]
```

We start with an array of numbers (nums), and then we define a new array of numbers (newNums) that is equal to the result of calling `.map()` on `nums`. In the `.map` function we pass it a function that returns the current number being iterated, plus one. And as you can see, if you run this code, it will output an array of `[2, 3, 4, 5, 6]` to the console.

If the syntax of the .map() in the code above is unfamiliar to you, check out my blog post on [Arrow Functions](https://www.brianhudi.com/js-snack-1)

### Applying this concept to react

<a id="Applying-this-concept-to-react"/>
Let's say you want to dynamically render your social media icons in your react application. So you create a `SocialIcon` component that recognizes the URL it is passed as a prop and renders the correct icon for that platform. You also have an array of URL's to pass to that component that contains all of your social media links. Now you can call `.map()` on that array, and return a unique component for each item (as shown in the example below).

```jsx
const urls = [
  "https://github.com/hudibrian",
  "https://facebook.com/bhudi",
  "https://twitter.com/brianhudi"
];

return (
  <div className="social-media-icons">
    {urls.map(url => (
      <SocialIcon
        key={url} // dynamic elements need a unique key
        className="social-media-icon"
        url={url}
        color={color}
        style={{ height: null, width: null }}
      />
    ))}
  </div>
);
```

Pretty easy, right?

Take note, that you should always have a unique key on dynamic elements in react. In this example we are assigning a key of the current url for each of the dynamic elements. If you don't do this, react doesn't have a way to track those dynamic elements and it will cause unnecessary rerenders.

If you have any questions, please reach out in the comments below, at any of my socials, or at my email address.

Cheers!
