var elem = document.querySelector(".carousel");
var flkty = new Flickity(elem, {
  contain: true,

  prevNextButtons: true,
  pageDots: true,
  cellAlign: "left",
  contain: true,
  wrapAround:true,
  selectedAttraction: 0.01,
friction: 0.15
});

const btn = document.querySelector(".btn");

const scrollElement = document.querySelector('.about')

btn.addEventListener("click",() =>{
  scrollElement.scrollIntoView({behavior: "smooth", block: "end"})
  console.log("haha")
})
