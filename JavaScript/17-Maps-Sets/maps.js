const person = {
    name : "Akın",
    surname : "Cengiz"
}

const cityMap = new Map();


//set() => Set(key,value) metodu ile map üzerine eleman ekleme işlemi yaparız. ilk parametre key ikinci parametre value değeridir.
cityMap.set("06","Ankara");
cityMap.set("34","İstanbul");
//get() => Get(key) metodu ile parametre ile verilen key değerine karşılık gelen valu değerini elde ederiz.
let value = cityMap.get("06");
value = cityMap.get("34");

value = cityMap.get("35");//Eğer get parametresine map üzerinde olmayan bir key değeri verilirse undefined değeri döndürür.

//clear() => clear metodu map içerisindeki bütün elemanları siler. Map nesnesini temizler.
cityMap.clear();

cityMap.set("06","Ankara");
cityMap.set("34","İstanbul");
cityMap.set("İstanbul","34");

const namesMap = new Map();
namesMap.set(1,"Ahmet Miran Irmak");
namesMap.set(2,"Hidayet Alperen Özyürek");
namesMap.set(3,"Menderes Duman");
namesMap.set(4,"Mihriban Şimşek");
namesMap.set(5,"Murat Karakaya");
namesMap.set(6,"Mustafa Tuğrul"),
namesMap.set(7,"Recep Altun");
namesMap.set(8,"Yekta Pektaş");
//namesMap.set(8,"Deneme"); => Map üzerinde var olan bir anahtara ait değer eklenirse anahtar değeri yeni değer ile güncellenir.
console.log(namesMap);

const names = ["İsim 1","İsim 2"];
console.log(names);
console.log(person);

//has() => has(key) parametre ile gönderilen key değerinin map üzerinde tanımlı olup olmadığını kontrol eder. Tanımlıysa true değilse false döndürür.
let isKey = cityMap.has("06");
isKey = cityMap.has("54");
console.log(isKey);

//delete(key) => parametre ile verilen key değerini map üzerinden kaldırır(siler);
console.log(cityMap);
cityMap.delete("06");
console.log(cityMap);
// console.log(cityMap);
// console.log(value);

//keys() => Map üzerindeki key değerlerini verir
console.log(namesMap.keys());

//values() => Map üzerindeki value değerlerini verir
console.log(namesMap.values());

//size() => Map üzerindeki eleman sayısını verir
console.log(namesMap.size);


//Map üzerindeki değerleri elde etmek için foreach metoduna tek parametre gönderebiliriz.
namesMap.forEach((x)=>{
    console.log("Map Foreach : ",x);
})

//Map üzerindeki değerleri ve keyleri elde etmek için foreach metoduna iki parametre gönderebiliriz. İşk parametre değeri ikinci parametre key verir
namesMap.forEach((x,y)=>{
    console.log("Key : ",y," - Value : ",x);
})

for(let name of namesMap){
    console.log(name);
}

for(let key of namesMap.keys()){
    console.log(key);
}

for(let value of namesMap.values()){
    console.log(value);
}

const numbers = [1,2,3,4,5,6];

numbers.forEach((number)=>{
    console.log(number);
})

let cubes = [];
numbers.forEach((number)=>{
    let value = number * number * number;
    cubes.push(value);
})
console.log(cubes);

const cubes2 = numbers.map((number)=>{
    return number * number * number;
})
console.log(cubes2);