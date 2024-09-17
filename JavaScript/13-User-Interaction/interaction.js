console.log("Console ekranı");
let ok = false;
const logout = () => {
    ok = confirm("Emin misiniz?")
    if(ok){
        console.log(ok);
    }else{
        console.log(ok);
    }
}
//Alert => Kullanıcıya bilgi vermek için açılan mesaj kutusudur.
alert("Hoşgeldiniz...");
let firstname = "";
const question = () => {
    firstname = prompt("İsminiz?");
    console.log(firstname);
}

