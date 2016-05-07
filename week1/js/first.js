
console.log('loaded');

$("body").click(function(){
  console.log('click')
  $( this ).toggleClass("blue");
});

// $(document).on('click', function(){alert('hi')});