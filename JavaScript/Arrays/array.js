const numbers = [1,2,3,4,5];
const cities = ["İstanbul","İzmir","Ankara","Erzurum","Sakarya"];
const mix = [1,2,3.14,"İstanbul",true,"Türkiye",7.14];

console.log(numbers);
console.log(cities);
console.log(mix);


console.log(cities[3]);
console.log(mix[2]);

//DİZİ METOTLARI

//push() => Dizinin sonuna eleman ekler
cities.push("Artvin");
console.log(cities);
mix.push("Adana");
mix.push(false);
console.log(mix);

//pop() => Dizinin sonundaki elemanı siler
numbers.pop();
console.log(numbers);
mix.pop();
console.log(mix);

//shift()   => Dizinin ilk elemanını siler
mix.shift();
console.log(mix);

//unshift() => Dizinin başına eleman ekler
mix.unshift(7);
console.log(mix);

//slice() => Dizinin belli bir kısmını almamıza yarıyor
//slice(index,length) => index değerinden itibaren length indexine  kadar elemanı alır (length indexi dahiil değil). Length değeri verilmezse indexten itibaren bütün elemanları alır
let newArray = mix.slice(3);
console.log(newArray);
console.log(mix);
newArray = mix.slice(4,5);
console.log(newArray);
console.log(mix);

//reverse() => Dizinin elemanlarını terse çevirir
console.log(numbers.reverse());
console.log(cities.reverse());

//concat()  => Dizileri birleştirme işlemi yapar

newArray = numbers.concat(cities);
console.log(newArray);

newArray = mix.concat(numbers);
console.log(newArray);

//indexOf() => Dizi içerisinde aradığımız değerin olup olmadığı bilgisini verir. Eğer yoksa -1 varsa index değerini verir
//Eğer aradığımız değer varsa hangi indexte bulunduğunu verir
console.log(cities.indexOf("İstanbul"));
//Eğer yoksa -1 değerini verir
console.log(cities.indexOf("Bursa"));
cities.push("Ankara");
console.log(cities);
console.log(cities.indexOf("Ankara"));

//lastIndexOf => Dizi içerisinde aradığımız değerin olup olmadığı bilgisini verir. Eğer yoksa -1 varsa ve birden fazlaysa son olarak bulunduğu index değerini verir
cities.unshift("Ankara");
console.log(cities);
console.log("İlk index : " + cities.indexOf("Ankara"));
console.log("Son index : " + cities.lastIndexOf("Ankara"));

//join  => dizi elemanları string olarak birleştirir

console.log(cities.join());
console.log(cities.join(" - "));
console.log(cities.join(" * "));

//sort()    => Dizileri sıralamak için kullanılır
cities.push("A");
console.log(cities.sort());
let numbers2 = [3,5,1,7,17,25,8,13,19,22,390];
console.log(numbers2.sort());

console.log(numbers2.sort(function(small,big){
    return small-big;
}))

console.log(numbers2.sort(function(a,b){
    return b - a;
}))

console.log(numbers);
console.log("Number dizisinin eleman sayısı : " + numbers.length);

//void MetotIsmi(){
// }

for(let i = 0; i < numbers.length; i++){
    console.log("numbers[" + i + "] : " + numbers[i]);
}