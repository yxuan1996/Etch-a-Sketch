# Etch-a-Sketch
Cool Drawing / Sketching Tool, created using CSS and Javascript.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#github.com/yxuan1996/Etch-a-Sketch)

To preview this webpage, run a server
```
python -m http.server 8000
```

### Notes
#### Layout
We need to wrap the grid-container in a grid-wrapper. 

In the grid-container, we set the display property to grid and create a 16x16 grid. Even if we set the gap property to 1px, there will still be a large gap as the grid will span and fill up the entire container. 

To ensure that there are no gaps between the grid items, we will wrap the entire grid-container in a wrapper and set the align and justify properties to center. 

#### Sticky click
OnClick and mousedown only works for one cell. We want to ensure that when the mouse is clicked and dragged along the screen, all the cells along the path get filled. 