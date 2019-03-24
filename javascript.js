$(document).ready(function(){
	$("#lucyLogo").hide();
});

// Window scroll listener followed by the function executed at every scroll
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
	
	// Logo
	var lucyLogo = document.getElementById('lucyLogo');
    
    // Coordinate of the background video segment
    var home = document.getElementById("videoDiv").getBoundingClientRect().top;
    
    // Change header bar background color (transparent or white)
    if (home < 0) {
		$("#lucyLogo").fadeIn(500);
    } else {
		$("#lucyLogo").fadeOut(500);
    }
}


// Change language button function
function changeLanguage(language) {
	
	// German and English elements
	var headGer = document.getElementById('headGer');
	var headEng = document.getElementById('headEng');
	var descGer = document.getElementById('descGer');
	var descEng = document.getElementById('descEng');

	// Element display styles
	var dispFlex = 'flex';
	var dispNone = 'none';
	
	if (language === 'german') {
		headGer.style.display = dispFlex;
		headEng.style.display = dispNone;
		descGer.style.display = dispFlex;
		descEng.style.display = dispNone;
	} else {
		headGer.style.display = dispNone;
		headEng.style.display = dispFlex;
		descGer.style.display = dispNone;
		descEng.style.display = dispFlex;
	}
}