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

var hideaudio = $('embed').html();

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
	$('h3').remove();
	$('button').remove();
	$('p').remove();
	$('form').remove(); 
	$('h2').html('Your socre is: ' + countword);
	$('.button-wrapper').append("<button onclick='window.location.reload()'>Play Again</button>");
}
// clearing the input box
//word.value = "";

// if the user gets more then 13 words in 30 seconds, they will see the spartan image


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

	// remove elements from the page when the timer runs out

	$('h3').remove();
	$('button').remove();
	$('p').remove();
	$('form').remove();
	// clear count
	// change h2 to the score the user got
	$('h2').html('Your socre is: ' + countword);
	$('.button-wrapper').append("<button onclick='window.location.reload()'>Play Again</button>");


	// if the user gets more than 13; then (s)he is considered a spartan
	if (countword >= 13) {
		$('.h3container').append("<h3> YOU ARE A SPARTAN </h3>");
		$('.h3container').append("<img src='image/spartanwinner.jpg' width='30%' height='50%'/>");
	}
}
// display countdown including seconds
//document.getElementById('timer').innerHTML=secondsleft + ' seconds';
$('#timer').html(secondsleft + ' seconds');
};

function startgamefunction(event) {
	$('.begincountdown').on('click', function(event) {


		$('h2').css('color', 'yellow');
		$('h2').css('text-shadow', '4px 4px MediumSeaGreen');
		$('p').css('color', 'white');
		$('p').css('text-shadow', '2px 2px MediumSeaGreen');
	// $('p').css('font-family', 'Courier New');
	// set interval to 1 second
	countdown = setInterval(timer, 1000);
	timer();
})
}

startgamefunction();