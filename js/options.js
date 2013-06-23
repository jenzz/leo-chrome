// When DOM is ready...
document.addEventListener('DOMContentLoaded', loadCurrentDict);

// Local storage key
var KEY = "dict";

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