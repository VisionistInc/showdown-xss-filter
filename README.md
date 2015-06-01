# showdown-xss-filter

[Showdown](https://github.com/showdownjs/showdown) extension to filter XSS, using [leizongmin/js-xss](https://github.com/leizongmin/js-xss).

## Client-side

```html
<script src="/path/to/showdown/src/showdown.js"></script>
<script src="/path/to/xss/dist/xss.min.js"></script>
<script src="/path/to/showdown-xss-filter.js"></script>
```

```javascript
var converter = new showdown.Converter({ extensions: ['xssfilter'] })
var text = "<script>alert('xss!')</script>";
console.log(converter.makeHtml(text));
```

Note: be sure to include the dependency on [leizongmin/js-xss](https://github.com/leizongmin/js-xss) before this extension.

## Server-side (node)

```javascript
var showdown = require('showdown');
var xssFilter = require('showdown-xss-filter');
var converter = new showdown.Converter({extensions: [xssFilter]});

var text = "<script>alert('xss!')</script>";
console.log(converter.makeHtml(text));
```
