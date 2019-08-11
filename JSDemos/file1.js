//Global scope
var employeeId = 1000;
console.log(employeeId);
employeeId = 1001;
console.log(employeeId);
foo();
console.log(employeeId);
foo1();
console.log(employeeId);


function foo(){
    employeeId = 1002;

    //Local scope
    var employeeOrg = "FM Global";
    console.log(employeeOrg);

    if(employeeId >  0){
        console.log(employeeId);
        console.log(employeeOrg);
    }

}

function foo1(){
    employeeId = 1003;
    console.log(employeeId); //works
    
    // if(employeeOrg != undefined){
    //     console.log(employeeOrg); //error 
    // }
    
}

foo2();

function foo2(){
    var index = 1000;
    
    for (let index = 1; index <= 10; index++){
        console.log(index);
    }
    
    console.log(index);
}