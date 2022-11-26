gsap.from(".coffee-cup", { 
    duration: 3, 
    rotation: 360, 
    delay: 3, 
    repeat: -1
})


gsap.from("#home", {duration:1.5,x:-800, delay:3.5, ease:"back"})
gsap.from(".link", {duration:1.5, opacity:0, stagger:.5,delay: 4.5,  rotation:360})
gsap.from(".hero-img", {duration:2, x:window.innerWidth + 300, ease: "back.out(1.7)",delay: 3.5})
gsap.from(".main-info", {duration:2, x:-300, ease: "back.out(1.7)",delay: 3.5})

gsap.from(".swiper", {
  scrollTrigger: {
      trigger: ".gallery-h1",
      toggleActions: "restart pause restart none"
  },
  duration:2,
  opacity: 0,
  y: 200,
})

gsap.from(".gallery-h1", {
  scrollTrigger: {
      trigger: ".gallery-h1",
      toggleActions: "restart pause restart none"
  },
  duration:2,
  opacity: 0,
  x: -500,
})


const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: true
  });