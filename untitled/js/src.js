$("document").ready(function(){

  //alert(window.screen.availHeight);
//  alert(window.screen.height);



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

  $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
});
