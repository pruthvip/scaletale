---
title: How to center align things using css
date: "2019-01-01T22:40:32.169Z"
---

After giving a lot of frontend interviews and taking a few. I feel frontend interviews are the easiest to give and the hardest to take.

 Easiest to give, because there are very less questions which can be asked. And most of the them are standard. For e.g, explain closure, run to completion and questions around that. How `this` works. questions around prototype.

 And its Hardest to take because, based on such small problem set, it becomes difficult to judge whether a candidate is proficient in HTML, CSS and javascript.

 ---

And when it comes to css, the problem set decreases even further.  But the most asked css question is 

*Center align a square inside another square, where both squares can be of variable length.*

I would discuss one way of solving the above problem, which will help us to understand the *position* and *translate* attributes in css.

## Center aligning and and why its difficult

*Center align = Horizontal center align + Vertical center align*

Horizontal center aligning is easy, but vertical center aligning becomes tricky.

For *horizontal center aligning*, you can use

```css
margin: 0 auto;
// or
text-align: center;
```

![Image](horizontal-center.png "Horizontal center alignment")

*Code for the above*

```html{2,6,7}
<div class="big-square">
  <div class="small-square m-auto">
  </div>
</div>

<div class="big-square text-center">
  <div class="small-square display-ib">
  </div>
</div>
```

```css
.big-square {
  width: 100px;
  height: 100px;
  background-color: red;
  margin-bottom: 30px;
}

.text-center {
  text-align: center;
}

.small-square {
  width: 50px;
  height: 50px;
  background-color: blue;
}

.m-auto {
  margin: 0 auto;
}

.display-ib {
  display: inline-block;
}
```

https://codepen.io/pruthvip/pen/XoZMrg?editors=1100

---
### Vertical center alignment

```css
vertical-align: middle;
```

The above code can middle align *table-cells* and *inline-block* elements. But to achieve this you need to make some changes in the structure of your html code and css, which can be cumbersome.

---

Hence one of the easiest way to center align things is to use the *position* attribute.

## Center aligning using position attribute
There are 4 values for the position attribute
* **static**

By default all elements are static. Nothing special about it. Attributes like *top*, *left*, *z-index* have no effect on this.
* **relative**

Similar to static. Element will be positioned in the normal position according to the html structure. But *top*, *left* etc gets applied on these element. And the reference will be the **original position**.
* **absolute**

Similar to relative, just that the reference from where *top*, *left* will be calculated , will be the **nearest *non-static* parent**(can be *relative*, *absolute* or any other non-static property)

* **fixed**
* **sticky**

You won't be needing the above 2 for center aligning, but you can read more about them [here](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

---

Hence using the above definition. The easiest way to center align would be to.

```html
  <div class="parent">
    <div class="child">
    </div>
  </div>
```

```css{2,9,10,11}
.parent {
  position: relative;
  width: 100px;
  height: 100px;
}

.child {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
}
```







