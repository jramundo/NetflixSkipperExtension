chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ["foreground.js"]
    })
    .then(() => {
        console.log("DEBUG: INJECTED THE FOREGROUND SCRIPT.");
    })
    .catch(err => console.log(err));
});