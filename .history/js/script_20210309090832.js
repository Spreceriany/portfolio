var elem = document.querySelector(".carousel");
var flkty = new Flickity(elem, {
  contain: true,

  prevNextButtons: false,
  pageDots: false,
  cellAlign: "left",
  contain: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity(".carousel", {
  // options
});
