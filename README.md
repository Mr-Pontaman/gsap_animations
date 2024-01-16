﻿# gsap_animations
 ---
 ### 頻度が高そうなもの
```
gsap.to(".posts li", {
  duration: 1,
  y: 0,
  opacity: 1,
  stagger: 0.2, // アイテムごとの遅延
  ease: "power2.out" // イージングの設定
});
```
mapされているものを遅延で順次表示
