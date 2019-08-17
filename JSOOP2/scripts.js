function Person(name, email, address) {
    this.name = name;
    this.email = email;
    this.address = address;

    this.toString = function() {
        return this.name + " " + this.email + " " + this.address;
    }
}


function Teacher(name, email, address, subject){

    Person.call(this, name, email, address);
    this.subject = subject;
}


function Student(name, email, address, course){

    Person.call(this, name, email, address);
    this.course = course;
}


Teacher.prototype = Object.create(Person.prototype);
Student.prototype = Object.create(Person.prototype);

Student.prototype.enrollCourse = function() {
    return this.name + " enrolled for " + this.course;
}



var teacher1 = new Teacher('sat', 'sat@gmail.com', 'RI', 'JavaScript');
console.log(teacher1.subject);
console.log(teacher1.toString());


var student1 = new Student('satuya', 'satya@gmail.com', 'Ma', 'JavaScript Short Term');
console.log(student1.course);
console.log(student1.toString());
console.log(student1.enrollCourse());


console.log(Person.prototype);
console.log(Teacher.prototype);
console.log(Student.prototype);
