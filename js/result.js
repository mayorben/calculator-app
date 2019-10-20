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
function digit3() {
	elDisplay.value+=3;
}
function digit4() {
	elDisplay.value+=4;
}
function digit5() {
	elDisplay.value+=5;
}
function digit6() {
	elDisplay.value+=6;
}
function digit7() {
	elDisplay.value+=7;
}
function digit8() {
	elDisplay.value+=8;
}
function digit9() {
	elDisplay.value+=9;
}
function digit0() {
	elDisplay.value+=0;
}
function dot() {
	elDisplay.value+='.';
}
function add() {
	elDisplay.value+='+';
}
function mult() {
	elDisplay.value+='*';
}
function div() {
	elDisplay.value+='/';
}

function sub() {
	elDisplay.value+='-';
}

function answer() {
	elDisplay.value=eval(elDisplay.value);
}
function cls() {
	elDisplay.value='';
}

var elDisplay=document.getElementById('display');
var elOne=document.getElementById('one');
var elTwo=document.getElementById('two');
var elThree=document.getElementById('three');
var elFour=document.getElementById('four');
var elFive=document.getElementById('five');
var elSix=document.getElementById('six');
var elSeven=document.getElementById('seven');
var elEight=document.getElementById('eight');
var elNine=document.getElementById('nine');
var elZero=document.getElementById('zero');
var elclear=document.getElementById('cls');
var elDot=document.getElementById('dot');


var  elAdd=document.getElementById('add');
var equal=document.getElementById('answer');
var elSub=document.getElementById('subtr');
var elMult=document.getElementById('mult');
var elDivide=document.getElementById('divide');



//***********Start the event handler */************** */
elDot.addEventListener('click',dot,false);
elOne.addEventListener('click',digit1,false);
elTwo.addEventListener('click',digit2, false);
elThree.addEventListener('click',digit3, false);
elFour.addEventListener('click',digit4, false);
elFive.addEventListener('click',digit5, false);
elSix.addEventListener('click',digit6, false);
elSeven.addEventListener('click',digit7, false);
elEight.addEventListener('click',digit8, false);
elNine.addEventListener('click',digit9, false);
elZero.addEventListener('click',digit0, false);
elclear.addEventListener('click',cls, false);

elAdd.addEventListener('click',add,false);
elSub.addEventListener('click',sub,false);
elDivide.addEventListener('click',div,false);
elMult.addEventListener('click',mult,false);
equal.addEventListener('click',answer,false);
