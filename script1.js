// script1 js/
(function (window) {
	var HelloGreeter ={};
	HelloGreeter.names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	var greeting = "Hello ";
	var speakWord = "Goodbye";
	HelloGreeter.sayHello = function (){
		// console.log(greeting + GoodbyeGreeter.names);
		for (var i=0; i < HelloGreeter.names.length; i++){
			// console.log(greeting + HelloGreeter.names[i]);
			var firstLetter = HelloGreeter.names[i].charAt(0).toLowerCase();
			// console.log(firstLetter);
					if (firstLetter === 'j') {
						console.log(speakWord + " " + HelloGreeter.names[i]);
      					    				}
    				else {
						console.log(greeting + GoodbyeGreeter.names[i]);
					}

		}
	}
	window.HelloGreeter = HelloGreeter;
})(window);