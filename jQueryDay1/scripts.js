// $(document).ready(function() {

// });

$(function() {
  $("#topHeader").text("Hello jQuery!");

  $("#lnk1").click(function(event) {
    event.preventDefault();
    $(this).hide();
  });

  $("#spnYear").text(new Date().getFullYear());

  $("span").css("color", "blue");

  $("h1").css("font-size", "46px");

  $("dt").click(function() {
    $(this)
      .next()
      .toggle(1000);
  });
});
