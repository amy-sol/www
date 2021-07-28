
  // 스크롤링
  $(document).ready(function () {
            
    $('.ex_tab a').click(function(e){
        e.preventDefault();
    
          var value=0;
          if($(this).hasClass('link1')){
             value= $('.ex_program .course_1').offset().top-300;   
          }else if($(this).hasClass('link2')){
             value= $('.ex_program .course_2').offset().top-300; 
          }else if($(this).hasClass('link3')){
             value= $('.ex_program .course_3').offset().top-300; 
          }
          
        $("html,body").stop().animate({"scrollTop":value},1000);
      });
    });

    $(document).ready(function () {
            
        $('.ex_tab2 a').click(function(e){
            e.preventDefault();
        
              var value=0;
              if($(this).hasClass('link4')){
                 value= $('.youth_program .course_1').offset().top-300;   
              }else if($(this).hasClass('link5')){
                 value= $('.youth_program .course_2').offset().top-300; 
              }              
            $("html,body").stop().animate({"scrollTop":value},1000);
          });
        });

