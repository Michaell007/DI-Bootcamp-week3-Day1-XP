// In the body, create a new <div class="listBooks"></div>
let newDiv = document.createElement("div");
newDiv.classList.add("listBooks");
document.body.prepend(newDiv);

// create an array called  of objects allBooks
let allBooks = [
    {
        title: "Le monde s'effondre",
        author: "Chinua Achebe",
        image : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Chinua_Achebe_-_Buffalo_25Sep2008_crop.jpg/330px-Chinua_Achebe_-_Buffalo_25Sep2008_crop.jpg",
        alreadyRead: true,
    },
    {
        title: "Nostromo",
        author: "Joseph Conrad",
        image : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Joseph_Conrad_1904.png/330px-Joseph_Conrad_1904.png",
        alreadyRead: false,
    }
];

// render the books inside an HTML table added to the <div> created
let table = document.createElement("table");

// add header for table
let newRow = document.createElement("tr");

// create th for Details
let newThdetails = document.createElement("th");
let textDetails = document.createTextNode("Details");
newThdetails.appendChild(textDetails);
// create th for Image
let newThImage = document.createElement("th");
let textImage = document.createTextNode("Image");
newThImage.appendChild(textImage);
// add both in row
newRow.appendChild(newThdetails);
newRow.appendChild(newThImage);
table.append(newRow);

// update table
allBooks.forEach(el => {
    let newRow = document.createElement("tr");
    // add td content details
    let newTdDetails = document.createElement("td");
    el.alreadyRead ? newTdDetails.style.color = "red" : "";
    let phrase = document.createTextNode(`${el.title} written by ${el.author}.`);
    newTdDetails.appendChild(phrase);

    // add td content image
    let newTdImg = document.createElement("td");
    let img = document.createElement("img");
    img.setAttribute("src", el.image);
    img.style.width = "100px";
    newTdImg.appendChild(img);

    newRow.appendChild(newTdDetails);
    newRow.appendChild(newTdImg);

    table.append(newRow);
});

newDiv.appendChild(table);
console.log(table);
