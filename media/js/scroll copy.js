$(document).ready(function(){
    //스크롤 이벤트
    var screenHeight = $(window).height();
    var screenSize = $(window).width();

    $(window).on('scroll',function(){
       var scroll = $(window).scrollTop();
        //스크롤이 움직이면 해당 scrolltop의 값이 저장된다
        
//        $('.text').text(scroll);
        
        if(scroll>screenHeight-90){
            //헤더 스티키
            $('#headerArea').css('position','fixed').css('top',0);
           
            //스크롤 내리면 비디오박스 width100되게
            $('.videoBox').css('width','100%').css('height','100%').css('margin',0).css('border-top-right-radius',0).css('border-top-left-radius',0);
        }else{
            $('#headerArea').css('position','absolute').css('top',screenHeight-90);
            
            $('.videoBox').css('width','96%').css('height','98%').css('margin','2% 2% 0').css('border-top-right-radius',30).css('border-top-left-radius',30); 
        };
        
        if(scroll>screenHeight-600){
            $('.visual_img_wrap,.down').css('opacity','0');
            $('.visual_logo').css('opacity','0');
        }else{
            $('.visual_img_wrap,.down').css('opacity','1');
            $('.visual_logo').css('opacity','1');
        }
        
        if(scroll>2900){       
                $('#content .movie .movie_png').addClass('boxMove');}
        else{
            $('#content .movie .movie_png').removeClass('boxMove');}
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