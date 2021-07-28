function initialize() {
    var myLatlng = new google.maps.LatLng(37.258559789502115, 127.11700339814139);
    var myOptions = {
     zoom: 15,
     center: myLatlng
  
    }
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
   
    var marker = new google.maps.Marker({
     position: myLatlng,
     map: map,
     title:"한국민속촌"
    });  
    
   
    var infowindow = new google.maps.InfoWindow({
     content: "경기도 용인시 기흥구 민속촌로 90"
    });
   
    infowindow.open(map,marker);
   }
   
   
   window.onload=function(){
    initialize();
   }