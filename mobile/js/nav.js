$(document).ready(function() {
   var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
 	
   $(".menu_btn").click(function() { //메뉴버튼 클릭시
       
       var documentHeight =  $(document).height();
       $("#gnb").css('height',documentHeight); 

      if(op==false){
        $("#gnb").animate({right:0,opacity:1}, 'fast');
        $('#headerArea').addClass('mn_open');
        op=true;
      }else{
        $("#gnb").animate({right:'-100%',opacity:0}, 'fast');
        $('#headerArea').removeClass('mn_open');
        op=false;
      }

   });
   
   
    //2depth 메뉴 교대로 열기 처리 
    var onoff=[false,false,false,false];
    var arrcount=onoff.length;
    
    console.log(arrcount);
    
    $('#gnb .depth1 h3 a').click(function(e){
      e.preventDefault();
        var ind=$(this).parents('.depth1').index();
        
        console.log(ind);
        
       if(onoff[ind]==false){
        //$('#gnb .depth1 ul').hide();
        $(this).parent('h3').next('ul').slideDown('slow');
        $(this).parents('.depth1').siblings('li').find('ul').slideUp('fast');
        $(this).parents('.depth1').siblings('li').css('background','#fff');  
        $(this).parents('.depth1').siblings('li').children('h3').children('a').css('color','#fc7900');
         for(var i=0; i<arrcount; i++) onoff[i]=false; 
         onoff[ind]=true;
           
         $('.depth1 span').text('+');   
         $(this).parent('h3').find('span').text('-');
         $(this).css('color','#fff');
         $(this).parents('.depth1').css('background','#fc7900');  
            
       }else{
         $(this).parent('h3').next('ul').slideUp('fast'); 
         onoff[ind]=false;   
           
         $(this).parent('h3').find('span').text('+');     
         $(this).css('color','#fc7900');
         $(this).parents('.depth1').css('background','#fff');  
       }
    });    
  
  });


     //상단이동코드
$(document).ready(function () {
            
  $('.topMove').hide();

 $(window).on('scroll',function(){
      var scroll = $(window).scrollTop();
     
     
     //  $('.text').text(scroll);//스크롤거리를 출력
      if(scroll>300){
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

$(document).ready(function(){
  var cnt=2;  //탭메뉴 갯수
  $('.contlist:eq(0)').show(); //첫번째 탭 내용만 열어라 
  $('.tab1').css('color','#fff');
  $('.tab1').parents('li').css('background','#fc7900');  //첫번째 탭메뉴 활성화
  //자바스크립트의 상대경로 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준
  
  $('.tab').click(function(e){    
      e.preventDefault();//a값을 강제로 막는다

      var ind = $(this).index('.tab_menu .tab');


      $(".contlist").hide(); //모든 탭내용을 안보이게
      $(".contlist:eq("+ind+")").fadeIn('fast');
      $('.tab').css('color','#fc7900');
      $('.tab').parents('li').css('background','#fff');
      $(this).css('color','#fff'); 
      $(this).parents('li').css('background','#fc7900');
  });
});


