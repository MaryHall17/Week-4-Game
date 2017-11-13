//Psuedo code

//Randomizer function for assigning values to the images between 1-12

//Randomizer function for assignging values to the required number between 19-120

//onClick event within function that compares value to number

//adding function if first crystal is still below number

//End Psuedo code

//Randomizers for assigning values to crystals between 1 and 12:

var heart = Math.floor((Math.random() * 12) + 1);
var star = Math.floor((Math.random() * 12) +1);
var oval = Math.floor((Math.random() * 12) +1);
var tear = Math.floor((Math.random() * 12) +1);

//Send values to console to test losing and winning scenarios:
console.log(heart);
console.log(star);
console.log(oval);
console.log(tear);

//Randomizer function for random number between 19 and 120
function getRndInteger(min, max) {
	
	return Math.floor(Math.random() * (max - min + 1) ) + min;
};

//Value assignment function on load for random number and crystals
$(document).ready(function randomizeValues() {
	$("#randomNumber").html(getRndInteger(19,120));
	$("#heartValue").html(heart);
	$("#starValue").html(star);
	$("#ovalValue").html(oval);
	$("#tearValue").html(tear);
});


//On click event that displays values of crystals, and knows to end the game if value goes above random number
$(document).ready(function game() {
	var integer = parseInt($("#score"));
	var number = parseInt($("#randomNumber"));
	console.log(integer);
	console.log(number);
	var winning = parseInt($("#wins"));
	var losing = parseInt($("#losing"));
	//When user clicks a button, the value gets added to the score.
	$("#heart").click(function heartClick() {
		alert("heart is " + heart);
		$("#score").html(heart + integer);
		console.log(heart);
		console.log(integer);
			// Winning and losing logic:
		// if (integer == number) {
		// 	$("#wins").html(winning ++);
		// 	alert("You win!");
		// 	integer = 0;
		// 	randomizeValues();
		// } else if (integer < number) {
		// 	//add score
		// } else {
		// 	$("#losses").html(losing ++);
		// 	alert("You lose!");
		// 	integer = 0;
		// 	randomizeValues();
		// };
	});
	$("#star").click(function starClick() {
		alert("star is " + star);
			// Winning and losing logic:
		// if (integer == score) {
		// 	$("#wins").html(winning ++);
		// 	alert("You win!");
		// 	integer = 0;
		// 	randomizeValues();
		// } else if (integer < score) {
		// 	//add score
		// } else {
		// 	$("#losses").html(losing ++);
		// 	alert("You lose!");
		// 	integer = 0;
		// 	randomizeValues();
		// };
	});
	$("#oval").click(function ovalClick() {
		alert("oval is " + oval);
			// Winning and losing logic:
		// if (integer == score) {
		// 	$("#wins").html(winning ++);
		// 	alert("You win!");
		// 	integer = 0;
		// 	randomizeValues();
		// } else if (integer < score) {
		// 	//add score
		// } else {
		// 	$("#losses").html(losing ++);
		// 	alert("You lose!");
		// 	integer = 0;
		// 	randomizeValues();
		// };
	});
	$("#tear").click(function tearClick() {
		alert("tear is " + tear);
			// Winning and losing logic:
		// if (integer == score) {
		// 	$("#wins").html(winning ++);
		// 	alert("You win!");
		// 	integer = 0;
		// 	randomizeValues();
		// } else if (integer < score) {
		// 	//add score
		// } else {
		// 	$("#losses").html(losing ++);
		// 	alert("You lose!");
		// 	integer = 0;
		// 	randomizeValues();
		// };
	}); 	
});







//Value assignment fucntion on load for buttons
// $(document).ready(function heartValue() {
// 	$("#heartValue").html(heart);
// });
// console.log(heartValue());

