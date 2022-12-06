// ==UserScript==
// @name         Netflix Skip Intro
// @namespace    netflix_skip_intro
// @version      1.0
// @description  Automaticly skip Netflix intro
// @author       Pedro Monteiro
// @match        *://www.netflix.com/*
// @grant        none
// ==/UserScript==

(function()
{
    let lastUrl = location.href;

    new MutationObserver(() =>
    {
        var video = document.getElementsByTagName("video")[0];
        var skipButton = document.getElementsByClassName("button-primary watch-video--skip-content-button medium hasLabel ltr-1d02up3")[0];

        if (typeof skipButton != "undefined" && video != "undefined")
        {
            skipButton.click();
            console.log('skip');
        }

        const url = location.href;
        if (url !== lastUrl)
        {
            lastUrl = url;
        }
    }).observe(document, {subtree: true, childList: true});

})();
