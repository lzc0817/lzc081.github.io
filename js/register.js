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
	  
	//定义各个注册信息的状态  默认都是false
		var  regStatus = {
			uname: false,
			psw: false,
			check:true,
			yzm:false
		};
	//验证手机号
	  ckeckPHone();
	regStatus.uname=true;
	function ckeckPHone(){
		var reg=/^1[3,5,7,8]\d{9}$/
		var inp=document.querySelector('.inp');
		//console.log(inp);
		var main=document.querySelector('.tel div');
		
		inp.onblur=function(){
			if(!reg.test(inp.value)){
				main.innerHTML='输入不合法';
				regStatus.uname=false;
				
			}else{
				main.innerHTML='输入合法';
				regStatus.uname=true;
			}
			
		}
		
	}
	
	//密码强度验证
	 checkPwd();
	function checkPwd(){
		var pwd=document.querySelector('.pwd');
		var main=document.querySelector('.denglu div');
		var Osp =document.querySelectorAll('.denglu span');
			function getNum(){
		       var str=pwd.value;
		       var reg=/\d+/;
		        if(reg.test(str)){
		          return 1;
		        }else{
		          return 0;
		        }
		      }   
		     
		     //是否含有字母
		      function getZm(){
		        var str=pwd.value;
		        var reg=/[a-zA-Z]+/;
		         if(reg.test(str)){
		          return 1;
		        }else{
		          return 0;
		        }
		      }
		     
		     //是否含有特殊字符
		    function getTs(){
		         var str=pwd.value;
		         var reg=/[#$%^@!&*]+/
		        if(reg.test(str)){
		          return 1;
		        }else{
		          return 0;
		        }
		
		    }
		
		    pwd.oninput=function(){
		    	if(getNum() + getZm() + getTs()==1){
		    	Osp[0].style.background='red';
		        Osp[1].style.background='';
		        Osp[2].style.background='';
		
		    	}
		      if(getNum() + getZm() + getTs()==2){
		        Osp[0].style.background='red';
		        Osp[1].style.background='red';
		        Osp[2].style.background='';
		
		    	}
		     if(getNum() + getZm() + getTs()==3){
		
		         Osp[0].style.background='red';
		         Osp[1].style.background='red';
		         Osp[2].style.background='red';
		   
		
		      }
		     if(getNum() + getZm() + getTs()==0){
		
		         Osp[0].style.background='';
		         Osp[1].style.background='';
		         Osp[2].style.background='';
		   
		
		      }
		   }
		    pwd.onblur=function(){
		    	if(pwd.value==""){
		    		main.innerHTML='输入不合法';
		    	}
		    }

		
		
	}
	
	
	//确认密码
	checkPwdd();
	function checkPwdd(){
		var pwdd=document.querySelector('.pwdd');
		var main=document.querySelector('.psd div');
		var pwd=document.querySelector('.pwd');
		
		pwdd.onblur=function(){
	
			if(pwd.value==pwdd.value){
				main.innerHTML='密码输入一致';
				regStatus.psw = true;
			}else{
				main.innerHTML='两次密码不一致';
				regStatus.psw = false;
			}
		}
	}
	// 检查帐号密码状态
	// console.log(regStatus.psw),
	// console.log(regStatus.uname)
	
   //获取验证码
   var yzm=document.querySelector('.yanz span');
   var yz=document.querySelector('.yanz p')
	//  console.?log(yz)
	// 切换验证码
   yzm.onclick=function(){

   var str='0123456789qazxswedASDFMBHHJKT';
   var str2='';
	  	for(var i=0;i<4;i++){
	  	var m=parseInt(Math.random()*str.length);

	    str2+=str.charAt(m);
	  	}
	   yz.innerHTML=str2;

	}
	
	checkYZM();
	function checkYZM(){
		
		$('.seach').blur(function(){
			var yzm = document.querySelector('.seach').value;
			var yz=document.querySelector('.yanz p').innerHTML;
			console.log(yzm,yz)
				if(yzm==yz){
					regStatus.yzm = true;
					// console.log(regStatus.yzm)
				}
				else{
					alert('验证码错误')
				}
		})
	}
		


	$('.send').click(function(){
		var unameInput =document.querySelector('.inp').value;
		var pswInput = document.querySelector('.pwdd').value;
		console.log(unameInput,pswInput)
		//判断所有的信息状态，如果有不合法的，不能注册
			console.log(regStatus.psw);
			console.log(regStatus.uname);
			console.log(regStatus.yzm);
			

			for(var i in regStatus){
				//console.log(regStatus[i]);
				//console.log(i);
				//如果找到某个输入不合法，做出相应的提示并返回

				if(!regStatus[i] ){
					alert('部分数据不合法');
					return;
				}
				//if($('.checked'))
			}

			//通过ajax提交表单数据
			$.ajax({
				url: 'http://datainfo.duapp.com/shopdata/userinfo.php',
				data: {
					status:'register',
					userID: unameInput,
					password: pswInput
				},
				success: function(result){
						console.log(result)
					if(result==1){
					

						setTimeout(function(){
							//注册成功，跳转登录界面
							$(window).attr('location','land.html');
						},2000)
					}else{
							alert('注册失败')

					}
				}
			});
	})

	
	
})

