var elem = document.querySelector(".carousel");
var flkty = new Flickity(elem, {
  contain: true,

  prevNextButtons: true,
  pageDots: true,
  cellAlign: "left",
  contain: true,
  wrapAround:true,
  arrowShape: { 
    x0: 0,
    x1: 100, y1: 0,
    x2: 55, y2: 20,
    x3: 100
  }
});

