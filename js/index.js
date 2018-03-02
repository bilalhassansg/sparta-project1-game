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

// create a function to get a new random word from the array and display it in h2
function newwordfromarray() {
	$('h2').html(wordsarray[Math.floor(Math.random()*wordsarray.length)]);
}
// create function to determine the type of winner
function typeofwinner(event) {
if (countword >= 12) {
	// if they meet the reuiqrement, thye are considered a spartan
		$('.h3container').append("<h3> YOU ARE A SPARTAN </h3>");
		// get the image of the spartan to appear from the images folder
		$('.h3container').append("<img src='image/spartanwinner.jpg' width='30%' height='50%'/>");
	}
	else {
		// if the user does not meet the if statement; they are considered a new recruit
		$('.h3container').append("<h3> You are a new recruit. Keep trying. </h3>");
		// get the image of the new recruit in the images folder
		$('.h3container').append("<img src='image/cap_rogers.jpeg' width='20%' height='40%'/>");
		}
	}
// get the user input from HTML
document.querySelector('form.wordform').addEventListener('submit', function(event) {
	// prevent default action from happening
	event.preventDefault(); 
	// accept the value from the user
	var value = word.value;
	// clear the input for next word
	word.value = '';
// create a variable for the user to match the word
var randomtext = $(arraytoheading).html(); 
// match user input to h2
if (value === randomtext) {
	// get a new random word from the array to display in h2
	newwordfromarray();
	// count how many words for each input
	$('h3').html('x ' + ++countword);
}
else{
	// remove whats inside the element
	$('h3').remove();
	$('button').remove();
	$('p').remove();
	$('form').remove();
	// tell the user what score they have got. get the number of counts from the counted variable 
	$('h2').html('Your socre is: ' + countword);
		// once everything is removed; a new button 'start again' will replace the 'begin game' button
	$('.button-wrapper').append("<button onclick='window.location.reload()'>Play Again</button>");
	// call the type of winner function
	typeofwinner();
};

});
// set the time limit to 30 seconds (31 so it can actually start from 30 seconds. programming language reason)
var secondsleft = 31;
// make the countdown false so the timer does not start
var countdown = false;
// create function of the timer
function timer() {
// decrease the timer by one second each time
secondsleft = parseInt(secondsleft - 1); // minus one second from the timer
// if the timer reaches or is less than 0; clear the countdown interval so the timer can start again
if (secondsleft <=0) {
	// clear the intervl so the timer can start again when ready
	clearInterval(countdown);
	// remove elements from the page when the timer runs out
	$('h3').remove();
	$('button').remove();
	$('p').remove();
	$('form').remove();
	// clear count
	// change h2 to the score the user got
	$('h2').html('Your socre is: ' + countword);
			// once everything is removed; a new button 'start again' will replace the 'begin game' button
	$('.button-wrapper').append("<button onclick='window.location.reload()'>Play Again</button>");
	// call the type of winner function
	typeofwinner();
};
// display countdown including seconds
$('#timer').html(secondsleft + ' seconds');
// increase font size
$('#timer').css('font-size', '+=2');
};
// create a function to start the game on button click
function startgamefunction(event) {
	// calling the begin countdown button
	$('.begincountdown').on('click', function(event) {
		// call the new word from array function
		newwordfromarray();
		// override the CSS file and change the layout for when the button is clicked
		$('h2').css('color', 'yellow');
		$('h2').css('text-shadow', '4px 4px MediumSeaGreen');
		$('p').css('color', 'white');
		$('p').css('text-shadow', '2px 2px MediumSeaGreen');
	// set interval to 1 second
	countdown = setInterval(timer, 1000);
	// call the timer function that has been created
	timer();
})
}
// over ride the over ridden h2 with its original text to be changed once the startgame function is called.
$('h2').html('Your word will appear here');
// call the startgamefunction for the game to start when the button is clicked
startgamefunction();