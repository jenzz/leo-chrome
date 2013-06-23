// When DOM is ready...
document.addEventListener('DOMContentLoaded', init);

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
	var dicts = document.getElementsByName('dict');

	// Check the last selected dictionary
	for(var i = 0, len = dicts.length; i < len; i++) {
		if(dicts[i].value == dict) {
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
	   el.addEventListener('click', function() {
	     onDictSelected(el);
	  });
	});
}

function onDictSelected(dict) {
	localStorage[KEY] = dict.value;
}