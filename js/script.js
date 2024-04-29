//console.log("This file is correctly linked!");


const header = document.getElementsByTagName("h1")[0];




//changeColor();
//changeText();

header.addEventListener('click', function(){

header.style.color = "pink";
header.innerHTML = "Some New Text!";


console.log('clicked');

});

function changeColor(){

header.style.color = "pink";

}

function changeText(){

header.innerHTML = "Some New Text!";

}


