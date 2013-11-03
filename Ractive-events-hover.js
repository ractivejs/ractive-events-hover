/*

	Ractive-events-hover
	====================

	Version 0.1.0.

	<< description goes here... >>

	==========================

	Troubleshooting: If you're using a module system in your app (AMD or
	something more nodey) then you may need to change the paths below,
	where it says `require( 'ractive' )` or `define([ 'Ractive' ]...)`.

	==========================

	Usage: Include this file on your page below Ractive, e.g:

	    <script src='lib/Ractive.js'></script>
	    <script src='lib/Ractive-events-hover.js'></script>

	Or, if you're using a module loader, require this module:

	    // requiring the plugin will 'activate' it - no need to use
	    // the return value
	    require( 'Ractive-events-hover' );

	<< more specific instructions for this plugin go here... >>

*/

(function ( global, factory ) {

	'use strict';

	// Common JS (i.e. browserify) environment
	if ( typeof module !== 'undefined' && module.exports && typeof require === 'function' ) {
		factory( require( 'ractive' ) );
	}

	// AMD?
	else if ( typeof define === 'function' && define.amd ) {
		define([ 'Ractive' ], factory );
	}

	// browser global
	else if ( global.Ractive ) {
		factory( global.Ractive );
	}

	else {
		throw new Error( 'Could not find Ractive! It must be loaded before the Ractive-transitions-fly plugin' );
	}

}( typeof window !== 'undefined' ? window : this, function ( Ractive ) {

	'use strict';

	var hover, testDiv;

	if ( typeof document === 'undefined' ) {
		// lolz
		return;
	}

	testDiv = document.createElement( 'div' );

	// If we're in IE, we can use native mouseenter/mouseleave events
	if ( testDiv.onmouseenter !== undefined ) {
		hover = function ( node, fire ) {
			var mouseenterHandler, mouseleaveHandler;

			mouseenterHandler = function ( event ) {
				fire({
					node: node,
					original: event,
					hover: true
				});
			};

			mouseleaveHandler = function ( event ) {
				fire({
					node: node,
					original: event,
					hover: false
				});
			};

			node.addEventListener( 'mouseenter', mouseenterHandler, false );
			node.addEventListener( 'mouseleave', mouseleaveHandler, false );

			return {
				teardown: function () {
					node.removeEventListener( 'mouseenter', mouseenterHandler, false );
					node.removeEventListener( 'mouseleave', mouseleaveHandler, false );
				}
			};
		};
	}

	else {
		hover = function ( node, fire ) {
			var mouseoverHandler, mouseoutHandler;

			mouseoverHandler = function ( event ) {
				if ( node.contains( event.relatedTarget ) ) {
					return;
				}

				fire({
					node: node,
					original: event,
					hover: true
				});
			};

			mouseoutHandler = function ( event ) {
				if ( node.contains( event.relatedTarget ) ) {
					return;
				}
				
				fire({
					node: node,
					original: event,
					hover: false
				});
			};

			node.addEventListener( 'mouseover', mouseoverHandler, false );
			node.addEventListener( 'mouseout', mouseoutHandler, false );

			return {
				teardown: function () {
					node.removeEventListener( 'mouseover', mouseoverHandler, false );
					node.removeEventListener( 'mouseout', mouseoutHandler, false );
				}
			};
		};
	}

	Ractive.events.hover = hover;

}));