// Avoid `console` errors in browsers that lack a console.
(function () {
	var method;
	var noop = function () { };
	var methods = [
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}
}());


// Place any jQuery/helper plugins in here.
window.onload = function () {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
		}
	});
};

function getLanguage() {
	// chrome
	// ko-KR
	if (navigator.language) {
		return navigator.language;
	}

	// ie
	// ko-KR
	if (navigator.userLanguage) {
		return navigator.userLanguage;
	}
	if (navigator.browserLanguage) {
		return navigator.browserLanguage;
	}
	if (navigator.systemLanguage) {
		return navigator.systemLanguage;
	}
	// default value
	return 'en';
}

// 대문인 경우에만 언어 분기
if (location.pathname == "/" || location.pathname == "index.html") {
	var lang = getLanguage();
	if (lang.startsWith('ko')) {
		location.href = '/index-ko.html';
	}
}
