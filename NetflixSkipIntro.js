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
    var timeout = 5000;
    var interval;

    function lookForSkip()
    {
        var video = document.getElementsByTagName("video")[0];
        var skipButton = document.getElementsByClassName("button-primary watch-video--skip-content-button medium hasLabel ltr-13rhcay-buttonCss-buttonCss")[0];
        if (typeof skipButton != "undefined" && video != "undefined")
        {
            skipButton.click();
            console.log('skip');
            clearInterval(interval);
        }
    }

    interval = setInterval(function()
    {
        lookForSkip();
    },timeout);

    let lastUrl = location.href;
    new MutationObserver(() =>
    {
        const url = location.href;
        if (url !== lastUrl)
        {
            lastUrl = url;
            onUrlChange();
        }
    }).observe(document, {subtree: true, childList: true});

    function onUrlChange()
    {
        interval = setInterval(function(){
            lookForSkip();
        },timeout);
    }
})();
