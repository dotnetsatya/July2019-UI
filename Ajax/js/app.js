function clock() {
  $("#spnTimer").text(new Date().toLocaleTimeString());
}

$(document).ready(function() {
  setInterval(() => {
    clock();
  }, 1000);

  $("#topRightNavAnonymous").show();
  $("#topRightNavLogged").hide();

  $("#placeholderSection").load("partials/home.html");

  $("#lnkLogin").click(function(evt) {
    evt.preventDefault();
    $("#placeholderSection").load("partials/login.html");
  });

  $("#lnkRegister").click(function(evt) {
    evt.preventDefault();
    $("#placeholderSection").load("partials/register.html");
  });

  
  $("#lnkLogout").click(function(evt){
    evt.preventDefault();
    sessionStorage.clear();
    $("#topRightNavAnonymous").show();
    $("#topRightNavLogged").hide();
    $("#placeholderSection").load("partials/login.html");
  });
});
