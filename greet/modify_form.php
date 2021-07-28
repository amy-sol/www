<? 
	session_start(); 

	@extract($_POST);
	@extract($_GET);
	@extract($_SESSION);
	/*
		$_SESSION['userid']
		$_SESSION['username']
		$_SESSION['usernick']
		$_SESSION['userlevel']

		$num=1  (나야나~~~~~)
		$page=2
	*/
	
	include "../lib/dbconn.php";

	$sql = "select * from greet where num=$num";
	$result = mysql_query($sql, $connect);

	$row = mysql_fetch_array($result);       	
	$item_subject     = $row[subject];
	$item_content     = $row[content];
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>한국민속촌-민속촌소식</title>

    <link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="./common/css/sub1common.css">
    <link rel="stylesheet" href="./css/list.css">
    <script src="https://kit.fontawesome.com/087fc1f4e8.js" crossorigin="anonymous"></script>
    <script src="../common/js/prefixfree.min.js"></script>

    <!--[if IE 9]>  
          <script src="http://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
    <![endif]-->

</head>
<body>
    <div class="wrap">
       <!-- 서브 헤더영역 -->
       <? include "../common/sub_head.html" ?>

        <div class="visual"></div>

        <div class="sub_menu">
            <h3>한국민속촌</h3>
            <ul>
                <li><a href="../sub1/sub1_1.html">민속촌소개</a></li>
                <li><a href="../sub1/sub1_2.html">민속촌의 발자취</a></li>
                <li class="current"><a href="./list.php">민속촌소식</a></li>
                <li><a href="../sub1/sub1_4.html">오시는 길</a></li>
                <li><a href="../concert/list.php">보도자료</a></li>
            </ul>
        </div>

        <article id="content">
            <div class="title_area">
              <div class="title_area_box">
                <div class="line_map">
                    <p><i class="fas fa-home"></i> &gt; 한국민속촌 &gt; <strong>민속촌소식</strong></p>
                </div>
                <h2>민속촌소식</h2>

              </div>
            </div>

            <div class="content_area">


            <form  name="board_form" method="post" action="insert.php?mode=modify&num=<?=$num?>&page=<?=$page?>"> 
		<div id="write_form">
			<div class="write_line"></div>
			<div id="write_row1">
				<div class="col1"> 닉네임 </div>
				<div class="col2"><?=$usernick?></div>
			</div>
			<div class="write_line"></div>
			<div id="write_row2"><div class="col1"> 제목   </div>
			                     <div class="col2"><input type="text" name="subject" value="<?=$item_subject?>" ></div>
			</div>
			<div class="write_line"></div>
			<div id="write_row3"><div class="col1"> 내용   </div>
			                     <div class="col2"><textarea rows="15" cols="79" name="content"><?=$item_content?></textarea></div>
			</div>
			<div class="write_line"></div>
		</div>

		<div id="write_button"><input type="submit" value="완료">&nbsp;
								<a href="list.php?page=<?=$page?>">목록</a>
		</div>
		</form>


            </div>

        </article>

<!-- 서브 푸터영역 -->
<? include "../common/sub_foot.html" ?>

     </div>
<!--JQuery-->
<script src="../common/js/jquery-1.12.4.min.js"></script>
<script src="../common/js/jquery-migrate-1.4.1.min.js"></script>
<script src="../common/js/fullnav.js"></script>
</body>
</html>