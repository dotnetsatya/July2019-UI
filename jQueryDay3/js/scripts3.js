$(function() {
  var url = "https://jsonplaceholder.typicode.com/posts";

  $.ajax({
    url: url,
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function(data) {
        console.log(data);
      //do something with data
      var list = "<DL>";
      $.each(data, function(key, value) {
        list += "<DT>" + value.title + "</DT><DD>" + value.body + "</DD>";
      });

      list += "<DL>";
      $("#grid").html(list);
    },
    error: function(error) {
      console.log(error.status + " " + error.statusText);
    }
  });


  setTimeout(function() {
    $("dt").on('click', function() {
      $(this)
        .next()
        .toggle();
    });
  }, 1000);
});
