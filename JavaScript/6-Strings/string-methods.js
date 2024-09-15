/**
 * STRINGS METHODS
 * 
 * 
 * 
 */

let number = 15;
let firstname = "Akın";
let email = "akincengiz@msn.com";

let message = "Merhaba, ben " + firstname + " Email adresim : " + email;
let message2 = `Merhaba, ben ${firstname} Email adresim ${email}`;   //$"gfgf {değişken}" => Template literal
console.log(message); 
console.log(message2);

console.log("Atatürk'ün dediği gibi \r\"Öğretmenler yeni nesil sizlerin eseri olacaktır...\"");
console.log("Name\t: " + firstname);
console.log("Email\t: " + email);
console.log("Address\t: Eyüp\\İstanbul");

//METOTLAR
//Length => Değişken değerinin karakter sayısını verir.
console.log(message.length)

//repeat() => String değişke içerisinde belli bir kısmı bir kaç tekrar olarak yazdırır
console.log("Bu proje değerlendirme sonucunda : " + "çok".repeat(3)+ " başarılı olmuştur.");

//split() => String değişkeni belirlenen karakterlerden ayırarak diziye çevirir,
let cities = "İstanbul,Ankara,İzmir,Kayseri,Nevşehir,Gaziantep,Rize";
const CITYARRAY = cities.split(",");
console.log(cities);
console.log(CITYARRAY);

let text = "Javascript string metotlar konusunu işliyoruz.";
let textWords = text.split(" ");
console.log(text);
console.log(textWords);

//toUpperCase() => String ifadenin bütün karakterlerini büyük harfe dönüştürür.
//toLowerCase() => String ifadenin bütün karakterlerini küçük harfe dönüştürür.

let text2 = "Bütün Kelimelerin İlk Harfleri Büyük";
let textUpper = text2.toUpperCase();
console.log(text2);
console.log(textUpper);
let textLower = textUpper.toLowerCase();
console.log(textLower);

//TRIM() => String değerin başındaki ve sonundaki boşlukları kaldırır
//trimStart() => String değerin başındaki boşlukları kaldırır
//trimEnd() => String değerin sonundaki boşlukları kaldırır

let trimText = "         Başında ve Sonunda Boşlukları olan Metin              ";
console.log(trimText + "*");
console.log(trimText.trim() + "*");
console.log(trimText.trimStart() + "*");
console.log(trimText.trimEnd() + "*");

//concat() => String ifadeleri birleştirmeye yarar

let info = firstname.concat(" ",email," ",number);
console.log(info);

console.log("Merhaba".concat(" ","Akın"," ","Cengiz"," ","İstanbul"));

//slice(a,b) => Metin içindeki değerin a başlangıç indeksinden itibaren b bitiş indeksine kadar olan bölümü verir
console.log(text2);
console.log(text2.slice(8,13));
console.log(text2.slice(-8,-5));
console.log(text2.slice(-8));
console.log(text2.slice(8));

//substring
console.log(text2.substring(8,13));

//startWith(a) => Metnin başlangıç değeri parametre ile verilen değere eşitse true değilse false verir
//endWith(a) => Metnin bitiş değeri parametre ile verilen değere eşitse true değilse false verir

let withText = "Başlangıç ve bitiş değerleri kontrol ediliyor.";
console.log(withText);
console.log("Baş ile mi başlıyor\t\t: " + withText.startsWith("Baş"));
console.log("iyor ile mi başlıyor\t: " + withText.startsWith("iyor."));
console.log("Baş ile mi bitiyor\t\t: " + withText.endsWith("Baş"));
console.log("iyor ile mi bitiyor\t\t: " + withText.endsWith("iyor."));

//includes() => Metnin içerisinde parametre ile gönderilen değerin olup olmadığını kontrol eder
console.log(withText.includes("değer"));
console.log(withText.includes("Deneme"));
console.log(withText.includes("ş"));

//indexOf() => Parametre olarak verilen değer eğer değerin içerisinde varsa ilk bulunduğu index bilgisini verir yoksa -1 değeri döner
//lastIndexOf() => Parametre olarak verilen değer eğer değerin içerisinde varsa son bulunduğu index bilgisini verir yoksa -1 değeri döner
console.log(withText.indexOf("değer"));
console.log(withText.lastIndexOf("değer"));
console.log(withText.indexOf("i"));
console.log(withText.lastIndexOf("i"));

//replace(a,b) => Metin içerisinde a parametresi ile verilen ilk değeri b parametresiyle değiştirir,
//replaceAll(a,b) => Metin içerisinde a parametresi ile verilen tüm değerleri b parametresiyle değiştirir,
let replaceText = "Metin içerisinde bulunan belli değerleri değiştirme";
let replace1 = replaceText.replace(" ","-");
console.log(replace1);
console.log(replace1.replace(" ","-"));
let replace2 = replaceText.replaceAll(" ","-");
console.log(replace2);

//padStart() => String uzunluğunu başlangıçtan belli bir karaakter ile belirli bir sayıya tamamlamak için kullanılır.
//padEnd()  => String uzunluğunu sondan belli bir karaakter ile belirli bir sayıya tamamlamak için kullanılır.
let namelength = "Akın";
console.log(namelength);
console.log(namelength.padEnd(15,"."));
console.log(namelength.padStart(15,"."));
console.log("Name".padEnd(15," ")+": ");
console.log("Surname".padEnd(15," ")+": ");
console.log("Address".padEnd(15," ")+": ");
console.log("Age".padEnd(15," ")+": ");
