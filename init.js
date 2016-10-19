/*
* 功能：    清除整个文档下空白文本节点
* 调用方法：CNN();
* 依赖    ：clearn();   
* 参数    ：无
* 返回值 ： 无
*/
function CNN(){
	var a=document.getElementsByTagName("*");
	for(var i=0;i<a.length;i++){
		if(a[i].hasChildNodes()){
			clearn(a[i]);
		}
	}
}

/*
* 功能：    清除某个元素下空白文本节点
* 调用方法：clearn(ele);
* 依赖    : 无;
* 参数    ：ele 要清除空白节点的元素
* 返回值 ： 无
*/
function clearn(ele){
	var thisChild=ele.childNodes;
	for(var i=0;i<thisChild.length;i++){
		if(thisChild[i].nodeType==3&&!/\S/.test(thisChild[i].nodeValue)){
			ele.removeChild(thisChild[i]);
		}
	}
}

/*
* 功能：    清除某个元素下空白文本节点
* 调用方法：Element.clearn(ele);
* 依赖    : 无;
* 参数    ：无
* 返回值 ： 无
*/
Element.prototype.clearn = function(){
	var thisChild=this.childNodes;
	for(var i=0;i<thisChild.length;i++){
		if(thisChild[i].nodeType==3&&!/\S/.test(thisChild[i].nodeValue)){
			ele.removeChild(thisChild[i]);
		}
	}
}


/*
* 功能：    通过样式获取元素的集合
* 调用方法：getElementsByClass(_classname);
* 依赖    : 无
* 参数    ：_classname 要查找的内容
* 返回值 ： 元素集合的数组
*/
function getElementsByClass(_classname){
     var mysum = document.getElementsByTagName("*");
     var sum = [];
     for(var i = 0; i<mysum.length; i++){
     	if(mysum[i].hasAttribute("class")){
     		var _mysum= mysum[i].getAttribute("class");
	     	// console.log(_mysum);
	     	var _sum = _mysum.split(" ");
		     	for (var j = 0; j < _sum.length; j++) {
		     		   if (_sum[j] == _classname) {
		     		   	sum.push(mysum[i])
		     		   }
		     	}
     	}
     }
     return sum;
}

/*
* 功能：    判断一个元素是否拥有某个指定的样式
* 调用方法：element.hasclass;
* 依赖    : 无
* 参数    ：_classname 要判断的样式
* 返回值 ： 有指定样式返回 true ; 没有返回false;
*/
Element.prototype.hasClass = function(_classname){
	if( this.hasAttribute("class")){
		var _arr = this.className.split(" ");
		for(var i=0; i < _arr.length ; i++){
			if(_arr[i] == _classname){
				return true;
			}
		}
	}
	return false;
}


/*
* 功能：    通过样式获取元素的集合
* 调用方法：getClass(_classname);
* 依赖    : hasClass()
* 参数    ：_classname 要查找的内容
* 返回值 ： 元素集合的数组
*/
function getClass(_classname){
	var alldom = document.getElementsByTagName("*");
	var _arr= [];
	for(var i=0 ; i<alldom.length; i++){
		if(alldom[i].hasClass(_classname)){
			_arr.push(alldom[i])
		}
	}
	return _arr;
}

/*
* 功能：    获取元素下某个指定样式的集合
* 调用方法：Element.getClass(_classname);
* 依赖    : hasClass()
* 参数    ：_classname 要查找的内容
* 返回值 ： 元素集合的数组
*/
Element.prototype.getClass = function(_classname){
	var _arr=[];

	for (var i = 0; i < this.childNodes.length; i++) {
		if(this.childNodes[i].hasClass(_classname) ){
			_arr.push(this.childNodes[i]);
		}
	}
	
	return _arr;
}

/*
* 功能：    获取元素的索引值，即该元素在父元素中的出现次序
* 调用方法：Element.index();
* 依赖    : 无
* 参数    ：无
* 返回值 ： 数值型，整数
*/
Element.prototype.index = function(){
	var pn = this.parentNode;
	for (var i = 0; i < pn.childNodes.length; i++) {
		if( pn.childNodes[i] == this ){
			return i;
		}
	}
}

/*
* 功能：    给一个元素添加指定的样式
* 调用方法：Element.addClass(_classname);
* 依赖    : hasClass()
* 参数    ：_classname为要添加的样式名
* 返回值 ： 无
*/
Element.prototype.addClass = function(_classname){
	if(this.hasAttribute("class")){
		if( ! this.hasClass(_classname)){
			var newclass = this.getAttribute("class")+" "+_classname;
			this.setAttribute("class",newclass)
		}
	}else{
		this.setAttribute("class",_classname)
	}

}

