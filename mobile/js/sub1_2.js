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


var xhr = new XMLHttpRequest();                 // XMLHttpRequest 객체를 생성한다.
var responseObject;

xhr.onload = function() {                       // When readystate changes
 
    responseObject = JSON.parse(xhr.responseText);  //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다.
	                                                 // parse() 메소드를 호출하여 자바스크립트 객체로 변환한다.
};

xhr.open('GET', 'js/sub1.json', true);        // 요청을 준비한다.
xhr.send(null);                                 // 요청을 전송한다


//제휴카드모달
$(document).ready(function(){
 
   var newContent='';
  $('.more_btn2').click(function(e){
      e.preventDefault();

      var ind = $(this).index('.more_btn2');
      //console.log(ind);

      $('.modal_box2').fadeIn('fast');
      $('.popup_card').fadeIn('slow');

      newContent='';
      newContent+='<img src="'+ responseObject.card[ind].path +'" ' + 'alt="">';
      newContent+='<p class="popup_title2">'+ responseObject.card[ind].title +' <br><span>성인자유이용권<br>50%할인</span></p>';

      $('.card_int').html(newContent);
      //console.log(responseObject); 
  });

 

  $('.close_btn2').click(function(e){
      e.preventDefault();
      $('.modal_box2').hide();
      $('.popup_card').hide();

  });
});

//카드 스크롤링
$(document).ready(function () {
            
    $('.card_tab a').click(function(e){
        e.preventDefault();
    
          var value=0;
          if($(this).hasClass('link1')){
             value= $('.card .bc_card').offset().top-160;   
          }else if($(this).hasClass('link2')){
             value= $('.card .nh_card').offset().top-160; 
          }else if($(this).hasClass('link3')){
             value= $('.card .city_card').offset().top-160; 
          }
          
        $("html,body").stop().animate({"scrollTop":value},1000);
      });
    });
    
