//LOCAL STORAGE
//Veriler local storage üzerinden silinene kadar hafızada kalır. Tarayıcıyı, pencereyi ya da uygulamayı kapatmamız verilerin silinmesine neden olmaz.


//Input elementlerimizi seçerek bir değişkene atıyoruz.
const keyInput = document.getElementById("key");
const valueInput = document.getElementById("value");

//
//Button elementlerimizi seçerek bir değişkene atıyoruz.
const addButton = document.querySelector("#add");
const deleteButton = document.querySelector("#delete");
const clearButton = document.querySelector("#clear");


//LOCAL STORAGE İÇERİSİNDEKİ VERİLERİN HEPSİNİ SİLME İŞLEMİ
clearButton.addEventListener("click",function(){
    localStorage.clear();
    keyInput.focus();
})

addButton.addEventListener("click",function(){
    localStorage.setItem(keyInput.value,valueInput.value);
    keyInput.value = "";
    valueInput.value = "";
    keyInput.focus();
})

deleteButton.addEventListener("click",function(){
    localStorage.removeItem(keyInput.value);
    keyInput.value = "";
    keyInput.focus();
})

let number = localStorage.getItem("Number");
console.log(number, typeof number);
number = Number.parseInt(localStorage.getItem("Number"));
console.log(number, typeof number);

localStorage.setItem("isActive",true);
let isActive = localStorage.getItem("isActive");
console.log(isActive,typeof isActive);

const cities = ["İstanbul","İzmir","Antalya"];
localStorage.setItem("Cities",cities);
let cityList = localStorage.getItem("Cities");
console.log(cityList, typeof cityList);

localStorage.setItem("cityArray",JSON.stringify(cities));
cityList = localStorage.getItem("cityArray");
console.log(cityList, typeof cityList);
cityList = JSON.parse(localStorage.getItem("cityArray"));
console.log(cityList);

const user = {name:"Akın",lastname:"Cengiz", lang:["C#","Java","JavaScript"]};
localStorage.setItem("user",user);
localStorage.setItem("userDetail",JSON.stringify(user));
let userStr = localStorage.getItem("user");
let userJson = localStorage.getItem("userDetail");
console.log(userStr,typeof userStr);
console.log(userJson, typeof userJson);
console.log(JSON.parse(userJson));