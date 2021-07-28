$(document).ready(function(){
    //헤더 열리기(태블릿 이하 해상도)
    var screenHeight = $(window).height();
    
    $('.menu_ham').toggle(function(){
        $('#headerArea').addClass('top0');
       $('#headerArea ul').slideDown();
        $('.menu_ham').addClass('open');
        
    },function(){
        $('#headerArea ul').slideUp();
        $('.menu_ham').removeClass('open');
        $('#headerArea').removeClass('top0');
    });
    
        
    var current=0;
    
    $(window).resize(function(){
       var screenSize= $(window).width(); 
        
        if( screenSize > 1024){
            $('#headerArea').addClass('top0');
            $('#headerArea ul').show();
            $('.menu_ham').removeClass('open');
             current=1;
        }
        if(current==1 && screenSize <= 1024){
            $('#headerArea').removeClass('top0');
            $('#headerArea ul').hide();
            current=0;
        }
    });

    
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
});