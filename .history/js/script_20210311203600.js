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

t1.paused(true);


t1.to(".overlay",{
  x: 0,
}).from(
  overlayLinks,
  {
    x: "100%",
    stagger: 0.2,
    autoAlpha: 0,
  },
  "-=1"
);

burger.addEventListener("click", () => {
  t1.play();
  body.style.overflow = "hidden";
});

