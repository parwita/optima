!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1),e.exports=n(2)},function(e,t){
/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
$(document).ready((function(){setTimeout((function(){$(".content").fadeIn(1e3)}),1e3)})),$(window).on("scroll",(function(){!function(){const e=document.body.querySelector("#navbar"),t=document.body.querySelector(".wa__button");if(!e)return;0===window.scrollY?(e.classList.remove("navbar-shrink"),t.classList.remove("show")):(e.classList.add("navbar-shrink"),t.classList.add("show"))}()}));const n=document.querySelector(".hero__scroll"),o=document.getElementById("introduction");n&&n.addEventListener("click",()=>o.scrollIntoView({behavior:"smooth",block:"start"}));let r=document.querySelector(".menuIcon"),i=document.querySelector(".overlay-menu");r.addEventListener("click",()=>{"overlay-menu toggle"!=i.className?i.className+=" toggle":i.className="overlay-menu"});let a=document.querySelector(".menuIcon");a.addEventListener("click",()=>{"menuIcon toggle"!=a.className?a.className+=" toggle":a.className="menuIcon"}),$((function(){var e=$("html");function t(e){var t=e.offset().top,n=t+$(this).outerHeight(),o=$(window).scrollTop(),r=o+$(window).height();return n>o&&t<r}function n(){for(var e=0;e<o.length;e++){var n=$(o[e]);t(n)?n.addClass("in-view"):n.removeClass("in-view")}}"ontouchstart"in window||e.addClass("noTouch"),"ontouchstart"in window&&e.addClass("isTouch"),"ontouchstart"in window&&e.addClass("isTouch"),(document.documentMode||/Edge/.test(navigator.userAgent))&&(-1===navigator.appVersion.indexOf("Trident")?e.addClass("isEDGE"):e.addClass("isIE isIE11")),-1!==navigator.appVersion.indexOf("MSIE")&&e.addClass("isIE"),-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")&&e.addClass("isSafari");var o=document.querySelectorAll("*[data-animate-in], *[data-detect-viewport]"),r=!1;$(window).on("resize scroll",(function(){r||(r=!0,n(),setTimeout((function(){r=!1}),100))})),$(document).ready((function(){setTimeout((function(){n()}),500);for(var e=0;e<o.length;e++){var t=0,r=$(o[e]);t=o[e].getAttribute("data-animate-in-delay")?o[e].getAttribute("data-animate-in-delay")/1e3+"s":0,r.css("transition-delay",t)}}))})),$((function(){$(".cards-section").find(".item").each((function(){var e=$(this),t=e.find(".content p").text(),n=[t];n[0].split(" ").length,n[0].split(" ");e.find(".readmore h3").click((function(){"show more"===$(this).text()?(e.find(".content").addClass("scroll"),e.find(".content p").show(),$(this).text("show less"),e.addClass("showfull")):($(this).text("show more"),e.removeClass("showfull"),e.find(".content p").hide())}))}))}))},function(e,t,n){}]);
//# sourceMappingURL=app.bundle.js.map