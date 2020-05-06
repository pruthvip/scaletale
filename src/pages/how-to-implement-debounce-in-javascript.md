---
path: implement_debounce
date: 2020-05-06T14:30:04.700Z
title: How to implement debounce in javascript
description: We will be implementing the debounce function in javascript from the scratch.
---
*So implementing debounce in javascript is a very famous js interview question. Mainly because it tests the very basic fundamental concepts of javascript like clousure, scope, this keyword and many more things.*

## So what is denounce and why do we use it.

We usually have event listeners which gets called a lot because a lot of events are generated. But processing all events might not be useful.

For example :- we have a autocomplete, where we enter city name to find details about it.

Hence if a person wants to search for Agra

Events generated are on input keypress

1. A
2. Ag
3. Agra
4. Agra

The above events come in a short burst of time. And only processing the last event should be enough.

Hence a debounce function waits till N secs/milliseconds of inactivity to call a function.

### **So lets start coding**

So lets try to build this debounce from very the scratch.

So lets start by creating a simple function, which takes two inputs

1. *function* - this function which has to be debounced.
2. *waitTime* - time in milliseconds before which the function should be called.

So the way we will use it is :-

 `const debouncedFunc = debounce(foo, 10);`

here foo is the function which has to debounced for 10 milliseconds.

`const debounce = (func, waitTime) => {`

`return function (...args) {`

`func(...args)`

`}`

`}`