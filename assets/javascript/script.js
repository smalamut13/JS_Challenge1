$(document).ready(function() {

var index;
var name = ["Lucille", "Michael", "George Michael"];
for (index = 0; index < name.length; index++) {
	console.log(name[index] + " is in the class.");
}


var x = 0;
	while (x <= 100) {
		console.log(x + " * 9 = " + x * 9);
 
		x = x + 1;
		
	}


var buzz, fizz;
for(var i=1; i<=100; i++){

	fizz=i % 3==0;
	buzz=i % 5==0;

	if(fizz & buzz){
		console.log("Fizzbuzz;");
	}else{
		if(fizz){
			console.log("Fizz;");
		}else if(buzz){
			console.log("Buzz;");
		}else{
			console.log(i);
		}
	}
}

});




		