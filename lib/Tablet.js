
function Tablet() {
}

Tablet.prototype.touch = function(val1, val2) {
  return {x: val1, y: val2};
};

module.exports = Tablet;