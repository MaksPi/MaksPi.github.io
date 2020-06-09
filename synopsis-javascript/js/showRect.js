function showRect(elem) {
	let r = elem.getBoundingClientRect();
	alert (`x: ${r.x}
y: ${r.y}
width: ${r.width}
height: ${r.height}
top: ${r.top}
bottom: ${r.bottom}
left: ${r.left}
right: ${r.right}
`);
}