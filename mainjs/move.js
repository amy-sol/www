// JavaScript Document

$(document).ready(function() {
  var timeonoff; //자동기능 구현
  var imageCount=3;  //이미지 개수 *** 
  var cnt=1;  //이미지 순서 1 2 3 4 5 4 3 2 1 2 3 4 5 ...
  var direct=1;  //1씩 증가(+1)/감소(-1)
  var position=0; //겔러리 무비의 left값 0 -1000 -2000 -3000 -4000
  var onoff=true; // true=>타이머 동작중 , false=>동작하지 않을때
    
     $('.btn1').css('background','#fff'); //첫번째 불켜
    $('.btn1').css('width','60');
    

 function moveg(){
      cnt+=direct;  //카운트가 1 2 3 4 5 4 3 2 1 2 3 4 5 ......
	     //각각의 카운트에 대한 left 좌표값을 처리
		if(cnt==1){
		   position=0;  
		}else if(cnt==2){
	       position=-2000;
		}else if(cnt==3){
		   position=-4000;
		}
     
                                                
	   for(var i=1;i<=imageCount;i++){
          $('.btn'+i).css('background','#ccc'); //버튼불다꺼!!
         $('.btn'+i).css('width','30'); 
      }
      $('.btn'+cnt).css('background','#fff');//자신만 불켜
      $('.btn'+cnt).css('width','60');   
                           
		$('.gallery').animate({left:position}, 'slow'); //겔러리 무비의 left값을 움직여라~
		if(cnt==imageCount)direct=-1;
        if(cnt==1)direct=1;
 }

  timeonoff= setInterval( moveg , 4000); //4초마다 자동기능 

  $('.mbutton').click(function(event){  //각각의 버튼을 클릭한다면...

	var $target=$(event.target); //$target == this =>실제 클릭한 버튼
	clearInterval(timeonoff);   //타이머를 중지!!

	for(var i=1;i<=imageCount;i++){
			  $('.btn'+i).css('background','#ccc'); //버튼 모두불꺼
              $('.btn'+i).css('width','30');
    }

	if($target.is('.btn1')){  //첫번째 버튼을 클릭했다면...
    	   $('.gallery').animate({left:0}, 'slow');
                cnt=1;
                direct=1;
	}else if($target.is('.btn2')){ //두번째 버튼을 클릭했다면...
    	   $('.gallery').animate({left:-2000}, 'slow');
                cnt=2;
	}else if($target.is('.btn3')){ //세번째 버튼을 클릭했다면...
    	   $('.gallery').animate({left:-4000}, 'slow');
                cnt=3;
                direct=-1;
	}
      
      
      
    $('.btn'+cnt).css('background','#fff');//자신 버튼만 불켜 
    $('.btn'+cnt).css('width','60');
      
    timeonoff= setInterval( moveg , 4000);  //타이머의 재 동작
      
    if(onoff==false){
		   onoff=true;
		   $('.ps').css('background','url(../images/pause.png)');
     }  
  });
 
     //stop/play 버튼 클릭시 타이머 동작/중지
  $('.ps').click(function(){ 
       if(onoff==true){
	       clearInterval(timeonoff);   // stop버튼 클릭시
		   $(this).css('background','url(../images/play.png)');
           onoff=false;   
	   }else{
		  timeonoff= setInterval( moveg , 4000); //play버튼 클릭시
		   $(this).css('background','url(../images/pause.png)');
		   onoff=true; 
	   }
  });	


  $('.visual .btn').click(function(){

   clearInterval(timeonoff); 

   if($(this).is('.btnRight')){
       if(cnt==imageCount)cnt=0;  //카운트가 마지막 번호(3)라면 초기화 0
       if(cnt==imageCount+1)cnt=1;  
       cnt++; //카운트 1씩증가
   }else if($(this).is('.btnLeft')){
       if(cnt==1)cnt=imageCount+1;
       if(cnt==0)cnt=imageCount;
       cnt--; //카운트 감소
   }
   //console.log(cnt);
   $('.gallery').animate({left:(cnt-1)*-2000}, 'slow').clearQueue();
                        
   for(var i=1;i<=imageCount;i++){
        $('.btn'+i).css('background','#ccc'); //버튼 모두불꺼
         $('.btn'+i).css('width','30');
   }
    $('.btn'+cnt).css('background','#fff');//자신 버튼만 불켜 
    $('.btn'+cnt).css('width','60');  

   if($(this).is('.btnRight')){
      if(cnt==imageCount){cnt=0;direct=1;}
   }else if($(this).is('.btnLeft')){
      if(cnt==1){cnt=imageCount+1;direction=-1;}
   }
   
   timeonoff= setInterval( moveg , 4000);

   if(onoff==false){
      onoff=true;
      $('.ps').css('background','url(../images/pause.png)');
   }
   });
  
});

//올라오는 효과

$(document).ready(function () {
   //  //스크롤의 좌표가 변하면.. 스크롤 이벤트
   $(window).on('scroll',function(){
       var scroll = $(window).scrollTop();
   //     //스크롤top의 좌표를 담는다

       $('.scale').text(scroll);
       //스크롤 좌표의 값을 찍는다.

//        //스크롤의 거리의 범위를 처리
       if(scroll>250){         
       $('#content section:eq(0)').addClass('boxMove');}
       if(scroll>1000){         
       $('#content section:eq(1)').addClass('boxMove');}
       if(scroll>2000){         
       $('#content .text_effect').addClass('boxMove');}
       if(scroll>2100){         
       $('#content section:eq(2)').addClass('boxMove');}
       if(scroll>2100){         
       $('#content section:eq(3)').addClass('boxMove');}
       if(scroll>2800){         
       $('#content section:eq(4)').addClass('boxMove');}
     
       
   });


});
$(document).ready(function () {
   


   var position = 0;
   var col= '#ccc'
   $('.slide_btn').find('.sbtn').each(function (index) {
      $('.slide_btn li a').click(function(e){
         e.preventDefault();
      });

   
       $(this).click(function () {
           if (index == 0) {
               position = 450;
           } else if (index == 1) {
               position = -50;
           } else if (index == 2) {
               position = -550;
           }
           $('.event_performance_list').animate({
               left: position
           }, 500).clearQueue();
       });
       $('.slide_btn li:eq(0) a').css('background','#fc7900'); //첫번째 불켜

       $(this).click(function () {
         if (index == 0) {
             col = '#fc7900';
         } else if (index == 1) {
            col = '#fc7900';
         } else if (index == 2) {
            col = '#fc7900';
         }
         $('.slide_btn').find('.sbtn').css('background','#ccc')
         $(this).css('background',col);
     });





   });

   
      // 
   





});
