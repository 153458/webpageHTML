const userInput = document.getElementById("username");
const saveBtn = document.getElementById("save-btn");
const clearBtn = document.getElementById("clear-btn");
const displayName = document.getElementById("display-name");

function saveTheButton (){
    const name = userInput.value;
    if(name){
        localStorage.setItem("savedName", name);
        displayName.textContent = `Saved Name: ${name}`;
    }
}
saveBtn.addEventListener("click", saveTheButton);

function clearTheButton(){
    localStorage.removeItem("savedName");
    displayName.textContent="";
    userInput.value = "";
}
clearBtn.addEventListener("click", clearTheButton);

function displayTheName(){
    const savedName = localStorage.getItem("savedName");
    if(savedName){
        displayName.textContent = `Saved Name: ${savedName}`;
    }
}
window.addEventListener("load", displayTheName);
