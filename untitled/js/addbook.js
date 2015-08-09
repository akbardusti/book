$("document").ready(function(){

  //alert(window.screen.availHeight);
//  alert(window.screen.height);

  $('.menu-toggle').sidr({
      side: 'right',
      method: 'close',
      renaming: true,
      body: 'body'
  });

  $("#sidr").on('click','.back11', function() {
    $.sidr('close', 'sidr');
  });

  /*$("body").click(function() {
    if (($(this).attr('id') != 'sidr') && !$(this).parents('#sidr').length) {
      //$.sidr('close', 'sidr');
    }
  });*/

  $(window).scroll(function(){
    if($(window).scrollTop() > 110){
      $(".nav-bar").css({"position":"fixed","top": "0",
      "margin-top": "0","background-color":"rgb(179, 210, 24)",
      "z-index": "9999"});
    }
    else{
      $(".nav-bar").css({"position":"relative","background-color":"rgba(179, 210, 24, 0.67)"});
    }
  });

});
