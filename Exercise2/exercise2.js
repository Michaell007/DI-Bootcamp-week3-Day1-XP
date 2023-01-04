// Add a “light blue” background color and some padding to the <div>
let myDiv = document.querySelector("div:first-child");
myDiv.classList.add("backLightBlue");
myDiv.style.padding  = "15px 15px";

// Do not display the <li> that contains the text node “John”.
let liJhon = document.body.querySelector("ul li:nth-child(1)");
liJhon.style.display = "none";

// Add a border to the <li> that contains the text node “Pete”.
let liPete = document.body.querySelector("ul li:nth-child(2)");
liPete.style.border = "1px solid blue";

// Change the font size of the whole body.
document.body.style.fontSize = "32px";

// If the background color of the div is “light blue
if (myDiv.classList.contains("backLightBlue")) {
    let liChild = document.querySelectorAll("ul li");
    alert(`Hello ${liChild[0].textContent} and ${liChild[1].textContent}`);
}