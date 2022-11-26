const home = document.querySelector("#home");
const gallery = document.querySelector(".gallery");
const about = document.querySelector(".about");
const contact = document.querySelector(".contact");
const links = document.querySelectorAll(".link")
const activeLink = document.querySelector(".active-link")
const hamburger = document.querySelector(".hamburger")
const mobNav = document.querySelector(".mob-nav")

links.forEach(link => {
  link.addEventListener("click", (e) => {
    console.log(link.innerText)
    if (link.innerText.trim() == "Home") {
      home.scrollIntoView({ behavior: 'smooth', block: 'end' });
      link.appendChild(activeLink)
    }
    else if (link.innerText.trim() == "Our Gallery") {
      gallery.scrollIntoView({ behavior: 'smooth', block: 'end' })
      link.appendChild(activeLink)
    }
    else if (link.innerText.trim() == "About Us") { 
      about.scrollIntoView({ behavior: 'smooth', block: 'end' });
      link.appendChild(activeLink)
    }
    else if (link.innerText.trim() == "Contact Us") { 
      contact.scrollIntoView({ behavior: 'smooth', block: 'end' });
      link.appendChild(activeLink)
    }
    else { 
      links.scrollIntoView({ behavior: 'smooth', block: 'end' });
      link.appendChild(activeLink)
    }
  })
})

gsap.from(".coffee-cup", {
  duration: 3,
  rotation: 360,
  delay: 3,
  repeat: -1
})


gsap.from("#home", { duration: 1.5, x: -800, delay: 3.5, ease: "back" })
// gsap.from(".link", { duration: .5, opacity: 0, stagger: .5, delay: 4.5, rotation: 360 })
gsap.from(".hero-img", { duration: 2, x: window.innerWidth + 300, ease: "back.out(1.7)", delay: 3.5 })
gsap.from(".main-info", { duration: 2, x: -300, ease: "back.out(1.7)", delay: 3.5 })

let isOpen = false
hamburger.addEventListener("click", () => {
  links.forEach(item => {
    item.style.opacity = "1"
  })
  if(isOpen == true) {
    mobNav.style.left = "0%"
    isOpen = false
    hamburger.innerHTML = `<i class="fa-solid fa-bars"></i>`
    gsap.to(".link", { duration: .5, opacity: 0, stagger: .2, rotation: 360 })
  } else {
    mobNav.style.left = "0%"
    isOpen = true
    hamburger.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    gsap.from(".link", { duration: .5, opacity: 0, stagger: .2, rotation: 360 })
  }
})

gsap.from("iframe", {
  scrollTrigger: {
    trigger: "iframe",
    toggleActions: "restart pause restart none"
  }, duration: 2, x: window.innerWidth + 300, ease: "back.out(1.7)"
})
gsap.from(".contact-info", {
  scrollTrigger: {
    trigger: ".contact-info",
    toggleActions: "restart pause restart none"
  }, duration: 2, x: -300, ease: "back.out(1.7)"
})

gsap.from(".swiper", {
  scrollTrigger: {
    trigger: ".gallery-h1",
    toggleActions: "restart pause restart none"
  },
  duration: 2,
  opacity: 0,
  y: 200,
})


gsap.from(".about-text", {
  scrollTrigger: {
    trigger: ".about",
    toggleActions: "restart pause restart none"
  },
  duration: 2,
  opacity: 0,
  y: 200,
})

gsap.from(".contact-h1", {
  scrollTrigger: {
    trigger: ".contact-h1",
    toggleActions: "restart pause restart none"
  },
  duration: 2,
  opacity: 0,
  y: 200,
})

gsap.from(".gallery-h1", {
  scrollTrigger: {
    trigger: ".gallery-h1",
    toggleActions: "restart pause restart none"
  },
  duration: 2,
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