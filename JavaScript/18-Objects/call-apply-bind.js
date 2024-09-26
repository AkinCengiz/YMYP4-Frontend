const user = {
    firstname : "Akın",
    lastname : "Cengiz"
};

const person = {
    firstname : "isim",
    lastname : "soyisim",
    // showInfo : function(){
    //     console.log(this);
    // }
};

function writing(x){
    //console.log(this);
    console.log(this.firstname,this.lastname,x);
}

writing(15);
//person.showInfo()

//call() => metodismi.call(hangiNesneÜzerindeCalisacak,metotParametresi)
// call metodu metod isminden sonra nokta operatörü ile çağrılır ve parametre olarak ilk parametre üzerinde çalışacağı nesne sonraki parametreler ise metodun kendi parametreleri olur.

writing.call(person,"İstanbul");//writing metodunu person nesnesi üzerinde çalıştırıyoruz.

writing.call(user,25000);//writing metodunu user nesnesi üzerinde çalıştırıyoruz.

const manager = {
    salary : 5000,
    prim : 2
};

const employee = {
    salary : 2000,
    prim : 1.5
};

function calculateSalary(eatMoney,wayManey){
    return this.salary * this.prim + eatMoney + wayManey;
}


function salaryCalculate(eatMoney,wayManey){
    return this.salary * this.prim + eatMoney + wayManey;
}

//CALL METODU İLE KULLANIMI

let managerSalary = calculateSalary.call(manager,4500,2000);
console.log("Manager Salary : ",managerSalary);

let employeeSalary = calculateSalary.call(employee,4500,2000);
console.log("Employee Salary : ",employeeSalary);

//apply() => Çalışma mantığı tamamen call ile aynıdır. Ancak metod parametreleri dizi olarak verilir.
// apply metodu metod isminden sonra nokta operatörü ile çağrılır ve parametre olarak ilk parametre üzerinde çalışacağı nesne sonraki parametreler ise dizi olarak metodun kendi parametreleri olur.

managerSalary = calculateSalary.apply(manager,[4500,2000]);
console.log("Manager Salary : ",managerSalary);
employeeSalary = calculateSalary.apply(employee,[4500,2000]);
console.log("Employee Salary : ",employeeSalary);

//Bind Metodu ==> Tanımlı bir metodu istediğimiz sınıf üzerinde çalışsacak şekilde kopyalar.
// Yani Metot1 isimli bir metodumuz olsun bu metodu Obje1 isimli nesnemiz ya da sınıfımız üzerinde çalışacak bir kopyasını elde etmek istiyoruz. O zaman bind metodu yardımıyla tanımlı olan metodun sadece nesnemiz üzerinde çalışacak bir kopyasını oluştururuz.



const calculateManagerSalary = salaryCalculate.bind(manager);
managerSalary = calculateManagerSalary(4500,2000);
console.log("Bind() => Manager Salary : ",managerSalary);


const calculateEmployeeSalary = salaryCalculate.bind(employee);
employeeSalary = calculateEmployeeSalary(4500,2000);
console.log("Bind() => Employee Salary : ",employeeSalary);