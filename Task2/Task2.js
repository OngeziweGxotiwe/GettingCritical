var greenBox = document.getElementById("Box1");
var greenButton = document.getElementById("Button1");
var redBox = document.getElementById("Box2");
var redButton = document.getElementById("Button2");

greenButton.addEventListener('click', function(){
	greenBox.style.backgroundColor = 'green'
})
redButton.addEventListener('click', function(){
	redBox.style.backgroundColor = 'red'
})