
$( 'body' ).click(function(){
	$( this ).toggleClass("blue");
});

$( ‘body’ ).on(‘click’, function(e){
	console.log(e)
	$(this).append(‘<div>I like tootles</div>’)
});