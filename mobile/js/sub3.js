  //서브3-1 갤러리
  $(document).ready(function(){
    $('.gallery li a').click(function(e){
        e.preventDefault();
        var ind = $(this).index('.gallery li a');

        $('.big').attr('src','./images/sub3/big'+(ind+1)+'.jpg');
        $('.big').hide().fadeIn('fast');

    });
});

$(document).ready(function () {
            
    $('.restaurant_tab a').click(function(e){
        e.preventDefault();
    
          var value=0;
          if($(this).hasClass('link1')){
             value= $('.restaurant1').offset().top-100;   
          }else if($(this).hasClass('link2')){
             value= $('.restaurant2').offset().top-100; 
          }else if($(this).hasClass('link3')){
             value= $('.restaurant3').offset().top-100; 
          }else if($(this).hasClass('link4')){
            value= $('.restaurant4').offset().top-100; 
         }
          
        $("html,body").stop().animate({"scrollTop":value},1000);
      });
    });
    