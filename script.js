let myButton = document.querySelector("button");
let myNName = document.querySelector("p")

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `${myName}`;
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

