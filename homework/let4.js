//暂时性死区
function bar(x = 2, y = x) {
	return [x, y];
}

console.log(bar());