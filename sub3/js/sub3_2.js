$(document).ready(function(){   
    
    var date = new Date();
   
       /*숫자 자동입력*/
   
     //년도처리
     var memberCountConTxt= Number(date.getFullYear());
   
     $({ val : 0 }).animate({ val : memberCountConTxt }, {
      duration: 1000,
     step: function() {
       var number = numberWithCommas(Math.floor(this.val));
       $(".count1").text(number);
     },
     complete: function() {
       var number = numberWithCommas(Math.floor(this.val));
       $(".count1").text(number);
     }
   });
   
    //월처리
    memberCountConTxt= Number(date.getMonth()+1);
   
     $({ val : 0 }).delay(1000).animate({ val : memberCountConTxt }, {
      duration: 500,
     step: function() {
       var number = numberWithCommas(Math.floor(this.val));
       $(".count2").text(number);
     },
     complete: function() {
       var number = numberWithCommas(Math.floor(this.val));
       $(".count2").text(number);
     }
   });
   
   function numberWithCommas(x) {
       return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "");
   }
   
   
   //일처리
   memberCountConTxt= Number(date.getDate());
   
     $({ val : 0 }).delay(1500).animate({ val : memberCountConTxt }, {
      duration: 500,
     step: function() {
       var number = numberWithCommas(Math.floor(this.val));
       $(".count3").text(number);
     },
     complete: function() {
       var number = numberWithCommas(Math.floor(this.val));
       $(".count3").text(number);
     }
   });
   
   });