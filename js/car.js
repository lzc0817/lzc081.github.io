$(function(){
				//加载已有的购物车信息
				loadCart();
				
				//给购物车按钮加一个点击事件
				$(".right_top .l2").click(function(){
					location.href = "../html/shopping.html";
				})
				//给加入购物车按钮添加点击事件
				$(".main_right .p7 p:eq(1)").click(function(e){
					//获取商品的id（用来区分不同的商品）
					var goodId = $('.main_right').attr("data-good-id");
					//获取商品的名称
					var goodName = $('.main_right h4').html();
					//获取商品的价格
					var goodPrice = parseFloat($('.main_right .p1 b').html());
					//获取商品的图片src
					var goodSrc = $(".main_left .big_box img").attr("src");
//					document.cookie = "key=value"
				    var goodNum=parseInt($('.p6 input').val());
					var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
					//将字符串转成对象
					var cartObj = convertCartStrToObj(cartStr);
					//判断该商品是否已经在购物车中存在
					if(goodId in cartObj){
						//如果已存在，那么该商品的数量加1
						cartObj[goodId].num += goodNum;
					}else{
						//如果不存在，那么将新商品的信息存入
						cartObj[goodId] = {
							name : goodName,
							price : goodPrice,
							num : goodNum,
							src : goodSrc
						};
					}
					
					//将新的购物车信息存回cookie
					//将对象转为字符串
					cartStr = convertObjToCartStr(cartObj);
					//存入cookie
					//document.cookie = "key=value"
					$.cookie("cart",cartStr,{expires : 7,path:"/"});
					
					
					
					//做一个飞入购物车的效果
					var cloneImg = $(".main_left .big_box img").clone().css({width:50,height:50});
					cloneImg.fly({
						start : {
							top : e.clientY,
							left : e.clientX
						},
						end :{
							top : $(".right_top .l2").offset().top,
							left : $(".right_top .l2").offset().left,
							width:0,
							height:0
						},
						autoPlay : true,
						onEnd : function(){
							$(".right_top .l2 span").html(num + 1);
					cloneImg.remove();
						}
					})
					
					loadCart()
				})
				
				 $(".p6 span:eq(1)").click(function() {
					var vul=$('.p6 input').val();
				 if(vul>1){
				 	vul--;
				 }
					$('.p6 input').val(vul);	
			   });
	          
	           $(".p6 span:eq(0)").click(function() {
					var vul=$('.p6 input').val();
				 
				 	vul++;
				 
					$('.p6 input').val(vul);	
			   });
	        
	        
			});
			
			
			function convertCartStrToObj(cartStr){			
				//如果是空字符串，即没有购物车信息，那么购物车为空，直接返回一个空对象
				if(!cartStr){
					return {};
				}
				var goods = cartStr.split(":");
				var obj = {};
				for(var i = 0; i < goods.length; i ++){
					var data = goods[i].split(",");
					//以商品的id为健，商品的其他信息为值，这个值也设计为一个对象
					obj[data[0]] = {
						name : data[1],
						price : parseFloat(data[2]),
						num : parseInt(data[3]),
						src : data[4]
					}
				}
				return obj;
			}
			function convertObjToCartStr(obj){
				
					var cartStr = "";
					//遍历对象
					for(var id in obj){
						if(cartStr){
							cartStr += ":";
						}
				
						cartStr += id + "," + obj[id].name + "," + obj[id].price + "," + obj[id].num + "," + obj[id].src;
					}
					return cartStr;
			}
			
			//加载购物车中的信息（使商品页与购物车页中的购物车数量同步）
			function loadCart(){
				var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
					var cartObj = convertCartStrToObj(cartStr);
					//获取到购物车中所有商品的数量
					var total = 0;
					for(var id in cartObj){
						total += cartObj[id].num;
					}
				$('.right_top .l2 span').html(total);
			//	$('.p6 input').val(total);
			}
			


