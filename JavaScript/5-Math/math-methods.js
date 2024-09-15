/**
 * MATH METHODLARIMIZ
 * 
 * MATH Sabitleri
 * Math.PI => Pi sayısını verir
 * Math.E => Euler Sayısı
 * Math.LN10 => Logaritma 10 un e tabanında logaritmasını verir * 
 */


//SABİTLER - CONSTS
//Math.PI

const PI = Math.PI;
console.log(PI);

//Euler => Math.E
const E = Math.E;
console.log(E);

const LOG10 = Math.LN10;
console.log(LOG10);

//METHODS

//Trigonometrik Metotlar
//Sin()

let angle = 90;

//Sinus alma
let sinus = Math.sin(angle);
console.log(sinus);
//cosinus alma
console.log(Math.cos(angle));
//tanjant alma
console.log(Math.tan(angle));

//Logaritmik Fonksiyonlar
//log() => Verilen sayının e tabanında logaritmasını alır

let number = 10;
let log10 = Math.log(number);
console.log(log10);

//log10() => Verilen sayısın 10 tabanında logaritma karşılığını verir
console.log(Math.log10(number));

//log1p() => Parametre olarak Verilen sayının 1+x değerinin e tabanında logaritmasını verir. (Verilen sayının bir fazlasının e tabanına göre logaritmasını hesaplar)
console.log(Math.log1p(number));

//exp() => Verilen sayının E^x hesabını verir
console.log(Math.exp(number));//E^number


//SIK KULLANILAN MATH METOTLARI
//Abs() => Mutlak Değeri verir
let number1 = -5;
console.log(Math.abs(number1));

//Math.sqrt() => Parametre ile verilen sayının karekök değerini verir
number1 = 16;
console.log(Math.sqrt(number1));

//Math.cbrt => Parametre ile verilen sayının karekök değerini verir
console.log(Math.cbrt(8));

//Math.ceil() => Parametre ile verilen ondalıklı sayıyı yukarı yuvarlar
console.log(Math.ceil(3.14));

//Math.floor() => Parametre ile verilen ondalıklı sayıyı aşağı yuvarlar
console.log(Math.floor(3.14));

//Math.round() => Parametre ile verilen ondalıklı sayıyı kendisine en yakın olan tam sayıya yuvarlar
console.log(Math.round(3.14));
console.log(Math.round(3.54));

//Math.max() => Parametre ile verilen sayılar arasında en büyük olanını verir
console.log(Math.max(3,8));
console.log(Math.max(3,8,15,23,7,14,1));

//Math.min() => Parametre ile verilen sayılar arasında en küçük olanını verir
console.log(Math.min(3,8));
console.log(Math.min(3,8,15,23,7,14,1));

//Math.pow(a,b) => a parametresinin b üssünün sonucunu verir
console.log(Math.pow(2,3));
console.log(Math.pow(8,2));
console.log(Math.pow(3,4));

//Math.random() => 0 ile 1 arasında rastgele sayı üretir
console.log(Math.random());
let randomNumber = Math.ceil(Math.random()*100);//0,2658743 * 100 = 26,58743
console.log("Random Number : " + randomNumber);