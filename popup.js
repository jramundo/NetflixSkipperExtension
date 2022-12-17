document.getElementById("switch").addEventListener("click", () => {

    chrome.storage.local.get(["skipperState"]).then((result) => {

        chrome.storage.local.set({ skipperState: !result.skipperState });

        // THIS WILL BE THE OPPOSITE OF THE ACTUAL STATE BECAUSE WE JUST
        // ASSIGNED SKIPPERSTATE AS !RESULT.SKIPPERSTATE

        if (!result.skipperState) {
            document.getElementById("switch").style.fill = "green";
        } else {
            document.getElementById("switch").style.fill = "red";
        }
    });

});
  
chrome.storage.local.get(["skipperState"]).then((result) => {

    if (result.skipperState) {
        document.getElementById("switch").style.fill = "green";
    } else {
        document.getElementById("switch").style.fill = "red";
    }
});
  