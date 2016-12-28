# Bootstrap grid generator ( v.3)
[link to Bootstrap grid documentation](http://getbootstrap.com/css/#grid)

TL;DR | A quick bootstrap grid generator to generate .css/.sass that you can use in any page.

## What it does?
It takes SASS files from Bootstrap repository and generates compressed CSS file.

## Why?
If you want to use *ONLY* bootstrap grid system and avoid using whole bootstrap library.

## Installation
1. clone repository
2. `npm install`
3. `gulp`

`grid.css` will be generated at the root folder.

## Usage
In case you want to configure your boostrap grid, you can do it in `sass/_variables.scss` file.
There you can set:
* media query breakpoints
* number of columns
* gutter width
* etc.
 
