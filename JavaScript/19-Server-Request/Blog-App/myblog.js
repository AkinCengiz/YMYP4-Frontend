/*
<div class="w3-row-padding">
    <div class="w3-third w3-container w3-margin-bottom">
      <img src="./images/mountains.jpg" alt="Norway" style="width:100%" class="w3-hover-opacity">
      <div class="w3-container w3-white">
        <p><b>Lorem Ipsum</b></p>
        <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
      </div>
    </div>
  </div>
*/

const portfolios = document.getElementById("portfolios");


fetch("./portfolio.json").then(response => response.json()).then(data => 
    data.portfolios.forEach(item => {
        const postItem = `<div class="w3-third w3-container w3-margin-bottom">
                            <img src="${item.images}" alt="Norway" style="width:100%" class="w3-hover-opacity">
                            <div class="w3-container w3-white">
                                <p><b>${item.title}</b></p>
                                <p>${item.description}</p>
                            </div>
                        </div>`;
        portfolios.innerHTML += postItem;
    })
);


const aboutContainer = document.querySelector("#about");

fetch("./personal-info.json").then(res => res.json()).then(data => {
    data.images.forEach(item => {
        const imageElement = document.createElement("div");
        imageElement.className = "w3-col m6";
        imageElement.id = "left-image";
        const image = document.createElement("img");
        image.style.width = "100%";
        image.src = item;
        imageElement.appendChild(image);
        aboutContainer.appendChild(imageElement);
    })
    const myInfos = document.getElementById("about-info");
    myInfos.className = "w3-container w3-padding-large";
    myInfos.style.marginBottom = "32px";
    const aboutTitle = document.createElement("h4");
    aboutTitle.innerHTML = `<b>About Me</b>`;
    myInfos.appendChild(aboutTitle);
    const infoText = document.createElement("p");
    infoText.textContent = data.about;
    myInfos.appendChild(infoText);
    const fullnameElement = document.createElement("p");
    fullnameElement.textContent = data.firstname + " " + data.lastname;
    myInfos.appendChild(fullnameElement);
    myInfos.appendChild(document.createElement("hr"));
})

fetch("./skills.json").then(res => res.json()).then(data =>{
    const myInfos = document.getElementById("about-info");
    const skillTitle = document.createElement("h4");
    skillTitle.textContent = "Technical Skills";
    myInfos.appendChild(skillTitle);
    data.skills.forEach(a => {
        const skillElement = `<p>${a.title}</p>
                            <div class="w3-grey">
                            <div class="w3-container w3-dark-grey w3-padding w3-center" style="width:${a.ratio}%">${a.ratio}%</div>
                            </div>`;
        myInfos.innerHTML += skillElement;
    })
})


 /*
  
    <h4>Technical Skills</h4>
    <!-- Progress bars / Skills -->
    <p>dizi[0]</p>
    <div class="w3-grey">
      <div class="w3-container w3-dark-grey w3-padding w3-center" style="width:95%">ratio%</div>
    </div>
    <p>dizi[1]</p>
    <div class="w3-grey">
      <div class="w3-container w3-dark-grey w3-padding w3-center" style="width:85%">ratio%</div>
    </div>
    <p>dizi[2]</p>
    <div class="w3-grey">
      <div class="w3-container w3-dark-grey w3-padding w3-center" style="width:80%">80%</div>
    </div>
    <div class="w3-grey">
      <div class="w3-container w3-dark-grey w3-padding w3-center" style="width:95%">95%</div>
    </div>
    <p>dizi[3]</p>
    <div class="w3-grey">
      <div class="w3-container w3-dark-grey w3-padding w3-center" style="width:85%">85%</div>
    </div>
    <p>Photoshop</p>
    <div class="w3-grey">
      <div class="w3-container w3-dark-grey w3-padding w3-center" style="width:80%">80%</div>
    </div>
    <div class="w3-grey">
      <div class="w3-container w3-dark-grey w3-padding w3-center" style="width:95%">95%</div>
    </div>
    <p>Web Design</p>
    <div class="w3-grey">
      <div class="w3-container w3-dark-grey w3-padding w3-center" style="width:85%">85%</div>
    </div>
    <p>Photoshop</p>
    <div class="w3-grey">
      <div class="w3-container w3-dark-grey w3-padding w3-center" style="width:80%">80%</div>
    </div>
     <p>dizi[7</p>
    <div class="w3-grey">
      <div class="w3-container w3-dark-grey w3-padding w3-center" style="width:80%">ratio%</div>
    </div>
    <hr>
  </div>
*/

const categorySection = document.createElement("div");
categorySection.className = "w3-row-padding";

