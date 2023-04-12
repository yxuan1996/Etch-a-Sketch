# Etch-a-Sketch
Cool Drawing / Sketching Tool, created using CSS and Javascript.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#github.com/yxuan1996/Etch-a-Sketch)

To preview this webpage, run a server
```
python -m http.server 8000
```

### Development Notes
#### Layout
We need to wrap the grid-container in a grid-wrapper. 

In the grid-container, we set the display property to grid and create a 16x16 grid. Even if we set the gap property to 1px, there will still be a large gap as the grid will span and fill up the entire container. 

To ensure that there are no gaps between the grid items, we will wrap the entire grid-container in a wrapper and set the align and justify properties to center.

We also need to specify a fixed width and height for the wrapper. Do not specify any width and height for the grid-container or the gaps will appear again.

#### Sticky click
OnClick and mousedown only works for one cell. We want to ensure that when the mouse is clicked and dragged along the screen, all the cells along the path get filled.

To implement the 'sticky click' feature, we implement a global function that listens for mouseDown events throughout the entire HTML document. We also implement an eventListener that is triggered when a mouse enters the cell. We then fill the cell if the mouse is clicked. 

#### Side Panel
Create a side panel with buttons to change color, use random colors (rainbow), erase a single cell, clear the entire grid and save the image. 

For the color picker, we use the Coloris JS library. 
- https://www.cssscript.com/color-picker-coloris/
- https://github.com/mdbassit/Coloris




