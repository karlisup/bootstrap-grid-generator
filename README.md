# Bootstrap grid generator ( v.3)
(http://getbootstrap.com/css/#grid)[link to documentation]

TL;DR | A quick bootstrap grid generator to generate .css/.sass that you can use in any page.

## What it does?
It takes 4 `.scss` files from Bootstrap repository (variables, mixins, grid-framework and grid) and generates compressed (customized if you want) CSS file.

## Why?
You want to use *ONLY* bootstrap grid. In this you avoid loading extra CSS and everything comes with it (class collisions, extra specificity, etc.).

## Installation
1. clone repository
2. `npm install`
3. `gulp`
`grid.css` will be generated at the root folder.

## Useage
In case you want to configure your boostrap grid, you can do it in `sass/_variables.scss` file.
There you can set:
* media query breakpoints
* number of columns
* gutter width
* etc.
 
