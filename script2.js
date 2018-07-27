// script2 js/
(function (window) {
	var GoodbyeGreeter ={};
	GoodbyeGreeter.names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	var greeting = "Hello ";
	var speakWord = "Goodbye";
	GoodbyeGreeter.sayGoodbye = function (){
		// console.log(greeting + GoodbyeGreeter.names);
		for (var i=0; i < GoodbyeGreeter.names.length; i++){
			// console.log(greeting + GoodbyeGreeter.names[i]);

			var firstLetter = HelloGreeter.names[i].charAt(0).toLowerCase();
			// console.log(firstLetter);
					if (firstLetter === 'j') {
						console.log(speakWord + " " + GoodbyeGreeter.names[i]);
      					    				}
    				else {
						console.log(greeting + GoodbyeGreeter.names[i]);
					}

		}
	}

	window.GoodbyeGreeter = GoodbyeGreeter;
})(window);