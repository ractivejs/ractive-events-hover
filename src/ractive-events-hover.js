// we do this check so that components using this plugin
// still work in a server context
const testDiv = typeof document !== 'undefined' ?
	document.createElement( 'div' ) :
	{};

let hover;

if ( testDiv.onmouseenter !== undefined ) {
	// Using native mouseenter/mouseleave events
	hover = ( node, fire ) => {
		function mouseenterHandler ( original ) {
			fire({ node, original, hover: true });
		}

		function mouseleaveHandler ( original ) {
			fire({ node, original, hover: false });
		}

		node.addEventListener( 'mouseenter', mouseenterHandler, false );
		node.addEventListener( 'mouseleave', mouseleaveHandler, false );

		return {
			teardown () {
				node.removeEventListener( 'mouseenter', mouseenterHandler, false );
				node.removeEventListener( 'mouseleave', mouseleaveHandler, false );
			}
		};
	};
}

else {
	// using mouseover/mouseout
	hover = ( node, fire ) => {
		function mouseoverHandler ( original ) {
			if ( node.contains( original.relatedTarget ) ) return;
			fire({ node, original, hover: true });
		}

		function mouseoutHandler ( original ) {
			if ( node.contains( original.relatedTarget ) ) return;
			fire({ node, original, hover: false });
		}

		node.addEventListener( 'mouseover', mouseoverHandler, false );
		node.addEventListener( 'mouseout', mouseoutHandler, false );

		return {
			teardown () {
				node.removeEventListener( 'mouseover', mouseoverHandler, false );
				node.removeEventListener( 'mouseout', mouseoutHandler, false );
			}
		};
	};
}

export default hover;
