$("document").ready(function(){
  $(".search").click(function(){

  });
  $(".user").click(function(){
    $.jAlert({
      'title': 'ورود به سیستم',
      'content': '<form class="login-form"><input type="text" class="username" placeholder="نام کاربری"/><input type="password" class="password" placeholder="کلمه عبور"/><input type="button" class="login" value="ورود"/><input type="button" class="register" value="ثبت نام"/><a class="forget">فراموشی کلمه عبور</a></form>',
      'theme': 'green',
    });
  });
  $.on(".login-form",function(){

  });
});
