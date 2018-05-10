var myBox1 = document.getElementById("box1");
var myBox2 = document.getElementById("box2");
var button = document.getElementById("button");

button.addEventListener('click', function(){
	myBox1.style.backgroundColor = 'green'
})
button.addEventListener('click', function(){
	myBox2.style.backgroundColor = 'red'
})