// Slider
let slideIndex=0;
const slides=document.querySelectorAll(".slide");
const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
function showSlide(n){slides.forEach(s=>s.classList.remove("active"));slides[n].classList.add("active");}
function nextSlide(){slideIndex=(slideIndex+1)%slides.length; showSlide(slideIndex);}
function prevSlide(){slideIndex=(slideIndex-1+slides.length)%slides.length; showSlide(slideIndex);}
next?.addEventListener("click",nextSlide);
prev?.addEventListener("click",prevSlide);
showSlide(slideIndex);

// Testimonials
let testimonialIndex=0;
const testimonials=document.querySelectorAll(".testimonial");
function showTestimonial(n){testimonials.forEach(t=>t.classList.remove("active"));testimonials[n].classList.add("active");}
function nextTestimonial(){testimonialIndex=(testimonialIndex+1)%testimonials.length;showTestimonial(testimonialIndex);}
setInterval(nextTestimonial,4000);
showTestimonial(testimonialIndex);

// Fade-in on scroll
const sections=document.querySelectorAll(".section");
window.addEventListener("scroll",()=>{sections.forEach(sec=>{const rect=sec.getBoundingClientRect(); if(rect.top<window.innerHeight-100){sec.classList.add("visible");}})});