/*
* 功能：    删除一个元素指定的样式
* 调用方法：Element.removeClass(_classname);
* 依赖    : hasClass()
* 参数    ：_classname为要删除的样式名
* 返回值 ： 无
*/
Element.prototype.removeClass = function(_classname){
	if( this.hasClass(_classname) ){
		var oldclass = this.getAttribute("class");
		var _arr = oldclass.split(" ");
		for (var i = 0; i < _arr.length; i++) {
			if(_arr[i] == _classname){
				_arr.splice(i,1);
				i--;
			}
		}
		var _newclass = _arr.join(" ");
		this.setAttribute("class",_newclass)
	}
}


/*
* 功能：   切换一个元素指定的样式，有该样式则删除，没有则添加
* 调用方法：Element.toggleClass(_classname);
* 依赖    : hasClass(),addClass(),removeClass()
* 参数    ：_classname为要切换的样式名
* 返回值 ： 无
*/
Element.prototype.toggleClass = function(_classname){
	if(this.hasClass(_classname)){
		this.removeClass(_classname)
	}else{
		this.addClass(_classname)
	}
}

/*
* 功能：   给一个元素绑定一个事件
* 调用方法：Element.addHandler(type, handler);
* 依赖    : 无
* 参数    ：type  要绑定的事件类型，如，click, mousemove
* 参数    ：handler 时间处理函数，发生该事件后续的操作
* 返回值 ： 无
*/
Element.prototype.addHandler = function(type, handler){
	if (this.addEventListener) { 
		this.addEventListener(type, handler, false); 
	} else if (this.attachEvent) { 
		this.attachEvent("on" + type, handler);
	} 
}


/*
* 功能：   给一个元素绑定一个事件
* 调用方法：addHandler(element, type, handler);
* 依赖    : 无
* 参数    ：element 要绑定事件的元素
* 参数    ：type  要绑定的事件类型，如，click, mousemove
* 参数    ：handler 时间处理函数，发生该事件后续的操作
* 返回值 ： 无
*/
function addHandler (element, type, handler) {
 	if (element.addEventListener) { 
		element.addEventListener(type, handler, false); 
	} else if (element.attachEvent) { 
		element.attachEvent("on" + type, handler);
	} 
}

/*
* 功能：   给一个元素移除一个事件函数
* 调用方法：Element.removeHandler(type, handler);
* 依赖    : 无
* 参数    ：type  要绑定的事件类型，如，click, mousemove
* 参数    ：handler 时间处理函数，要移除的操作内容
* 返回值 ： 无
*/
Element.prototype.removeHandler = function(type, handler){
	if (this.removeEventListener) {
		this.removeEventListener(type, handler, false);
	} else if (this.detachEvent) { 
		this.detachEvent("on" + type, handler);
	}
}

/*
* 功能：    给一个元素移除一个事件函数
* 调用方法：removeHandler(Element,type, handler);
* 依赖    : 无
* 参数    ：element 要移除事件的元素对象
* 参数    ：type  要绑定的事件类型，如，click, mousemove
* 参数    ：handler 时间处理函数，要移除的操作内容
* 返回值 ： 无
*/
function removeHandler(element, type, handler) {
	if (element.removeEventListener) {
		element.removeEventListener(type, handler, false);
	} else if (element.detachEvent) { 
		element.detachEvent("on" + type, handler);
	}
}

/*
* 功能：    阻止一个事件的派发
* 调用方法：Event.stopPropagation();
* 依赖    : 无
* 参数    ：无
* 返回值 ： 无
*/
Event.prototype.stopPropagation = function(){
	if (this.stopPropagation) {
	 	this.stopPropagation(); 
	} else { 
		this.cancelBubble = true;
	}
}

/*
* 功能：    阻止一个事件的派发
* 调用方法：stopPropagation(event);
* 依赖    : 无
* 参数    ：Event 当前事件对象
* 返回值 ： 无
*/
function stopPropagation(event) { 
	if (event.stopPropagation) {
	 	event.stopPropagation(); 
	} else { 
		event.cancelBubble = true;
	} 
}

