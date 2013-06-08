var GERMAN = "de";
var DICTIONARY = {
	ENGLISH: {
		value: "en" + GERMAN
	},
	FRENCH: {
		value: "fr" + GERMAN
	},
	SPANISH: {
		value: "es" + GERMAN
	},
	ITALIAN: {
		value: "it" + GERMAN
	},
	CHINESE: {
		value: "ch" + GERMAN
	},
	RUSSIAN: {
		value: "ru" + GERMAN
	},
	PORTUGUESE: {
		value: "pt" + GERMAN
	},
	POLISH: {
		value: "pl" + GERMAN
	}
};

var DEFAULT_DICTIONARY = DICTIONARY.ENGLISH.value;
var BASE_URL = "http://dict.leo.org";
var SEARCH_URL = BASE_URL + "/" + DEFAULT_DICTIONARY + "/#/search=";

chrome.omnibox.onInputEntered.addListener(function(text) {
	if (!text) {
		return;
	}

	search(text);
});

function search(text) {
	text = encodeURIComponent(text);
	var url = SEARCH_URL + text;
	navigateToUrl(url);
}

function navigateToUrl(url) {
	chrome.tabs.getSelected(null, function(tab) {
		chrome.tabs.update(tab.id, {
			url: url
		});
	});
}