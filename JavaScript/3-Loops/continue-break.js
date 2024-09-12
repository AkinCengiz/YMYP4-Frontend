/**
 * CONTINUE => Döngünün o anki iterasyonunu atlamamızı sağlar
 * 
 * BREAK    => Döngüden çıkmamızı sağlar 
 * 
 * 
 * 
 */

for(let i = 0; i < 100; i++){
    if(i % 2 == 0){
        continue;
    }
    console.log("i : " + i);
}

console.log("====================");

for(let i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log(i + " sayısı 15 e tam bölünür...");
        continue;
    }

    if(i > 50){
        console.log("Döngü bitti");
        break;
    }

    if(i % 2 == 0 && i % 3 == 0){
        console.log(i + " sayısı 6 ya tam bölünür...");
    }
}
console.log("Döngü sonrası");