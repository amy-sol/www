    //서브4-2 갤러리
    $(document).ready(function(){
        $('.gallery li a').click(function(e){
            e.preventDefault();
            var ind = $(this).index('.gallery li a');
    
            $('.big').attr('src','./images/sub4/big'+(ind+1)+'.jpg');
            $('.big').hide().fadeIn('fast');
    
        });
    });

    //서브4-1 모달팝업
    $(document).ready(function(){
        $('.more_btn').click(function(e){
            e.preventDefault();
    
        });
    
        $('.attraction_list li .more_btn').each(function(index){
        
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