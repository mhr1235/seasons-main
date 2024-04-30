let image = document.querySelector('img');

image.addEventListener('click', function(){

console.log('image clicked!');
document.body.style.background = 'yellowgreen';
document.querySelector('h1').innerHTML = "It's Spring!";

});
