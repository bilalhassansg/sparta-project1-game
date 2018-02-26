// match the word from the user input 
var word = document.getElementById('wordword');


// get the user input from HTML
document.querySelector('form.wordform').addEventListener('submit', function(event) {
	event.preventDefault();
	var value = word.value
	console.log(value)
	// clearing the input box
	word.value = "";
});