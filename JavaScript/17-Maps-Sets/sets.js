//...spread operatörü

//Dizi elemanlarını tek seferde bir değişkene ya da metoda göndermek için kullanılır

const cities1 = ["İstanbul","Ankara","İzmir"];
const cities2 = ["Çanakkale","Sakarya",...cities1];
const cities3 = new Array(...cities1);
console.log("Cities3 : ", cities3);


const multiplyArr = [3,5,8,11,15,17];
const multiplyArray = (a,b,c) => {
    console.log(a*b*c);
}
console.log("********************");
multiplyArray(...multiplyArr);
multiplyArray(multiplyArr[0],multiplyArr[1],multiplyArr[2]);
console.log("********************");


//Destructuring
const [a,b,c] = cities2;
const [x,y] = cities1;
console.log(a,b,c);
console.log(x,y);


const user = {
    name : "Akın",
    surname : "Cengiz"
};

const {name:isim,surname:soyisim} = user;

console.log(isim,soyisim);
// const arr = [1,2,...cities1,...cities2];
// console.log(arr);
const destArr1 = [11,12,13,14,15];
const [num1,num2,...numArr] = destArr1;
console.log("Num1 : ",num1);//11
console.log("Num2 : ",num2);//12
console.log("...numArr : ",numArr);//13,14,15

console.log(cities2);


//SET nesnesi üzerinde her bir eleman benzersiz (unique) olmalıdır.




const numberSets = new Set();

//add() => Set nesnesine eleman eklemek için add() metodu kullanılır.
//Add metodu ile parametre olarak girilen değer set nesnesinde mevcutsa ekleme işlemi yapılmaz.

numberSets.add(1);
numberSets.add(3);
numberSets.add(1);
console.log(numberSets);

const citySets = new Set();
citySets.add("İstanbul");
citySets.add("Ankara");
citySets.add("Eskişehir");
citySets.add("Ankara");
console.log(citySets);

//delete() => Set nesnesinden eleman silmek için kullanılır
citySets.delete("Ankara");
console.log(citySets);

//has() => Set nesnesi içerisinde parametre olarak verilen elemanın olup olmadığını kontrol eder. Varsa true yoksa false değeri döner

console.log(citySets.has("İstanbul"));
console.log(citySets.has("Ankara"));


//values() => Set nesnesi üzerindeki elemanları döndürür. Dizi üzerinde Foreach metoduyla dönüp elemanlara ulaştığımız gibi values metodu ile de elemanlara ulaşabiliriz.
console.log(citySets.values());
