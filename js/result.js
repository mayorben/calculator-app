var today = new Date(); 
var year = today.getFullYear(); 
var y=document.getElementById("yr");
y.textContent=year;

function digit1(){
	elDisplay.value+=1;
	}
function digit2() {
	elDisplay.value+=2;
}
function addV() {
	elDisplay.value+='+';
}
function answer(params) {
	elDisplay.value=eval(elDisplay.value);
}

var elDisplay=document.getElementById('display');
var elOne=document.getElementById('one');
var elTwo=document.getElementById('two');
var elThree=document.getElementById('three');
var elFour=document.getElementById('four');
var elFive=document.getElementById('five');
var  add=document.getElementById('add');
var equal=document.getElementById('answer');


//***********Start the event handler */************** */
elOne.addEventListener('click',digit1,false);
elTwo.addEventListener('click',digit2, false);
add.addEventListener('click',addV,false);
equal.addEventListener('click',answer,false);
