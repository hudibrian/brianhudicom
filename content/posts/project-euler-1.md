---
title: "Learning JavaScript with Project Euler"
category: "Project Euler"
date: "2018-11-14"
slug: "project-euler-1"
author: "hudi"
cover: "./images/blog/bookcase.jpg"
tags:
  - javascript
  - project euler
description: ""
---

Earlier this year I had decided that I was going to go down the route of solving at least 1 [Project Euler](https://projecteuler.net/) problem a day for the rest of 2018. I failed miserably. If you look at the github repo I made for it, you will see I only have 3 solutions (https://github.com/hudibrian/Project-Euler-Solutions).

I've decided to start again, but this time I will post a blog post every day with my solution for that day.

# Problem #1

_If we list all the natural numbers below 10 that are
multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these
multiples is 23. Find the sum of all the multiples of 3 or 5
below 1000._

Here is my solution:

```javascript
/**
 * If we list all the natural numbers below 10 that are multiples of 3 or 5,
 * we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

let n = 1000;
let multiples = [];

while (n--) {
  if (n % 3 === 0 || n % 5 === 0) {
    multiples.push(n);
  }
}

const value = multiples.reduce((accum, curVal) => accum + curVal);

console.log(value);
```

---

## Eplanation:

_Firstly, I am using the [code runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner) extension inside of vscode to run my solutions and print the answer in to my terminal. You could paste this code in to a code pen and observe the output in the console._

Step 1: Declare your variables.

- I decide to set n equal to 1000 because I am going to iterate down in my solution. You could set it to 0 and iterate up.
- I create an empty array to store all of the multiples of 3 and 5 in.

Step 2: Iterate and find the multiples

- I decide to use a while loop and iterate down from 1000. You could iterate up to 1000, or even switch your loop out to a for loop and do something like this:

```javascript
for (let x = 0; x <= 1000; x++) {
  if (x % 3 === 0 || x % 5 === 0) {
    multiples.push(x);
  }
}
```

- Next, you need to find the sum of all of the multiples you found up above. I did this with [Array.prototype.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce), which lets you define a function that will perform an action on each item in the array, resulting in a single output. So, in this case, I have created an arrow function (if you are not familiar with arrow functions, check out my [previous post](https://www.brianhudi.com/js-snack-1)) that takes in the parameters Array.prototype.reduce provides. Those parameters consist of an accumulator (accum) (which starts at 0), that is always equal to the return value of the last iteration, and the current value (currVal) which is the value of the current item the iterator is on. I am returning the value of the accumulator + the current value for each iteration.
- Lastly, I am outputting the value to the console.

That's it! I won't post the solution to the problem, so you at least have to run the code to figure it out.

If you have any questions, please reach out in the comments below, at any of my socials, or at my email address.

Cheers!