// fetch("https://northwind.vercel.app/api/categories").then(response => response.json()).then(data => 
// {
//     let counter = 1;
//     data.forEach(item => {
//         const postItem = `<div class="w3-third w3-container w3-margin-bottom">
//                             <img src="https://picsum.photos/200/300?random=${counter}" alt="Norway" style="width:100%" class="w3-hover-opacity">
//                             <div class="w3-container w3-white">
//                                 <p><b>${item.name}</b></p>
//                                 <p>${item.description}</p>
//                             </div>
//                         </div>`;
//         categorySection.innerHTML += postItem;
//         counter++;
//     })
//     document.getElementById("about-info").appendChild(categorySection);
// });



//resolve,reject


/*

<h4 id="contact"><b>Contact Me</b></h4>
    <div class="w3-row-padding w3-center w3-padding-24" style="margin:0 -16px">
      <div class="w3-third w3-dark-grey">
        <p><i class="fa fa-envelope w3-xxlarge w3-text-light-grey"></i></p>
        <p>email@email.com</p>
      </div>
      <div class="w3-third w3-teal">
        <p><i class="fa fa-map-marker w3-xxlarge w3-text-light-grey"></i></p>
        <p>Chicago, US</p>
      </div>
      <div class="w3-third w3-dark-grey">
        <p><i class="fa fa-phone w3-xxlarge w3-text-light-grey"></i></p>
        <p>512312311</p>
      </div>
    </div>
    <hr class="w3-opacity">
    <form action="/action_page.php" target="_blank">
      <div class="w3-section">
        <label>Name</label>
        <input class="w3-input w3-border" type="text" name="Name" required>
      </div>
      <div class="w3-section">
        <label>Email</label>
        <input class="w3-input w3-border" type="text" name="Email" required>
      </div>
      <div class="w3-section">
        <label>Message</label>
        <input class="w3-input w3-border" type="text" name="Message" required>
      </div>
      <button type="submit" class="w3-button w3-black w3-margin-bottom"><i class="fa fa-paper-plane w3-margin-right"></i>Send Message</button>
    </form>


*/

const contactInfo = document.getElementById("contact-info");

fetch("./contact.json").then(response => response.json()).then(data => {
    contactInfo.innerHTML += `<div class="w3-third w3-dark-grey">
        <p><i class="fa fa-envelope w3-xxlarge w3-text-light-grey"></i></p>
        <p>${data.email}</p>
      </div>
      <div class="w3-third w3-teal">
        <p><i class="fa fa-map-marker w3-xxlarge w3-text-light-grey"></i></p>
        <p>${data.address.district} - ${data.address.town} - ${data.address.city}</p>
      </div>
      <div class="w3-third w3-dark-grey">
        <p><i class="fa fa-phone w3-xxlarge w3-text-light-grey"></i></p>
        <p>${data.phone}</p>
      </div>`;
})

const form = document.querySelector("#contact-form");

// const nameInput = document.getElementsByName("Name");
// const emailInput = document.getElementsByName("Email");
// const messageInput = document.getElementsByName("Message");
// const contactDiv = document.createElement("div");
// contactDiv.className = "w3-section";
// const contactLabel = document.createElement("label");
// contactLabel.textContent = "Name";
// contactDiv.appendChild(contactLabel);
// console.log(nameInput);
// //contactDiv.appendChild(nameInput);
// form.appendChild(contactDiv);
// contactLabel.textContent = "Email";
// contactDiv.innerHTML = "";
// contactDiv.appendChild(contactLabel);
// //contactDiv.appendChild(emailInput);
// form.appendChild(contactDiv);

const formInputs = `<div class="w3-section">
        <label>Name</label>
        <input class="w3-input w3-border" type="text" name="Name" required>
      </div>
      <div class="w3-section">
        <label>Email</label>
        <input class="w3-input w3-border" type="text" name="Email" required>
      </div>
      <div class="w3-section">
        <label>Message</label>
        <input class="w3-input w3-border" type="text" name="Message" required>
      </div>
      <button type="submit" class="w3-button w3-black w3-margin-bottom"><i class="fa fa-paper-plane w3-margin-right"></i>Send Message</button>`;
    form.innerHTML += formInputs;


/*
    <div class="w3-section">
        <label>Name</label>
        <input class="w3-input w3-border" type="text" name="Name" required>
      </div>
      <div class="w3-section">
        <label>Email</label>
        <input class="w3-input w3-border" type="text" name="Email" required>
      </div>
      <div class="w3-section">
        <label>Message</label>
        <input class="w3-input w3-border" type="text" name="Message" required>
      </div>
      <button type="submit" class="w3-button w3-black w3-margin-bottom"><i class="fa fa-paper-plane w3-margin-right"></i>Send Message</button>


*/

class Request{
    get(url){
        fetch(url).then(res => res.json()).then(data => console.log(data));
    }
}

let req = new Request();
console.log(req.get("./portfolio.json"));