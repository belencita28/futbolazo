$(window).on('load', function () {
    setTimeout(function () {
  $(".loader-page").css({visibility:"hidden",opacity:"0"})
}, 500);
   
});

$(document).ready(function() {

 
    
    window.onclick = function(event) {
      if (event.target == modal) {
        $('#myModal').css('display','none');
      }
    }

});

var modal = document.getElementById("myModal");


function clickbtn() {
    $('#myModal').css('display','block');
 
}

function spanclick() {
    $('#myModal ').css('display','none');
 
}