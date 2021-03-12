var elem = document.querySelector(".carousel");
var flkty = new Flickity(elem, {
  contain: true,

  prevNextButtons: true,
  pageDots: true,
  cellAlign: "left",
  contain: true,
  wrapAround:true,
  arrowShape: { 
    x0: 25,
    x1: 45, y1: 5,
    x2: 30, y2: 0,
    x3: 95
  }
});

