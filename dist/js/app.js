!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="../",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);const o=function(){};o.prototype={render:function(){},check:function(){}};const r=function(){},c=function(){};r.prototype=Object.create(o.prototype),c.prototype=Object.create(o.prototype),r.prototype={render:function(e,t){for(let n=0;n<e.length;n++){const o=document.createElement("li"),r=document.createElement("input");r.type="radio",r.name="radio",o.textContent=e[n],o.appendChild(r),t.appendChild(o)}},check:function(e,t,n){let o=e.children,r=[];for(let e=0;e<o.length;e++){let c=o[e].lastChild,i=o[e].firstChild;1==c.checked?n==i.textContent?t.push([i.textContent,!0]):t.push([i.textContent,!1]):r.push(["No Answer",!1])}4===r.length&&t.push(!1)}},c.prototype={render:function(e,t){for(let n=0;n<e.length;n++){const o=document.createElement("li"),r=document.createElement("input");r.type="checkbox",r.name="checkbox",o.textContent=e[n],o.appendChild(r),t.appendChild(o)}},check:function(e,t,n){let o=[];for(let t=0;t<e.children.length;t++){let n=e.children[t].lastChild,r=e.children[t].firstChild;1==n.checked&&o.push(r.textContent)}1==function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(o,n)?t.push(!0):t.push(!1)}};const i=function(e,t,n,o){this.quest=e,this.strategy=t,this.choises=n,this.correct=o};i.prototype={render:function(e,t){return this.strategy.render(e,t)},check:function(e,t,n){return this.strategy.check(e,t,n)}};const u=[new i("How many choises here?",new r,[2,3,4,5],4),new i("Check things, which true",new c,["white div","black sun","confirm button","you are an alien"],["white div","confirm button"])];window.onload=function(){const e=document.getElementById("options"),t=document.getElementById("question"),n=document.getElementById("greetings"),o=document.getElementById("quiz"),r=document.getElementById("result-div"),c=document.getElementById("go"),i=document.getElementById("confirm"),l=document.getElementById("submit"),d=document.getElementById("results");let s=[],a=0;function h(){e.innerHTML="",t.innerHTML=u[a].quest,u[a].render(u[a].choises,e),setTimeout(function(){++a<u.length&&(s.push(!1),h())},1e4)}c.addEventListener("click",function(){s=[],a=0,n.className="hide",o.className="",h()}),i.addEventListener("click",function(){u[a].check(e,s,u[a].correct),++a<u.length?h():(o.className="hide",r.className="",function(){for(let e=0;e<s.length;e++){let t=document.createElement("li");s.forEach(function(e){}),t.innerHTML=s[e],d.appendChild(t)}}())}),l.addEventListener("click",function(){r.className="hide",n.className="",document.querySelector(".answer-list").remove()})}}]);