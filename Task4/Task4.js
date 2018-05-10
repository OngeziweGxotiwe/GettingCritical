var box = document.getElementById("box");
var green = document.getElementById("button1");
var red = document.getElementById("button2");

green.addEventListener('click', function(){
	box.style.backgroundColor = 'green'
})
red.addEventListener('click', function(){
	box.style.backgroundColor = 'red'
})