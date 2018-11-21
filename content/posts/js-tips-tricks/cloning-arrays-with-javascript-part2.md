---
title: 'Cloning an Array with JavaScript: Part 2'
category: 'JavaScript Tips'
date: '2018-11-22'
slug: 'cloning-arrays-with-javascript-2'
author: 'hudi'
cover: '../images/blog/stormtrooper.jpg'
tags:
  - javascript
  - tips & tricks
---

##### [Cloning an Array with JavaScript: Part 1](https://brianhudi.com/cloning-arrays-with-javascript)

Yesterday, [I wrote a post about cloning arrays](https://brianhudi.com/cloning-arrays-with-javascript), and a piece of code I had found in a code base I was working on. After writing that post, a couple of readers brought some alternative methods, and concerns to my attention. That is what I will cover in this post.

_For context please check out the first post I linked to up above, it is a very quick read. I promise!_

# Other Ways to Clone an Array

---

#### Array.from()

`Array.from()` is an array method that takes in _array-like objects_ or _iterable objects_

- Array-like objects are objects that have a length property and indexed elements. (ex. a string object)
- Iterable objects are objects where you can get its elements. (ex. Map and Set)

To use `Array.from` to clone an array you would just set a variable equal to the result of calling `Array.from()`, like so:

```js
const myArray = [1, 2, 3, 4];
const newArray = Array.from(myArray);
// newArray = [1, 2, 3, 4]
```

<br>

#### Spread Operator

A spread operator (represented by an ellipse infront of an iterable) allows an array or other iterable to be expanded in to multiple arguments or elements.

To use a spread operator to copy a list of elements you would implement it as follows:

```js
const myArray = [1, 2, 3, 4];
const newArray = [...myArray];
// newArray = [1, 2, 3, 4]
```

---

# Shallow Copy vs Deep Copy

I need to mention that ALL of the ways I have shown to clone an array, in this post and the [first one](https://brianhudi.com/cloning-arrays-with-javascript), have been methods used to make shallow copies.

- A **shallow copy** is a copy that creates a new object with the values of the object being copied. Any object references or dynamically allocated memory will not be copied.
- A **deep copy** copies all of the fields, and dynamically allocated memory that is referenced by the fields.

## Ways to perform a deep copy

---

#### JSON.parse(JSON.stringify(object))

The best way to make a deep copy of an object that doesn't have any methods/functions in it, without using a library, is to use the JSON object to turn the object in to a JSON string, and then parse it back in to an object. Like so:

```js
let myObj = {
  id: 1,
  name: 'brian hudi',
  car: {
    make: 'chevy'
  }
};

let newObject = JSON.parse(JSON.stringify(myObj));
// newObject = {
//   id: 1,
//   name: 'brian hudi',
//   car: {
//     make: 'chevy',
//   },
// }
```

What happens to `newObject` if I change a property on `myObj`?

```js
myObj.car.make = 'ford';
console.log(myObj);
// {
//   id: 1,
//   name: 'brian hudi',
//   car: {
//     make: 'ford',
//   },
// };

console.log(newObj);
// {
//   id: 1,
//   name: 'brian hudi',
//   car: {
//     make: 'chevy',
//   },
// };
```

As you can see from the output the new object we created stays in tact with the original data it was supplied. If this object was a shallow copy, then the `make` on the `newObj` would have been updated to `'ford'`.

<br>

#### Object.assign()

`Object.assign()` should be used when you are trying to copy an object that has methods/functions attached to it. Because `JSON.parse(JSON.stringify(object))` will not copy methods. This is shown in the example below:

```js
let myObj = {
  id: 1,
  name: 'brian hudi',
  func: function getCar() {
    return 'chevy';
  }
};

let jsonMethod = JSON.parse(JSON.stringify(myObj));
let objAssignMethod = Object.assign({}, myObj);

console.log(jsonMethod);
// newObject = {
//   id: 1,
//   name: 'brian hudi',
// }

console.log(objAssignMethod);
// {
//   id: 1,
//   name: 'brian hudi',
//   func: function getCar() {
//     return 'chevy'
//   }
// };
```

As you can see the `Object.assign` method made a copy of the method/function, and the JSON method did not.

It is worth noting that with the `Object.assign()` method will only shallow copy the values nested inside of objects nested down three layers. Example:

```js
let myObj = {
  id: 1,
  name: 'brian hudi',
  a: {
    b: {
      c: 12
    }
  }
};

let newObj = Object.assign({}, myObj);

newObj.a.b.c = 6;



console.log(newObj);
// {
//   id: 1,
//   name: 'brian hudi',
//   a: {
//     b: {
//       c: 6
//     }
//   }
// };

console.log(myObj):
// {
//   id: 1,
//   name: 'brian hudi',
//   a: {
//     b: {
//       c: 6
//     }
//   }
// };
```

---

Thank you to the following reddit users for their suggestions / input:
**[/u/adenzerda](https://www.reddit.com/user/adenzerda)**, **[/u/davidmdm](https://www.reddit.com/user/davidmdm)**, **[/u/pookage](https://www.reddit.com/user/pookage)**

---

If you have any questions, please reach out in the comments below, at any of my socials, or at my email address.

Cheers!
