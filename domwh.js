// Filename: domwh.js  
// Timestamp: 2013.12.18-20:33:32 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)  

var domwh = (function (p, d, doc) {

  doc = document;

  p = function(elem) {
    var dims = [], d;

    if (elem.offsetWidth) {
      dims = [elem.offsetWidth, elem.offsetHeight];
    } else {
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
