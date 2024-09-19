//evenlistner => HTML elemanlarına olay ekler.

const buton = document.querySelector("#btn");
//console.log(buton);
buton.style.padding = "10px 20px";


//Mouse Over Event
buton.addEventListener("mouseover",function(){
    buton.style.backgroundColor = "red";
    buton.style.color = "white";
    buton.style.fontWeight = "bold";
    console.log("Mouse Over");
});

//Mouse Out Event
buton.addEventListener("mouseout",changeColor);

function changeColor(){
    buton.style.backgroundColor = "green";
    buton.style.color = "black";
    buton.style.fontWeight = "normal";
    console.log("Mouse Out");
}

//Click Event
const writeText = () => {
    console.log("Butona Tıklandı");
};
buton.addEventListener("click",writeText);

//Double Click Event

const changeText = () => {
    buton.textContent = "Double Click";
    console.log("Butona Çift Tıklandı");
}
buton.addEventListener("dblclick",changeText);

//Mouse Down Event
buton.addEventListener("mousedown",function(){
    console.log("Mouse Down");
});

//Mouse Up Event
buton.addEventListener("mouseup",function(){
    console.log("Mouse Up");
});

const boxElement = document.querySelector(".box");
console.log(boxElement);

//mouseenter Event
boxElement.addEventListener("mouseenter",function(){
    boxElement.style.backgroundColor = "blue";
    console.log("Mouse Enter");
});

//mouseleave Event
boxElement.addEventListener("mouseleave",function(){
    boxElement.style.backgroundColor = "yellow";
    console.log("Mouse Leave");
});

//mouseover Event
boxElement.addEventListener("mouseover",function(){
    boxElement.style.backgroundColor = "red";

    console.log("Mouse Over");
});
//mosueout Event
boxElement.addEventListener("mouseout",function(){
    boxElement.style.backgroundColor = "green";
    console.log("Mouse Out");
});