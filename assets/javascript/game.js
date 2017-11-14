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
	//When user clicks a button, the value gets added to the score.
	$("#heart").click(function heartClick() {
		var integer = parseInt($("#score").text());
		alert("heart is " + heart);
		var number = parseInt($("#randomNumber").text());
		console.log(number);
		var tally = parseInt($("#score").html(heart + integer).text());
		console.log(heart);
		console.log(integer);
		console.log(tally);
		var winning = parseInt($("#wins").text());
		var losing = parseInt($("#losses").text());
		console.log(winning);
		console.log(losing);
			// Winning and losing logic:
			if (tally == number) {
				$("#wins").html(winning++);
				alert("You win!");
				tally = 0;
				randomizeValues();
			} else if (tally < number) {
				$("#score").html(heart + integer);
			} else {
				$("#losses").html(losing++);
				alert("You lose!");
				tally = 0;
				randomizeValues();
			};
			//Sends wins/loss count to the html file and reset values.
			$("#wins").html(winning);
			$("#losses").html(losing);
			$("#score").html(tally);
		});
	$("#star").click(function starClick() {
		var integer = parseInt($("#score").text());
		var number = parseInt($("#randomNumber").text());
		var tally = parseInt($("#score").html(star + integer).text());
		var winning = parseInt($("#wins").text());
		var losing = parseInt($("#losses").text());
		alert("star is " + star);
		console.log(star);
			// Winning and losing logic:
		if (tally == number) {
			$("#wins").html(winning++);
			alert("You win!");
			tally = 0;
			randomizeValues();
		} else if (tally < number) {
			$("#score").html(star + integer);
		} else {
			$("#losses").html(losing++);
			alert("You lose!");
			tally = 0;
			randomizeValues();
		};
		//Sends wins/loss count to the html file and reset values.
		$("#wins").html(winning);
		$("#losses").html(losing);
		$("#score").html(tally);
	});
	$("#oval").click(function ovalClick() {
		var integer = parseInt($("#score").text());
		var number = parseInt($("#randomNumber").text());
		var tally = parseInt($("#score").html(oval + integer).text());
		var winning = parseInt($("#wins").text());
		var losing = parseInt($("#losses").text());
		alert("oval is " + oval);
		console.log(tally);
			// Winning and losing logic:
		if (tally == number) {
			$("#wins").html(winning++);
			alert("You win!");
			tally = 0;
			randomizeValues();
		} else if (tally < number) {
			$("#score").html(oval + integer);
		} else {
			$("#losses").html(losing++);
			alert("You lose!");
			tally = 0;
			randomizeValues();
		};
		//Sends wins/loss count to the html file and reset values.
		$("#wins").html(winning);
		$("#losses").html(losing);
		$("#score").html(tally);
	});
	$("#tear").click(function tearClick() {
		var integer = parseInt($("#score").text());
		var number = parseInt($("#randomNumber").text());
		var tally = parseInt($("#score").html (tear + integer).text());
		var winning = parseInt($("#wins").text());
		var losing = parseInt($("#losses").text());
		alert("tear is " + tear);
		console.log(tally);
			// Winning and losing logic:
		if (tally == number) {
			$("#wins").html(winning++);
			alert("You win!");
			tally = 0;
			randomizeValues();
		} else if (tally < number) {
			$("#score").html(tear + integer);
		} else {
			$("#losses").html(losing++);
			alert("You lose!");
			tally = 0;
			randomizeValues();
		};
		//Sends wins/loss count to the html file and reset values.
		$("#wins").html(winning);
		$("#losses").html(losing);
		$("#score").html(tally);
	}); 	
}); 








//Value assignment fucntion on load for buttons
// $(document).ready(function heartValue() {
// 	$("#heartValue").html(heart);
// });
// console.log(heartValue());

