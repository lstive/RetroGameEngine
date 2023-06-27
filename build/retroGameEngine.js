(()=>{"use strict";var t,o,n,e,i,r={519:(t,o,n)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.eventsConnection=o.gameLoop=o.initialConfig=void 0;var e,i,r=n(159),s=n(36);o.initialConfig=function(t){e=new r.DrawableSquare(t,200,200,100,100,"#000000"),i=new r.DrawableSquare(t,100,100,20,20,"#4287f5")};var a=new s.default(1,0);o.gameLoop=function(t){e.position=e.position.add(a),i.position=i.position.add(a),e.render(),i.render(),e.position.x>400&&(e.position.x=0,i.position.x=0)},o.eventsConnection=function(){}},159:function(t,o,n){var e,i=this&&this.__extends||(e=function(t,o){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])},e(t,o)},function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)});Object.defineProperty(o,"__esModule",{value:!0}),o.DrawableSquare=void 0;var r=n(36),s=function(t,o,n){this.context=t,this.position=o,this.color=n};o.default=s;var a=function(t){function o(o,n,e,i,s,a){var c=t.call(this,o,new r.default(n,e),a)||this;return c.width=i,c.height=s,c}return i(o,t),o.prototype.render=function(){this.context.save(),this.context.fillStyle=this.color,this.context.fillRect(this.position.x-this.width/2,this.position.y-this.height/2,this.width,this.height),this.context.stroke(),this.context.restore()},o}(s);o.DrawableSquare=a},36:function(t,o){var n,e=this&&this.__extends||(n=function(t,o){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])},n(t,o)},function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function e(){this.constructor=t}n(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)});Object.defineProperty(o,"__esModule",{value:!0}),o.UVector=o.VectorBasic=void 0;var i=function(t,o){void 0===t&&(t=0),void 0===o&&(o=0),this.x=t,this.y=o,this.magnitude=Math.sqrt(Math.pow(t,2)+Math.pow(o,2)),this.angle=Math.atan(o/t)};o.VectorBasic=i;var r=function(t){function o(o,n){return void 0===o&&(o=0),void 0===n&&(n=0),t.call(this,o,n)||this}return e(o,t),o.prototype.scale=function(){return new s(this.x,this.y)},o.prototype.add=function(t,n){return void 0===n&&(n=this),new o(n.x+t.x,n.y+t.y)},o.prototype.sub=function(t,n){return void 0===n&&(n=this),new o(n.x-t.x,n.y-t.y)},o}(i);o.default=r;var s=function(t){function o(o,n){return void 0===o&&(o=0),void 0===n&&(n=0),t.call(this,Math.sin(Math.atan(n/o)),Math.cos(Math.atan(n/o)))||this}return e(o,t),o.prototype.scale=function(t){return new r(this.x*t,this.y*t)},o}(i);o.UVector=s}},s={};t=function t(o){var n=s[o];if(void 0!==n)return n.exports;var e=s[o]={exports:{}};return r[o].call(e.exports,e,e.exports,t),e.exports}(519),o=document.getElementById("retroGameEngine"),n=o.getContext("2d"),e=0,i=0,(0,t.initialConfig)(n),(0,t.eventsConnection)(),requestAnimationFrame((function r(s){n.fillStyle="#FFFFFF",n.fillRect(0,0,o.width,o.height),i=s-e,(0,t.gameLoop)(i),e=s,requestAnimationFrame((function(t){return r(t)}))}))})();