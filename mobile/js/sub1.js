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

