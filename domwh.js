// Filename: domwh.js  
// Timestamp: 2015.01.03-17:27:17 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)  

const domwh = elem => {
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

const domwhwindow = () => {
  if (window && window.innerHeight)
    return [window.innerWidth, window.innerHeight];

  const de = window.document.documentElement;
  const d = d = d.clientWidth ? d : window.document.documentBody;

  return d
    ? [d.clientWidth, d.clientHeight]
    : null
};

export default Object.assign(domwh, {
  window: domwhwindow
})
