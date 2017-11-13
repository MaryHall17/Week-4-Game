//Psuedo code

//Randomizer function for assigning values to the images between 1-12

//Randomizer function for assignging values to the required number between 19-120

//Set the floor for both randomizers so it's always possible for player to win

//onClick event within function that compares value to number

//adding function if first crystal is still below number

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

//Value assignment function on load for random number
$(document).ready(function() {
	$("#randomNumber").html(getRndInteger(19,120));
});

