$(document).ready(function() {

  $('#registrarme').click(function(){
    var user= document.getElementById("user").value;
    var mail= document.getElementById("mail").value;
    var pass= document.getElementById("pass").value;
    var passconfig= document.getElementById("passconfirm").value;
     if(user=="" || mail=="" || pass=="" || passconfig==""){
      var user= document.getElementById("user");
      var mail= document.getElementById("mail");
      var pass= document.getElementById("pass");
      var passconfig= document.getElementById("passconfirm");
         var msg= document.getElementById("msg");
         user.style.border='solid 1px rgb(255, 0, 0) ';
         mail.style.border='solid 1px rgb(255, 0, 0) ';
         pass.style.border='solid 1px rgb(255, 0, 0) ';
         passconfig.style.border='solid 2px rgb(255, 0, 0) ';
         msg.style.display='block';
     }else{
         user.style.border='1px solid rgba(255,255,255,0.6)';
         mail.style.border='1px solid rgba(255,255,255,0.6)';
         pass.style.border='1px solid rgba(255,255,255,0.6)';
         passconfig.style.border='1px solid rgba(255,255,255,0.6)';
         var msg= document.getElementById("msg");
         msg.style.display='none';
     }


    
 });

 $('#login1').click(function(){
  var mail2= document.getElementById("mail2").value;
  var pass2= document.getElementById("pass2").value;
   if(mail2=="" || pass2==""){
    var mail2= document.getElementById("mail2");
    var pass2= document.getElementById("pass2");
       var msg= document.getElementById("msg2");
       mail2.style.border='solid 1px rgb(255, 0, 0)';
       pass2.style.border='solid 1px rgb(255, 0, 0)';
       msg.style.display='block';
   }else{
    var mail2= document.getElementById("mail2");
    var pass2= document.getElementById("pass2");
       mail2.style.border='1px solid rgba(255,255,255,0.6)';
       pass2.style.border='1px solid rgba(255,255,255,0.6)';
       var msg= document.getElementById("msg2");
       msg.style.display='none';
   }


  
});


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

//funciones para conectar con google
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); 
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
  }
  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }