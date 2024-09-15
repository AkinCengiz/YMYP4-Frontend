//Element Seçme

//getElementByTagName => Element ismine göre seçme 
//Sayfa üzerinde bulunan parametre olarak verilen etiketlerin tamamını liste olarak verir
let element;
element = document.getElementsByTagName("li");
element = document.getElementsByTagName("div");
//getElementById()  => Elementin id bilgisine göre elementi getirir
element = document.getElementById("nav");
// let liElement = document.createElement("li");
// //liElement = `<li class="list-item"></li>`;
// liElement.innerText = "Bu sonradan eklendi.";
// element.appendChild(liElement);
element = document.getElementById("section1");

//getElementClassName() => Class name değerine göre elementleri getirir.
element = document.getElementsByClassName("list-item");



//querySelector => CSS teki seçiciler gibi çalışır
element = document.querySelector(".content-text");//class ismine göre class ismi eşleşen ilk elementi verir
element = document.querySelector("#nav");
element = document.querySelector("#section3");//id ismine göre elementi seçer
element = document.querySelector("div"); //Element ismine göre eleman seçer ilk bulduğu elementle eşleşir

//querySelector => CSS teki seçiciler gibi çalışır
element = document.querySelectorAll(".content-text");//class ismine göre class ismi eşleşen tüm elementleri verir. GetElementByClassName ile aynı çalışır
element = document.querySelectorAll("#nav"); // Aynı id ismine sahip elementlerin hepsini getirir. (Ancak id her zaman 1 tane olmalıdır o yüzden id ile kullanılması gereksiz.)
//element = document.querySelector("#section3");//Aynı id ismine sahip elementlerin hepsini getirir. (Ancak id her zaman 1 tane olmalıdır o yüzden id ile kullanılması gereksiz.)
element = document.querySelectorAll("div"); //Element ismine sahip bütün elemanları getirir. getElementByTagName ile aynı çalışır

element = document.getElementById("section2");
element.style.backgroundColor = "red";
element.style.color = "white";
element.style.padding = "1rem";
element.classList.add("active");
element.classList.remove("disable");

element = document.getElementsByTagName("li")[2];
element.style.backgroundColor = "red";
element.style.color = "white";
element.style.padding = "1rem";
console.log(element);

const cities = ["İstanbul","İzmir","Ankara","Konya","Sakarya"];
const ulElement = document.getElementById("nav");
ulElement.innerHTML = "";
console.log(ulElement);

//<li class="list-item">Lorem, ipsum dolor.</li>
for(let i = 0; i < cities.length;i++){
    const listelement = document.createElement("li");
    listelement.classList.add("list-item");
    listelement.innerText = cities[i];
    ulElement.appendChild(listelement);
}