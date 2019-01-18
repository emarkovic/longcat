var localStorage = window.localStorage;
var KEY = "longcat-visits"

var catHouse = document.getElementById("cat-tummy");
var catFacts = document.getElementById("cat-facts")

populateFact();
var visits = parseInt(localStorage.getItem(KEY));
if (visits) {
    for (i = 0; i < visits; i++) {
        addTummy();
    }    
    localStorage.setItem(KEY, visits + 1);
} else {
    localStorage.setItem(KEY, 1);
} 

function addTummy() {
    var img = document.createElement("img");
    img.src = "img/middle.jpg";
    catHouse.appendChild(img);
}

function populateFact() {
    fetch("https://catfact.ninja/fact", { mode: "no-cors" })
        .then(response => response.json())
        .then(response => {
            catFacts.innerHTML = response.fact;
        });
}
