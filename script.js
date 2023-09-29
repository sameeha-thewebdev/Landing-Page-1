tl = gsap.timeline();

tl.from(".part2", {
  delay: 0.3,
  x: 300,
  opacity: 0,
  duration: 1,
});

tl.from("#small-img", {
  opacity: 0,
  y: 100,
  duration: 1,
});


tl.from("#nav img, #nav h5", {
  delay: 0.3,
  y: -50,
  opacity: 0,
  duration: 1,
  stagger: 0.4,
});

tl.from("#text-div h1", {
  opacity: 0,
  delay: 0.3,
  duration: 1,
  x: -100,
  stagger: 0.5,
});

tl.from(".vertical-text", {
  opacity: 0,
  y: -500,
  duration: 1,
});