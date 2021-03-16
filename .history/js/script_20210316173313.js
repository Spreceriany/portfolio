gsap.registerPlugin(ScrollTrigger);

var elem = document.querySelector(".carousel");
var flkty = new Flickity(elem, {
  prevNextButtons: true,
  pageDots: false,
  cellAlign: "left",
  contain: true,
  wrapAround: true,
  selectedAttraction: 0.015,
  friction: 0.25,
});

/*Smooth scroll for anchor tag*/
const btn = document.querySelector(".btn");
const learnMoreBtn = document.querySelector(".about-link");
const scrollElement = document.querySelector("#about");
btn.addEventListener("click", () => {
  scrollElement.scrollIntoView({ behavior: "smooth", block: "start" });
});
learnMoreBtn.addEventListener("click", () => {
  scrollElement.scrollIntoView({ behavior: "smooth", block: "start" });
  t1.reverse(0.5);
  t2.reverse();

  body.style.overflow = "auto";
});

const workBtn = document.querySelector(".work-link");
const scrollElement2 = document.querySelector("#work");
workBtn.addEventListener("click", () => {
  scrollElement.scrollIntoView({ behavior: "smooth", block: "start" });
  t1.reverse(0.5);
  t2.reverse();
  body.style.overflow = "auto";
});

const contactBtn = document.querySelector(".contact-link");
const scrollElement3 = document.querySelector("#contact");

contactBtn.addEventListener("click", () => {
  scrollElement.scrollIntoView({ behavior: "smooth", block: "end" });
  t1.reverse(0.5);
  t2.reverse();
  body.style.overflow = "auto";
});

/*Overlay*/
const t1 = gsap.timeline({
  defaults: { duration: 0.7, ease: "back.out(1.7)" },
});

const t2 = gsap.timeline({ defaults: { duration: 0.1 } });

const burger = document.querySelector(".burger");
const body = document.querySelector("body");

t1.paused(true);
t1.to(".overlay", {
  x: 0,
}).from(".overlay ul a", {
  autoAlpha: 0,
  y: -20,
  duration: 1,
  stagger: {
    each: 0.2,
    ease: "power2.inOut",
  },
});

t1.reversed(true);
t2.paused(true);
t2.to(".line1", {
  rotation: 45,
  y: 8,
  duration: 0.1,
  backgroundColor: "#b5b5b5",
})

  .to(".line2", {
    autoAlpha: 0,
    x: "-100%",
    backgroundColor: "#b5b5b5",
  })

  .to(".line3", {
    rotation: -45,
    x: -3,
    y: -8,
    width: "80%",
    duration: 0.1,
    backgroundColor: "#b5b5b5",
  });

t2.reversed(true);
burger.addEventListener("click", () => {
  t2.reversed() ? t2.play() : t2.reverse();
  t1.reversed()
    ? (t1.play(), (body.style.overflow = "hidden"))
    : (t1.reverse(0.7), (body.style.overflow = "auto"));
});

/**hero section with header*/
const mediaQuery = window.matchMedia("(max-width:556px)")
window.onload = (x) => {
  const t3 = gsap.timeline({
    defaults: { ease: "back.out(1.7)" },
  });
  if(mediaQuery.matches){
    t3.from("nav ul li", {
    stagger: 0.3,
    y: -20,
    autoAlpha: 0,
    delay: 1.5,
  })
  } else{
    t3.from("nav ul li", {
      stagger: 0.3,
      y: -20,
      autoAlpha: 0,
      delay: 1.8,
    })
    .from(".burger", {
      autoAlpha: 0,
    })

    .from(
      ".intro-stagger",
      {
        stagger: 0.3,
        y: 20,
        skewX: 10,
        autoAlpha: 0,
      },
      "-=1"
    )

    .from(
      ".btn",
      {
        autoAlpha: 0,
      },
      "-=.2"
    )

    .to(
      ".orange-dot",
      {
        y: -20,
      },
      "+=.5"
    )

    .to(".orange-dot", {
      y: 0,
      ease: "bounce.out",
    })

    .from(
      ".my-photo",
      {
        autoAlpha: 0,
        x: 20,
        duration: 1.5,
      },
      "-=2.5"
    );
  }
  

    
};


/**About section */

const abouts = gsap.utils.toArray(".scroll-about");
abouts.forEach((scrollAbout) => {
  gsap.from(scrollAbout, {
    y: 30,
    autoAlpha: 0,
    duration: 1,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".scroll-about",
      start: "bottom 60%",
      end: "+=300",
    },
  });
});

/**Work */

gsap.from(".title", {
  y: 30,
  autoAlpha: 0,
  duration: 1.5,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".title",
    start: "bottom 80%",
  },
});

gsap.from(".carousel", {
  y: 30,
  autoAlpha: 0,
  duration: 1,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".carousel",
    start: "top 80%",
  },
});

/**Contact */

gsap.from(".contact__left-col", {
  autoAlpha: 0,
  duration: 1.2,
  ease: "back.out(1.7)",
  x: -20,
  scrollTrigger: {
    trigger: ".contact__left-col",
    start: "top 80%",
  },
});

gsap.from(
  ".contact-stagger",
  {
    stagger: 0.2,
    autoAlpha: 0,
    y: 30,
    ease: "back.out(1.7)",
    duration: 1,
    scrollTrigger: {
      trigger: ".contact-stagger",
      start: "top 80%",
    },
  },
  "-=1"
);

gsap.from(".contact-stagger2", {
  autoAlpha: 0,
  ease: "power4.in",
  duration: 0.5,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: ".contact-stagger",
    start: "top 80%",
  },
});

/**Loading */

gsap.to(".first", 1.5, {
  delay: 0.5,
  top: "-100%",
  ease: "expo.inOut",
});

gsap.to(".second", 1.5, {
  delay: 0.7,
  top: "-100%",
  ease: "expo.inOut",
});

gsap.to(".third", 1.5, {
  delay: 0.9,
  top: "-100%",
  ease: "expo.inOut",
});

/**Dark mode */

const darkModeBtn = document.querySelector(".inverted");

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("invert");
});

/**Cursor */
