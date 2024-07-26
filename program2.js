const decodeTheRing = function (s, p) {

    // write your code here

    if (s.length !== p.length) {
      return false;
    }
  
    for (let i = 0; i < s.length; i++) {
      if (p[i] === "*") {
        continue;
      }
  
      if (s[i] !== p[i]) {
        return false;
      }
    }
    // And last mei sare match ho jye to
    return true;
  };
  
  module.exports = decodeTheRing;