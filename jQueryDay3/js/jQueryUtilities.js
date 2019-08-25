$.fn.greenify = function() {
  $(this).css("color", "green");
  $(this).css("background-color", "black");
};

$.fn.filterArray = function(data, property) {
  return data[property];
};
