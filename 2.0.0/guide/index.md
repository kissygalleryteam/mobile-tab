## 综述

MobileTab

* 版本：2.0.0
* 作者：代军
* demo：[http://kg.kissyui.com/mobile-tab/2.0.0/demo/index.html](http://kg.kissyui.com/mobile-tab/2.0.0/demo/index.html)
* 扫码查看 ![扫码查看](http://gtms01.alicdn.com/tps/i1/T1Q3Y3FJxbXXb5z8rZ-588-584.jpg_240x240Q90.jpg)

## 初始化组件

```` javascript
S.use('kg/mobile-tab/2.0.0/index', function (S, MobileTab) {
		
   var mobileTab = new MobileTab( S.one("#xxx"), {gap:20});
   mobileTab.go(0);
})

````	
	

## API说明
	
	
## 使用方法


* HTML

```` html
	<!--
		DOM 结构
		-#id
			--.J_In
		    	--.J_Slider	
	-->
	<div class="h5-plugin-tab" id="J_Tabs3">
		<div class="h5-plugin-tab-in J_In"> <!--必须为 J_In-->
			<ul>
				<li>
					<a>Hello</a>
				</li>
				<li >
					<a>world</a>
				</li>
			</ul>
			<div class="h5-plugin-tab-silder J_Slider"></div> <!--必须为 J_Silder-->
		</div>
	</div>
````

* JS初始化

```` javascript
	/**
		@param  $element  容器zepto对象
		@param  options 其他配置参数
				{
					gap:20 //tab之间的间隙
				}
	*/
	
	var tab = new MobileTab($('#J_Tabs3'),{
		//tab之间的间距
		gap:20
		
	});
	// 从0开始，这里初始化到第2个tab
	tab.go(1);
````



## API

* `tab.addEventListener(type, handle)`

添加监听事件，目前仅支持一个`onChange`。当tab切换的时候触发
	
```` javascript
	tab.addEventListener('onChange', function(index, prevIndex, $element){
		// index 当前激活的tab序号,从0开始算
		// prevIndex 上一个激活的tab序号，从0开始算
		// $element 当前被高亮的LI元素
	});
	
````

* `tab.go( index )`

直接跳到第 index 个 tab, 序列从0开始

```` javascript
	tab.go( 1 )//跳到第2个tab
````

* `tab.next()`

切换到下一个tab

```` javascript
	tab.next()
````

* `tab.prev()`

切换到上一个tab

```` javascript
	tab.prev()
````

## 其他
* 建议使用 `FastClick.js` 提高页面 `click` 响应速度


