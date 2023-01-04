// In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation
let myDiv = document.getElementById("navBar");
myDiv.setAttribute("id", "socialNetworkNavigation");

// First, create a new <li> to the <ul>
let newLi = document.createElement("li");
let textNode = document.createTextNode("Logout");

// Append the text node to the newly created list
newLi.appendChild(textNode);

//  append this updated list node to the unordered list <ul>
let myUl = document.querySelector("ul");
myUl.appendChild(newLi);

let selectUl = document.querySelector("ul");
// Show the text link firstElementChil
console.log( selectUl.firstElementChild.textContent )

// Show the text link lastElementChild 
console.log( selectUl.lastElementChild.textContent )


