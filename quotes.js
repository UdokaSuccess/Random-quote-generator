var quotes = ["When you have a dream you\'ve got to grab it and never let go",
"Nothing is impossible....",
"There is nothing impossible to they who will try",
"The bad news is time flies",
"Life has got all those twists and turns",
"Keep your face always toward the sunshine, and shadows will fall behind you.",
"Live as if you were to die tomorrow",
"That which does not kill us makes us stronger.",
"Be who you are and say what you feel\, because those who mind don\'t matter and those who matter don\'t mind",
"We must not allow other people\'s limited perceptions to define us\.",
"Be yourself\; everyone else is already taken. Oscar Wilde",
"This above all\: to thine own self be true. William Shakespeare",
"If you cannot do great things\, do small things in a great way.",
"If opportunity doesn\'t knock\, build a door\. Milton Berle",
"Wise men speak because they have something to say\, fools because they have to say something. Plato",
"Strive not to be a success\, but rather to be of value\. Albert Einstein",
"Two roads diverged in a wood\, and I took the one less traveled by\, And that has made all the difference. Robert Frost",
"Do not let what you cannot do interfere with what you can do\. John Wooden",
"Whenever you find yourself on the side of the majority\, it is time to pause and reflect. Mark Twain",
"I haven\'t failed. I\'ve just found 10\,000 ways that won\'t work. Thomas Edison",
"A journey of a thousand leagues begins beneath one\'s feet. Lao Tzu",
"I\'ve learned that people will forget what you said\, people will forget what you did\, but people will never forget how you made them feel. Maya Angelou",
 "Either you run the day\, or the day runs you\. Jim Rohn",
 "Life shrinks or expands in proportion to one\'s courage. Anais Nin",
"You must be the change you wish to see in the world\. Mahatma Gandhi",
"What you do speaks so loudly that I cannot hear what you say\. Ralph Waldo Emerson",
"Believe and act as if it were impossible to fail. Charles Kettering",
"The difference between ordinary and extraordinary is that little extra. Jimmy Johnson",
"Optimism is the faith that leads to achievement\. Nothing can be done without hope and confidence\.",
"Start where you are. Use what you have\. Do what you can\.",
"It does not matter how slowly you go as long as you do not stop\.",
"It always seems impossible until it\'s done\.",
"Life is 10% what happens to you and 90% how you react to it\.",
"Our greatest weakness lies in giving up\. The most certain way to succeed is always to try just one more time\.",
"If you're going through hell\, keep going\.",
"Your attitude\, not your aptitude\, will determine your altitude\. Zig Ziglar",
"The secret of getting ahead is getting started\. Mark Twain",
"If you fell down yesterday\, stand up today\. H\. G\. Wells",
"Knowing is not enough; we must apply\. Willing is not enough\; we must do\. Johann Wolfgang von Goethe",
"In any moment of decision\, the best thing you can do is the right thing\,the next best thing is the wrong thing\, and the worst thing you can do is nothing\. Theodore Roosevelt"

]
var picture = document.querySelector("img")

var images = new Array()
images[0] = "download5.jpg";
images[1] = "download6.jpg";
images[2] = "download8.jpg";
images[3] = "breathe5.jpg";
images[4] = "download2.jpg";
images[5] = "man1.jpg";
images[6] = "downloads.jpg";
images[7] = "download9.jpg";
images[8] = "download13.jpg";
images[9] = "download11.jpg";
images[10] = "download12.jpg";
images[11] = "download13.jpg";
images[12] = "download11.jpg";



function getImage() {
	// body...
	for (var i = 0; i < images.length; i++) {
	var random  = Math.floor(Math.random() * (images.length));
	picture.src = images[random];


	}
}



function newQuotes(argument) {
	// body...
	var random  = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quotesDisplay').textContent = quotes[random]
}
 var btn = document.getElementById("btn");
// for (var i = 0; i<quotes.length; i++){
 btn.addEventListener("click", newQuotes())
//}
const err = new Error('please improve the time accessibility of the code')
console.log(err.message)







