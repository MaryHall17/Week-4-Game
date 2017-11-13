//Psuedo code

//Randomizer function for assigning values to the images between 1-12

//Randomizer function for assignging values to the required number between 19-120

//onClick event within function that compares value to number

//adding function if first crystal is still below number

//End Psuedo code

//Randomizers for assigning values to crystals between 1 and 12:

var star = Math.floor((Math.random() * 12) + 1);
var heart = Math.floor((Math.random() * 12) +1);
var oval = Math.floor((Math.random() * 12) +1);
var tear = Math.floor((Math.random() * 12) +1);

//Send values to console to test losing and winning scenarios:
console.log(star);
console.log(heart);
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
	integer = parseInt($("#score"));
	console.log(integer);
	winning = parseInt($("#wins"));
	losing = parseInt($("#losing"));
	$(document).click(function button() {
		//When user clicks a button, the value gets added to the score.
		
		//Winning and losing logic:
		if (integer == score) {
			$("#wins").html(winning ++);
			alert("You win!");
			integer = 0;
			randomizeValues();
		} else if (integer < score) {
			//add score
		} else {
			$("#losses").html(losing ++);
			alert("You lose!");
			integer = 0;
			randomizeValues();
		};

	});
});







//Value assignment fucntion on load for buttons
// $(document).ready(function heartValue() {
// 	$("#heartValue").html(heart);
// });
// console.log(heartValue());

