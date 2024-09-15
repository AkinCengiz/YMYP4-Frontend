let date = new Date();
console.log(date);
let date2 = new Date(2000,7,24,17,47,23,451);
console.log(date2);



//getDay => Tarih değişkeninin haftanın kaçıncı günü olduğu bilgisini verir
let day = date.getDay();

switch(day){
    case 0:
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
}
//getFullYear() => Tarihin yıl bilgisini verir
console.log("Year : " + date.getFullYear());
//getDate()     => Tarih değişkeninin Gün bilgisini verir

console.log("Bugün ayın " + date.getDate() + ". günü");
date.setDate(25);
console.log("Bugün ayın " + date.getDate() + ". günü");

//getMonth()    => Tarih Değişkeninin ay bilgisini verir
console.log("Ay : " + (date.getMonth()+1));
date.setMonth(11);
console.log("Ay : " + (date.getMonth()+1));

//getHours()    => Tarih değişkeninin saat bilgisini verir
console.log("Saat : " + date.getHours());
date.setHours(17);
console.log("Saat : " + date.getHours());

//getMinutes()    => Tarih değişkeninin dakika bilgisini verir
console.log("Dakika : " + date.getMinutes());
date.setMinutes(11);
console.log("Dakika : " + date.getMinutes());

//getSeconds()    => Tarih değişkeninin saniye bilgisini verir
console.log("Saniye : " + date.getSeconds());
date.setSeconds(39);
console.log("Saniye : " + date.getSeconds());

//getTime() => 1 Ocak 1970 tarihinden itibaren geçen milisaniye bilgisini verir
console.log(date.getTime());


let now = new Date();
console.log(now);
//toDateString()    => Tarih bilgisini gösterir (Haftanın günü, Ay Gün Yıl)
console.log(now.toDateString());
//toTimeString()    => Saat bilgisini verir
console.log(now.toTimeString());
//toDateString()    => Tarih bilgisini gösterir (Haftanın günü, Ay Gün Yıl)
console.log(now.toLocaleDateString());
//toTimeString()    => Saat bilgisini verir
console.log(now.toLocaleTimeString());