
// var's 
var correctAnswers = 0;
var question;
var answer;
var response;
var html;
var correct = [];
var incorrect = [];

// print function
function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}


// question and answers array
var questions = [
['What is the strongest muscle in the human body? The tongue or bicep?', 'tongue'],
['Who invented the electric chair? A carpenter or dentist?', 'dentist'],
['What is the line called between 2 numbers in a fraction? Vinculum or Fractoral?', 'vinculum'],
['Which body part stays the same size from when we are born until we die? Heart or Eyeball?', 'eyeball'],
['What was the first novel written on a typewriter?, To Kill A Mockingbird or Tom Sawyer?', 'tom sawyer']
];

function buildList(arr) {
	var listHTML = '<ol>';
	 for (var i = 0; i < arr.length; i += 1) {
	 	listHTML += '<li>' + arr[i] + '</li>';
	 }
	 listHTML += '</ol>';
	 return listHTML;
}

for (var i = 0; i < questions.length; i += 1) {
	question = questions[i][0];	
	answer = questions[i][1]
	response = prompt(question);
	if (response.toLowerCase() === answer) {
		correctAnswers += 1;
		correct.push(question);
	} else {
		incorrect.push(question);
	}
}



html = "You got " + correctAnswers + " question(s) right.";
html += '<h2>You got these questions correct:</h2>';
html += buildList(correct);
html += '<h2>You got these questions wrong:</h2>';
html += buildList(incorrect);
print(html);

