var express=require('express');
var app=express();

app.set('view engine','jade');

app.get('/',function(req,res)
{
    res.end("Default route!");
});

app.get('/welcome',function(req,res)
{
    res.end("Hello from Server!");
});

app.get('/employee',function(req,res)
{
    var employees = [];
    employees.push({employeeId: 101, name: 'satya', title: 'QA'});
    employees.push({employeeId: 102, name: 'John', title: 'Lead'});
    employees.push({employeeId: 103, name: 'Jason', title: 'Trainee'});
    res.end(JSON.stringify(employees));
});


var server=app.listen(3000,function()
{
});
