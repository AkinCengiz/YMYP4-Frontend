class Person{
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    getFirstName(){
        console.log("Firstname : ", this.firstname);
    }
    getLastName(){
        console.log("LastName : ", this.lastname);
    }
    getInfo(){
        console.log("Firstname : ", this.firstname," LastName : ", this.lastname);
    }
    toString(){
        console.log("Firstname\t: ", this.firstname,"\nLastName\t: ", this.lastname);
    }
}

const person1 = new Person("Akın","Cengiz");
person1.getFirstName();
person1.getLastName();
person1.getInfo();
console.log(person1);

class Employee extends Person{
    constructor(firstname,lastname,salary){
        // this.firstname = firstname;
        // this.lastname = lastname;
        super(firstname,lastname);
        this.salary = salary;
    }
    getSalary(){//Sadece employee sınıfına özel metot tanımlandı.
        console.log("Salary : " + this.salary);
    };
    getInfo(){//Person sınıfına ait olan getInfo metodu override edilerek Employee sınıfına göre düzenlendi.
        console.log("Firstname : ", this.firstname," LastName : ", this.lastname + " Salary : " + this.salary);
    };
    toString(){
        console.log("Firstname\t: ", this.firstname,"\nLastName\t: ", this.lastname + "\nSalary\t\t: " + this.salary);
    }
    //Static metotlar sadece sınıf isimleri ile çağırılır. Yani metodu kullanmak için Sınıfta bir nesne örneği oluşturmak gerekmez. (Zaten oluşturulan nesne üzerinden static olan bir metod çağırılıp çalıştırılamaz)
    static setSalary(salary,amount){//static metot oluşturuldu.
        return salary + amount;
    }
}

const employee = new Employee("Cengiz","Akın",25000);
employee.getSalary();
employee.getFirstName();
employee.getLastName();
employee.getInfo();
console.log(employee);

let total = Employee.setSalary(25000,3500);
console.log("New Salary : ",total);
console.log("New Salary : ",Employee.setSalary(25000,3500));
//employee.setSalary(this.salary,3500);

console.log(person1.toString());
console.log(employee.toString());