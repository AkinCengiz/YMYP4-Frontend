//LOCAL STORAGE
//Veriler local storage üzerinden silinene kadar hafızada kalır. Tarayıcıyı, pencereyi ya da uygulamayı kapatmamız verilerin silinmesine neden olmaz.


//Input elementlerimizi seçerek bir değişkene atıyoruz.
const valueInput = document.getElementById("value");

//
//Button elementlerimizi seçerek bir değişkene atıyoruz.
const addButton = document.querySelector("#add");
const deleteButton = document.querySelector("#delete");
const clearButton = document.querySelector("#clear");
//list-group classına sahip ul etiketi seçiliyor
const ulElement = document.getElementsByClassName("list-group")[0];


//Experience adında değişken oluşturuyoruz
let experiences;
//LOCAL STORAGE İÇERİSİNDEKİ VERİLERİN HEPSİNİ SİLME İŞLEMİ
clearButton.addEventListener("click",function(){
    localStorage.clear();
    valueInput.focus();
})

addButton.addEventListener("click",function(){
    let value = valueInput.value;
    if(localStorage.getItem("experiences") === null){
        experiences = [];
    }else{
        experiences = JSON.parse(localStorage.getItem("experiences"));
    }
    experiences.push(value);

    localStorage.setItem("experiences",JSON.stringify(experiences));
    valueInput.value = "";
    valueInput.focus();
    //<li class="list-group-item">Deneme</li>
    addLiUI();
    
});

function addLiUI(){
    let localArray = JSON.parse(localStorage.getItem("experiences"));
    ulElement.innerHTML = "";
    localArray.forEach(function(element){
        const lielement = document.createElement("li");
        lielement.className = "list-group-item";
        lielement.textContent = element;
        ulElement.appendChild(lielement);
    });
}



deleteButton.addEventListener("click",function(){
    localStorage.removeItem(keyInput.value);
    valueInput.focus();
})




