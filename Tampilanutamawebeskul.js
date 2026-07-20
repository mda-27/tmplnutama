// ===============================
// Hamburger Menu
// ===============================

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// ===============================
// Navbar Saat Scroll
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        navbar.style.background = "rgba(255,255,255,.95)";
        navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.15)";
    }else{
        navbar.style.background = "rgba(255,255,255,.85)";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.1)";
    }

});

// ===============================
// Animasi Hero
// ===============================

const hero = document.querySelector(".hero-content");

window.addEventListener("load", () => {

    hero.style.opacity = "0";
    hero.style.transform = "translateY(40px)";

    setTimeout(() => {

        hero.style.transition = "1s";
        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";

    },300);

});

// ===============================
// Animasi Card Saat Scroll
// ===============================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.2
});

cards.forEach((card)=>{

    card.style.opacity = "0";
    card.style.transform = "translateY(60px)";
    card.style.transition = "0.8s";

    observer.observe(card);

});

// ===============================
// Efek Klik Tombol
// ===============================

const btn = document.querySelector(".btn");

btn.addEventListener("mousedown", ()=>{

    btn.style.transform = "scale(.95)";

});

btn.addEventListener("mouseup", ()=>{

    btn.style.transform = "scale(1)";

});

btn.addEventListener("mouseleave", ()=>{

    btn.style.transform = "scale(1)";

});