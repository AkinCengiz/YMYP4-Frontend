//INHERITANCE - KALITIM


/*
Person(firstname,lastname);

function Person(firstname,lastname){
    this.firstname = fistname;
    this.lastname = lastname;
}
*/
function Person(firstname,lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}
Person.prototype.getFirstname = function(){
    console.log(this.firstname);
}
Person.prototype.getLastname = function(){
    console.log(this.lastname);
}
Person.prototype.getInfo = function(){
    console.log("İsim : " + this.firstname + " - Soyisim : " + this.lastname);
}

function Employee(firstname,lastname,salary){
    // this.firstname = firstname;
    // this.lastname = lastname;
    Person.call(this,firstname,lastname);
    this.salary = salary;
};

let x = new Person()
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.getSalary = function(){
    console.log("Maaş : " + this.salary);
}
Employee.prototype.getInfo = function(){
    console.log("İsim : " + this.firstname + " - Soyisim : " + this.lastname + " - Maaş : " + this.salary);
}

const person = new Person("Akın","Cengiz");
const employee = new Employee("Ahmet Miran","Irmak",25000);
console.log(person);
console.log(employee);
employee.getFirstname();
person.getFirstname();

person.getInfo();
employee.getInfo();