/*
* 功能：    返回一个字符串的占用多少字节
* 依赖    : 无
* 调用方法：string.len();
* 返回值 ： 字符串的 占用字节长度，整数
*/
String.prototype.len= function(){
 	var len = 0;
	 for(var i=0; i< this.length ; i++){
	 	if (this.charCodeAt(i) > 255){
	 		len=len+2;
	 	}else{
	 		len++;
	 	}
	 }
	 return len;
 }

/*
* 功能：    返回一个字符串的占用多少字节
* 参数：    字符串 str
* 依赖    : 无
* 调用方法：len(str);
* 返回值 ： 字符串的 占用字节长度，整数
*/
function len(str){
 var len = 0;
 for(var i=0; i< str.length ; i++){
 	if (str.charCodeAt(i) > 255){
 		len=len+2;
 	}else{
 		len++;
 	}
 }
 return len;
}

/*
* 功能：    给元添加tab标签效果
* 参数：    etype 是 tab事件的类型
* 依赖    : ele.getclass, ele.index() , ele.removeClass, ele.addClass
* 调用方法：ele.myTab()
* 返回值 ： 无
*/
Element.prototype.myTab = function(etype){
	var $tabBtn  = this.getClass("tab-button")[0];
	var $tabCont = this.getClass("tab-content")[0];

	$tabBtn.addHandler(etype,function(e){
		var e = e || window.event;
		var target = e.target || e.srcElement;

		if(target.tagName =="LI"){
			//console.log(target.index());
			showTab(target.index());
		}
		
		function showTab(now){
			var contChild = $tabCont.childNodes;
			//console.log($tabCont);
			for (var i = 0; i<contChild.length; i++) {
				$tabBtn.childNodes[i].removeClass("act");
				contChild[i].style.display =  "none" ;
			}
			contChild[now].style.display = "block" ;
			$tabBtn.childNodes[now].addClass("act");

		}
	})
}



