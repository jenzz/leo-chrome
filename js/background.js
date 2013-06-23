var KEY = "dict";
var BASE_URL = "http://dict.leo.org";

chrome.omnibox.onInputEntered.addListener(function(text) {
	if (!text) {
		return;
	}

	search(text);
});

function search(text) {
	text = encodeURIComponent(text);

	var url = BASE_URL + "/" + localStorage[KEY] + "/#/search=" + text;
	navigateToUrl(url);
}

function navigateToUrl(url) {
	chrome.tabs.getSelected(null, function(tab) {
		chrome.tabs.update(tab.id, {
			url: url
		});
	});
}