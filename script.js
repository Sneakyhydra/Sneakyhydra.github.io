function getSite() {
    var searchField = document.getElementById('searchField').value;
    query = searchField;
    result = query.split(" ").join("+");
    
    var empty = document.getElementById('Wrap');
    empty.parentNode.removeChild(empty);

    var google = document.getElementById('google');
    var googlesite = "https://www.google.com/search?q="
    googleopen = googlesite.concat(result)
    google.style.display = "block";
    var searched = document.getElementById('searched');
    searched.style.display = "block";
    searched.textContent = query;
    var stack= document.getElementById('stackButton');
    stack.style.display = "block";
    var stackoverflow = "https://stackoverflow.com/search?q=";
    stackopen = stackoverflow.concat(result);
}

function getStack() {
    window.open(stackopen, "_blank");    
}

function getGoogle() {
    window.open(googleopen, "_blank");
}

var query = '';
var result = '';
var stackopen = '';
var googleopen = '';
var subButton = document.getElementById('subButton');
subButton.addEventListener('click', getSite, false);

var stackButton = document.getElementById('stackButton');
stackButton.addEventListener('click', getStack, false);

var googleButton = document.getElementById('google');
googleButton.addEventListener('click', getGoogle, false);