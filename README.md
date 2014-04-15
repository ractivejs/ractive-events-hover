Ractive.js hover event plugin
=============================

*Find more Ractive.js plugins at [ractivejs.org/plugins](http://ractivejs.org/plugins)*

[See the demo here.](http://ractivejs.github.io/ractive-events-hover)

Usage
-----

Include this file on your page below Ractive, e.g:

```html
<script src='lib/ractive.js'></script>
<script src='lib/ractive-events-hover.js'></script>
```

Or, if you're using a module loader, require this module:

```js
// requiring the plugin will 'activate' it - no need to use the return value
require( 'ractive-events-hover' );
```

Add a hover event in the normal fashion:

```html
<div on-hover='foo'>hover over me!</div>
```

Then add a handler:

```js
ractive.on( 'foo', function ( event ) {
  alert( event.hover ); // true on enter, false on leave
});
```



License
-------

Copyright (c) 2013 Rich Harris. Licensed MIT

Created with the [Ractive.js plugin template](https://github.com/RactiveJS/Plugin-template) for Grunt.
