"use strict";

// Don't change the next two lines!
// This creates two variables:
//     one with the colors of the rainbow, and another with a single randome
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];
var message;

switch (color) {
	
case "red":
	message = "The color is " + color + ". Red is the color of blood.";
	console.log(message);
	break;

case "orange":
	message = "The color is " + color + ". Orange is the color of an orange." ;
	console.log(message);
	break;

case "yellow":
	message = "The color is " + color + ". Yellow is the color of sunflowers." ;
	console.log(message);
	break;

case "green":
	message = "The color is " + color + ". Green is the color of Michigan State." ;
	console.log(message);
	break;

case "blue":
	message = "The color is " + color + ". Blue is the color of the ocean." ;
	console.log(message);
	break;

default:
	console.log("I do not know anything by that color"); 
};

var message2 = (color == "green") ? "This color is your favorite." : "This color is not your favorite.";
console.log(message2);
    // TODO: create a case statement that will handle every color except indigo and violet
    // TODO: when a color is encountered log a message that tells the color, and an object of that color
    //       example: Blue is the color of the sky.

    // TODO: create a default case that will catch indigo and violet
    // TODO: for the default case, log: I do not know anything by that color.
