// "use strict"
//JSON => JavaScript Object Notation ()


//<user>
//  <name></name>
//  <surname></surname>
//</user>

//JSON VERİ YAPISI
//  1 - Veriler key:value değer çiftleri olarak tutulur
//  2 - Veriler birbirinde , (virgül) ile ayrılır
//  3 - Object türleri {} arasında tanımlanır. Başka bir deyişle {} (Süslü parantezler object türü tutar)
//  4 - Array türleri [] arasında tanımlanır. Başka bir deyişle [] (Köşeli parantezler array türü tutar)
let data = {
    "users" : [
        {
            "name":"Akın",
            "lastname":"Cengiz"
        },
        {
            "name":"Akın",
            "lastname":"Cengiz"
        },
        {
            "name":"Akın",
            "lastname":"Cengiz"
        },
        {
            "name":"Akın",
            "lastname":"Cengiz"
        }

    ],
    "language" : "İngilizce",
    "email" : "asd@zxc.com"
}

let person = {
    "name":"abc",
    "users":[]
};

console.log(data);
console.log(person);

console.log(data?.users);
console.log(person?.users[2]);

console.log(data.users[0].name, data.users[0].lastname);


//JSON.stringify() => JSON dosya içerisindeki veriyi string bir değer dönüştürür.

//1. Kullanımı => Parametre olarak verilen json verisini stringe çevirir. JSON.stringify(jsonVerisi); Tek parametre olarak json verisi alır
let jsondata = JSON.stringify(data);
console.log(jsondata);

//2. Kullanımı => Parametre olarak ilk parametre json veri kaynağı, ikinci parametrede ise gösterilmek istenen alanlar dizi olarak tanımlanır.
jsondata = JSON.stringify(data,["language","email"]);
console.log(jsondata);

jsondata = JSON.stringify(data,["users","name","email"]);
console.log(jsondata);

//3. Kullanım => 1. parametre json veri kaynağı, 2. parametre gösterilecek alanlar ve 3. parametre ise veriler arasında kaç karakter (tab) boşluk bırakılacağı bilgisi

jsondata = JSON.stringify(data,null,3);
console.log(jsondata);
jsondata = JSON.stringify(data,["users","name","lastname"],3);
console.log(jsondata);