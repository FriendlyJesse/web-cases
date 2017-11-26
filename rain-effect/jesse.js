/**
 * 加载后执行、选取id、选取对象
 * @param  {[string、object、function]} id [id名等]
 * @return {[object]}    [对象]
 */
function $(id)
{
	if (typeof id=='function')
	{
		window.onload=v;
	}
	else if (typeof id=='string')
	{
		return document.getElementById(id);
	}
	else if (typeof id=='object')
	{
		return id;
	}
}
/**
* 获取计算机计算后的样式
* @param  {[object]} Obj  [对象]
* @param  {[string]} attr [字符串]
* @return {[string]}      [属性值]
*/
function getStyle(Obj,attr)
{
	if (Obj.currentStyle)
	{
		return Obj.currentStyle[attr];
	}
	else
	{
		return getComputedStyle(Obj)[attr];
	}
}
/**
 * [mobile description]
 * @param  {[object]} obj   [对象]
 * @param  {[string]} dir   [方向]
 * @param  {[Intege]} px    [速度]
 * @param  {[Intege]} end   [最终位置]
 * @param  {[function]} endFn [回调函数]
 * @return {[type]}       [移动功能]
 */
function mobile(obj,dir,px,end,endFn)
{
	obj.style.position='absolute';
	px=parseInt(getStyle(obj,dir))<end ? px : -px;
	clearInterval(obj.timer);
	obj.timer=setInterval(function()
	{
		var speed=parseInt(getStyle(obj,dir))+px;
		if (speed>end && px>0 ||speed<end && px<0)
		{
			speed=end;
		}
		obj.style[dir]=speed+'px';
		if (speed==end)
		{
			clearInterval(obj.timer);
			endFn && endFn();
		}
	},30)
}
