// ==UserScript==
// @name         Bing bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Kovnir Dmitry
// @match        https://www.bing.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==



let keywords = ["купить машину", "обменять машину", "продать машину"];
let keyword = keywords[getRandom(0, keywords.length)];
let links = document.links;
// let search_button = document.getElementsById("search_icon");
// let search_button = document.getElementsById("sb_form_go");
let search_button = document.getElementsByName("search")[0];

if (search_button !== undefined) {
    //Работаем на главной странице
    document.getElementsByName("q")[0].value = keyword;
    search_button.click();
} else {
    //Работаем в поисковой выдаче
    for (let i = 0; i < links.length; i++) {
        if (links[i].href.indexOf("auto.ru") != -1) {
            let link = links[i];
//            console.log("Нашел строку " + link);
            link.click();
            break;
        }
    }
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max-min) + min)
}
