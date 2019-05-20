function $(id) {
	return typeof id === 'string' ? document.getElementById(id) : null;
}

function scrollTop() {
	return document.documentElement.scrollTop;
}

