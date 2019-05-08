---
title: "Learning JavaScript with Project Euler #3"
category: "Project Euler"
date: "2018-11-18"
slug: "project-euler-3"
author: "hudi"
cover: "./images/blog/calc.jpg"
tags:
  - javascript
  - project euler
description: "The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143"
---

### [Project Euler: Problem #3](https://projecteuler.net/problem=3)

_The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?_

Here is my solution:

```javascript
/**
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */

let number = 600851475143;
let factor = 0;

while (number > factor) {
  if (number % factor === 0) {
    number = number / factor;
  }

  factor++;
}

console.log(factor);
```

---

#### What is a prime factor?

_If you already know, [skip to the Explanation section,](#Explanation) otherwise, keep reading._

A prime number is a whole number, greater than 1, that is divisable by only 1 or itself.

Prime Factorization is the act of finding which prime numbers multiple together to make the original number. In our case, the original number is: 600851475143.

[I highly recommend doing some of the practice problems on Khan Academy before you move on, if you don't know how to do prime factorization.](https://www.khanacademy.org/math/pre-algebra/pre-algebra-factors-multiples/pre-algebra-prime-factorization-prealg/e/prime_factorization)

---

## Explanation:

<a id="Explanation"/>

_Firstly, I am using the [code runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner) extension inside of vscode to run my solutions and print the answer in to my terminal. You could paste this code in to a code pen and observe the output in the console._

Step 1: Declare your variables.

- Define the target number, and the factor.

Step 2: Solve the problem.

- Create a while loop that compares the number and the factor.
- Inside of this while loop you will check and see if the number is divisible by the factor.
  - We do this by using the modulus operator, which will return the remainder of diving the second number in to the first.
- If the number is divisible by the factor we will set number equal to the result of dividing itself by the factor, and then increase the factor by 1.

We continue to do this until the factor is greater then the number, at that point, we know we have the largest prime factor of that number.

---

If you have any questions, please reach out in the comments below, at any of my socials, or at my email address.

Cheers!
