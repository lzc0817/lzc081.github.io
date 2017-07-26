

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
	  









	$('.send').click(function(){
	    // alert(1111)
				var account = $('.accound').val();
				//console.log(account);
				var psw = $('.password').val();
			//	console.log(psw);
				if(account=='' || psw == ''){
					alert('用户名或者密码不能为空');
					return;
				}
				//使用ajax登录
				$.ajax({
					url: 'http://datainfo.duapp.com/shopdata/userinfo.php',
					
					data: {
	                    status:'login',
						userID: account,
						password: psw
					},
					success: function(result){
	                    console.log(result);
						if(result==0||result==2){
	                        alert('登录失败')
	                    }else{
//	                    	console.log(result)
	                        location.href = '../index.html';
	                    }
						
					}
				})
			})
	
	
	//跳转
	

	})


