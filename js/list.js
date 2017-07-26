
$(function(){
	
	
	
	 $.ajax({
	 	 type:"get",
	     url:'../json/index.json',
	     dataType:'json',
	     success:function(data){
	     	//console.log(data);
	     	var c='';
	     	for(var i=0;i<data.li.length;i++){
	     		c+=`<li>
				<a href="detali.html"><img src="${data.li[i].src}"/></a>
				<p>${data.li[i].name}</p>
				<span>${data.li[i].price}</span>
			    </li>`;
			    $('.gd_tx').html(c);
			   // $('.gd_cs').html(c);
	     	}
	     }
	 })
	
	
	//右悬浮
	 $('.gd_right li').each(function(){
	 	$(this).mouseenter(function(){
	 		$(this).css("background",'#ed145b');
	 	})
	 	$(this).mouseleave(function(){
	 		$(this).css("background",'#444851');
	 	})
	 })
	 
	 //划入出现
	 //l1
	 $('.gd_right .l1').mouseenter(function(){
	 	//$(this).css('background','#ed145b')
	 	$(this).find('a').css('backgroundPositionX','-80px');
	 })
	  $('.gd_right .l1').mouseleave(function(){
	 	//$(this).css('background','#444851')
	 	$(this).find('a').css('backgroundPositionX',0);
	 })
	  
	  
	  //move
	   $('.gd_right .right_move').mouseenter(function(){
	 	$(this).find('a').css('backgroundPositionX','40px');
	 	$(this).find('div').animate({'left':'-90px'},500);
	 	$(this).find('div').css('display','block');
	 })
	  $('.gd_right .right_move').mouseleave(function(){
	 	$(this).find('a').css('backgroundPositionX',0);
	 	$(this).find('div').css('display','none');
	 	$(this).find('div').css('left','-121px');
	 })
	  
	  
	  //l6
	    $('.gd_right .l6').mouseenter(function(){
	 	$(this).find('a').css('backgroundPositionX','-40px');
	 	$(this).find('div').css('display','block');
	 })
	  $('.gd_right .l6').mouseleave(function(){
	 	$(this).find('a').css('backgroundPositionX',0);
	 	$(this).find('div').css('display','none');
	 })
	    $('.right_bottom .bottom_floor').mouseenter(function(){
	 	$(this).find('div').css('display','block');
	 })
	  $('.right_bottom .bottom_floor').mouseleave(function(){
	 	$(this).find('div').css('display','none');
	 })
	 	
	
	//购物车点击
	$(".right_top .l2").click(function(){
					location.href = "../html/shopping.html";
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
	  
	
	$('.list_next li').each(function(){
		
		$(this).click(function(){
			 $.ajax({
	 	 type:"get",
	     url:'../json/index.json',
	     dataType:'json',
	     success:function(data){
	     	//console.log(data);
	     	var c='';
	     	for(var i=0;i<data.li2.length;i++){
	     		c+=`<li>
				<a href="detali.html"><img src="${data.li2[i].src}"/></a>
				<p>${data.li2[i].name}</p>
				<span>${data.li2[i].price}</span>
			    </li>`;
			    $('.gd_tx').html(c);
			   // $('.gd_cs').html(c);
	     	}
	     }
	 })
			
		})
	})
	
	
	
})
