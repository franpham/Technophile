var GameConsole = require('./GameConsole.js');
var WebBrowser = require('./WebBrowser.js')

function NintendoDS() {
  GameConsole.call(this, 'Nintendo DS');
}

NintendoDS.prototype = Object.create(GameConsole.prototype, {constructor: NintendoDS});

function extend(base, source) {
  var keys = Object.keys(source);
  for (var i = 0; i < keys.length; i++) {
    base[keys[i]] = source[keys[i]];
  }
}

extend(NintendoDS.prototype, WebBrowser.prototype);
module.exports = NintendoDS;