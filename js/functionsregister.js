$(document).ready(function() {
  

});

function contenedorlogin(){
    var contendorregister = document.getElementById('login');
    contendorregister.style.display = 'none';
    var contendorlogin = document.getElementById('login2');
    contendorlogin.style.display = 'block';
}
function contenedorregister(){
    var contendor = document.getElementById('login2');
    contendor.style.display = 'none';
    var contendorregister = document.getElementById('login');
    contendorregister.style.display = 'block';
}