$("#factButton").on("click", function() {
	// We generate a random number between 0 and 5 (array size)
	var number = Math.floor((Math.random() * booFacts.length));
	$("#factText").text(booFacts[number])
})

// This array holds all of our Boo facts!
var booFacts = ["Boo is a pomeranian.", "Boo's best friend is another pomeranian named Buddy.", "Boo the Pomeranian was born on March 16, making him a Pisces.", "Boo's favourite food is grass.", "Boo has released two books" ]

//When the textPink button is pressed...
$("#textPink").on("click", function() {
	$("#funText").css("color", "pink")
})

// When the textOrange button is pressed...
$("#textOrange").on("click", function() {
$("#funText").css("color", "orange")
})

// When the textGreen button is pressed...
$("#textGreen").on("click", function() {
	$("#funText").css("color", "green")
})

// When the boxGrow button is pressed...
$("#boxGrow").on("click", function() {
	// Increase the size of the box
	$("#box").animate({height:"+=35px", 
		width:"+=35px"}, "fast");
})

//  When the boxShrink button is pressed...
$("#boxShrink").on("click", function() {
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})