// When DOM is ready...
document.addEventListener("DOMContentLoaded", init);

// Local storage key
var KEY = "dict";

function init() {
	// Check local storage, set default if empty
	loadCurrentDict();

	// Set click listeners
	addClickListeners();
}

function loadCurrentDict() {
	// Get the last selected dictionary from local storage
	var dict = localStorage[KEY];

	// Get all dictionaries
	var dicts = document.getElementsByName("dict");

	// Check the last selected dictionary
	for(var i = 0, len = dicts.length; i < len; i++) {
		if(dicts[i].value === dict) {
			dicts[i].checked = true;
			return;
		}
	}

	// Fall back to German-English
	localStorage[KEY] = "ende";
	dicts[0].checked = true;
}

function addClickListeners() {
	// Get all radio buttons
	var dicts = document.querySelectorAll("input[type=radio][name=dict]");

	/// Add click listeners
	[].forEach.call( dicts, function(el) {
	   el.addEventListener("click", function() {
	     onDictSelected(el);
	  });
	});
}

function onDictSelected(dict) {
	// Save to local storage
	localStorage[KEY] = dict.value;

	// Give user some feedback
	var status = document.getElementById("status");
	fade("in", status, 500);

	// Fade out after 1.2 second
	setTimeout(function() { fade("out", status, 500); }, 1200);
}

function fade(type, el, duration) {
	var isIn     = (type === 'in'),
		opacity  = isIn ? 0 : 1,
		interval = 50,
		gap      = interval / duration;
					
		if(isIn) {
			el.style.display = 'block';
			el.style.opacity = opacity;	
		}
				
		function func() {
			opacity = isIn ? opacity + gap : opacity - gap; 
			el.style.opacity = opacity;
			if(opacity <= 0 || opacity >= 1) { window.clearInterval(fading); }
			if(opacity <= 0) { el.style.display = "none"; }
		}
		
		var fading = window.setInterval(func, interval);
}
