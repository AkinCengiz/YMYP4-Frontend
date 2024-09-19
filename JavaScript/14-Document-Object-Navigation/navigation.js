//ID ile elementi seçiyoruz.
const logo = document.getElementById("logo");

//Seçilen elementin parent elementini seçiyoruz.
const headerElement = logo.parentElement;

//Seçilen elementin kardeş elementini seçiyoruz.
const searchElement = logo.nextElementSibling
//Class ismi ile elementi seçiyoruz.
const listElement = document.querySelector(".list-group");
//Class ismi ile seçilen elementlerin tümünü seçiyoruz.
const listItem = document.querySelectorAll(".list-group-item");





console.log(headerElement);
console.log(searchElement);
console.log(listElement);
console.log(listItem);

//QuerySelector ile elementler arasında istediğimiz sıradaki kardeş elementi seçiyoruz.
const secondElement = document.querySelector(".list-group-item:nth-child(2)");
console.log(secondElement);
//Seçilen elementin bir önceki ve bir sonraki elementini seçiyoruz. Bir önceki için previousElementSibling, bir sonraki için nextElementSibling kullanıyoruz.
// const serviceElement = secondElement.nextElementSibling;
// console.log(serviceElement);
// const firstElement = secondElement.previousElementSibling;
// console.log(firstElement);

// console.log(serviceElement.parentElement);
// console.log(secondElement.parentElement);

// const newLiElement = document.createElement("li");
// newLiElement.className = "list-group-item";
// const newLinkElement = document.createElement("a");
// newLinkElement.className = "nav-link";
// newLinkElement.href = "https://www.google.com";
// newLinkElement.target = "_blank";
// newLinkElement.textContent = "Google";
// newLiElement.appendChild(newLinkElement);
// console.log(newLiElement);
// listElement.appendChild(newLiElement);

const cities = ["Ankara", "İstanbul", "İzmir", "Adana", "Antalya"];

const ulElement = document.createElement("ul");
ulElement.className = "list-group";
// cities.foreach( function(city){
//     const lielement = document.createElement("li");
//     lielement.className = "list-group-item";
//     lielement.textContent = city;
//     ulElement.appendChild(lielement);
// });
const bodyElement = document.getElementById("body");
bodyElement.appendChild(ulElement);

console.log(bodyElement); 
// cities.forEach(function (city) {
//   const liElement = document.createElement("li");
//   liElement.className = "list-group-item";
//   console.log(liElement);
//   ulElement.appendChild(liElement);
// });



/**
 * 
 * <li class="list-group-item">
                    <a class="nav-link" href="#">Anasayfa</a>
                </li>
                <li class="list-group-item"><a class="nav-link" href="#">Hakkımızda</a></li>
                <li class="list-group-item"><a class="nav-link" href="#">Hizmetler</a></li>
                <li class="list-group-item"><a class="nav-link" href="#">İletişim</a></li>
 */


const cityList = document.getElementById("cities");
// cities.forEach( city => {
//     const cityitem = document.createElement("li");
//     cityitem.className = "list-group-item";
//     const citylink = document.createElement("a");
//     citylink.className = "nav-link";
//     citylink.href = "#";
//     citylink.textContent = city;
//     cityitem.appendChild(citylink);
//     cityList.appendChild(cityitem);
// })

cities.forEach(city => {
    cityList.innerHTML += `<li class="list-group-item">
                                <a class="nav-link" href="#">${city}</a>
                            </li>`;
})

/*
            <article id="section1" class="content-box">
                <h1 class="card-title">Yazı Başlığı</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </article>

*/

const users = [{
    name: "Yasin",
    surname: "Kaya",
    age: 25,
    email: "asd@qwe.com"
},
{
    name: "Ali",
    surname: "Veli",
    age: 35,
    email: "asdf@as"},
{
    name: "Ayşe",
    surname: "Fatma",
    age: 45,
    email: "asdf@qwer"
}
];
const userContent = document.getElementById("content");
console.log(userContent);
users.forEach(user => {
    userContent.innerHTML += `<article class="content-box">
                                <h1 class="card-title">${user.name} ${user.surname}</h1>
                                <p>Yaş : ${user.age}</p>
                                <p>Email : ${user.email}</p>
                                <p>${user.name} - ${user.surname} - ${user.age} - ${user.email}</p>
                            </article>`;
});


//const pElement = document.getElementById("p2")
const pElement = document.getElementById("section-1").children[2];
console.log(pElement);
const parentDiv = pElement.parentElement.parentElement.previousElementSibling;
console.log(parentDiv);