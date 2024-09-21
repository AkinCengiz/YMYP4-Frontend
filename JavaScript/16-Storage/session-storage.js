//SESSION STORAGE
// Uygulama penceresi açık olduğu sürece veriler session storage içerisinde saklanır. Pencere, tarayıcı ya da uygulama kapatıldığında veriler silinir.
//INPUTLARI SEÇMEK İÇİN DEĞİŞKEN TANIMLIYORUZ
const keyInput = document.getElementById("key");
const valueInput = document.querySelector("#value");

//BUTTONLARI SEÇMEK İÇİN DEĞİŞKEN TANIMLIYORUZ
const addButon = document.getElementById("add");
const deleteButon = document.querySelector("#delete");
const clearButon = document.getElementById("clear");

//Add butonuna olay (event) tanımlıyoruz
addButon.addEventListener("click",addItem);

//SessionStorage'a veri ekliyoruz
//Veri eklemek için metot tanımlıyoruz.
function addItem(e){
    sessionStorage.setItem(keyInput.value,valueInput.value);
    keyInput.value = "";
    valueInput.value = "";
    keyInput.focus();
}

//Delete butonuna olay (event) tanımlıyoruz
deleteButon.addEventListener("click",deleteItem)

//SessionStorage'dan veri siliyoruz
//Veri silmek için metot tanımlıyoruz.
function deleteItem(e){
    sessionStorage.removeItem(keyInput.value);
    keyInput.value = "";
    keyInput.focus();
}

//Clear butonuna olay (event) tanımlıyoruz
clearButon.addEventListener("click",function(){
    sessionStorage.clear();
    keyInput.focus();
})
//SessionStorage'a veri ekliyoruz
//Veri eklemek için metot tanımlıyoruz.