// Filename: test.js  
// Timestamp: 2013.12.18-21:02:09 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)  
// Requires: domwh.js


var test = {
  init : function () {
    var elem = document.getElementById('Block');

    console.log(domwh(elem));
    console.log(domwh.window());
  }
};
