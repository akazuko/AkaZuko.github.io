(function($){
  $(function(){

  	// for resume modal-appearance
  	$('.modal-trigger').leanModal();

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    $('#index-banner').css('height', $(window).height());
	$('#index-banner .parallax-container').css('height', $(window).height());

    $(window).scroll(function(i){
    var scrollVar = $(window).scrollTop();
	scrollVar = scrollVar/300;
	var str = scrollVar.toString();
	var s = "rgba(64, 64, 64, " + str + ")";
    $('#nav-bar').css('background-color', s);
	$('.black img').css('opacity', (0.2*scrollVar + 0.5 > 0.8) ? 0.8 : 0.2*scrollVar + 0.5);
  });

    var options = [
    {selector: '#second_col1_head', offset: 50, callback: 'Materialize.showStaggeredList("#second_col1_head");'},
    {selector: '#face-icon', offset: 50, callback: 'Materialize.showStaggeredList("#face-icon");' },
    {selector: '#education-bar', offset: 50, callback: 'Materialize.showStaggeredList("#education-bar");' },
    {selector: '#projects-bar', offset: 50, callback: 'Materialize.showStaggeredList("#projects-bar");' },
    {selector: '#work-bar', offset: 50, callback: 'Materialize.showStaggeredList("#work-bar");' },
    {selector: '#skill-bar', offset: 50, callback: 'Materialize.showStaggeredList("#skill-bar");' }
  		];
	Materialize.scrollFire(options);
  
  	// For smooth-scrolling
  	var $root = $('html, body'); // For optimization
  	$('.scroll').click(function(){
    	$root.animate({
        	scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    	}, 500);
    	return false;
	});


  }); // end of document ready

})(jQuery); // end of jQuery name space
