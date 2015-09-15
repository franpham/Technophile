var Watch = require('./Watch.js');
var Tablet = require('./Tablet.js');

function SmartWatch() {
  Watch.call(this);
}

SmartWatch.prototype = Object.create(Watch.prototype, {constructor: SmartWatch});

function extend(base, source) {
  var keys = Object.keys(source);
  for (var i = 0; i < keys.length; i++) {
    base[keys[i]] = source[keys[i]];
  }
}

extend(SmartWatch.prototype, Tablet.prototype);
module.exports = SmartWatch;