$(function() {
  $.getJSON("js/data.json", function(response) {
    //Here, response is already JavaScript object
    // response.forEach(function(entry) {
    //   console.log(entry.name);
    // });


    var table = "<table><tr><th>Id</th><th>Name</th></tr>";

    $.each(response, function(idx, value) {
        // console.log(idx);
        // console.log(value.name);

        table += "<tr><td>" + value.id +"</td><td>" + value.name + "</td></tr>";
    });

    table +="</table>";
    $("#grid").html(table);

    // console.log(response.length);
    // console.log(response[0].name);
    // console.log(response);
  });
});
