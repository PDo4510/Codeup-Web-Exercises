"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.

var name = prompt('What is your name?');

for (var i = 2; i != 1; i++){
	if (name == ""){
		name = prompt('What is your name?');
		continue;
	} else{
		break;
	}
}



// TODO: Show an alert message that welcomes the user based on their input.

alert("Welcome to Codeup, " + name);

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.

do{
	var pizza = prompt('Do you like pizza?'); 
	if (pizza == "yes"){
	alert("So do ninja turtles. Turtle power!");
	break;
	} else if (pizza == "no") {
	alert("You will never be a ninja turtle!");
	break;
	} else { 
	alert('Only "yes" or "no" will do');
	};
} while (pizza !== "yes" || pizza !== "no");


