gsap.registerPlugin(ScrollTrigger)

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

const bodyOverflow = () =>{
  body.style.overflow = "auto"
}


/*Smooth scroll for anchor tag*/
const btn = document.querySelector(".btn");
const learnMoreBtn = document.querySelector(".about-link");
const scrollElement = document.querySelector('#about')
btn.addEventListener("click",() =>{
  scrollElement.scrollIntoView({behavior: "smooth", block: "start"})
})
learnMoreBtn.addEventListener("click",() =>{
  scrollElement.scrollIntoView({behavior: "smooth", block: "start"})
  t1.reverse(.5)
  t2.reverse()

  bodyOverflow()
})



const workBtn = document.querySelector(".work-link");
const scrollElement2 = document.querySelector('#work')
workBtn.addEventListener("click",() =>{
  scrollElement.scrollIntoView({behavior: "smooth", block: "start"})
  t1.reverse(.5)
  t2.reverse()
  bodyOverflow()
})


const contactBtn = document.querySelector(".contact-link");
const scrollElement3 = document.querySelector('#contact')
contactBtn.addEventListener("click",() =>{
  scrollElement.scrollIntoView({behavior: "smooth", block: "end"})
  t1.reverse(.5)
  t2.reverse()

  bodyOverflow()
})


/*Overlay*/ 
const t1 = gsap.timeline({
  defaults: { duration: .7, ease: Back.easeOut.config(1) },
});

const t2 = gsap.timeline({defaults: {duration: .1}});

const burger = document.querySelector(".burger");
const body = document.querySelector("body");


t1.paused(true);
t1.to(".overlay",{
  x: 0,
})
.from(".overlay ul a",{
  autoAlpha:0,
  y:-20,
  duration:1,
  stagger:{
    each:.2,
    ease:"power2.inOut",
  }
 
})


t1.reversed(true)
t2.paused(true);
t2.to(".line1",{
  rotation:45,
  y:8,
  duration: .1,
  backgroundColor:"#b5b5b5"
})

.to(".line2",{
  autoAlpha:0,
  x:"-100%",
  backgroundColor:"#b5b5b5"
})

.to(".line3",{
  rotation:-45,
  x:-3,
  y:-8,
  width:"80%",
  duration: .1,
  backgroundColor:"#b5b5b5"
});

t2.reversed(true)
burger.addEventListener("click", () => {
  
  t2.reversed() ? t2.play() : t2.reverse()
  t1.reversed() ? (t1.play(),bodyOverflow()) : (t1.reverse(.7), bodyOverflow());
});



/**hero section with header*/

const t3 = gsap.timeline()

// t3.from("nav ul li",{
//   stagger:.3,
//   y:-20,
//   autoAlpha:0
// })

// .from(".burger",{
//   autoAlpha:0
// })

// .from(".intro-stagger",{
//   stagger:.3,
//   x:-20,
//   autoAlpha:0
// },"-=.5")

// .to(".dot",{
//   y:-20,
// },"+=.5")

// .to(".dot",{
//   y:0,
//   ease:"bounce.out"
// })
t3.from(".intro-stagger",{
  y:100
})
.from(".my-photo",{
  autoAlpha:0,
  x:20
},"-=2")

/**About section */











