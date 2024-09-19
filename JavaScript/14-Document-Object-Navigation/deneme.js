/**
 * 
 * <div class="w3-light-grey w3-round-xlarge w3-small">
            <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:90%">90%</div>
          </div>
 * 
 *              <p>Photography</p>
                <div class="w3-light-grey w3-round-xlarge w3-small">
                  <div
                    class="w3-container w3-center w3-round-xlarge w3-teal"
                    style="width: 80%"
                  >
                    <div class="w3-center w3-text-white">80%</div>
                  </div>
                </div>
 * 
 * 
 */

const  skillBox = document.querySelector("#div");
const skillTitle = document.createElement("p");
skillTitle.style.backgroundColor = "black";
skillTitle.style.color = "white";
skillTitle.textContent = "JAVASCRIPT";
const skillItem = document.createElement("div"); 
skillItem.className = "w3-light-grey w3-round-xlarge w3-small"; 
const skillItemContainer = document.createElement("div");
skillItemContainer.className = "w3-container w3-center w3-round-xlarge w3-teal";
skillItemContainer.style.width = "90%";
skillItemContainer.textContent = "150%";


console.log(skillItem);

skillItem.appendChild(skillItemContainer);
skillBox.appendChild(skillTitle);
skillBox.appendChild(skillItem);

