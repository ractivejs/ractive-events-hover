# Ractive.js hover event plugin

*Find more Ractive.js plugins at [ractivejs.org/plugins](http://ractivejs.org/plugins)*

[See the demo here.](http://ractivejs.github.io/ractive-events-hover)

The hover event provides a convenient way to trigger behaviours when the user's mouse enters or leaves an element.

The `event` object passed to handlers has a `hover` property which is `true` on mouseenter, `false` on mouseleave. (The mouseenter and mouseleave events are proprietary Internet Explorer events, which behave slightly differently to mouseover and mouseout. This plugin simulates those events in other browsers.

Be aware that heavy use of hover interactions is generally considered an anti-pattern, since it excludes mobile and tablet users.


## Usage

Include this file on your page below Ractive, e.g:

```html
<script src='lib/ractive.js'></script>
<script src='lib/ractive-events-hover.js'></script>
<script>
  var ractive = new Ractive({
    el: 'main',
    template: `
      <div on-hover='set("hovering", event.hover)'>
        {{#if hovering}}hovering!{{else}}not hovering!{{/if}}
      </div>`
  });
</script>
```

Or, if you're using a module loader, explicitly attach the plugin to the instance:

```js
var ractive = new Ractive({
  el: 'main',
  template: `
    <div on-hover='set("hovering", event.hover)'>
      {{#if hovering}}hovering!{{else}}not hovering!{{/if}}
    </div>`,
  events: {
    hover: require( 'ractive-events-hover' )
  }
})
```


## License

Copyright (c) 2013-5 Rich Harris. Licensed MIT
