var [a, b, c] = [1,2,3];
let [foo, [[bar], baz]] = [1,[[2], 3]];
console.log(foo);
console.log(bar);
console.log(baz);

let [, , third] = ['foo','bar','baz'];
console.log(third);

let [x, , y] = [1, 2, 3];
console.log(x);
console.log(y);

let[head, ...tail] = [1, 2, 3, 4];
console.log(head);
console.log(tail);

let [x1, y1, ...z1] =['a'];
console.log(x1);
console.log(y1);
console.log(z1);

//不完全结构
{
	let [x, y] = [1,2,3];
	console.log(x);
	console.log(y);

	let [a, [b], d] = [1,[2,3],4];
	console.log(a);
	console.log(b);
	console.log(d);
}

{
	let [x, y, z] = new Set(["a", "b", "c"]);
	console.log(x);
}
{
	function* fibs() {
		var a = 0;
		var b = 1;
		while(true) {
			yield a;
			[a, b] = [b, a+b];
		}
	}
	var [first, second, thirds, fourth, fifth, sixth] = fibs();
	
	console.log(first+''+second+''+thirds+''+fourth+''+fifth+''+sixth);
// 	console.log(second);
// 	console.log(thirds);//why third run err?
// 	console.log(fourth);
// 	console.log(fifth);
// 	console.log(sixth);
}
{
	var [foo1 = true] = [];
	console.log(foo1);
}
{
	[x2,y2 = 'b'] =['a',undefined];
	console.log(x2+''+y2);

}
{
	var [x3 =1] = [undefined];
	console.log(x3);
	var [x4 = 1] = [null];//null不严格等于undefined
	console.log(x4);
}
{
	let [x5 = 1, y5 =x5 ] = [];
	console.log(x5+''+y5);
	let [x6 = 1, y6 = x6] =[2];
	console.log(x6+''+y6);
	let[x7 = 11, y7 = x7] = [13,2];
	console.log(x7+''+y7);
	let[x = y, y=1] = [];//y is not defined
}






