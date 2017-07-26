$(function() {
				//取出在cookie中存的购物车信息
				//	$('.gd_send span').html($('.hj p').html());
				var cartStr = $.cookie("cart") ? $.cookie("cart") : "";

				if(!cartStr) {
					$(".blank").css({
						display: "block"
					});
				} else {
					var cartObj = convertCartStrToObj(cartStr);
					console.log(cartObj);
					//遍历所有的商品生成html添加到购物车列表中去
					for(var id in cartObj) {
						//商品信息对象
						$('.mainImg').css('display','none');
						var good = cartObj[id];
						var str = `<li data-good-id="${id}">
						<input type="checkbox" name="" id="check" value="" />
						<a href="###"><img src="${good.src}" alt="" /></a>
						<div class="shuomin">
							<a href="###">${good.name}</a>
							<p>颜色：黑色，尺码：M</p>
						</div>
						<span>${good.price}</span>
						<div class="sum">
							<a href="###">-</a><input type="" name="" id="" value="${good.num}" /><a href="###">+</a>
						</div>
						<div class="yh"><p>无</p></div>
						<div class="hj"><p>${good.num * good.price}</p></div>
						<div class="sc"><a href="javascript:;">删除</a></div>
					    </li>`;
						//将上面的结构添加到cartList中去
						$(str).appendTo(".goods");
					}
					
					
					
					//给每个商品添加从购物车删除的事件
					$('.goods .sc a').click(function() {
						$('.mainImg').css('display','block');
						//在页面上将商品信息删除，顺便获取一个该商品的id
						var id = $(this).parent().parent().remove().attr("data-good-id");
						//从cookie中将该商品删除
						var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
						var cartObj = convertCartStrToObj(cartStr);

						delete cartObj[id];
				
						//将新商品信息放回cookie
						$.cookie('cart', convertObjToCartStr(cartObj), {
							expires: 7,
							path: "/"
						});
					})




					//给增加按钮添加事件
					$(".sum a:eq(1)").click(function() {
						
						var id = $(this).parent().parent().attr("data-good-id");

						var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
						var cartObj = convertCartStrToObj(cartStr);
						cartObj[id].num += 1;
						//将页面上显示的数量加1
						$(this).siblings("input").val("" + cartObj[id].num);
						//更新页面上的小计
						$('.hj p').html(cartObj[id].num * cartObj[id].price + "");
						//将信息放回cookie
						$.cookie('cart', convertObjToCartStr(cartObj), {
							expires: 7,
							path: "/"
						});
						$('.gd_send span').html($('.hj p').html());
					});
					
					
					
//					console.log(cartObj)
					//给减按钮添加点击事件
					$(".sum a:eq(0)").click(function(){
						var id = $(this).parent().parent().attr("data-good-id");
						var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
						var cartObj = convertCartStrToObj(cartStr);
						console.log(id)
						//.shop.num
						if(cartObj[id].num > 1){ //商品数量减少不能少于1
							cartObj[id].num -= 1;
							//将页面上显示的数量减1
							$(this).siblings("input").val("" + cartObj[id].num);
							//更新页面上的小计
							$('.hj p').html(cartObj[id].num * cartObj[id].price + "");
							//将信息放回cookie
							$.cookie('cart', convertObjToCartStr(cartObj), {
								expires: 7,
								path: "/"
							});
						}
						$('.gd_send span').html($('.hj p').html());
						
					});
					
					//改数量的input绑定一个blur事件
					$(".goodInfo li.num input").blur(function(){
						var id = $(this).parent().attr("data-good-id");
						var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
						var cartObj = convertCartStrToObj(cartStr);
						//判断用户输入是否合法
						var pattern = /^\d+$/;
						if(!pattern.test($(this).val())){
							cartObj[id].num = 1;
							$(this).val("1");
						}else{
							//修改一下数量
						cartObj[id].num = parseInt($(this).val());
						}
						
						
							$(this).siblings("input").val("" + cartObj[id].num);
							//更新页面上的小计
							$('.hj p').html(cartObj[id].num * cartObj[id].price + "");
							//将信息放回cookie
							$.cookie('cart', convertObjToCartStr(cartObj), {
								expires: 7,
								path: "/"
							});
					})
					
			}
				
					
	          $(".gd_send button").click(function(){
					location.href = "../html/land.html";
				})	
	
		//微信下拉
	$('.line li:eq(1)').mouseenter(function(){
		$('.wxpic').animate({'height':'200px'},500);
		$('.wxpic').css('border',' 1px solid #ccc');
		$('.wxpic b').css('color','black');
		$('.wxpic span').css('color','#cd9368');
  })
	$('.weixin').mouseleave(function(){
	    $('.wxpic').animate({'height':0},500);
	  /*  $('.wxpic').css('borderColor','#f6f6f6');*/
	   });
	   
	   //手机商城下拉
	$('.line li:eq(2)').mouseenter(function(){
		$('.telpic').animate({'height':'200px'},500);
		$('.telpic').css('border',' 1px solid #ccc');
		$('.telpic b').css('color','black');
		$('.telpic span').css('color','#cd9368');
  })
	$('.telshop').mouseleave(function(){
	    $('.telpic').animate({'height':0},500);
	   /* $('.telpic').css('borderColor','#f6f6f6');*/
	   });
	
	//下拉菜单
	$('.pull_top').mouseenter(function(){
		$('.nav_pull-down ul li').css('display','block');
		$('.nav_pull-down ul').animate({'height':'486px'},500);
	})
	$('.nav_pull-down ul').mouseleave(function(){
		$('.nav_pull-down ul').animate({'height':0},500,function(){
			$('.nav_pull-down li').css('display','none');
		});
		
	})
	//li滑过
    var oLis=document.querySelectorAll('.nav_pull-down li');
    var oSpans=document.querySelectorAll('.pull-down span')
    for(let i=0;i<oLis.length;i++){
    	//let index=i;
    	oLis[i].onmouseover=function(){
    	oSpans[i].style.display='block';	
    	}
    	oLis[i].onmouseout=function(){
    	oSpans[i].style.display='none';	
    	}
    	
    	
    }  
    //二级菜单
	  $('.nav_left_first span').mouseenter(function(){
	  	//alert(1)
	   	 $('.nav_left_first div').animate({'height':'104px'},500);
	   	 $('.nav_left_first div p').mouseover(function(){
	   	 	$(this).css('background','#444851');
	   	 })
	   	  $('.nav_left_first div p').mouseout(function(){
	   	 	$(this).css('background','#353535');
	   	 })
	   })
	  $('.nav_left_first div').mouseleave(function(){
	   	 $('.nav_left_first div').animate({'height':0},500);
	   })
	
	  $('.nav_left_second span').mouseenter(function(){
	   	 $('.nav_left_second div').animate({'height':'104px'},500);
	   	 $('.nav_left_second div p').mouseover(function(){
	   	 	$(this).css('background','#444851');
	   	 })
	   	  $('.nav_left_second div p').mouseout(function(){
	   	 	$(this).css('background','#353535');
	   	 })
	   })
	  $('.nav_left_second div').mouseleave(function(){
	   	 $('.nav_left_second div').animate({'height':0},500);
	  })
	  

			});

			function convertCartStrToObj(cartStr) {
				//"sp1,香蕉,30,1,src1:sp2,苹果,40,2,src2:sp3,梨,50,3,str3"
				//如果是空字符串，即没有购物车信息，那么购物车为空，直接返回一个空对象
				if(!cartStr) {
					return {};
				}
				var goods = cartStr.split(":");
				var obj = {};
				for(var i = 0; i < goods.length; i++) {
					var data = goods[i].split(",");
					//以商品的id为健，商品的其他信息为值，这个值也设计为一个对象
					obj[data[0]] = {
						name: data[1],
						price: parseFloat(data[2]),
						num: parseInt(data[3]),
						src: data[4]
					}
				}
//				console.log(obj);
				return obj;
			}

			function convertObjToCartStr(obj) {
			
				var cartStr = "";
				for(var id in obj) {
					if(cartStr) {
						cartStr += ":";
					}
					cartStr += id + "," + obj[id].name + "," + obj[id].price + "," + obj[id].num + "," + obj[id].src;
				}
				return cartStr;
			}