$(document).ready(function(){
    var cnt=2;  //탭메뉴 갯수
    $('.contlist:eq(0)').show(); //첫번째 탭 내용만 열어라 
    $('.tab1').css('color','#666'); //첫번째 탭메뉴 활성화
    //자바스크립트의 상대경로 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준
    
    $('.tab').click(function(e){    
        e.preventDefault();//a값을 강제로 막는다

        var ind = $(this).index('.tab_menu .tab');


        $(".contlist").hide(); //모든 탭내용을 안보이게
        $(".contlist:eq("+ind+")").fadeIn('fast');
        $('.tab').css('color','#999');
        $(this).css('color','#666'); 
    });
  });

  //서브5-1 갤러리
  $(document).ready(function(){
    $('.gallery li a').click(function(e){
        e.preventDefault();
        var ind = $(this).index('.gallery li a');

        $('.big').attr('src','./images/content1/big'+(ind+1)+'.jpg');
        $('.big').hide().fadeIn('fast');

    });
});

$(document).ready(function () {
            
    $('.restaurant_tab a').click(function(e){
        e.preventDefault();
    
          var value=0;
          if($(this).hasClass('link1')){
             value= $('.restaurant1').offset().top-350;   
          }else if($(this).hasClass('link2')){
             value= $('.restaurant2').offset().top-350; 
          }else if($(this).hasClass('link3')){
             value= $('.restaurant3').offset().top-350; 
          }else if($(this).hasClass('link4')){
            value= $('.restaurant4').offset().top-350; 
         }
          
        $("html,body").stop().animate({"scrollTop":value},1000);
      });
    });
    