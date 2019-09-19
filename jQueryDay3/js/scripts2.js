$(function() {
  $.ajax({
    url: "js/data.json",
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function(data) {
      var str = "<table border='1'><tr><th>Id</th><th>Name</th></tr>";

      $.each(data, function(key, item) {
        str += "<tr><td>" + item.id + "</td><td>" + item.name + "</td></tr>";
      });

      str += "</table>";

      $("#grid").html(str);
    },
    error: function(error) {
      console.log(error.status +" " + error.statusText);
    }
  });
});
