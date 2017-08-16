{

var {foo, bar} = {foo:'aaa', bar:"bbb"};
console.log("foo="+foo+' and bar='+bar);

}
{
	var {bar, foo} = {foo:'aaa', bar:"bbb"};
	console.log("foo="+foo+' and bar='+bar);

}
{
	let { foo1: baz} = {foo1:"aaarrr",bar:"bbb"}
	console.log(baz);
	//console.log(foo1);//run error
}
{
	let obj ={first:'hello',last:'world'};
	let {first:l, last: f} = obj;
	console.log(f+''+l);
}
{
	var obj ={
		p:[
			"hello",
			{
				y:"world"
			}
		]
	}
	var { p:[x,  { y }]} = obj;
	console.log(x);
	console.log(y);
}
{
	let obj = {};
	let arr =[];
	({ foo3: obj.prop, bar3:arr[0]} = {foo3:123, bar3 : true });
	console.log(obj+''+arr);
} 
{
	var { x = 3 }= {};//默认值生效的条件是对象的属性值严格等于undefined;
	console.log(x);

	let {x1, y2=5 } ={x1:1};
	console.log(x1+''+y2);

}