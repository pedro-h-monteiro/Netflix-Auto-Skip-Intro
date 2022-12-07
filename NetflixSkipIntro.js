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
    new MutationObserver(() =>
    {
        var video = document.getElementsByTagName("video")[0];
        var skipButton = document.getElementsByClassName("button-primary")[0];

        if (typeof skipButton != "undefined" && video != "undefined")
        {
            skipButton.click();
            console.log('skip');
        }
    }).observe(document, {subtree: true, childList: true});
})();
