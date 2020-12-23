function colors(){
	console.log("hi");
var red = document.getElementById("red").value;

var green = document.getElementById("green").value;

var blue = document.getElementById("blue").value;
var result = "rgb("+red+","+green+","+blue+")"
var output = document.getElementById("output");


document.body.style.backgroundColor = result;
output.innerHTML = result;
}