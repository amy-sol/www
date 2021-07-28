
$(document).ready(function() {
  
    //2depth 열기/닫기
    $('ul.dropdownmenu').hover(
       function() { 
          $('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열어라
          $('#headerArea').animate({height:430},'fast').clearQueue();
       },function() {
          $('ul.dropdownmenu li.menu ul').hide(); //모든 서브를 다 닫아라
          $('#headerArea').animate({height:210},'fast').clearQueue();
     });
     
     //1depth 효과
     $('ul.dropdownmenu li.menu').hover(
       function() { 
           $('.depth1',this).css('color','#fc7900');
       },function() {
          $('.depth1',this).css('color','#333');
     });

     //tab 처리
     $('ul.dropdownmenu li.menu .depth1').on('focus', function () {        
        $('ul.dropdownmenu li.menu ul').fadeIn('normal');
        $('#headerArea').animate({height:430},'fast').clearQueue();
     });

    $('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {        
        $('ul.dropdownmenu li.menu ul').hide();
        $('#headerArea').animate({height:210},'fast').clearQueue();
    });
});

//상단이동코드
$(document).ready(function () {
            
   $('.topMove').hide();

  $(window).on('scroll',function(){
       var scroll = $(window).scrollTop();
      
      
      //  $('.text').text(scroll);//스크롤거리를 출력
       if(scroll>500){
           $('.topMove').fadeIn('slow');
       }else{
           $('.topMove').fadeOut('fast');
       }
  });
       //top메뉴를 클릭하면 상단으로 이동시킨다
   $('.topMove').click(function(e){
      e.preventDefault();
       //상단으로 스르륵 이동합니다.
      $("html,body").stop().animate({"scrollTop":0},1000); 
   });
});

//푸터 패밀리사이트
$(document).ready(function() {
	/*
	$('.select .arrow').click(function(){
		$('.select .aList').fadeIn('slow');			  
	});
	$('.select .aList').mouseleave(function(){
		$(this).fadeOut('slow');		  
	});
	*/
    $('.select .arrow').toggle(function(){
		$('.select .aList').fadeIn('fast');	
	}, function(){
        $('.select .aList').fadeOut('fast');	
	});

	//tab키 처리
	  $('.select .arrow').on('focus', function () {        
              $('.select .aList').show();	
       });

       $('.select .aList li:last').find('a').on('blur', function () {        
              $('.select .aList').hide();
       });  
});