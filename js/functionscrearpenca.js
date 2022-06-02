$(document).ready(function() {
  
    $('#crearbtn').click(function(){
       var nombre= document.getElementById("nombre").value;
       var objetivo= document.getElementById("objetivo").value;
        if(nombre=="" || objetivo==""){
        addError(); //no anda la funcion
        }else{
            removeError();
            var elem = document.getElementById("codigo");
            elem.style.display='block';
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


  var nombre= document.getElementById("nombre");
  var objetivo= document.getElementById("objetivo");


  function addError() {
    $('#nombre').addClass('error');
    $('#objetivo').addClass('error'); };


  function removeError() { 
      nombre.classList.remove('error');
  objetivo.classList.remove('error'); };