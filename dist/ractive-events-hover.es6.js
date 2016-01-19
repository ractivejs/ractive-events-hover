var testDiv = typeof document !== 'undefined' ? document.createElement('div') : {};

var hover = undefined;

if (testDiv.onmouseenter !== undefined) {
	// Using native mouseenter/mouseleave events
	hover = function (node, fire) {
		function mouseenterHandler(original) {
			fire({ node: node, original: original, hover: true });
		}

		function mouseleaveHandler(original) {
			fire({ node: node, original: original, hover: false });
		}

		node.addEventListener('mouseenter', mouseenterHandler, false);
		node.addEventListener('mouseleave', mouseleaveHandler, false);

		return {
			teardown: function teardown() {
				node.removeEventListener('mouseenter', mouseenterHandler, false);
				node.removeEventListener('mouseleave', mouseleaveHandler, false);
			}
		};
	};
} else {
	// using mouseover/mouseout
	hover = function (node, fire) {
		function mouseoverHandler(original) {
			if (node.contains(original.relatedTarget)) return;
			fire({ node: node, original: original, hover: true });
		}

		function mouseoutHandler(original) {
			if (node.contains(original.relatedTarget)) return;
			fire({ node: node, original: original, hover: false });
		}

		node.addEventListener('mouseover', mouseoverHandler, false);
		node.addEventListener('mouseout', mouseoutHandler, false);

		return {
			teardown: function teardown() {
				node.removeEventListener('mouseover', mouseoverHandler, false);
				node.removeEventListener('mouseout', mouseoutHandler, false);
			}
		};
	};
}

var hover$1 = hover;

export default hover$1;