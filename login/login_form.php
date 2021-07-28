<? session_start(); ?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인</title>
    <link rel="stylesheet" href="css/login.css">
    <link rel="stylesheet" href="../common/css/common.css">
    <script src="https://kit.fontawesome.com/087fc1f4e8.js" crossorigin="anonymous"></script>
    <script src="../common/js/prefixfree.min.js"></script>
</head>
<body>
<div id="content">
     <h2 class="hidden">로그인페이지</h2>
      <div class="inner_wrap">
         <div class="login_wrap">
         <h1><a href="../" class="logo">한국민속촌</a></h1>
             <form  name="member_form" method="post" action="login.php">
                 <div class="login_form">
                     <h3>로그인</h3>
                     <div class="input_box">
                        <ul>
                            <li>
                                <label class="hidden" for="id">아이디</label>
                                <input type="text" name="id" id="id" class="login_input" placeholder="아이디를 입력해주세요">
                            </li>
                            <li>
                                <label class="hidden" for="pass">비밀번호</label>   
                                <input type="password" name="pass" id="pass" class="pass_input" placeholder="비밀번호를 입력해주세요">
                            </li>
                        </ul>						
                     </div>

                <ul class="find_wrap">
                    <li><i class="fas fa-lock"></i>보안접속</li>
                    <li><a href="id_find.php">아이디 찾기</a></li>
                    <li><a href="pw_find.php">비밀번호 찾기</a></li>
                </ul>


                     <ul class="buttons">
                         <li class="login_button">
                             <input type="submit" value="로그인"> 
                         </li>
                     </ul>
                     <div class="find_box">
                         <ul>
                            <li class="join_btn">
                             <a href="../member/member_check.html" >회원가입</a>
                             </li>          
                         </ul>
                     </div>

                 </div> <!-- end of form_login --> 
                <div class="banner_wrap">
                    <a href="../sub2/sub2_2.html">
                    <img src="images/promo_1.jpg" alt="프로모션">
                   </a>
                </div> 
             </form>
         </div>
         <a href="javascript:;" class="close_icon" onclick="join_cancel()"><img src="images/cancel.png" alt=""></a>
      </div>  
    <script>        
        function join_cancel(){
            history.go(-1);
        }
    </script>
    </div>
</body>
</html>