

var xhr = new XMLHttpRequest();                 // XMLHttpRequest 객체를 생성한다.
var responseObject;

xhr.onload = function() {                       // When readystate changes
 
    responseObject = JSON.parse(xhr.responseText);  //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다.
	                                                 // parse() 메소드를 호출하여 자바스크립트 객체로 변환한다.
};

xhr.open('GET', 'js/sub2_2.json', true);        // 요청을 준비한다.
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
      newContent+='<p class="popup_title2">'+ responseObject.card[ind].title +' <br><span>성인자유이용권 50%할인</span></p>';

      $('.card_int').html(newContent);
      //console.log(responseObject); 
  });

 

  $('.close_btn2').click(function(e){
      e.preventDefault();
      $('.modal_box2').hide();
      $('.popup_card').hide();

  });
});
