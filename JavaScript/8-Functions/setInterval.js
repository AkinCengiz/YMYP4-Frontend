let date = new Date();
//ID değeri hour olan elementi bir değişkene atıyoruz. getElementById() metodu ile id değerine göre element seçeriz.
const hourTitle = document.getElementById("hour");
const COUNTER = document.getElementById("counter");
//console.log(COUNTER);

//getDate() adında console ekranına o an içinde bulunduğumuz zaman bilgisini yazdıran metot oluşturduk
const getDate = () => {
    console.log(new Date());
}
//GetDate metodunu çağırdık
getDate();


//setInterval ile verdiğimiz değer aralığında çalışmasını istediğimiz komutları periyodik olarak çalıştırabiliriz..
//setInterval(function,periyod) => ilk parametrede function ile çalıştırılacak komutlar yazılır, ikinci parametre ile milisaniye cinsinden ne kadar sürede komutların tekra edilmesi isteniyorsa o yazılır. Örneğin 1 sn için 1000
setInterval(function(){
    getDate();
},3000);

function writeHour(){
    hourTitle.innerText = new Date().toTimeString();
}
writeHour();

const hourInterval = setInterval(function(){
    writeHour();
},1000);

//clearInterval(hourInterval);
let count = 0;
const increment = () => {
    COUNTER.innerHTML = count;
    count++;
}

const runCounter = setInterval(function(){
    increment();
    if(count == 10){
        //clearInterval metodu çalıştırılan interval metodunu sonlandırmak için kullanılır.
        clearInterval(runCounter);
    }
},1000);

function answer(text="") {
    let time = 15000;

    setTimeout(function(){
        finished();
    },time);
}

function finished(){
    document.getElementById("question").innerHTML = "Süre bitti";
}
answer();