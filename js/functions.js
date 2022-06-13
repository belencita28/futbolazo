

function scrollFunction() {
   
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      $('#top').css('display','block');
    } else {
      $('#top').css('display','none');
    }

  
  }
  
  
  function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;//chrome
  }
