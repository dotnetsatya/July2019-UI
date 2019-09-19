document.getElementById("topHeader").innerHTML = "Online Telephone Directory";

// document.getElementById("topNav").innerHTML = ;

function foo(){
    alert("Alert from function");
}
//foo();
//alert("Alert coming from main page");

function fn1(){
    var name="sridhar";
    document.getElementById("mainContent").innerHTML = name;
}

//fn1();


// document.getElementById("btnSubmit").addEventListener("click",function (){
//     var fname = "sridhar";
//     var lname = "reddy";
//     var age = 28;
//     var string = fname + " " + lname + " age is " + age;
//     document.getElementById("functionCall").innerHTML = string;
// });
// window.onload = function(){
//     fn2("sridhar", "reddy", 28);
// }


document.getElementById("btnSave").addEventListener("click",function(){
    var fname = document.getElementById("txtfirstName").value;
    var lname = document.getElementById("txtlastName").value;
    var sex = document.getElementById("radSex").value;
    var string = fname + " " + lname + " gender is " + sex;
    document.getElementById("functionCall").innerHTML = string;
});

