/*
*/



$(function(){
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
	  
	  
	  
	  //轮播
	  //获取小圆圈
	 var oImg=document.querySelector('.gd_imgbox');
	 var oPag=document.querySelectorAll('.gd_pagination i')
	 //console.log($oPag)
	 var $index=0;
	 var timer=null;
	 //按钮划入
	 $('.gd_banner .btn_left').mouseenter(function(){
	 	$(this).css('backgroundPositionY','100px');
	 })
	 $('.gd_banner .btn_left').mouseleave(function(){
	 	$(this).css('backgroundPositionY',0);
	 })
	  $('.gd_banner .btn_right').mouseenter(function(){
	 	$(this).css('backgroundPositionY','100px');
	 })
	 $('.gd_banner .btn_right').mouseleave(function(){
	 	$(this).css('backgroundPositionY',0);
	 })
	 
	 //点击
	 $('.gd_banner .btn_right').click(function(){
	 	
	 	clearInterval(timer);
	 	if($index==6){
	 		
	 		$('.gd_imgbox').css('marginLeft',0)
	 		$index=1;
	 	}else{
	 		$index++;
	 	}
	 
	 	$('.gd_imgbox').animate({'marginLeft':-$('.gd_banner img').width()*$index},500);
	 	 btnmove();
	 })
	  $('.gd_banner .btn_left').click(function(){
	 	clearInterval(timer);
	 	if($index==0){
	 		$('.gd_imgbox').css('marginLeft',-$('.gd_banner img').width()*6);
	 		$index=5;
	 	}else{
	 	    $index--;	
	 	}
	 	//$('.').css('background','orange');
	 	$('.gd_imgbox').animate({'marginLeft':-$('.gd_banner img').width()*$index},500);
	 	btnmove();
	 	
	 })
	  
	  //小圆圈
	  for(let i=0;i<oPag.length;i++){
	 	    oPag[i].onclick=function(){
	 	    	clearInterval(timer);
	 	    for(var j=0;j<oPag.length;j++){
	 	   	  oPag[j].style.background='#ddd';
	 	     }
	 	    	
	 	    	oPag[i].style.background='#555';
	 	    	$('.gd_imgbox').animate({'marginLeft':-$('.gd_banner img').width()*i},500);
	 	    	$index=i;
	 	     }
	 	   }
	 	   
	 	   
	  function autyplay(){
	  	//var n=0;
	  	 timer=setInterval(function(){
	  	 	if($index==6){
	 		
	 		$('.gd_imgbox').css('marginLeft',0)
	 		$index=1;
	 	    }else{
	 		$index++;
	 	   }
	 
	 	   $('.gd_imgbox').animate({'marginLeft':-$('.gd_banner img').width()*$index},500);
	  	   btnmove();
	  	 },3000)
	  }
	  
	  function btnmove(){
	  	
	  	 for(var i=0;i<oPag.length;i++){
	 	   	oPag[i].style.background='#ddd';
	 	   }
	 	   if($index==6||$index==0){
	 	   	 oPag[0].style.background='#555';
	 	   }else{
	 	   	oPag[$index].style.background='#555';
	 	   }
	  }
	   autyplay();
	 
	  //推荐轮播图
	  /*function slideShow(id){
	  	 this.ele=document.getElementById(id);
	  	 this.oLis=$('.recommend_list li');
	  	 this.num=this.oLis.length;
	  	 this.index=0;
	  	 console.log(this.ele);
	  	this.spot();
	  	 
	  }
	  slideShow.prototype.spot=function(){
	  	var that=this;
	  	for(let i=0;i<this.num;i++){
	  		this.index=i;
	  		this.oLis[i].onmouseenter=function(){
	  			that.ele.style.left=-i*1075+'px';

	  		}
	  	}
	  }
	  
	  var slide = new slideShow('recommend_img');*/
	    slideShow()
      function slideShow(){
      	var oLis=document.querySelectorAll('.recommend_list li');
      	var oImg=document.querySelectorAll('.recommend_list img');
      	var num=0;
      	var timer=null;
      	for(let i=0;i<oLis.length;i++){
      		oLis[i].onmouseenter=function(){
      			clearInterval(timer);
      			for(var j=0;j<oLis.length;j++){
      				oImg[j].src=`img/${(j+1)*10+j+1}.jpg`;
      			}
      			oImg[i].src=`img/${i+1}.jpg`;
      			$('#recommend_img').animate({'left':-i*1075},700)
      		}
      	}
      	timer=setInterval(function(){
      		if(num==oLis.length){
      			num=1;
      			$('#recommend_img').css('left','0')
      		}else{
      			num++;
      		}
      			
		  for(let i=0;i<=num;i++){
	      			for(var j=0;j<oLis.length;j++){
	      				oImg[j].src=`img/${(j+1)*10+j+1}.jpg`;
	      			}
	      			if(i<oLis.length){
	      			 
	      			  oImg[i].src=`img/${i+1}.jpg`;
	      			}else if(i==oLis.length){
	      			   oImg[0].src='img/1.jpg';
	      			}
	      			
	     }
      		$('#recommend_img').animate({'left':-num*1075},700)
      	},3000)
      	
      }
      
	  
	  
	  //春夏选项卡轮播
	    slideSummer();
	  function slideSummer(){
      	var oLis=document.querySelectorAll('.summer_list li');
      	var oImg=document.querySelectorAll('.summer_list img');
      	var num=0;
      	var timer=null;
      	for(let i=0;i<oLis.length;i++){
      		oLis[i].onmouseenter=function(){
      			clearInterval(timer);
      			for(var j=0;j<oLis.length;j++){
      				oImg[j].src=`img/show${(j+1)}.jpg`;
      			}
      			oImg[i].src=`img/show${i+6}.jpg`;
      			$('.summer_pic').animate({'left':-i*1075},700)
      		}
      	}
      	timer=setInterval(function(){
      		if(num==oLis.length){
      			num=1;
      			$('.summer_pic').css('left','0')
      		}else{
      			num++;
      		}
      			
		  for(let i=0;i<=num;i++){
	      			for(var j=0;j<oLis.length;j++){
	      				oImg[j].src=`img/show${(j+1)}.jpg`;
	      			}
	      			if(i<oLis.length){
	      			 
	      			  oImg[i].src=`img/show${i+6}.jpg`;
	      			}else if(i==oLis.length){
	      			   oImg[0].src='img/show6.jpg';
	      			}
	      			
	     }
      		$('.summer_pic').animate({'left':-num*1075},700)
      	},3000)
      	
      }
      
      
      
      $('.list_end li').each(function(){
      	 $(this).mouseenter(function(){
      	 	$(this).animate({'top':'-10px'},500);
      	 })
      	 $(this).mouseleave(function(){
      	 	$(this).animate({'top':0},500);
      	 })
      })
   //T恤
/*   $.ajax({
   	     type:"get",
	     url:'../json/index.json',
	     dataType:'json',
	      success:function(data){
	      	console.log(data);
	      )
   })
	  */
	 $.ajax({
	 	 type:"get",
	     url:'../json/index.json',
	     dataType:'json',
	     success:function(data){
	     	//console.log(data);
	     	var c='';
	     	for(var i=0;i<data.tx.length;i++){
	     		c+=`<li>
				<a href="html/detali.html"><img src="${data.tx[i].src}"/></a>
				<p>${data.tx[i].name}</p>
				<span>${data.tx[i].price}</span>
			    </li>`;
			    $('.gd_tx').html(c);
			    $('.gd_cs').html(c);
	     	}
	     }
	 })
	  
	  $.ajax({
	 	 type:"get",
	     url:'../json/index.json',
	     dataType:'json',
	     success:function(data){
	     	//console.log(data);
	     	var c='';
	     	for(var i=0;i<data.zz.length;i++){
	     		c+=`<li>
				<a href="html/detali.html"><img src="${data.zz[i].src}"/></a>
				<p>${data.zz[i].name}</p>
				<span>${data.zz[i].price}</span>
			    </li>`;
			    $('.gd_zz').html(c);
	     	}
	     }
	 })
	  
	   $.ajax({
	 	 type:"get",
	     url:'../json/index.json',
	     dataType:'json',
	     success:function(data){
	     	//console.log(data);
	     	var c='';
	     	for(var i=0;i<data.wt.length;i++){
	     		c+=`<li>
				<a href="html/detali.html"><img src="${data.wt[i].src}"/></a>
				<p>${data.wt[i].name}</p>
				<span>${data.wt[i].price}</span>
			    </li>`;
			    $('.gd_wt').html(c);
	     	}
	     }
	 })
	   
	   $.ajax({
	 	 type:"get",
	     url:'../json/index.json',
	     dataType:'json',
	     success:function(data){
	     	//console.log(data);
	     	var c='';
	     	for(var i=0;i<data.kz.length;i++){
	     		c+=`<li>
				<a href="html/detali.html"><img src="${data.kz[i].src}"/></a>
				<p>${data.kz[i].name}</p>
				<span>${data.kz[i].price}</span>
			    </li>`;
			    $('.gd_kz').html(c);
	     	}
	     }
	 })
	   
	    $.ajax({
	 	 type:"get",
	     url:'../json/index.json',
	     dataType:'json',
	     success:function(data){
	     	//console.log(data);
	     	var c='';
	     	for(var i=0;i<data.bb.length;i++){
	     		c+=`<li>
				<a href="html/detali.html"><img src="${data.bb[i].src}"/></a>
				<p>${data.bb[i].name}</p>
				<span>${data.bb[i].price}</span>
			    </li>`;
			    $('.gd_bb').html(c);
	     	}
	     }
	 })
	  
	 
	 //下悬浮
	 $('.bottom_img span').click(function(){
	 	//console.log($('.bottom_img span'));
	 	$('.gd_bottom').css('display','none');
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
	  
	  //bottom
	    $('.right_bottom .bottom_floor').mouseenter(function(){
	 	$(this).find('div').css('display','block');
	 })
	  $('.right_bottom .bottom_floor').mouseleave(function(){
	 	$(this).find('div').css('display','none');
	 })
	 
	 //点击进入购物车
	 $(".right_top .l2").click(function(){
					location.href = "../html/shopping.html";
				}) 
				
				
				
      //图片跳转
      $('.gd_banner').click(function(){
      	  location.href="html/detali.html";
      })
      
     $('.imgShow a').each(function(){
     	$(this).click(function(){
     		location.href = "../html/list.html";
     	})
     })
     
     
      $('.img_show_tow a').each(function(){
     	$(this).click(function(){
     		//alert(1)
     		location.href = "../html/list.html";
     	})
     })
     
     
       $('.showPic a').each(function(){
     	$(this).click(function(){
     		//alert(1)
     		location.href = "../html/detali.html";
     	})
     })
       
       
       $('.showPic2 a').each(function(){
     	$(this).click(function(){
     		//alert(1)
     		location.href = "../html/detali.html";
     	})
     })
       
        $('.show_pic a').each(function(){
     	$(this).click(function(){
     		//alert(1)
     		location.href = "../html/detali.html";
     	})
     })
       
        $('.show_pic2 a').each(function(){
     	$(this).click(function(){
     		//alert(1)
     		location.href = "../html/detali.html";
     	})
     })
     
       $('.recommend_img a').each(function(){
     	$(this).click(function(){
     		//alert(1)
     		location.href = "../html/detali.html";
     	})
     })
       
         $('.summer_img a').each(function(){
     	$(this).click(function(){
     		//alert(1)
     		location.href = "../html/detali.html";
     	})
     })
     
     
})	
	
