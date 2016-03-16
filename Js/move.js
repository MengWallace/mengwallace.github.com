'use strict'
function fnGetStyle(obj,sName){
	return (obj.currentStyle || getComputedStyle(obj,false))[sName];
}
function fnMove(obj,sName,iTarget,time){
	var start = parseFloat(fnGetStyle(obj,sName));
	var dis = iTarget - start;
	var count = parseInt(time/16);
	var n = 0;
	clearInterval(obj.timer)
	obj.timer = setInterval(function(){
		n++;
		var cur = start + dis* n / count;
		if(sName == 'opacity'){
			obj.style[sName] = cur;
			obj.style.filter = 'alpha(opacity:='+cur*100+')';
		}
		else{
			obj.style[sName] = cur + 'px';
		}
		if(n == count){
			clearInterval(obj.timer);
		}
	},16);
}