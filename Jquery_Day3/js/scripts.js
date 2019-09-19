$(function(){
    $.getJSON("js/data.json", function(response){
        response.forEach(element => {
            console.log(element.id);
        });
    });
});