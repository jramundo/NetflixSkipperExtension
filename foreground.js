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
            // Not working, kmonnnnnn why
            // aparece el btn en la view pero el selector no le da bola
            // esta en un iframe parece. f
            
            var skipButtonCrunchy = document.getElementsByClassName("css-1dbjc4n r-1mlwlqe r-1udh08x r-417010")[0];
            
            // css-1dbjc4n r-1awozwy r-lj0ial r-1jd5jdk r-1loqt21 r-18u37iz r-eu3ka r-1777fci r-kuhrb7 r-ymttw5 r-u8s1d r-1ff5aok r-1otgn73

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
