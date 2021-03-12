var elem = document.querySelector(".carousel");
var flkty = new Flickity(elem, {
  contain: true,

  prevNextButtons: true,
  pageDots: true,
  cellAlign: "left",
  contain: true,
  wrapAround:true,
  arrowShape: { 
    x0: 30,
    x1: 55, y1: 20,
    x2: 30, y2: 0,
    x3: 95
  }
});

