$(function() {
  $("#registerSection").hide();

  $("#lnkRegister,#lnkRegister1").click(function(event) {
    event.preventDefault();
    $("#loginSection").fadeOut(2000);
    $("#registerSection").fadeIn(2000);
  });

  $("#lnkLogin,#lnkLogin1").click(function(event) {
    event.preventDefault();

    $("#registerSection").fadeOut(2000);
    $("#loginSection").fadeIn(2000);
  
  });
});
