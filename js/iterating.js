(function(){
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.

    var names = ['Jenny', 'Ella', 'Wyatt', 'Peter'];

    // TODO: Create a log statement that will log the number of elements in the names array.
    console.log("There are " + names.length + " names.")

    // TODO: Create log statements that will print each of the names array elements individually.
    for (var i = 0; i<names.length; i++){
    	console.log(names[i]);
    }

    function logname(value, index, ar){
    	console.log(value);
    }

    names.forEach(logname);
})();
