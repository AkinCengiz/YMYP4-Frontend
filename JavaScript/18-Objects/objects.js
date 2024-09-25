//Bütün sınıflar ve veri türleri temel olarak object sınıfından miras alır

// public class Person{
//     string name;
//     string surname;
//     int age;
// }

// public class Employee : Person{
//     string name;
//     string surname;
//     int age;
//     public override toString(){

//     }
// }

const user = {
    firstname : "Akın",
    lastname : "Cengiz",
    getInfo : function(){
        console.log(this.firstname,this.lastname);
    }
}
console.log(user);

const user2 = new Object();
user2.firstname = "Akın";
user2.lastname = "Cengiz";
user2.getInfo = function(){
    console.log(this.firstname,this.lastname);
}
console.log(user2);

// function Person(){
//     this.firstname = "Akın";
//     this.lastname = "Cengiz";
//     this.getInfo = function(){
//         console.log(this.firstname,this.lastname);
//     }
// }
function Person(firstname,lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}


Person.prototype.getInfo = function(){    
        console.log(this.firstname,this.lastname);
};

const person = new Person("Fırat","Kılıç");
const person2 = new Person("Recep","Altun");
const person3 = new Person();
// person.firstname = "Değişti"
person.getInfo();
person2.getInfo();
person3.getInfo();
console.log(person);
console.log(person2);
console.log(person3);

function Product(name,price,stock,category){
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.category = category;
};

const product = new Product("Hp 15TR",15000,17,"Bilgisayar");
Product.prototype.getProduct = function(){
    console.log(this.name,this.price,this.category);
}

Product.prototype.tax = 0.18;
const p2 = new Product();
const p3 = new Product("Casper Desktop",12000,7,"Bilgisayar");
p3.deneme = "Deneme";
product.getProduct();
console.log("Ürün Adı : ",product.name);
console.log("Fiyatı : ",product.price);
console.log("Stok Miktarı : ",product.stock);
console.log("Kategorisi : ",product.category);
console.log(product);
console.log(p3);
console.log(p2);

product.getProduct();
p2.getProduct();
p3.getProduct();