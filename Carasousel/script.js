const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
var carasoul = document.querySelector(".carasoul");
let cellIndex =6;
console.log(carasoul);
nextButton.addEventListener("click",function(){
	console.log(carasoul);
carasoul.classList.remove("show-"+cellIndex);
if(cellIndex == 10)
cellIndex=1;
else
cellIndex++;
carasoul.classList.add("show-"+cellIndex);
});
prevButton.addEventListener("click",function(){
carasoul.classList.remove("show-"+cellIndex);
if(cellIndex == 1)
cellIndex=10;
else
cellIndex--;
carasoul.classList.add("show-"+cellIndex);
});
console.log(prevButton);
console.log(nextButton);