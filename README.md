# showdown-xss-filter

Showdown extension to filter XSS, using [leizongmin/js-xss](https://github.com/leizongmin/js-xss).

## Client-side

```html
<script src="/path/to/showdown/src/showdown.js"></script>
<script src="/path/to/xss/dist/xss.min.js"></script>
<script src="/path/to/showdown-xss-filter.js"></script>
```

```javascript
var converter = new Showdown.converter({ extensions: ['xssfilter'] })
var text = "<script>alert('xss!')</script>";
console.log(converter.makeHtml(text));
```

Note: for now, for use on the client side, users will have to manage the [leizongmin/js-xss](https://github.com/leizongmin/js-xss) dependency on their own.

## Server-side

```javascript
var Showdown = require('showdown');
var xssFilter = require('showdown-xss-filter');
var converter = new Showdown.converter({extensions: [xssFilter]});

var text = "<script>alert('xss!')</script>";
console.log(converter.makeHtml(text));
```
