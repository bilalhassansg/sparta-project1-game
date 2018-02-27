// match the word from the user input 
var word = document.getElementById('wordword');

// array of words
var wordsarray = ['fuzzy', 'pizza' ,'quick', 'jumbo', 'chuck', 'jelly', 'joker', 'bumpy', 'prize', 'equals', 'reject', 'wizard', 'injury', 'mumble', 'jazzman', 'puzzled', 'zombies', 'hammock', 'cutback', 'knockoff', 'junkyard', 'hijacker', 'juggling', 'equipped', 'magazine', 'optimize', 'knocking','projects', 'acquired', 'jellybean', 'misjudged', 'judgement', 'technique', 'enjoyment', 'privatize', 'irritated', 'restarted', 'retreated', 'resistant', 'adjustable', 'transporter', 'terminology', 'surrounding', 'specialisms'];

// generate random word from array
var firstword = Math.floor(Math.random()*wordsarray.length);

// change the heading2 text to have a random word from array
var arraytoheading = $("h2").html(wordsarray[firstword]);

// restart game
var restartgame = false;

// start game
var startgame = true;

// get the user input from HTML
document.querySelector('form.wordform').addEventListener('submit', function(event) {
	event.preventDefault();
	var value = word.value;
	word.value = '';


	// create a variable for the user to match the word
	var randomtext = $(arraytoheading).html();

	function newwordfromarray() {
		$('h2').html(wordsarray[Math.floor(Math.random()*wordsarray.length)]);

		// var newrandom = arraytoheading;
		// var newrandomtext = randomtext;
	}


	// be sure the correct value and random text is matching
	// match user input to h2
	if (value === randomtext) {
		alert('Well done');
		//alert(value.match(arraytoheading));
		console.log(value);
		newwordfromarray();
	}
	else{ 
		alert('Fail');
	}
	// clearing the input box
	//word.value = "";

});

// countdown timer from 30 seconds

var secondsleft = 10;
var countdown = setInterval(timer, 1000); // set interval to 1 second

function timer() {
	secondsleft=secondsleft-1; // minus one second from the timer
	if (secondsleft <=0) {
		clearInterval(countdown);
		// alert the user time is up and can no longer continue
		for(i = secondsleft+1; i > 0; i--) {
		alert('time is up');
		word.value = true;
		$('h2').html('End of game');
}
	}
	//$('#timer').html('Timer');

	document.getElementById('timer').innerHTML=secondsleft + 'seconds';
}