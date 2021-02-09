---
title: "CSS: Working with Relative Units, Converting Pixel to REM"
date: "2021-02-09"
---

When we are creating a responsive web application we can take out a lot of code just by doing this simple change, changing the px sizes to rem, so, lets do it, its really easy!

### Changing px to rem.

First we need to change the root font size in the HTML selector, we need to change it to 10px, its 16 pixels by default.

```
html { 
  font-size: 10px;
}
```
Now we know that a rem its going to be 10px, ***1 rem is the value of our root font-size***, now its really easy to change the pixel values to rem, all we have to do is to divide the pixel measure we need to change by 10 and thats it, we have the pixel values now in rem. 

Its really important to notice that we change the default value of 16 px to 10 pixels on the html font size in order to make our life easier, you could perfectly work with the original 16px measure, but its way easier to divide by 10px than divide by 16px, we change the default font size in order to make our live easier.

### Changing to % our root font size

Now that we have all our values in rem, you shoulld notice that the only pixel vallue left is the font-size inside our html element, our root font-size, and even thou its working, its considered a bad pratice leaving that value hardcoded to pixel, and thats because if someone wants to change the font size on his browser, that will not work cause it will be then changed back to 10px, to solve it we need to pass that value to percentage.

Its really easy to change that pixel value to percentage, just remember the original root font-size, it was 16px so the only thing we need to do is ***divide 10px by 16px***, the result is ***0.625*** now we have to ***multiply that value by 100*** to get the percentage, wich is ***62.5%***

```
html { 
  font-size: 62.5%; // (10 / 16) * 100
}
```
Now we are done, we have finish to pass all the pixel values to relative values, thisway you will save a lot of code when you are creating your media queries and your responsive design will be looking awesome!