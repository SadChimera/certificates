let myButton = document.querySelector("button");
let myNName = document.querySelector("h3")
let myDDate = document.querySelector("h3")

function setUserName() {
    const myName = prompt("Please enter your name. (It's recommended to refresh page after name.");
    localStorage.setItem("name", myName);
    myNName.textContent = `${myName}`;
}

function setInfo() {
    const myData = prompt("Input information.")
    localStorage.setItem("data", myData);
    myDDate.textContent = `${myData}`;
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myNName.textContent = `${storedName}`;
}
myButton.addEventListener("click", () => {
    setUserName();
})

