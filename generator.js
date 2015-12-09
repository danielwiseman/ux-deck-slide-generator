var subjects = ['We'];
var verbs = ['architect', 'design', 'experientialize', 'conceive', 'imagine', 'innovate', 'conceptualize', 'platform', 'create', 'make', 'code'];
var adjectives = ['designed', 'user-centered', 'experiential', 'frictionless', 'easy', 'seamless', 'innovative', 'interactive', 'delightful'];
var nouns = ['experiences', 'design', 'platforms', 'brands', 'craft', 'code', 'interactions', 'architectures', 'user experiences', 'customer experiences', 'campaigns', 'journeys'];

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

var i = getRandomInt(0, subjects.length);

var result = subjects[i] + " ";

i = getRandomInt(0, verbs.length);

result += verbs[i] + " ";

i = getRandomInt(0, adjectives.length);

result += adjectives[i] + " ";

i = getRandomInt(0, nouns.length);

result += nouns[i] + ".";

var resultText = document.getElementById('text');
resultText.innerHTML = result;