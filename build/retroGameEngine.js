(()=>{"use strict";var t,e,o,i,n,r={519:(t,e,o)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.eventsConnection=e.gameLoop=e.initialConfig=void 0;var i,n,r,s,a,l,c,h,u,p,d,f,y=o(159),w=o(36),v=o(159);document.getElementById("pause-button").addEventListener("click",(function(){f=!f})),e.initialConfig=function(t){p=!1,d="",i=new y.DrawableColliderSquare(t,new w.default(400,25),800,50,"silver"),s=new y.DrawableColliderSquare(t,new w.default(25,300),50,600,"silver"),r=new y.DrawableColliderSquare(t,new w.default(400,575),800,50,"silver"),n=new y.DrawableColliderSquare(t,new w.default(775,300),50,600,"silver"),a=new v.DrawableCollisionableSquare(t,new w.default(400,300),20,20,"red"),l=new v.DrawableCollisionableSquare(t,new w.default(400,450),100,2,"skyblue"),(c=new w.UVector(0,0)).rotate(-Math.PI/4),h=new w.default(6*c.x,6*c.y),u=new w.default(0,0),a.canCollideWith(i),a.canCollideWith(n),a.canCollideWith(r),a.canCollideWith(s),l.canCollideWith(a),l.canCollideWith(s),l.canCollideWith(n)},e.gameLoop=function(t){i.render(),s.render(),r.render(),n.render(),a.render(),l.render(),a.collisions()&&a.collisions().forEach((function(t){t==i&&(h.y*=-1),t!=s&&t!=n||(h.x*=-1),t==r&&(console.log("has perdido"),a.position.x=400,a.position.y=300,l.position.x=400,l.position.y=475,c.rotate(-Math.PI/4),h.x=4*c.x,h.y=4*c.y)})),f||(a.position=a.position.add(h),p&&("a"==d&&(u.x=-4,l.position=l.position.add(u)),"d"==d&&(u.x=4,l.position=l.position.add(u)))),l.collisions()&&l.collisions().forEach((function(t){t==a&&(h.y*=-1,l.width>10&&(l.width-=10)),t==s&&(l.position.x=l.width+1),t==n&&(l.position.x=n.position.x-n.width/2)}))},e.eventsConnection=function(){window.addEventListener("keydown",(function(t){p=!0,"a"==t.key&&(d="a"),"d"==t.key&&(d="d")})),window.addEventListener("keyup",(function(){p=!1,d=""}))}},795:function(t,e,o){var i,n=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0}),e.ColliderCircle=e.ColliderSquare=e.CollisionableSquare=void 0;var r=o(530),s=function(t){function e(e,o,i){var n=t.call(this,e,o,i)||this;return n.colliders=new Array,n}return n(e,t),e.prototype.canCollideWith=function(t){this.colliders.push(t)},e.prototype.collisions=function(){for(var t=new Array,e=0,o=this.colliders;e<o.length;e++){var i=o[e];i instanceof r.ShapeSquare&&this.position.x-this.width/2<i.position.x+i.width-i.width/2&&i.position.x-i.width/2<this.position.x+this.width-this.width/2&&this.position.y-this.height/2<i.position.y+i.height-i.height/2&&i.position.y-i.height/2<this.position.y+this.height-this.height/2&&t.push(i)}return t.length>0?t:null},e}(r.ShapeSquare);e.CollisionableSquare=s;var a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e}(r.ShapeSquare);e.ColliderSquare=a;var l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e}(r.ShapeCircle);e.ColliderCircle=l},159:function(t,e,o){var i,n=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0}),e.DrawableCollisionableSquare=e.DrawableColliderSquare=e.DrawableSquare=void 0;var r=o(530),s=o(795),a=function(t){function e(e,o,i,n,r){var s=t.call(this,o,i,n)||this;return s.context=e,s.width=i,s.height=n,s}return n(e,t),e.prototype.render=function(t){void 0===t&&(t=0),this.context.save(),this.context.translate(this.position.x,this.position.y),this.context.rotate(t),this.context.fillStyle=this.color,this.context.fillRect(-this.width/2,-this.height/2,this.width,this.height),this.context.restore()},e.prototype.rotate=function(t){},e}(r.ShapeSquare);e.DrawableSquare=a;var l=function(t){function e(e,o,i,n,r){var s=t.call(this,o,i,n)||this;return s.context=e,s.color=r,s}return n(e,t),e.prototype.render=function(t){void 0===t&&(t=0),this.context.save(),this.context.translate(this.position.x,this.position.y),this.context.rotate(t),this.context.fillStyle=this.color,this.context.fillRect(-this.width/2,-this.height/2,this.width,this.height),this.context.restore()},e.prototype.rotate=function(t){},e}(s.ColliderSquare);e.DrawableColliderSquare=l;var c=function(t){function e(e,o,i,n,r){var s=t.call(this,o,i,n)||this;return s.context=e,s.color=r,s}return n(e,t),e.prototype.render=function(t){void 0===t&&(t=0),this.context.save(),this.context.translate(this.position.x,this.position.y),this.context.rotate(t),this.context.fillStyle=this.color,this.context.fillRect(-this.width/2,-this.height/2,this.width,this.height),this.context.restore()},e.prototype.rotate=function(t){},e}(s.CollisionableSquare);e.DrawableCollisionableSquare=c},530:function(t,e){var o,i=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0}),e.ShapeCircle=e.ShapeSquare=void 0;var n=function(t){this.position=t};e.default=n;var r=function(t){function e(e,o,i){var n=t.call(this,e)||this;return n.width=o,n.height=i,n}return i(e,t),e}(n);e.ShapeSquare=r;var s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e}(n);e.ShapeCircle=s},36:function(t,e){var o,i=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0}),e.UVector=e.VectorBasic=void 0;var n=function(t,e){void 0===t&&(t=0),void 0===e&&(e=0),this.x=t,this.y=e,this.magnitude=Math.sqrt(Math.pow(t,2)+Math.pow(e,2)),this.angle=0==t||0==e?0:Math.atan(e/t)};e.VectorBasic=n;var r=function(t){function e(e,o){return void 0===e&&(e=0),void 0===o&&(o=0),t.call(this,e,o)||this}return i(e,t),e.prototype.scale=function(){return new s(this.x,this.y)},e.prototype.add=function(t,o){return void 0===o&&(o=this),new e(o.x+t.x,o.y+t.y)},e.prototype.sub=function(t,o){return void 0===o&&(o=this),new e(o.x-t.x,o.y-t.y)},e.prototype.rotate=function(t){var o=new e(Math.cos(t)*this.magnitude,Math.sin(t)*this.magnitude);this.x=o.x,this.y=o.y,this.angle=t},e}(n);e.default=r;var s=function(t){function e(e,o){return void 0===e&&(e=0),void 0===o&&(o=0),t.call(this,Math.sin(Math.atan(o/e)),Math.cos(Math.atan(o/e)))||this}return i(e,t),e.prototype.scale=function(t){return new r(this.x*t,this.y*t)},e.prototype.rotate=function(t){this.x=Math.cos(t),this.y=Math.sin(t),this.angle=t,this.magnitude=1},e}(n);e.UVector=s}},s={};t=function t(e){var o=s[e];if(void 0!==o)return o.exports;var i=s[e]={exports:{}};return r[e].call(i.exports,i,i.exports,t),i.exports}(519),e=document.getElementById("retroGameEngine"),o=e.getContext("2d"),i=0,n=0,(0,t.initialConfig)(o),(0,t.eventsConnection)(),requestAnimationFrame((function r(s){o.fillStyle="#292929",o.fillRect(0,0,e.width,e.height),n=s-i,(0,t.gameLoop)(n),i=s,requestAnimationFrame((function(t){return r(t)}))}))})();