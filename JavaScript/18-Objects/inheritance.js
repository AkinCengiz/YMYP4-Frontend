function Person(firstname,lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}
Person.prototype.getInfo = function(){
    console.log("Name : " + this.firstname + " - Surname : " + this.lastname);
}
Person.prototype.getName = function(){
    console.log("Name : " + this.firstname);
}



//Object.create() Metodu

const parent = {
    firstname : "Akın",
    lastname : "Cengiz",
    getInfo : function(){
        console.log("Name : " + this.firstname + " - Surname : " + this.lastname);
    }
};

const child = Object.create(parent);
child.age = 25;
child.firstname = "deneme";
child.email = "asd@qwe.com"
child.firstname = 5;
console.log(child);

function Customer(firstname,lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

Customer.prototype = Object.create(Person.prototype);
Customer.prototype.getLastname = function(){
    console.log("Surname : " + this.lastname);
}

const customer = new Customer("İsim","Soyisim");
console.log(customer);
customer.getInfo();
customer.getName();
customer.getLastname();

function Employee(firstname,lastname,salary){
    this.firstname = firstname;
    this.lastname = lastname;
    this.salary = salary;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.getSalary = function(){
    console.log("Salary : " + this.salary);
}

const emp = new Employee("Personel Ad","Personel Soyad",25000);
console.log(emp);


