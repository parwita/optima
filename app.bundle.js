!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){r(1),e.exports=r(2)},function(e,t){
/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
$(document).ready((function(){setTimeout((function(){$(".content").fadeIn(1e3)}),1e3),function(){if(0==$("#google-reviews").length)return;$("#google-reviews").googlePlaces({placeId:"ChIJaYdLtU050i0RwuViqgaglnw",header:"<h3>Google Reviews</h3>",footer:"",maxRows:5,minRating:4,months:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],textBreakLength:"90",shortenNames:!0,moreReviewsButtonUrl:"",moreReviewsButtonLabel:"Show More Reviews",writeReviewButtonUrl:"",writeReviewButtonLabel:"Write New Review",showProfilePicture:!0})}()})),$(window).on("scroll",(function(){!function(){const e=document.body.querySelector("#mainNav");if(!e)return;0===window.scrollY?e.classList.remove("navbar-shrink"):e.classList.add("navbar-shrink")}()})),function(e){e.fn.googlePlaces=function(t){var r=e.extend({header:"<h3>Google Reviews</h3>",footer:"",maxRows:6,minRating:4,months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],textBreakLength:"90",shortenNames:!0,placeId:"",moreReviewsButtonUrl:"",moreReviewsButtonLabel:"Show More Reviews",writeReviewButtonUrl:"",writeReviewButtonLabel:"Write New Review",showReviewDate:!1,showProfilePicture:!0},t),n=this[0],i=this,o=function(e){return"<img class='review-picture' src='"+e+"'>"},a=function(e){var t="",n="";r.moreReviewsButtonUrl&&(n+='<div class="more-reviews"><a href="'+r.moreReviewsButtonUrl+'" target="_blank">'+r.moreReviewsButtonLabel+"</a></div>"),r.writeReviewButtonUrl&&(n+='<div class="write-review"><a href="'+r.writeReviewButtonUrl+'" target="_blank">'+r.writeReviewButtonLabel+"</a></div>"),""!=n&&(t+='<div class="buttons">'+n+"</div>"),t+="<br>"+e+"<br>",i.after(t)},s=function(e){if(e.split(" ").length>1){var t,r=(t=e.split(" "))[1][0],n=t[0];return"."==r?n:n+" "+r+"."}return null!=e?e:""},l=function(e){for(var t='<div class="review-stars"><ul>',r=0;r<e;r++)t+='<li><i class="star"></i></li>';if(e<5)for(r=0;r<5-e;r++)t+='<li><i class="star inactive"></i></li>';return t+="</ul></div>"},u=new google.maps.places.PlacesService(n);const c={placeId:r.placeId};var v=function(e,t){if(t==google.maps.places.PlacesServiceStatus.OK){var n=function(e){if(void 0===e)return[];for(var t=e.length-1;t>=0;t--){e[t].rating<r.minRating&&e.splice(t,1)}return e}(e.reviews),u=void 0!==(w=n)&&null!=w&&null!=w.length&&w.length>0?w.sort((function(e,t){return e.time>t.time?1:t.time>e.time?-1:0})).reverse():[];u.length>0&&(c=r.header,v="",v+=c+"<br>",i.append(v),function(e){e.reverse();for(var t,n,a,u="",c=r.maxRows>0?r.maxRows-1:e.length-1,v=c=c>e.length-1?e.length-1:c;v>=0;v--){var w="",f=e[v],d=f.text.replace("<script>","").replace("<iframe>",""),p=l(f.rating),g=(t=f.time,n=void 0,a=void 0,n=new Date(1e3*t),a=r.months,n.getDate()+". "+a[n.getMonth()]+" "+n.getFullYear()),h=r.shortenNames?s(f.author_name):f.author_name,m=d.length>parseInt(r.textBreakLength)?"review-item-long":"review-item";r.showProfilePicture&&(w=o(f.profile_photo_url)),1==r.showReviewDate&&(review_text="<span class='review-date'>"+g+"</span> "+review_text),u=u+"<div class="+m+"><div class='review-header'>"+w+"<div class='review-usergrade'><div class='review-meta'><span class='review-author'>"+h+"</span><span class='review-sep'></span></div>"+p+"</div></div><p class='review-text'>"+d+"</p></div>"}i.append(u)}(u),a(r.footer))}var c,v,w};return this.each((function(){void 0!==r.placeId&&""!==r.placeId?u.getDetails(c,v):console.error("NO PLACE ID DEFINED")}))}}(jQuery)},function(e,t,r){}]);
//# sourceMappingURL=app.bundle.js.map