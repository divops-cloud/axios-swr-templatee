// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }
      
      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module;

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({5:[function(require,module,exports) {
var t=null;function r(){return t||(t=e()),t}function e(){try{throw new Error}catch(r){var t=(""+r.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(t)return n(t[0])}return"/"}function n(t){return(""+t).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}exports.getBundleURL=r,exports.getBaseURL=n;
},{}],3:[function(require,module,exports) {
var e=require("./bundle-url").getBundleURL;function r(e){var r=Array.isArray(e)?e[e.length-1]:e;try{return Promise.resolve(require(r))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new c(function(n,t){Promise.all(e.slice(0,-1).map(o)).then(function(){return require(r)}).then(n,t)});throw n}}module.exports=exports=r;var n={},t={js:i,css:u};function o(r){if(n[r])return n[r];var o=r.match(/\.(.+)$/)[1].toLowerCase(),i=t[o];return i?n[r]=i(e()+r):void 0}function i(e){return new Promise(function(r,n){var t=document.createElement("script");t.async=!0,t.type="text/javascript",t.charset="utf-8",t.src=e,t.onerror=function(e){t.onerror=t.onload=null,n(e)},t.onload=function(){t.onerror=t.onload=null,r()},document.getElementsByTagName("head")[0].appendChild(t)})}function u(e){return new Promise(function(r,n){var t=document.createElement("link");t.rel="stylesheet",t.href=e,t.onerror=function(e){t.onerror=t.onload=null,n(e)},t.onload=function(){t.onerror=t.onload=null,r()},document.getElementsByTagName("head")[0].appendChild(t)})}function c(e){this.executor=e,this.promise=null}c.prototype.then=function(e,r){return this.promise||(this.promise=new Promise(this.executor).then(e,r))},c.prototype.catch=function(e){return this.promise||(this.promise=new Promise(this.executor).catch(e))};
},{"./bundle-url":5}],2:[function(require,module,exports) {
function e(){require("_bundle_loader")(require.resolve("./helloModule")).then(e=>{e.sayHi("hiPara")})}document.getElementById("btnMessages").addEventListener("click",e);
},{"_bundle_loader":3,"./helloModule":["81f706a313869366502e352424b1d0dc.js",4]}]},{},[2])