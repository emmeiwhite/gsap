// gsap.to(".box", { x: 400, rotate: 27, duration: 5 });
gsap.from(".box", { x: 400, rotate: 27, duration: 5 });

// tween methods
var tween = gsap.to(".pink", {
  duration: 4,
  x: 750,
  rotation: 360,
  ease: "none",
  paused: true,
});

document.querySelector("#play").onclick = () => tween.play();
document.querySelector("#pause").onclick = () => tween.pause();
document.querySelector("#resume").onclick = () => tween.resume();
document.querySelector("#reverse").onclick = () => tween.reverse();
document.querySelector("#restart").onclick = () => tween.restart();

// from(), fromTo()
gsap.from(".blue", { x: 700, rotate: 40, duration: 4 });
gsap.fromTo(
  ".purple",
  { x: 700, y: -30, rotate: 40, duration: 4 },
  { x: 0, y: 10, duration: 5, rotate: 90 }
);
