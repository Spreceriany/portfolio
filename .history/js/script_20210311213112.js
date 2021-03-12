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


/*Smooth scroll for anchor tag*/
const btn = document.querySelector(".btn");
const scrollElement = document.querySelector('.about')
btn.addEventListener("click",() =>{
  scrollElement.scrollIntoView({behavior: "smooth", block: "start"})
})

const t1 = gsap.timeline({
  defaults: { duration: 1, ease: Back.easeOut.config(2) },
});

const burger = document.querySelector(".burger");
const body = document.querySelector("body");

t1.paused(true);
t1.to(".overlay",{
  x: 0,
});

t1.reversed(true)

burger.addEventListener("click", () => {

  t1.reversed() ? t1.play() : t1.reverse()
 
  body.style.overflow = "hidden";
});


// burger.addEventListener("click", () =>{
//   t1.reverse(.8);
// })




