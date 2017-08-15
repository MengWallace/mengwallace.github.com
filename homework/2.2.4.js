function f() {
	console.log('I am outside,');
}
(function () {
	if(false) {
		function f() {
			console.log('I am inside,');
		}
	}
	f();
}());

f();