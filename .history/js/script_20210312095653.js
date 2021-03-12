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
  defaults: { duration: 1, ease: Back.easeOut.config(1) },
});

const t2 = gsap.timeline();

const burger = document.querySelector(".burger");
const body = document.querySelector("body");

t1.paused(true);
t1.to(".overlay",{
  x: 0,
});
t1.reversed(true)

t2.paused(true);

t2.to(".line1",{
  y:45
})

burger.addEventListener("click", () => {

  t1.reversed() ? (t1.play(), body.style.overflow = "hidden") : (t1.reverse(.7),body.style.overflow = "auto");
 
});






