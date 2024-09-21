//INPUT EVENTS
const textInput = document.getElementById("textbox");
const nameInput = document.getElementById("firstname");

//FOCUS => Input elementine odaklanıldığında (Element seçildiğinde) çalışır.

textInput.addEventListener("focus",getEvent);

function getEvent(e){
    console.log(e.type);
}

//BLUR  => Input elementinden ayrıldığımızda çalışır.

textInput.addEventListener("blur",getEvent);


//COPY  => Input elementi içeriği kopyalandığında tetiklenir.

textInput.addEventListener("copy",getEvent);

//CUT  => Input elementi içeriği kesildiğinde (cut işlemi yapıldığında) tetiklenir.
textInput.addEventListener("cut",getEvent);

//PASTE => Input elementine içerik yapıştırıldığnda tetiklenir.
textInput.addEventListener("paste",getEvent);