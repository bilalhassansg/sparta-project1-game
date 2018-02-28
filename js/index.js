// match the word from the user input 
var word = document.getElementById('wordword');

// array of words
var wordsarray = ['fuzzy', 'pizza' ,'quick', 'jumbo', 'chuck', 'jelly', 'joker', 'bumpy', 'prize', 'equals', 'reject', 'wizard', 'injury', 'mumble', 'jazzman', 'puzzled', 'zombies', 'hammock', 'cutback', 'knockoff', 'junkyard', 'hijacker', 'juggling', 'equipped', 'magazine', 'optimize', 'knocking','projects', 'acquired', 'jellybean', 'misjudged', 'judgement', 'technique', 'enjoyment', 'privatize', 'irritated', 'restarted', 'retreated', 'resistant', 'adjustable', 'transporter', 'terminology', 'surrounding', 'specialisms'];

// count the input
var countword = parseInt($('h3').attr('count'));

// generate random word from array
var firstword = Math.floor(Math.random()*wordsarray.length);

// change the heading2 text to have a random word from array
var arraytoheading = $("h2").html(wordsarray[firstword]);

// restart game
var restartgame = false;

// start game
//var startgame = $('button');

//startgamefunction();

// get the user input from HTML
document.querySelector('form.wordform').addEventListener('submit', function(event) {
	event.preventDefault();
	var value = word.value;
	word.value = '';


	// create a variable for the user to match the word
	var randomtext = $(arraytoheading).html();

	function newwordfromarray() {
		$('h2').html(wordsarray[Math.floor(Math.random()*wordsarray.length)]);

	}

	// be sure the correct value and random text is matching
	// match user input to h2
	if (value === randomtext) {

		//alert('Well done'); // confirm word is correct
		console.log(value);
		// get a new random word from the array to display in h2
		newwordfromarray();
		// count how many words for each input
		$('h3').html('x' + ++countword);
	}
	else{ 
		alert('Fail');
		window.location.reload();
	}
	// clearing the input box
	//word.value = "";

});

// countdown timer from 30 seconds
// set the time limit to 30 seconds
	var secondsleft = 30;

	var countdown = false;

function timer() {

	secondsleft = parseInt(secondsleft - 1); // minus one second from the timer


	if (secondsleft <=0) {
		clearInterval(countdown);
		// alert the user time is up and can no longer continue
		for(i = secondsleft + 1; i > 0; i--) {
			//console.log(secondsleft[i])
			alert('time is up');


		// change h2 to 'end of game'
			$('h2').html('End of game');
			window.location.reload();
			
		}
		// clear count

		// restart timer
	// }
}
	// display countdown including seconds
	//document.getElementById('timer').innerHTML=secondsleft + ' seconds';
	$('#timer').html(secondsleft + ' seconds');
};

function startgamefunction(event) {
	$('button').on('click', function(event) {

		$('h2').css('color', 'green')
		// set interval to 1 second
	countdown = setInterval(timer, 1000);
		timer();
	})
}

startgamefunction();