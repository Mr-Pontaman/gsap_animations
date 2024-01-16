gsap.from(".header", { duration: 1, y: "-100%" });
// gsap.from(".header" , {duration:3 , rotation:360 , fill: "orange" , scale:1.5 , y:"-100%"})

gsap.to(".buttons", {
  duration: 2,
  stagger: 1,
  rotation: 360,
  x: 150,
});

gsap.to(".box", { rotation: 270, x: 100, duration: 1, stagger: 1 });
gsap.from(".texts", { duration: 1, opacity: 0.1, delay: 1 });
let timeline = gsap.timeline();

timeline
  .to(".boxes1", { duration: 1, y: 200, ease: "bounce" })
  .to(".boxes2", { duration: 1, x: 200 })
  .to(".boxes3", { duration: 1, x: 300 });

gsap.fromTo(
  ".box4",
  { opacity: 0.1, scale: 0 },
  { opacity: 1, duration: 2, scale: 1.1, color: "red" }
);

gsap.set(".posts li", { y: 30, opacity: 0.4 });
gsap.to(".posts li", {
  duration: 1,
  y: 0,
  opacity: 1,
  stagger: 0.2, // アイテムごとの遅延
  ease: "power2.out" // イージングの設定
});