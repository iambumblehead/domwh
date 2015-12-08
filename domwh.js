// Filename: domwh.js  
// Timestamp: 2015.01.03-17:27:17 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)  

var domwh = module.exports = (function (p, d, doc) {

  doc = typeof document !== 'undefined' && doc;

  p = function(elem) {
    var d, dims = [elem.offsetWidth, elem.offsetHeight];

    if (!dims[0]) {
      d = elem.style;      
      if (d.display === 'none') {
        d.display = 'block';
        dims = [elem.offsetWidth, elem.offsetHeight];
        d.display = 'none';
      } else if (d.display === '') {
        d.display = 'block';
        dims = [elem.offsetWidth, elem.offsetHeight];
        d.display = '';
      }
    }
    return dims;
  };

  p.window = function () {
    if (window && window.innerHeight) {
      return [window.innerWidth, window.innerHeight];
    } else if ((d = doc.documentElement)) {
      d = d.clientWidth ? d : doc.documentBody;
      return [d.clientWidth, d.clientHeight];
    } else {
      return null;
    }
  };

  return p;

}());
