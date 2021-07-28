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

  //Q&A
  $(document).ready(function () {
	var article = $('.faq .article');  //모든 질문 답변 리스트
	//article.find('.a').slideUp(100); // 모든 답변 닫아라
    article.find('span').html('<i class="fas fa-chevron-down"></i>');
    $('.faq .article:first').find('.a').slideDown(100);
    $('.faq .article:first').find('span').html('<i class="fas fa-chevron-up"></i>');
	
	$('.faq .article .trigger').click(function(e){  // 각각의 질문을 클릭하면
	    e.preventDefault();  //<a href="#"> 태그 링크 처리
        var myArticle = $(this).parents('.article'); //클릭한 해당 list 
	
        if(myArticle.hasClass('hide')){   //클릭한 해당 리스트의 상태가 hide냐?? 답변이 닫혀있냐??
            article.find('.a').slideUp(100); //모든 답변을 닫아라
            article.removeClass('show').addClass('hide'); // 모든 리스트를 hide교체
            article.find('span').html('<i class="fas fa-chevron-down"></i>');

            myArticle.removeClass('hide').addClass('show');  // show로 바꾼다 
            myArticle.find('.a').slideDown(100);  //해당 리스트의 답변을 열어라  
            myArticle.find('span').html('<i class="fas fa-chevron-up"></i>');
        } else {  // 'show' 답변이 열려있냐??
            myArticle.removeClass('show').addClass('hide');  // hide로 바꾼다 
            myArticle.find('.a').slideUp(100);  //해당 리스트의 답변을 닫아라  
            myArticle.find('span').html('<i class="fas fa-chevron-down"></i>');
        }  
  });
  
  //모두 여닫기 처리
  $('.all').toggle(function(e){
        e.preventDefault(); 
        article.find('.a').slideDown(100);
        article.removeClass('hide').addClass('show');
        article.find('span').html('<i class="fas fa-chevron-up"></i>');
        $(this).text('모두닫기▲');
  },function(e){
        e.preventDefault(); 
        article.find('.a').slideUp(100);
        article.removeClass('show').addClass('hide');
        article.find('span').html('<i class="fas fa-chevron-down"></i>');
        $(this).text('모두열기▼');
  });

}); 

//제휴할인 모달

$(document).ready(function(){
    $('.more_btn').click(function(e){
        e.preventDefault();

    });

    $('.promo li .more_btn').each(function(index){
    
        $(this).click(function(){
            $('.modal_box').fadeIn('normal');
            $('.md' + (index+1)).fadeIn('normal');
        });
    
        $('.close_btn, .modal_box').click(function(){
            $('.md' + (index+1)).fadeOut('fast');
            $('.modal_box').fadeOut('fast');
            
        });
       
    });

    $('.close_btn').click(function(e){
        e.preventDefault();

    });
});


//카드 스크롤링
$(document).ready(function () {
            
$('.card_tab a').click(function(e){
    e.preventDefault();

      var value=0;
      if($(this).hasClass('link1')){
         value= $('.card .bc_card').offset().top-450;   
      }else if($(this).hasClass('link2')){
         value= $('.card .nh_card').offset().top-450; 
      }else if($(this).hasClass('link3')){
         value= $('.card .city_card').offset().top-450; 
      }
      
    $("html,body").stop().animate({"scrollTop":value},1000);
  });
});

