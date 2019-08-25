var url = "https://jsonplaceholder.typicode.com/users";

var xmlHttp = null;
if (window.XMLHttpRequest) {
  xmlHttp = new XMLHttpRequest();
} else {
  xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
}

function loadData() {
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4) {
      console.log("request is processed");
      console.log(xmlHttp.status);

      if (xmlHttp.status == 200) {
        console.log("Request is success!");
        var userData = JSON.parse(xmlHttp.responseText);
        console.log(userData.length);

        var table =
          "<table><tr><th>Name</th><th>Username</th><th>Email</th></tr>";

        userData.forEach(function(entry) {
            table += "<tr><td>"+entry.name+"</td><td>"+entry.username+"</td><td>"+entry.email+"</td></tr>";
        });

        table +="</table>";

        document.getElementById("grid").innerHTML = table;
      }
    }
  };

  xmlHttp.open("GET", url, true);
  xmlHttp.send();
}

document.getElementById("btnLoad").addEventListener("click", function() {
  loadData();
});
