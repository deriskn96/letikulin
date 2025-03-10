$(document).ready(function() {
    
  var audio  = new Audio('data/button.ogg');
	
  $(".button, img").mouseup(function() {
    audio.load();
    audio.play();
  });
});

function delay (URL) {
    setTimeout( function() { window.location = URL }, 500 );
}