$(document).ready(function() {
  
    $('#crearbtn').click(function(){
       var nombre= document.getElementById("nombre").value;
       var objetivo= document.getElementById("objetivo").value;
        if(nombre=="" || objetivo==""){
            var nombre= document.getElementById("nombre");
            var objetivo= document.getElementById("objetivo");
            var msg= document.getElementById("msg");
            nombre.style.border='solid 2px #ff6054';
            objetivo.style.border='solid 2px #ff6054';
            msg.style.display='block';
        }else{
            var msg= document.getElementById("msg");
            var elem = document.getElementById("codigo");
            elem.style.display='block';
            msg.style.display='none';
        }
       
    });
});
function copyClipboard() {
    var copyText = document.getElementById("p");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("texto copiado: " + copyText.value);
  }

