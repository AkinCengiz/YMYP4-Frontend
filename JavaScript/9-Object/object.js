const cars = [
    ["BMW","FORD","TOGG"],
    ["34a12","34b23","34c65"],
    [2020,2021,2022]];
const cars2 = [["BMW","34a12",2020],["FORD","34b23",2021]];
console.log(cars[0][1]);
console.log(cars);
console.log(cars2);


//OBJECT
//Object yapıları key : value değer çiftleri şeklinde tutulur.
const person = {
    name : "Akın",
    surname : "Cengiz",
    Address : "İstanbul"
};
console.log(person);

//object özelliklerine . (nokta) operatörü yardımıyla ulaşabiliriz.
console.log(person.Address);

//Object içinde başka bir object olabilir.
const employee = {
    firtName : "Akın",
    lastName : "Cengiz",
    programLanguages : ["CSharp","Java","JavaScript"],
    Address : {
        city : "İstanbul",
        town : "Eyüp",
        district : "Göktürk",
        buildNumber : 8
    },
    driverCertivicate : true,
    getInfo : () => {
        console.log("metot gövdesi");
    }
};

console.log(employee);
console.log(employee.Address)
console.log(employee["Address"]);

const emp = ["Akın","Cengiz",true,["İstanbul","Eyüp","Göktür",8],["CSharp","Java","JavaScript"]];
console.log(emp);

console.log(this);