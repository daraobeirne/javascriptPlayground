
console.log("loaded")

$( ".water" ).click(function(){
	$( this ).toggleClass("blue");
});

$( ".water").on('click', function(e){
	console.log(e)
	$(this).append('<div>I like tootles</div>')
});
// $(document).on('click', function(){alert('hi')});