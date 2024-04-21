function iterate() {

    chrome.storage.local.get(["skipperState"]).then((result) => {

        if (!result.skipperState) {
            return
        }

        if (window.location.hostname.includes("netflix")) {
            
            // NETFLIX
    
            var skipButton = document.querySelector('button.watch-video--skip-content-button');
    
            if (skipButton != null) {
                skipButton.click()
                console.log("DEBUG: SKIP BUTTON TAPPED")
            } else {
                console.log("DEBUG: THERE IS NO VISIBLE SKIP BUTTON")
            }

            // CLASSES WHEN NEXT EPISODE BUTTON HAS ANIMATION
            var nextEpisodeButton = document.getElementsByClassName("hasLabel hasIcon ltr-3jizft")[0]

            if (nextEpisodeButton == null) {
                // CLASSES WHEN NEXT EPISODE BUTTON HAS NOT ANIMATION
                nextEpisodeButton = document.getElementsByClassName("color-primary hasLabel hasIcon ltr-1jtux27")[0]
            }

            if (nextEpisodeButton != null) {
                nextEpisodeButton.click()
                console.log("DEBUG: NEXT EPISODE BUTTON TAPPED")
            } else {
                console.log("DEBUG: THERE IS NO VISIBLE NEXT EPISODE BUTTON")
            }
        }
        
        if (window.location.hostname.includes("crunchy")) {

            // CRUNCHY

            // NOT WORKING
            // CONTENT IS WITHIN AN IFRAME
            // ONLY WORKS AFTER INSPECT ELEMENT AND REACH "SKIP INTRO BUTTON"
            var skipButtonCrunchy = document.querySelector('[data-testid="skipIntroText"]');

            if (skipButtonCrunchy != null) {
                console.log("DEBUG: CRUNCHY SKIP DEBERIA TAPEARRRRR")
                skipButtonCrunchy.click();
                console.log("DEBUG: CRUNCHY SKIP BUTTON TAPPED")
            } else {
                console.log("DEBUG: THERE IS NO VISIBLE SKIP BUTTON IN CRUNCHY")
            }
        }

        setTimeout(iterate, 1000);  
    });
}

chrome.storage.onChanged.addListener(function(changes, namespace) {
    iterate()
});

iterate();
