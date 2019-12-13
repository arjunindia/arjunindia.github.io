var loler = 1;
$('.dmoder').click(function(event) {
	/* Act on the event */
	$('.lol').toggleClass('bg-dark colwhite');
	$('.lmao').toggleClass('navbar-dark bg-dark').toggleClass('navbar-light bg-secondary ');
	loler++;
	if(loler%2==0){$('.dmoder').text('Light Mode');}
	else {
		$('.dmoder').text('Dark Mode');
	}
});
$(document).ready(function() {
	$('#lscr').fadeOut('1000').css('z-index', '-999');
});