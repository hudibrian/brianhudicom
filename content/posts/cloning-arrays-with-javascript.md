---
title: "Cloning an Array with JavaScript"
category: "JavaScript Tips"
date: "2018-11-21"
slug: "cloning-arrays-with-javascript"
author: "hudi"
cover: "./images/blog/stormtrooper.jpg"
tags:
  - javascript
  - tips & tricks
description: ""
---

Earlier today I was perusing a code base that I am working in, and found a function named cloneArray. This function looked something like this:

```javascript
function cloneArray(arr) {
  const newArray = [];
  arr.forEach(element => {
    newArray.push(element);
  });

  return newArray;
}
```

This can be accomplished in a much easier way, and actually reduce this function down to one line of code by using `slice`.

If you call the array method `slice` with `0` as the only argument:

```javascript
const newArray = arr.slice(0);
```

Using this method you can make the footprint of the array actually look like this:

```javascript
function cloneArray(arr) {
  return arr.slice(0);
}
```

Or if you are familiar with [Arrow Functions](https://www.brianhudi.com/js-snack-1) it could look like this:

```javascript
const cloneArray = arr => arr.slice(0);
```

---

If you have any questions, please reach out in the comments below, at any of my socials, or at my email address.

Cheers!
