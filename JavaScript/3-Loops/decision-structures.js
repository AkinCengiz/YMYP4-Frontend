// decision structures
/**
 * IF - ELSE IF - ELSE
 * 
 * IF (KOŞUL) => Eğer koşul doğru ise if bloğuna girer ve yapılacak işlemleri yapar
 * 
 * ELSE IF (KOŞUL) => Eğer koşul doğru ise else if bloğuna girer ve yapılacak işlemleri yapar
 * 
 * ELSE => Eğer koşullar sağlanmıyorsa else bloğuna girer ve yapılacak işlemleri yapar.
 * 
 * 
 * 
 */



let number1 = 17;
let number2 = 23;
let number = 5;
//IF - ELSE
if(number1 % 2 == 0){
    console.log(number1 + " Sayı çifttir");
}else{
    console.log(number1 + " Sayı tektir");
}

//IF-ELSE IF - ELSE
number = 0;
if(number > 0){
    console.log(number + " sayısı pozitiftir...");
}else if(number < 0){
    console.log(number + " sayısı negatiftir...");
}else{
    console.log(number + " sayısı nötr (0)...");
}

// decision structures
/**
 * SWITCH - CASE
 * 
 * switch (variable - sabit - değişken) => Switch bloğu sabit bir değişkenin aldığı değere göre istenilen kodları çalıştırmamızı sağlar
 * 
 * case value : => Eğer değişkenin değeri value değerine eşitse o case içereisinde bulunan kodlar çalıştırılır
 * 
 *  
 */

let date = new Date();
let weekDay = date.getDay();
console.log(weekDay);//3
switch(weekDay){
    case 0 :
        console.log("Pazar");
        break;
    case 1:
        console.log("Pazartesi");
        break;
    case 2:
        console.log("Salı");
        break;
    case 3:
        console.log("Çarşamba");
        break;
    case 4:
        console.log("Perşembe");
        break;
    case 5:
        console.log("Cuma");
        break;
    case 6:
        console.log("Cumartesi");
        break;
    default:
        console.log("Yanlış bir gün değeri verildi.");
        break;
}

console.log("BREAK");
weekDay = 1;
switch(weekDay){
    case 1:
        //console.log("Pazartesi");
    case 2:
        //console.log("Salı");
    case 3:
        //console.log("Çarşamba");
    case 4:
        //console.log("Perşembe");
    case 5:
        console.log("Hafta içi");
        break;
    case 6:
    case 0:
        console.log("Hafta Sonu");
        break;
    default:
        console.log("Yanlış bir değer girdiniz...");
        break;
}
console.log("Switch Sonu");

//TERNARY OPERATOR
// KOŞUL ? KOŞUL-DOĞRUYSA-ÇALIŞIR : KOŞUL-YANLIŞSA-ÇALIŞIR

let age = 17;

(age > 18) ? console.log("Reşit olmuşsun...") : console.log("Reşit değilsin...");