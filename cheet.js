//variable
var number = 10;
//debug with console
console.log("This is a debug");
//string
var str = "String";
//array
var fruit = ["apple", "banana", "cherry"];
//object
var info = {firstName: "Joe", lastName: "Lin"};
//test for the same number
var one = "abc";
var two = "def";
if(one === two){
	console.log("Same number!");
}else{
	console.log("Not the same number");
}
//logic of number
var num1 = 12;
var num2 = 18;
if(num1 > num2){
	console.log("Number 1 is bigger");
} else if(num1 < num2){
	console.log("Number 2 is bigger");
}else{
	console.log("Numbers are the same");
}
//function to add two number
function  add(a, b) {
	return a + b;
}
console.log("The sum is " + add(11, 22));
var name = prompt("What is your name?");
//three function
console.log("Your name is " + name);
var age = prompt("What is your age?");
console.log("Your age is " + age);
var place = prompt("Where you live?");
console.log("Your live in " + place);
//mutliArray
var interest = ["game", "basketball"];
var animal = ["cat", "dog", "lion"];
var multiArray = [interest, animal];
console.log(multiArray[0]);
console.log(multiArray[1]);
//check the variable of 10
var variable = 12;
if(variable < 10){
	console.log("The variable is less than 10")
}else{
	console.log("The variable is "+ variable +" and it is equal or larger than 10");
}
//change the title once is clicked
function  newTitle() {
	document.getElementById("changer").innerHTML = "Change the title";
}
//check if the two string are the same
var string1 = "abc";
var string2 = "def";
if(string1 === string2){
	console.log("Same string!");
}else{
	console.log("Not the same String");
}
//function that print something
var something ="Print something";
function print(){
	return something;
}
console.log(print());
//two door
function  btn1() {
	document.getElementById("door1").innerHTML = "You win 2000";
}
function  btn2() {
	document.getElementById("door2").innerHTML = "You win 4000";
}
