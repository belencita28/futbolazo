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

function seleccion (x){
    switch (x) {
        case 1:
            $('#check1').css('display','block');
            break;
        case 2:
            $('#check2').css('display','block');
            break;
        case 3:
            $('#check3').css('display','block');
            break;
        case 4:
            $('#check4').css('display','block');
            break;
        case 5:
            $('#check5').css('display','block');
            break;
        case 6:
            $('#check6').css('display','block');
            break;
        case 7:
            $('#check7').css('display','block');
            break;
        case 8:
            $('#check8').css('display','block');
            break;
        case 9:
            $('#check9').css('display','block');
            break;
        case 10:
            $('#check10').css('display','block');
            break;
        case 11:
            $('#check11').css('display','block');
            break;
        case 12:
            $('#check12').css('display','block');
            break;
        case 13:
            $('#check13').css('display','block');
            break;
        case 14:
            $('#check14').css('display','block');
            break;
        case 15:
            $('#check15').css('display','block');
            break;
        case 16:
            $('#check16').css('display','block');
            break;
        default:
        // code block
    }
}
function out (x){
    switch (x) {
        case 1:
            $('#check1').css('display','none');
            break;
        case 2:
            $('#check2').css('display','none');
            break;
        case 3:
            $('#check3').css('display','none');
            break;
        case 4:
            $('#check4').css('display','none');
            break;
        case 5:
            $('#check5').css('display','none');
            break;
        case 6:
            $('#check6').css('display','none');
            break;
        case 7:
            $('#check7').css('display','none');
            break;
        case 8:
            $('#check8').css('display','none');
            break;
        case 9:
            $('#check9').css('display','none');
            break;
        case 10:
            $('#check10').css('display','none');
            break;
        case 11:
            $('#check11').css('display','none');
            break;
        case 12:
            $('#check12').css('display','none');
            break;
        case 13:
            $('#check13').css('display','none');
            break;
        case 14:
            $('#check14').css('display','none');
            break;
        case 15:
            $('#check15').css('display','none');
            break;
        case 16:
            $('#check16').css('display','none');
            break;
        default:
            $('#check16').css('display','none');
    }
}