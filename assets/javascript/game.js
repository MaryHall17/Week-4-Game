//Randomizer function for random number between 19 and 120
function getRndInteger(min, max) {
	
	return Math.floor(Math.random() * (max - min + 1) ) + min;
};

//Value assignment function on load for random number and crystals
$(document).ready(function randomizeValues() {
	$("#randomNumber").html(getRndInteger(19,120));
	//Randomizers for assigning values to crystals between 1 and 12:
	var heart = Math.floor((Math.random() * 12) + 1);
	var star = Math.floor((Math.random() * 12) +1);
	var oval = Math.floor((Math.random() * 12) +1);
	var tear = Math.floor((Math.random() * 12) +1);
	$("#heartValue").html(heart);
	$("#starValue").html(star);
	$("#ovalValue").html(oval);
	$("#tearValue").html(tear);

	//Send values to console to test losing and winning scenarios
	//For when the page first loads:
	console.log(heart);
	console.log(star);
	console.log(oval);
	console.log(tear);
	console.log("-----------");
	
	//Button clicks:

	//Heart click:
	$("#heart").click(function heartClick() {
		var integer = parseInt($("#score").text());
		alert("heart is " + heart);
		var number = parseInt($("#randomNumber").text());
		var tally = parseInt($("#score").html(heart + integer).text()); //Update score
		var winning = parseInt($("#wins").text());
		var losing = parseInt($("#losses").text());
			// Winning and losing logic:
			if (tally == number) {
				$("#wins").html(winning++);
				alert("You win!");
				//Value resets
				tally = 0;
				heart = Math.floor((Math.random() * 12) + 1);
				star = Math.floor((Math.random() * 12) + 1);
				oval = Math.floor((Math.random() * 12) + 1);
				tear = Math.floor((Math.random() * 12) + 1);
				$("#randomNumber").html(getRndInteger(19,120));
			} else if (tally < number) {
				$("#score").html(heart + integer);
			} else {
				$("#losses").html(losing++);
				alert("You lose!");
				//Value resets
				tally = 0;
				heart = Math.floor((Math.random() * 12) + 1);
				star = Math.floor((Math.random() * 12) + 1);
				oval = Math.floor((Math.random() * 12) + 1);
				tear = Math.floor((Math.random() * 12) + 1);
				$("#randomNumber").html(getRndInteger(19,120));
			};
			//Sends wins/loss count to the html file and reset score value.
			$("#wins").html(winning);
			$("#losses").html(losing);
			$("#score").html(tally);
			//Test winning & losing scenarios without refreshing:
			console.log(heart);
			console.log(star);
			console.log(oval);
			console.log(tear);
			console.log("-----------");
		});

	//Star click:
	
	$("#star").click(function starClick() {
		var integer = parseInt($("#score").text());
		var number = parseInt($("#randomNumber").text());
		var tally = parseInt($("#score").html(star + integer).text()); //Update score
		var winning = parseInt($("#wins").text());
		var losing = parseInt($("#losses").text());
		alert("star is " + star);
			// Winning and losing logic:
		if (tally == number) {
			$("#wins").html(winning++);
			alert("You win!");
			//Value resets:
			tally = 0;
			heart = Math.floor((Math.random() * 12) + 1);
			star = Math.floor((Math.random() * 12) + 1);
			oval = Math.floor((Math.random() * 12) + 1);
			tear = Math.floor((Math.random() * 12) + 1);
			$("#randomNumber").html(getRndInteger(19,120));
		} else if (tally < number) {
			$("#score").html(star + integer);
		} else {
			$("#losses").html(losing++);
			alert("You lose!");
			//Value resets:
			tally = 0;
			heart = Math.floor((Math.random() * 12) + 1);
			star = Math.floor((Math.random() * 12) + 1);
			oval = Math.floor((Math.random() * 12) + 1);
			tear = Math.floor((Math.random() * 12) + 1);
			$("#randomNumber").html(getRndInteger(19,120));
		};
		//Sends wins/loss count to the html file and reset score value.
		$("#wins").html(winning);
		$("#losses").html(losing);
		$("#score").html(tally);
		//Test winning & losing scenarios without refreshing:
		console.log(heart);
		console.log(star);
		console.log(oval);
		console.log(tear);
		console.log("-----------");
	});

	//Oval click:

	$("#oval").click(function ovalClick() {
		var integer = parseInt($("#score").text());
		var number = parseInt($("#randomNumber").text());
		var tally = parseInt($("#score").html(oval + integer).text()); //Update score
		var winning = parseInt($("#wins").text());
		var losing = parseInt($("#losses").text());
		alert("oval is " + oval);
			// Winning and losing logic:
		if (tally == number) {
			$("#wins").html(winning++);
			alert("You win!");
			//Value resets
			tally = 0;
			heart = Math.floor((Math.random() * 12) + 1);
			star = Math.floor((Math.random() * 12) + 1);
			oval = Math.floor((Math.random() * 12) + 1);
			tear = Math.floor((Math.random() * 12) + 1);
			$("#randomNumber").html(getRndInteger(19,120));
		} else if (tally < number) {
			$("#score").html(oval + integer);
		} else {
			$("#losses").html(losing++);
			alert("You lose!");
			//Value resets
			tally = 0;
			heart = Math.floor((Math.random() * 12) + 1);
			star = Math.floor((Math.random() * 12) + 1);
			oval = Math.floor((Math.random() * 12) + 1);
			tear = Math.floor((Math.random() * 12) + 1);
			$("#randomNumber").html(getRndInteger(19,120));
		};
		//Sends wins/loss count to the html file and reset score value.
		$("#wins").html(winning);
		$("#losses").html(losing);
		$("#score").html(tally);
		//Test winning & losing scenarios without refreshing:
		console.log(heart);
		console.log(star);
		console.log(oval);
		console.log(tear);
		console.log("-----------");
	});

	//Tear click:

	$("#tear").click(function tearClick() {
		var integer = parseInt($("#score").text());
		var number = parseInt($("#randomNumber").text());
		var tally = parseInt($("#score").html (tear + integer).text()); //Updates score
		var winning = parseInt($("#wins").text());
		var losing = parseInt($("#losses").text());
		alert("tear is " + tear);
			// Winning and losing logic:
		if (tally == number) {
			$("#wins").html(winning++);
			alert("You win!");
			//Value resets
			tally = 0;
			heart = Math.floor((Math.random() * 12) + 1);
			star = Math.floor((Math.random() * 12) + 1);
			oval = Math.floor((Math.random() * 12) + 1);
			tear = Math.floor((Math.random() * 12) + 1);
			$("#randomNumber").html(getRndInteger(19,120));
		} else if (tally < number) {
			$("#score").html(tear + integer);
		} else {
			$("#losses").html(losing++);
			alert("You lose!");
			//Value resets:
			tally = 0;
			heart = Math.floor((Math.random() * 12) + 1);
			star = Math.floor((Math.random() * 12) + 1);
			oval = Math.floor((Math.random() * 12) + 1);
			tear = Math.floor((Math.random() * 12) + 1);
			$("#randomNumber").html(getRndInteger(19,120));
		};
		//Sends wins/loss count to the html file and reset score value.
		$("#wins").html(winning);
		$("#losses").html(losing);
		$("#score").html(tally);
		//Test winning & losing scenarios without refreshing:
		console.log(heart);
		console.log(star);
		console.log(oval);
		console.log(tear);
		console.log("-----------");
	});
});



