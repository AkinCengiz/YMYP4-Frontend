//KEYBOARD EVENT

// KEYPRESS => Klavyede herhangi bir tuşa batığımızda çalışan event. (Sadece numeric, alpha numeric ve character tuşlarını yakalar),

document.addEventListener("keypress",writing1);

function writing1(e){
    console.log(e.which,e.key,"key press");
}

// //KEYDOWN => Klavyede bir tuşa basıldığında çalışan event.
document.addEventListener("keydown",writing2);

function writing2(e){
    console.log(e.which,e.key,"key down");
}

//KEYUP => Klavyede bir tuşa basıldıktan sonra tuş bırakılınca çalışan event.
document.addEventListener("keyup",writing3);

function writing3(e){
    console.log(e.which,e.key,"key up");
    
}
