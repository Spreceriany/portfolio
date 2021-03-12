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
var carousel = document.querySelector(".carousel");

var flkty = new Flickity(carousel, {
 initialIndex:1
});


flkty.on('staticClick',function(event,pointer,cellElement,cellIndex){
    if ( !cellElement ) {
        return;
      }
      var prevClickedCell = carousel.querySelector('.is-clicked');
      if ( prevClickedCell ) {
        prevClickedCell.classList.remove('is-clicked');
      }
      cellElement.classList.add('is-clicked');
      logger.textContent = 'Cell ' + ( cellIndex + 1 )  + ' clicked';

})