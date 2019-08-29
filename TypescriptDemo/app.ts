enum JobTitle {
    Dev = 100,
    Tester = 101,
    Architect = 102,
    Lead = 103
}


class Employee {
    employeeId: number;
    employeeName: string;
    jobTitle : JobTitle;
    salary: number;
    dob: Date;
    isActive : boolean;
    greetingMessage : string;
}


class EmployeeStore {
    data: Employee [] = [];
    employee: Employee;
    constructor() {
        this.employee = new Employee();

        this.employee.employeeId = 101;
        this.employee.employeeName = "satya";
        this.employee.jobTitle = JobTitle.Architect;
        this.employee.salary = 1000;
        this.employee.isActive = true;
        this.employee.greetingMessage = `Hello.. ${this.employee.employeeName} ${this.employee.jobTitle}`;
        this.data.push(this.employee);
    }

    getEmployees(): Employee [] {
        return this.data;
    }

    sayHello(name :string ) : string  {
        return `Hello. ${name}`;
    }

    submitData(): void{
        //do save logic
    }
    
}

let store = new EmployeeStore();
console.log(store.getEmployees().length);

var employee = store.getEmployees()[0];
console.log(employee.employeeName);
if(employee.isActive == true ) {
    console.log("He is an active employee");
}

console.log(this.employee.greetingMessage);

switch(employee.jobTitle) {
    case JobTitle.Dev:
            console.log("this is for dev");
            break;
    case JobTitle.Architect:
            console.log("this is for architect role");
            break;
}