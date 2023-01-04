// Retrieve the div and console.log it
console.log(document.body.firstElementChild);

// Change the name “Pete” to “Richard”
let firstUlByClassList = document.body.getElementsByClassName("list")[0]; // get first ul have class list
firstUlByClassList.children[1].innerHTML = "Richard";

// Change each first name of the two <ul>'s to your name.
let allFirstLi = document.body.querySelectorAll("ul li:nth-child(1)");
allFirstLi.forEach(el => el.innerHTML = "Michael Akissi");

// Delete the <li> that contains the text node “Sarah”.
let secondUlByClassList = document.body.getElementsByClassName("list")[1]; // get second ul have class list
secondUlByClassList.children[1].remove();

// Add a class called student_list to both of the <ul>
let allUls = document.body.querySelectorAll("ul");
allUls.forEach(el => el.classList.add("student_list"));

// Ajoutez les classes universityet attendanceau premier <ul>
allUls.forEach( (el, index) => {
    if (index == 0) {
        el.classList.add("university", "attendance");
    }
});
