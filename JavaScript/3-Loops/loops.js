/**
 * LOOPS - (DÖNGÜLER)
 * 
 * WHILE LOOP
 * 
 * while(Koşul){
 *  Koşul sağlandığı sürece çalıştırılacak kodlar
 * 
 * }
 * 
 * DO-WHILE LOOP
 * 
 *      do{
 *          Koşul sağlandığı sürece çalıştırılacak kodlar (While döngüsünden farklı olarak do-while döngüsü en az 1             kere çalışır)
 *          }while(Koşul)
 * 
 * 
 * 
 * FOR LOOPS
 * 
 *          for(Başlangıç Değeri; Koşul; değer arttırma){
 *             Koşul sağlandığı sürece çalıştırılacak kodlar 
 *          }
 * 
 *          Başlangıç Değeri    : Döngüye girilirken çalışır ve sadece bir kere çalışır.
 *          Koşul               : Döngüye ilk girildiğinde değişkene değer atandıktan hemen sonra ve koşul      sağlandığı                       zaman döngü bloğundaki kodları çalıştırıp arttırma bloğundan sonra çalışır
 *          Arttırma            : Döngü bloğundaki kodları çalıştırdıktan sonra çalışır.
 */

let start = 1;
let finish = 10;
let total = 0;

console.log("WHILE DONGUSU");
while(start <= finish){
    total += start;
    console.log("Start : " + start + " Total : " + total);
    start++;
    
    // if(total == 15){
    //     break;
    // }
}

console.log("Start : " + start);

console.log("DO-WHILE DONGUSU");
start = 1;
total = 0;
do{
    total += start;//0+1=1
    console.log("Start : " + start + " Total : " + total);
    start++;
}while(start <= finish)

console.log("FOR DONGUSU");

start = 1;
total = 0;

for(let i = 0; i < 5; i++){
    console.log("i : " + i);
}
console.log("Start : " + start + " Total : " + total + " Finish : " + finish);

for(;start <= finish;){
    total += start;//0+1=1
    console.log("Start : " + start + " Total : " + total);
    start++;
}

for(let i = 0;i <= 100; i+=5){
    console.log("i : " + i);
}

for(let i = 100;i >= 0; i-=5){
    console.log("i : " + i);
}
let result = 0;
for(let i = 0; i <= 10;i++){
    result += i;
    console.log("Start : " + i + " Total : " + result);
}