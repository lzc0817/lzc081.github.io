

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
	 
	
	
	var filter=document.querySelector('.filter');
	var bigImg=document.querySelector('.big_box img');
	var bigBox=document.querySelector('.big_box');
	var smallBox=document.querySelector('.small_box');
	var smallImg=document.querySelector('.small_box img');
	
	var oImg=document.querySelectorAll('.main_left ul img')
	//console.log(oImg);
	
	
	filter.onmouseenter=function(e){
        var e=e||window.event;
       // bigBox.style.display='block';
        var x=smallBox.offsetLeft;
        var y=smallBox.offsetTop;
       
      //  alert(y)
        document.onmousemove=function(e){
            var e=e||window.event;
            var l=e.clientX-x-100;
            var t=e.pageY-y-100;
            l=l<0?0:(l>300?300:l);
            t=t<0?0:(t>300?300:t);
            filter.style.left= l+'px';
            bigImg.style.left=-(500/200)*l+'px';
            filter.style.top= t+'px';
            bigImg.style.top=-(400/200)*t+'px';
        }
        document.onmouseleave=function(){
        	document.onmousemove=null;
           // bigBox.style.display='none';
        }
       // return false;
       
       
      
   }
	
	
	for(let i=0;i<oImg.length;i++){
       	 oImg[i].onmouseenter=function(){
       	 	oImg[i].style.borderColor="red"
       	 	for(var j=0;j<oImg.length;j++){
       	 		oImg[j].style.opacity=0.5;
       	 	//	oImg[j].style.borderColor='white';
       	 	}
       	 	oImg[i].style.opacity=1;
       	 	//alert(1)
       	 	smallImg.src=`../img/l${i+1}.jpg`;
       	 	bigImg.src=`../img/l${i+1}.jpg`;
       	 }
       	 oImg[i].onmouseleave=function(){
       	 	oImg[i].style.borderColor="red"
       	 	for(var j=0;j<oImg.length;j++){
       	 		oImg[j].style.opacity=0.5;
       	 		oImg[j].style.borderColor='white';
       	 	}
       	 	oImg[i].style.opacity=1;
       	 	oImg[i].style.borderColor='red';
       	 }
       }
	
	smallBox.onmouseenter=function(){
		  bigBox.style.display='block';
		  filter.style.display='block'
	}
	smallBox.onmouseleave=function(){
		  bigBox.style.display='none';
		  filter.style.display='none';
	}
	
	
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
	 	
	
	
	//购物车
	$('.main_right .p4 i').click(function(){
		$(this).css('borderColor','red');
	})
	
	var oA=document.querySelectorAll('.main_right .p5 a');
	//console.log(oA)
	for(var i=0;i<oA.length;i++){
		oA[i].onclick=function(){
		  for(var j=0;j<oA.length;j++){
			oA[j].style.borderColor='#ccc';
		   }	
		   this.style.borderColor='red';
		}   
	}	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