/*
* 功能：    给元添加焦点图效果
* 参数：    playtime: 默认播放时间
* 			effect  : 焦点图效果 goleft: 是向左滚动
* 								 fadein: 是渐现效果
* 依赖    : ele.getclass, ele.index() , ele.removeClass, ele.addClass
* 调用方法：ele.myFocus()
* 结构要求：
* <div class="focus-wrap">
		<ul class="focus-content clearfix">
			<li><a href="#"><img src="" alt="图片说明1" /></a></li>
			<li class="none"><a href="#"><img src="" alt="图片说明2"  /></a></li>
			<li class="none"><a href="#"><img src=""  alt="图片说明3"  /></a></li>
		</ul>
		<ul class="focus-button clearfix">
		   <li class="act">1</li>
		   <li>2</li>
		   <li>3</li>
		</ul>
		<div class="focus-tit"></div>   //图片说明
 	</div>
* 返回值 ： 无
*/
Element.prototype.myFocus = function(playtime,effect){

	var _this = this; 

	var $focus_button = _this.getClass("focus-button")[0];
	var $focus_content = _this.getClass("focus-content")[0];
	
	var $focus_tit = _this.getClass("focus-tit")[0]; //图片说明 

	var $focusChild = $focus_button.childNodes;
	var contChild = $focus_content.childNodes;

	var focusWidth = parseInt(_this.offsetWidth);//获取焦点图的宽度
	var focusHeight = parseInt(_this.offsetHeight);//获取焦点图的宽度

    //旧的图是从有到无
	//contChild[oldindex].style.display = "none";
	switch(effect){
		case "vloop":{
			$focus_content.style.position = "absolute";
			$focus_content.style.left = "0";
			//$focus_content.style.width = focusWidth * contChild.length + "px";
			for(var i =0 ; i<contChild.length; i++){
				contChild[i].style.left = i*focusWidth + "px";
				contChild[i].style.display = "block";
			}
		}
		break;
		case "hloop":{
			$focus_content.style.position = "absolute";
			$focus_content.style.top = "0";
			//$focus_content.style.width = focusWidth * contChild.length + "px";
			for(var i =0 ; i<contChild.length; i++){
				contChild[i].style.top = i*focusHeight + "px";
				contChild[i].style.display = "block";
			}
		}
		break;
	}




	var oldindex = 0; // 默认显示的第一张
	var timer = setInterval(autoplay,playtime) //设置自动循环
	var mouseovertime = null;

	$focus_tit.innerHTML = $focus_content.firstChild.firstChild.firstChild.getAttribute("alt"); //设置图片标题文字

	$focus_button.addHandler("mouseover",overHandler);  //鼠标经过
	$focus_button.addHandler("mouseout",outHandler);	//鼠标离开

	function autoplay(){
		var newindex;
		if(oldindex < $focusChild.length - 1){
			newindex = oldindex + 1;
		}else{
			newindex = 0
		}
		showTab(oldindex,newindex);
	}

	function overHandler(e){
		var e = e || event;
		var target = e.target || e.srcElement;

		if (target.tagName == "LI") {
			mouseovertime = setTimeout(function(){
				showTab(oldindex,target.index());
			},200)	
			clearInterval(timer);
		}
	}

	function outHandler(e){
		var e = e || event;
		var target = e.target || e.srcElement;

		if (target.tagName == "LI") {
			timer = setInterval(autoplay,playtime);
			clearTimeout(mouseovertime);
		}
	}

	function showTab(old,now){

		//console.log(old,now)

		if(old != now){
		

			switch (effect){
				case "fadein" : {
					//旧的图是从有到无
					//contChild[oldindex].style.display = "none";
					contChild[old].style.opacity = 1;

					//contChild[oldindex].style.opacity     1 ==> 0
					var _t1 = setInterval(function(){
						contChild[old].style.opacity = Number(contChild[old].style.opacity) / 2;
						//console.log( contChild[oldindex].style.opacity )
						if( contChild[old].style.opacity  < 0.1 ){
							contChild[old].style.display = "none";
							contChild[old].style.opacity = 0; 
							clearInterval(_t1);
						}
					},50)

					//新的图是从无到有 0 ===> 1
					contChild[now].style.display = "block";
					contChild[now].style.opacity = 0;

					var _t2 = setInterval(function(){
						//console.log( contChild[now].style.opacity );
						contChild[now].style.opacity = (1+Number(contChild[now].style.opacity))/2;

						if( contChild[now].style.opacity > 0.9 ){
							contChild[now].style.opacity = 1; 
							clearInterval(_t2);
						}

					},50)
				}
				break;
				case "goleft" : {

					//旧的图是从有到无
					//contChild[oldindex].style.display = "none";
					contChild[old].style.left = 0;
					console.log(focusWidth);
					//contChild[oldindex].style.opacity     1 ==> 0
					var _t3 = setInterval(function(){

						var nleft =  parseInt(contChild[old].style.left);
						contChild[old].style.left = "-" + (focusWidth - nleft) / 2 +"px";
						//console.log( contChild[oldindex].style.opacity )
						//
						if( nleft  < (-focusWidth+20) ){
							contChild[old].style.left = "-" + focusWidth +"px"; 
							clearInterval(_t3);
						}

					},50)


					//新的图是从无到有 0 ===> 1
					contChild[now].style.left = focusWidth + "px";
					contChild[now].style.display = "block";
					var _t4 = setInterval(function(){
						//console.log( contChild[now].style.opacity );
						var nleft =  parseInt(contChild[now].style.left);
						contChild[now].style.left = nleft/2 + "px";

						if( nleft < 20 ){
							contChild[now].style.left = 0;
							clearInterval(_t4);
						}

					},50)
				}
				break;
				case "vloop" : {
				// //contChild[oldindex].style.opacity     1 ==> 0
					var _t3 = setInterval(function(){
						var nleft =  parseInt($focus_content.style.left);
						console.log(nleft)
						$focus_content.style.left = "-" + (focusWidth*now-nleft)/2 +"px"
						//console.log( contChild[oldindex].style.opacity )
						//
						if( Math.abs(Math.abs(nleft) - focusWidth*now )< 20 ) {
							$focus_content.style.left = "-" + focusWidth*now +"px"; 
							clearInterval(_t3);
						}

					},50)


				}
				break;
				case "hloop" : {
				// //contChild[oldindex].style.opacity     1 ==> 0
					var _t4 = setInterval(function(){

						var ntop =  parseInt($focus_content.style.top);
						console.log(ntop)
						$focus_content.style.top = "-" + (focusHeight*now-ntop)/2 +"px"
						//console.log( contChild[oldindex].style.opacity )
						//
						if( Math.abs(Math.abs(ntop) - focusHeight*now )< 20 ) {
							$focus_content.style.top = "-" + focusHeight*now +"px"; 
							clearInterval(_t4);
						}

					},50)


				}
				break;
			}
			
			$focus_tit.innerHTML = contChild[now].firstChild.firstChild.getAttribute("alt"); //设置图片标题文字

			$focusChild[old].removeClass("act");
			$focusChild[now].addClass("act");

			oldindex = now; 
			//显示完成后将 新的帧变成旧的 
		}
	}
}
