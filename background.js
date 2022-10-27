chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.query({
		currentWindow: true,
		active: true
	}, function(tab) {
		console.log("Click registered by browserAction.onClicked, background.js started")
		});
	});