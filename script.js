console.clear();
function svgEl(name, attr, to) {
	var el = document.createElementNS("http://www.w3.org/2000/svg", name);
	for(var i = 0; i < Object.keys(attr).length; i ++) {
		el.setAttribute(Object.keys(attr)[i], attr[Object.keys(attr)[i]]);
	}
	to.appendChild(el);
	return el;
}
function changeAttr(what, attr) {
	for(var i = 0; i < Object.keys(attr).length; i ++) {
		el.setAttribute(Object.keys(attr)[i], attr[Object.keys(attr)[i]]);
	}
}
function hide(from, what) {
	from.removeChild(what);
}
function show(from, what) {
	from.appendChild(what);
}
var svg = document.getElementById("SVG"),
	rect = svgEl("rect", {
		x: 0,
		y: 0,
		width: 60,
		height: 211
	}, svg);
