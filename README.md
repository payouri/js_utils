# js_utils
This library is a collection of useful functions that we don't want te keep writing again and again.
It also serves the purpose to help manipulate the DOM when a framework like react.js is not needed or would be overkill.

## npm scripts
```javascript
  {
    "build": "node ./node_modules/webpack/bin/webpack.js --config ./webpack.config.js ./src/index.js",
    "generate-docs": "node_modules/.bin/jsdoc --configure .jsdoc.json --verbose",
    "test": "jest",
    "test-verbose": "jest --coverage --config ./jest.config.js"
  }
```
- **build**: compile source code to generate the complete library
- **generate-docs**: generate documentation using jsdoc comments
- **test**: run jest tests
- **test-verbose**: run tests and generate coverage reports

[Online Docs](https://payouri.github.io/js_utils/index.html)
[Available on CodePen](https://codepen.io/Zorlimar/pen/vQQmOo)