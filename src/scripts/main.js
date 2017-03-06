// FILE: MAIN.js | PROJECT NAME: Enter Project Name Here | BY: @LorinSteel

// Start Custom Scripts

window.onload = function() {

	project.init();

};

var project = {},
		winWidth,
		winHeight;

project.init = function(){

  winWidth = $(window).width();
  winHeight = $(window).height();

	everySize();
	showResolution();

};

// $('a').bind('click',function(e){
// 			if ($(this).attr('href').indexOf("#") > -1) {
// 				e.preventDefault();
// 			}
// });

$(window).resize(function() {
  winWidth = $(window).width();
  winHeight = $(window).height();
  everySize();
	showResolution();
});

function showResolution() {
	$('.screen-resolution p').text(winWidth + ' x ' + winHeight);
}

function everySize() {
	// $('.window-size').css({
	// 	'height' : 'auto',
	// 	'min-height' : $(window).height() + 'px'
	// });
	$('.background-image').css({
		'height' : 'auto',
		'min-height' : $('body').height() + 'px'
	});
}
