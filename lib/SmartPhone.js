var Phone = require('./Phone.js');
var Tablet = require('./Tablet.js');
var GameConsole = require('./GameConsole.js');
var WebBrowser = require('./WebBrowser.js');

function SmartPhone(phoneNumber) {
  Phone.call(this, phoneNumber);
  GameConsole.call(this, 'Smart Phone');
}

SmartPhone.prototype = Object.create(Phone.prototype, {constructor: SmartPhone});

function extend(base, source) {
  var keys = Object.keys(source);
  for (var i = 0; i < keys.length; i++) {
    base[keys[i]] = source[keys[i]];
  }
}

extend(SmartPhone.prototype, Tablet.prototype);
extend(SmartPhone.prototype, GameConsole.prototype);
extend(SmartPhone.prototype, WebBrowser.prototype);
module.exports = SmartPhone;