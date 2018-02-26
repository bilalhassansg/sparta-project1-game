// match the word from the user input 
var word = document.getElementById('wordword');

// array of words
var wordsarray = ['fuzzy', 'pizza' ,'quick', 'jumbo', 'chuck', 'jelly', 'joker', 'bumpy', 'prize', 'equals', 'reject', 'wizard', 'injury', 'mumble', 'jazzman', 'puzzled', 'zombies', 'hammock', 'cutback', 'knockoff', 'junkyard', 'hijacker', 'juggling', 'equipped', 'magazine', 'optimize', 'knocking','projects', 'acquired', 'jellybean', 'misjudged', 'judgement', 'technique', 'enjoyment', 'privatize', 'irritated', 'restarted', 'retreated', 'resistant', 'adjustable', 'transporter', 'terminology', 'surrounding', 'specialisms'];

// generate random word from array
var firstword = Math.floor(Math.random()*wordsarray.length);

// change the heading2 text to have a random word from array
var arraytoheading = $("h2").html(wordsarray[firstword]);



// get the user input from HTML
document.querySelector('form.wordform').addEventListener('submit', function(event) {
	event.preventDefault();
	var value = word.value;

	var randomtext = $(arraytoheading).html();

	console.log(value);
	console.log(randomtext);


	// match user input to h2

	if (value === randomtext) {
		alert('Well done');
		//alert(value.match(arraytoheading));
	}
	else{ 
		alert('Fail');
	}

	// clearing the input box
	//word.value = "";
});



// generate random word from array 

// for (var i = 0; i < wordsarray.length; i++){

// 	randomword = wordsarray[Math.floor(Math.random() * wordsarray.length)]
// 	console.log(randomword);
// }



var secondsleft = 30;
var countdown = setInterval(timer, 1000);

function timer() {
	secondsleft=secondsleft-1;
	if (secondsleft <=0) {
		clearInterval(countdown);
		return;

	}
	//$('#timer').html('Timer');

	document.getElementById('timer').innerHTML=secondsleft + 'seconds';
}