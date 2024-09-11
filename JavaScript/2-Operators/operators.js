// ARİTMETİK OPERATÖRLER
/*
+ => Toplama
- => Çıkarma
* => Çarpma
/ => Bölme
% => Mod Alma
** => Üs Alma

++ => 1 arttırır
-- => 1 azaltır
+= => topla ve ata
-= => çıkar ve ata
*= => Çarp ve ata
/= => Böl ve ata
%= => Mod al ve ata
**= => üs al ve ata

*/

let number1 = 30;
let number2 = 5;

let result;

result = number1 + number2;
result = number1 - number2;
result = number1 * number2;
result = number1 / number2;
result = number1 % number2;
number2 = 7;
result = number1 % number2;
number1 = 2;
number2 = 3;
result = number1 ** number2;
result = number2 ** number1;
console.log("Result : " + result);

number1 = 4;

number1++;
number1--;

number1 += 5;//number1 = number1 + 5;
number1 -= 2;//number1 = number1 - 2;
number1 *= 3;//number1 = number1 * 3;
number1 /= 7;//number1 = number1 / 7;
number1 %= 2;//number1 = number1 % 2;
number1 += 4;
number1 **= 3;//number1 = number1 ** 3;
console.log(number1);//125

number1++;
let number3 = ++number1;
console.log("Number3 : " + number3 + " - Number1 : " + number1);//Number3 : 126 - Number1 : 126

let number4 = number1++;
console.log("Number4 : " + number4 + " - Number1 : " + number1);//Number4 : 126 - Number1 : 127

/**
 * KARŞILAŞTIRMA OPERATÖRLERİ
 * 
 * == (Değerlerin Eşit olup olmadığını kontrol eder eşitse true değilse false)
 *  == değişkenin sadece değerlerinin eşit olup olmadığını kontrol eder. Değişken tiplerine bakmaz.
 * === (Değerlerin ve tiplerin Eşit olup olmadığını kontrol eder eşitse true değilse false)
 * != (Eğerlerin eşit olmadığı durumlarda true eşit olduğu durumlarda false değerini verir)
 * < (İlk değerin ikinci değerden küçük olduğu durumlarda true diğer durumlarda (eşit veya büyük) false değeri verir)
 * <= (İlk değerin ikinci değerden küçük ya da eşit olduğu durumlarda true diğer durumlarda (büyük) false değeri verir)
 * > (İkinci değerin birinci değerden büyük olduğu durumlarda true diğer durumlarda (eşit veya küçük) false değeri verir)
 * <= (İkinci değerin ilk değerden büyük ya da eşit olduğu durumlarda true diğer durumlarda (küçük) false değeri verir)
 */

let age1 = 22;
let age2 = 22;
age2 = 23;
age2 = "22";
//age2 = 25;

if(age1 == age2){
    result = "Age1 ile Age2 eşittir"
}else{
    result = "Age1 ile Age2 eşit değildir."
}
console.log(result);

if(age1 === age2){
    result = "Age1 ile Age2 eşittir"
}else{
    result = "Age1 ile Age2 eşit değildir."
}

console.log(result);

if(age1 != age2){
    result = "Age1 ile Age2 eşit değildir. (TRUE)"
}else{
    result = "Age1 ile Age2 eşittir. (FALSE)"
}

let sayi1 = 5, sayi2 = 10, sayi3 = 5;
result = (sayi1 < sayi2);
console.log(result);//True
result = (sayi1 <= sayi2);
console.log(result);//True
result = (sayi1 < sayi3);
console.log(result);//false
result = (sayi1 <= sayi3);
console.log(result);//true

console.log("BÜYÜKTÜR OPERATÖRÜ")

result = (sayi1 > sayi2);
console.log(result);//False
result = (sayi1 >= sayi2);
console.log(result);//False
result = (sayi1 > sayi3);
console.log(result);//false
result = (sayi1 >= sayi3);
console.log(result);//true
result = (sayi2 > sayi1);
console.log(result);//True
result = (sayi2 >= sayi1);
console.log(result);//True

/**
 * NANTIKSAL OPERATÖRLER
 * 
 * && - VE => her iki taraf doğru ise true diğer durumlarda false değeri verir
 * 
 * || - VEYA => her iki taraf yanlış ise false diğer durumlarda true değeri verir
 * 
 * ! - DEĞİL => Sonuç true ise false, false ise true sonucunu verir
 * 
 */
console.log("MANTIKSAL OPERATÖRLER")
console.log("VE - && OPERATÖRÜ")
let a = 10, b = 11, c = 12;

result = (a < b && b < c);// 10 < 11 && 11 < 12 => true && true => result = true
console.log(result);
result = (b < a && b < c);// 11 < 10 && 11 < 12 => true && true => result = false
console.log(result);
result = (a < b && b > c);// 10 < 11 && 12 < 11 => true && true => result = false
console.log(result);

console.log("VEYA - || OPERATÖRÜ");

result = (a < b || b < c);// 10 < 11 || 11 < 12 => true || true => result = true
console.log(result);
result = (b < a || b < c);// 11 < 10 || 11 < 12 => false || true => result = true
console.log(result);
result = (a < b || b > c);// 10 < 11 || 12 < 11 => true || false => result = true
console.log(result);
result = (a > b || b > c);// 10 < 11 || 12 < 11 => false || false => result = false
console.log(result);

console.log("DEĞİL - ! OPERATÖRÜ");

result = !(a < b || b < c);// 10 < 11 || 11 < 12 => true || true => result = false
console.log(result);
result = !(b < a || b < c);// 11 < 10 || 11 < 12 => false || true => result = false
console.log(result);
result = !(a < b || b > c);// 10 < 11 || 12 < 11 => true || false => result = false
console.log(result);
result = !(a > b || b > c);// 10 < 11 || 12 < 11 => false || false => result = true
console.log(result);