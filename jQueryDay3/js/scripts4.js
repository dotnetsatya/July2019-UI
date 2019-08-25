$(function() {
  $("#link").attr("href", "http://www.microsoft.com");
  $("#link").attr("title", "Microsoft");
  $("#link").html("microsoft");

  // var str = "           hello            ";
  // var trimmed = $.trim(str);
  // console.log(trimmed.length);

  // var arr = [1, 2, 3, 4, 5, 6];

  // var result = $.grep(arr, function(element, idx) {
  //   return element % 2 == 1 ? true : false;
  // });

  // console.log(result);

  // $("#btn1").click(function() {
  //   console.log($(this).text());
  // });

  // $("#btn1").trigger("click");

  // $("#btn1").greenify();



  var obj = {name: 'satya', job :'trainer'};

  var result = filterArray(obj, 'name');
  console.log(result);





});
